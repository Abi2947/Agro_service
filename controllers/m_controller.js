const bcrypt = require("bcrypt");
const machine = require("../models/machine_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newmachine = new machine(payload);
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
          msg: "machine saved successfully",
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
    machine.find()
    .then((data) =>{
      res.json({
        msg:"machine successfully fetched",
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
  getmachineByname(req,res,next){
    machine.findByname(req.parans.firstname)
    .then((data)=>{
      res.json({
        data
      });
    })
  }

  updatemachineByname(req, res, next) {
    let machine = req.body;

    machine.updateOne(
      {
        _firstname: req.params.firstname,
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
