const mongoose  = require ("mongoose");


const PlotSchema = new mongoonse.Schema(
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
            enum: ["plot_owner"]
        }
    }
)

const plots = mongoose.model("plots", PlotSchema);
module.exports = plots;