const router = require("express").Router();
const AdminController = require("../controllers/a_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const adminController = new AdminController();

router.post("/register", adminController.register);
router.get("/update",isLoggedIn,isAdmin,adminController.updateadminById);
router.get("/fetch",adminController.getadmin);
router.get("/:id",adminController.getadminByID);
router.delete("/:id",isLoggedIn, isAdmin,adminController.deleteadminByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, adminController.getadminByID)
    .put(isLoggedIn, adminController.updateadminById)
    .delete(isLoggedIn, adminController.deleteadminByID);


module.exports = router;
