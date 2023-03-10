const router = require("express").Router();
const PlotController = require("../controllers/p_controller");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");

const plotController = new PlotController();

router.post("/register", plotController.register);
router.get("/update",isLoggedIn,isAdmin,plotController.updateplotByname);
router.get("/fetch",plotController.getplot);
router.get("/name",plotController.getplotByname);
router.delete("/:id",isLoggedIn, isAdmin,plotController.deleteplotByID);

router
    .route("/:id")
    .get(isLoggedIn, isAdmin, plotController.getplotByname)
    .put(isLoggedIn, plotController.updateplotByname)
    .delete(isLoggedIn, plotController.deleteplotByID);


module.exports = router;
