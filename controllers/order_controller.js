const Order = require("../models/order_model");

class OrderController {
  registerOrder(req, res, next) {
    const cart = req.body;

    cart.map((data) => {
      data.userId = req.currentUser.id;
      data.status = "new";
    });

    Order.insertMany(cart)
      .then((result) => {
        res.json({
          msg: "Order added successfully",
          data: result,
        });
      })
      .catch((err) => {
        next("Error while adding order");
      });
  }

  listAllOrder(req, res, next) {
    let filter = {
      status: req.query.status,
    };
    Order.find(filter)
      .populate("userId")
      .populate("productId")
      .then((data) => {
        res.json({
          msg: "Order fetched successfully",
          data,
        });
      })
      .catch((err) => {
        next("Error in order fetch");
      });
  }
}

module.exports = OrderController;