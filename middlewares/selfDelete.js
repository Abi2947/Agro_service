const selfDelete = (req, res, next) => {
    const currentUserID = req.user.id;
    const id = req.params.id;
    if (currentUserID === id)  next("You cannot delete yourself");
    else next();
}

module.exports = selfDelete;