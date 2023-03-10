const router = require("express").Router();
const AdminController = require("../controllers/a_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const adminController = new AdminController();

router.post("/register", adminController.register);
router.get("/update",isLoggedIn,isAdmin,adminController.updateadminByname);
router.get("/fetch",adminController.getadmin);
router.get("/name",adminController.getadminByname);
router.delete("/:id",isLoggedIn, isAdmin,adminController.deleteadminByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, adminController.getadminByname)
    .put(isLoggedIn, adminController.updateadminByname)
    .delete(isLoggedIn, adminController.deleteadminByID);


module.exports = router;
