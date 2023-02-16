const router = require("express").Router();
const CategoryController = require("../controllers/catogery_control");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isAdminAndSeller = require("../middlewares/isAdmin_users");

const categoryController = new CategoryController();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post([isLoggedIn, isAdminAndSeller], categoryController.addCategory);

router
  .route("/:id")
  .delete([isLoggedIn, isAdminAndSeller], categoryController.deleteCategory)
  .put([isLoggedIn, isAdminAndSeller], categoryController.updateCategoryById)
  .get(categoryController.getCategoryById);

module.exports = router;