const express = require("express");
const {
  addCategoryController,
  allCategoryController,
} = require("../../../controller/category.controller");
const auth = express.Router();
const upload = require("../../../utils/upload");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");

auth.post("/add-category",isAuthoraize,isAdminorMarchen("marchent","admin"), upload.single("image"), addCategoryController);

auth.get("/all-category", allCategoryController);

module.exports = auth; 
 