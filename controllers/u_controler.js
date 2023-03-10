const bcrypt = require("bcrypt");
const User = require("../models/users_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newuser = new User(payload);
    newuser.save().then((data)=>{
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
      newuser.password=hash;
      newuser.save()
      .then((data) => {
        res.json({
          msg: "user saved successfully",
          user: data,
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

  getUser(req,res,next){
    User.find()
    .then((data) =>{
      res.json({
        msg:"user successfully fetched",
        user:data,
      });
    })
    .catch((err)=>{
      res.json({
        msg:"Something went wrong",
        data:null,
      });
    });
  }
  getUserByname(req,res,next){
    User.findByname(req.parans.firstname)
    .then((data)=>{
      res.json({
        user:data
      });
    })
    .catch((err)=>{
      res.json({
        msg:"Something went wrong",
        data:null,
      });
    });
  }

  updateUserByname(req, res, next) {
    let user = req.body;

    User.updateOne(
      {
        _firstname: req.params.firstname,
      },
      {
        $set: user,
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
  
  deleteUserByID(req, res, next){
    User.findByIdAndDelete(req.params.id)
    .then((success)=>{
      res.json(success);
    })
    .catch((err) => {
      res.json({Error: err})
    });
  }
  
}

module.exports = UserController;
