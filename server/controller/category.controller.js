const categoryModel = require("../models/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addCategoryController = asyncHandler(async (req, res, next) => {
  let { name, discount, subcategory } = req.body;
  let { filename } = req.file;
  let image =`${process.env.SERVER_URL}/${filename}`;
  if (!name) {
    apiResponse(res, 401, "name is  required");
  } 
  let category = new categoryModel({
    name,
    discount,
    subcategory,
    image,
  });
  await category.save();
  apiResponse(res, 201, 'category created' , category )
});

exports.allCategoryController = asyncHandler(async (req, res, next) => {
  let allcategory = await categoryModel.find({})
  apiResponse(res, 200, 'all category' , allcategory )
});


