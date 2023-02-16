const Category = require("../models/category_model");

class CategoryController {
  getAllCategories(req, res, next) {
    Category.find()
      .then((categories) => {
        res.json({
          result: categories,
          status: 200,
          msg: "Success list",
        });
      })
      .catch((error) => {
        next(error);
      });
  }

  getAllCategoryByStatus(req, res, next) {
    Category.find({
      status: req.params.status,
    });
  }

  addCategory(req, res, next) {
    const category = new Category(req.body);
    category
      .save()
      .then((cate_succ) => {
        res.json({
          result: req.body,
          status: 200,
          msg: "Category created successfully.",
        });
      })
      .catch((error) => {
        next(error);
      });
  }

  deleteCategory = (req, res, next) => {
    Category.deleteOne({
      _id: req.params.id,
    })
      .then((response) => {
        res.json({
          result: null,
          status: 200,
          msg: "Category Deleted successfully.",
        });
      })
      .catch((error) => {
        res.json({
          result: null,
          status: 400,
          msg: "Sorry! There was problem while deleting category",
        });
      });
  };

  getCategoryById = (req, res, next) => {
    Category.findById(req.params.id)
      .then((category) => {
        res.json({
          result: category,
          status: 200,
          msg: "Success list",
        });
      })
      .catch((error) => {
        next(error);
      });
  };

  updateCategoryById = (req, res, next) => {
    Category.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    )
      .then((response) => {
        res.json({
          result: response,
          status: 200,
          msg: "Category updated successfully.",
        });
      })
      .catch((error) => {
        res.json({
          result: null,
          status: 400,
          msg: "Sorry! Catgory could not updated at this moment.",
        });
      });
  };
}

module.exports = CategoryController;