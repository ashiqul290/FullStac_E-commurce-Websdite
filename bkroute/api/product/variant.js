const express = require("express");
const { variantController } = require("../../../controller/variant.controller");
const variant = express.Router();

// localhost:5100/api/v1/api/variant/add-variant
variant.post("/add-variant",variantController);



// // localhost:5100/api/v1/api/product/all-product
// product.get("/all-product", allProductcontroller);

// // localhost:5100/api/v1/api/product/update-product
// product.patch(
//   "/update-product/:id",
//   upload.array("image"),
//   updateProductcontroller,
// );

// // localhost:5100/api/v1/api/product/delete-product
// product.delete("/delete-product/:id", deleteProductcontroller);

// // localhost:5100/api/v1/api/product/single-product
// product.get("/single-product/:slug", singleProductController);

module.exports = variant;
