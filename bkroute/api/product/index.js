const express = require("express");
const {
  addProductcontroller,
  allProductcontroller,
  updateProductcontroller,
  deleteProductcontroller,
  singleProductController,
  letestProductController,
  topsellProductController,
} = require("../../../controller/product.controller");
const upload = require("../../../utils/upload");
const productModel = require("../../../models/product.model");
const userModel = require("../../../models/user.model");
const product = express.Router();
// localhost:5100/api/v1/api/product/add-product
product.post("/add-product", upload.array("image"), addProductcontroller);

// localhost:5100/api/v1/api/product/all-product
product.get("/all-product", allProductcontroller);

// localhost:5100/api/v1/api/product/update-product
product.patch(
  "/update-product/:id",
  upload.array("image"),
  updateProductcontroller,
);

// localhost:5100/api/v1/api/product/delete-product
product.delete("/delete-product/:id", deleteProductcontroller);

// localhost:5100/api/v1/api/product/single-product
product.get("/single-product/:slug", singleProductController);

product.get("/letest-product", letestProductController);

product.get("/top-sell-product", topsellProductController);

product.get("/test", async (req, res) => {
  let result = await productModel.aggregate([
    // product filtering and sorting
    {
      $match: {
        price: {
          $gte: 1300,
        },
      },
    },
    {
      $sort: {
        price: 1,
      },
    },
    {
      $group: {
        _id: null ,
         totalPrice: {
          $sum: "$price",
        },
        avgPrice: {
          $avg: "$price",
        },
        minPrice: {
          $min: "$price",
        },
        maxPrice: {
          $max: "$price",
        },
        countItem: {
          $sum: 1,
        },
      },
    },


    // array unwinding
    // {
    //   $unwind: "$variant",  
    // },
  ]);
  res.send(result);
});

module.exports = product;
