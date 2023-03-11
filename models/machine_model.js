const mongoose  = require ("mongoose");


const MachineSchema = new mongoose.Schema(
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

const machines = mongoose.model("machines", MachineSchema);
module.exports = machines;