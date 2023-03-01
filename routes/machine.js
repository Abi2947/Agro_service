const router = require("express").Router();
const MachineController = require("../controllers/m_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const machineController = new MachineController();

router.post("/register", machineController.register);
router.get("/update",isLoggedIn,isAdmin,machineController.updatemachineById);
router.get("/fetch",machineController.getmachine);
router.get("/:id",machineController.getmachineByID);
router.delete("/:id",isLoggedIn, isAdmin,machineController.deletemachineByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, machineController.getmachineByID)
    .put(isLoggedIn, machineController.updatemachineById)
    .delete(isLoggedIn, machineController.deletemachineByID);


module.exports = router;
