const jwt =  require("jsonwebtoken");
const { token } = require("morgan");
const UserController = require("../controllers/u_controler");
const generateToken = async(User) =>{
    const token =  await jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
        status: user.status
    },
    process.env.SECRET_KEY
    );
    return token;
};

module.exports = generateToken;