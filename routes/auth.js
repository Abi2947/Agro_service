const router = require("express").Router();
const bcrypt = require("bcrypt");
const generateToken =require("../utils/token");

const user = require("../models/users_model");


router.post("/login",(req,res,next)=>{
    user
    .findOne({
        email:req.body.email
    })
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password,async(err,result) =>{
            if(result){
                const token=await generateToken(user);
                res.json({
                    msg:"valid",
                    user,
                    token:token,
                });
            }
            else{
                res.json({
                    msg:"invalid",
                    
                });
            }
        });
    })
    .catch((err)=> {
        res.json({
            msd: "invalid creds",
            err,
        });
    });
});

module.exports = router;