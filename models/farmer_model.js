const mongoose  = require ("mongoose");

const AddressSchema = new mongoose.Schema({
    district: {
        type: String,
    },
});

const FarmerSchema = new mongoonse.Schema(
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
            permAddress: AddressSchema,
        },
        role: {
            type: String,
            enum: ["admin", ""]
        }
    }
)