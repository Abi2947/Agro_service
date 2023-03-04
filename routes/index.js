var express = require('express');
var router = express.Router();

const userRoute = require("./users");
const authRoute = require("./auth");
const catRoute = require("./catogery");
const productRoute = require("./product");
const orderRoute = require("./order");
const adminRoute = require("./admin");
const farmerRoute = require("./farmer");
const machineRout = require("./machine");
const plotRoute = require("./plot");

router.use("/", authRoute);
router.use("/user", userRoute);
router.use("/category", catRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);
router.use("/admin", adminRoute);
router.use("/farmer",farmerRoute);
router.use("/machine",machineRout);
router.use("/plot",plotRoute);

module.exports = router;