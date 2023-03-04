const mongoose  = require ("mongoose");


const MachineSchema = new mongoose.Schema(
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
            enum: ["machine_owner"]
        }
    }
)

const machines = mongoose.model("machines", MachineSchema);
module.exports = machines;