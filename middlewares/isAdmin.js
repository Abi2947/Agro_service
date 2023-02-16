const isAdmin =(req, res, next) => {
    const user = req.currentUser;
    if (user.role === "admin") next();
    else next("Your are not authorized")
}

module.exports = isAdmin;