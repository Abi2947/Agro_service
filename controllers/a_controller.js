const bcrypt = require("bcrypt");
const admins = require("../models/admin_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newadmin = new admins(payload);
    newadmin.save().then((data)=>{
      res.json({
        msg: "la data aayo",
        data
      })
    })
    .catch((err)=>{
      res.json({
        msg: "error aayo",
        err
      })
    })
    bcrypt.hash(payload.password, salt, (err,hash) => 
    {
      if(err) {
        res.json({
          msg:"something went wrong in password",
          err,
        });
      }
      
      newadmin.password=hash;
      newadmin.save()
      .then((data) => {
        res.json({
          msg: "farmer saved successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          msg: "Something went wrong",
          err
        });
      });
    });
  }

  getadmin(req,res,next){
    admins.find()
    .then((data) =>{
      res.json({
        msg:"admin successfully fetched",
        data,
      });
    })
    .catch((err)=>{
      res.json({
        msg:"Something went wrong",
        data:null,
      });
    });
  }
  getadminByname(req,res,next){
    User.findByname(req.parans.name)
    .then((data)=>{
      res.json({
        data
      });
    })
  }

  updateadminByname(req, res, next) {
    let admin = req.body;

    admin.updateOne(
      {
        _firstname: req.params.firstname,
      },
      {
        $set: admin,
      },
      {
        upsert: true,
      }
    )
      .then((success) => {
        res.json(success);
      })
      .catch((err) => {
        res.json({ Error: err });
      });
  }
  
  deleteadminByID(req, res, next){
    admins.findByIdAndDelete(req.params.id)
    .then((success)=>{
      res.json(success);
    })
    .catch((err) => {
      res.json({Error: err})
    });
  }
  
}

module.exports = UserController;
