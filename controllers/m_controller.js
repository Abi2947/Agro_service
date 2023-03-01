const bcrypt = require("bcrypt");
const machine = require("../models/machine_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newmachine = new plots(payload);
    newmachine.save().then((data)=>{
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
      newmachine.password=hash;
      newmachine.save()
      .then((data) => {
        res.json({
          msg: "plot saved successfully",
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

  getmachine(req,res,next){
    plots.find()
    .then((data) =>{
      res.json({
        msg:"plot successfully fetched",
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
  getmachineByID(req,res,next){
    machine.findByID(req.parans.id)
    .then((data)=>{
      res.json({
        data
      });
    })
  }

  updatemachineById(req, res, next) {
    let machine = req.body;

    machine.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: machine,
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
  
  deletemachineByID(req, res, next){
    machine.findByIdAndDelete(req.params.id)
    .then((success)=>{
      res.json(success);
    })
    .catch((err) => {
      res.json({Error: err})
    });
  }
  
}

module.exports = UserController;
