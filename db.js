const mongoose = require ("mongoose");
const dbURL = "mongodb://0.0.0.0:27017/minor";

mongoose.connect(dbURL,(err) => {
    if(err){
        console.log("Error in database connection");
    }
    else
    {
        console.log("Database is connected successfully");
    }
});