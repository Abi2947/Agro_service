const router = require("express").Router();
const ProductController = require("../controllers/product_controler");
const upload = require("../utils/uploader");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isAdminAndSeller = require("../middlewares/isAdmin_users");

const productController = new ProductController();

router
  .route("/")
  .get(productController.getProducts)
  .post(
    [isLoggedIn, isAdminAndSeller],
    upload.array("images", 5),
    productController.addProduct
  );

router
  .route("/:id")
  .get(productController.getProductById)
  .put(
    [isLoggedIn, isAdminAndSeller],
    upload.array("images", 5),
    productController.updateProductById
  )
  .delete([isLoggedIn, isAdminAndSeller], productController.deleteProductById);
module.exports = router;