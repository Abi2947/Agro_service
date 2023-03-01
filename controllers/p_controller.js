const bcrypt = require("bcrypt");
const plots = require("../models/plot_model");

const salt = 1000;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const newplot = new plots(payload);
    newplot.save().then((data)=>{
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
      newplot.password=hash;
      newplot.save()
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

  getplot(req,res,next){
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
  getplotByID(req,res,next){
    plots.findByID(req.parans.id)
    .then((data)=>{
      res.json({
        data
      });
    })
  }

  updateplotById(req, res, next) {
    let plots = req.body;

    plots.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: plots,
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
  
  deleteplotByID(req, res, next){
    plots.findByIdAndDelete(req.params.id)
    .then((success)=>{
      res.json(success);
    })
    .catch((err) => {
      res.json({Error: err})
    });
  }
  
}

module.exports = UserController;
