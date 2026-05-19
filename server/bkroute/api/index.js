const express = require("express");
const auth = require("./auth");
const category = require("./auth/category");
const subcategory = require("./auth/subcategory");
const product = require("./product");
const router = express.Router();
const banner = require('./banner')
const marchent = require('./marchent');
const variant = require("./product/variant");
const review = require("./product/review");
const card = require("./product/Card");
const order = require("./product/order");

// localhost:5100/api/v1/api/auth
router.use("/auth", auth);

// localhost:5100/api/v1/api/category
router.use("/category", category);

// localhost:5100/api/v1/api/subcategory
router.use("/subcategory", subcategory);

// localhost:5100/api/v1/api/product
router.use("/product", product);

// localhost:5100/api/v1/api/variant
router.use("/variant", variant);

// localhost:5100/api/v1/api/variant
router.use("/review", review);
// localhost:5100/api/v1/api/card
router.use("/card", card);
// localhost:5100/api/v1/api/order
router.use("/order", order);

// localhost:5100/api/v1/api/bannar
router.use("/banner", banner);

// localhost:5100/api/v1/api/marchent
router.use("/marchent", marchent);

module.exports = router;
 