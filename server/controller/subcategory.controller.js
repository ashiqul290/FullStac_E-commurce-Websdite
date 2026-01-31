const categoryModel = require("../models/category.model");
const subcategoryModel = require("../models/subcategory.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addSubcategoryController = asyncHandler(async (req, res, next) => {
  let { category, name } = req.body;

  let subcategory = new subcategoryModel({
    name,
    category,
  })

  await subcategory.save()

  await categoryModel.findOneAndUpdate(
    { _id: category },
    { $push: { subcategory: subcategory._id } },
    { new: true },
  );

  apiResponse(res, 200, "subcatagory create", subcategory);
});
