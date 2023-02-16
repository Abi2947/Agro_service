const Product = require("../models/product_model");

class ProductController {
  addProduct(req, res, next) {
    const payload = req.body;
    // console.log(payload);
    const allImages = [];
    // req.files = [{image1}, {image2}]
    for (let image of req.files) {
      allImages.push(image.filename);
    }
    payload.images = allImages;

    payload.after_discount =
      payload.price - (payload.discount / 100) * payload.price;

    const newProduct = new Product(payload);
    newProduct
      .save()
      .then((product) => {
        res.json({
          msg: "Product added successfully",
          data: product,
          status: true,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  getProducts(req, res, next) {
    // const name = req.query.name;
    // let filter = {};
    // if (name) {
    //   filter = {
    //     title: {
    //       $regex: name,
    //       $options: "i",
    //     },
    //   };
    // }
    Product.find()
      .populate(["category", "owner"])
      // .populate("seller")
      .then((products) => {
        res.json({ msg: "All products fetched", data: products });
      })
      .catch((err) => next(err));
  }

  getProductById(req, res, next) {
    Product.findById(req.params.id).then((product) => {
      res
        .json({
          msg: "Product fetched successfully",
          data: product,
        })
        .catch((err) => {
          next(err);
        });
    });
  }

  updateProductById(req, res, next) {
    const payload = req.body;
    if (req.files) {
      const allImages = [];
      for (let image of req.files) {
        allImages.push(image.filename);
      }
      payload.images = allImages;
    }
    Product.findByIdAndUpdate(req.params.id, payload, { new: true })
      .then((data) => {
        res.json({
          msg: "Product updated successfully",
          data: data,
        });
      })
      .catch((err) => {
        next("Something went wrong while updating");
      });
  }

  deleteProductById(req, res, next) {
    Product.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json({
          msg: "product deleted successfully",
        });
      })
      .catch((err) => {
        next("Something went wrong while deleting");
      });
  }
}

module.exports = ProductController;