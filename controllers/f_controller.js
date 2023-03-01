const bcrypt = require("bcrypt");
const farmers = require("../models/farmer_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newfarmer = new farmers(payload);
    newfarmer.save().then((data)=>{
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
      newfarmer.password=hash;
      newfarmer.save()
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

  getfarmer(req,res,next){
    farmers.find()
    .then((data) =>{
      res.json({
        msg:"farmer successfully fetched",
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
  getfarmerByID(req,res,next){
    User.findByID(req.parans.id)
    .then((data)=>{
      res.json({
        data
      });
    })
  }

  updatefarmerById(req, res, next) {
    let farmer = req.body;

    farmer.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: farmer,
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
  
  deletefarmerByID(req, res, next){
    farmers.findByIdAndDelete(req.params.id)
    .then((success)=>{
      res.json(success);
    })
    .catch((err) => {
      res.json({Error: err})
    });
  }
  
}

module.exports = UserController;
