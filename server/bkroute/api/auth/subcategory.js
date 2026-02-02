const express = require("express");
const {
  addSubcategoryController,
  updateSubcategoryController,
  singleSubCategoryController,
  allsubCategoryController,
  deleteSubcategoryController,
} = require("../../../controller/subcategory.controller");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");
const auth = express.Router();


auth.post(
  "/add-subcategory",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  addSubcategoryController,
);
auth.get("/all-subcategory", allsubCategoryController);
auth.get("/single-subcategory/:slug", singleSubCategoryController);
auth.patch(
  "/update-subcategory/:id",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  updateSubcategoryController,
);
auth.delete(
  "/delete-subcategory/:id",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  deleteSubcategoryController,
);

module.exports = auth;
