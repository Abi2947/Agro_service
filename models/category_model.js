const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;