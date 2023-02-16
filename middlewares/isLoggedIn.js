const jwt = require("jsonwebtoken");
const isLoggedIn = (req,res,next) => {
    let token ="";
    if (req.headers.token){
        token = req.headers.token;
    }

    if(req.headers.authorization){
        token = req.headers.authorization;
    }
    if (req.query.authorization){
        token = req.query.authorization; // query param
    }

    const splitedData = token.split(" ")
    token = splitedData[splitedData.length-1]

    jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
        if(err){
            next("Invalid token");
        }
        if (decoded)
        {
            req.currentUser = decoded;
            next();
        }
    });
};

module.exports = isLoggedIn;