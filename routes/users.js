const router = require("express").Router();
const UserController = require("../controllers/u_controler");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const userController = new UserController();

router.post("/register", userController.register);
router.get("/:id",isLoggedIn,isAdmin,userController.updateUserById);
router.get("/fetch",userController.getUser);
router.get("/:id",userController.getUserByID);
router.delete("/:id",isLoggedIn, isAdmin,userController.deleteUserByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, userController.getUserByID)
    .put(isLoggedIn, userController.updateUserById)
    .delete(isLoggedIn, userController.deleteUserByID);


module.exports = router;
