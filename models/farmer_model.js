const mongoose  = require ("mongoose");


const FarmerSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            reequired: true,
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
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["farmer"]
        }
    }
)

const farmers = mongoose.model("farmers", FarmerSchema);
module.exports = farmers;