const router = require("express").Router();
const UserController = require("../controllers/u_controler");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const userController = new UserController();

router.post("/register", userController.register);
router.get("/update",isLoggedIn,isAdmin,userController.updateUserByname);
router.get("/fetch",userController.getUser);
router.get("/name",userController.getUserByname);
router.delete("/:id",isLoggedIn, isAdmin,userController.deleteUserByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, userController.getUserByname)
    .put(isLoggedIn, userController.updateUserByname)
    .delete(isLoggedIn, userController.deleteUserByID);


module.exports = router;
