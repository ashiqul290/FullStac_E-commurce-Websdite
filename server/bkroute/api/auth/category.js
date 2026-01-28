const express = require("express");
const {
  addCategoryController,
  allCategoryController,
} = require("../../../controller/category.controller");
const auth = express.Router();
const upload = require("../../../utils/upload");

auth.post("/add-category", upload.single("image"), addCategoryController);

auth.get("/all-category", allCategoryController);

module.exports = auth;
