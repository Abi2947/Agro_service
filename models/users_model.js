const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    district: {
      type: String,  
    },
  });

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String, //Number, ObjectId, null, data
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      permanentAddress: AddressSchema,
    },
    role: {
      type: String,
      enum: ["admin", "farmer", "machine_owner","plot_owner","users"],
      default: "users",
    },
    status:{
      type:String,
      enum:["active", "inactive"],
      default: "active"
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
