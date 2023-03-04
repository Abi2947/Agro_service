const mongoose  = require ("mongoose");

const AdminSchema = new mongoose.Schema(
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
            enum: ["admin"]
        }
    }
)

const admins = mongoose.model("admins", AdminSchema);
module.exports = admins;