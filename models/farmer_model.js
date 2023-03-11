const mongoose  = require ("mongoose");


const FarmerSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            reequired: true,
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
        }
    }
)

const farmers = mongoose.model("farmers", FarmerSchema);
module.exports = farmers;