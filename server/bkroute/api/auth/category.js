const express = require("express");
const {
  addCategoryController,
  allCategoryController,
  updateCategoryController,
  deleteCategoryController,
  singleCategoryController,
} = require("../../../controller/category.controller");
const auth = express.Router();
const upload = require("../../../utils/upload");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");

auth.post(
  "/add-category",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  upload.single("image"),
  addCategoryController,
);

auth.get("/all-category", allCategoryController);
auth.get("/single-category/:slug", singleCategoryController);

auth.patch(
  "/update-category/:id",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  upload.single("image"),
  updateCategoryController,
);
auth.delete(
  "/delete-category/:id",
  isAuthoraize,
  isAdminorMarchen("marchent", "admin"),
  deleteCategoryController,
);

module.exports = auth;
