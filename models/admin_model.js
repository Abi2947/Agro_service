const mongoose  = require ("mongoose");

const AdminSchema = new mongoose.Schema(
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

const admins = mongoose.model("admins", AdminSchema);
module.exports = admins;