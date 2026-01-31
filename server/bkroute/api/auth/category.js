const express = require("express");
const {
  addCategoryController,
  allCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../../../controller/category.controller");
const auth = express.Router();
const upload = require("../../../utils/upload");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");

auth.post("/add-category",isAuthoraize,isAdminorMarchen("marchent","admin"), upload.single("image"), addCategoryController);

auth.get("/all-category", allCategoryController);

auth.patch("/update-category/:id", updateCategoryController)
auth.delete("/delete-category/:id", deleteCategoryController)

module.exports = auth; 
 