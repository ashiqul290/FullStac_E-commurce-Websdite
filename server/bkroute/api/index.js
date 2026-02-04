const express = require("express");
const auth = require("./auth");
const category = require("./auth/category");
const subcategory = require("./auth/subcategory");
const product = require("./product");
const router = express.Router();
const banner = require('./banner')
const marchent = require('./marchent')

// localhost:5100/api/v1/api/auth
router.use("/auth", auth);

// localhost:5100/api/v1/api/category
router.use("/category", category);

// localhost:5100/api/v1/api/subcategory
router.use("/subcategory", subcategory);

// localhost:5100/api/v1/api/product
router.use("/product", product);
// localhost:5100/api/v1/api/bannar
router.use("/banner", banner);
// localhost:5100/api/v1/api/marchent
router.use("/marchent", marchent);

module.exports = router;
 