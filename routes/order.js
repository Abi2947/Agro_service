const router = require("express").Router();
const OrderController = require("../controllers/order_controller");
const isLoggedIn = require("../middlewares/isLoggedIn");

const orderController = new OrderController();

router.post("/", isLoggedIn, orderController.registerOrder);

router.get("/", orderController.listAllOrder);

module.exports = router;