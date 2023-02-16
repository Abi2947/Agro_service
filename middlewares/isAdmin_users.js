const isAdminAndSeller = (req, res, next) => {
    const role = req.currentUser.role;
    console.log(req.currentUser);
    if (role === "admin" || role === "users") {
      next();
    } else {
      next("You are not authorized to do this operation");
    }
  };
  
  module.exports = isAdminAndSeller;