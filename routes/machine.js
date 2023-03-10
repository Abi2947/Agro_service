const router = require("express").Router();
const MachineController = require("../controllers/m_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const machineController = new MachineController();

router.post("/register", machineController.register);
router.get("/update",isLoggedIn,isAdmin,machineController.updatemachineByname);
router.get("/fetch",machineController.getmachine);
router.get("/name",machineController.getmachineByname);
router.delete("/:id",isLoggedIn, isAdmin,machineController.deletemachineByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, machineController.getmachineByname)
    .put(isLoggedIn, machineController.updatemachineByname)
    .delete(isLoggedIn, machineController.deletemachineByID);


module.exports = router;
