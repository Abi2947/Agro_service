const mongoose  = require ("mongoose");


const PlotSchema = new mongoose.Schema(
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

const plots = mongoose.model("plots", PlotSchema);
module.exports = plots;