var express = require('express');
var router = express.Router();

const userRoute = require("./users");
const authRoute = require("./auth");
const catRoute = require("./catogery");
const productRoute = require("./product");
const orderRoute = require("./order");

router.use("/", authRoute);
router.use("/user", userRoute);
router.use("/category", catRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);

module.exports = router;