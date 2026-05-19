const categoryModel = require("../models/category.model");
const subcategoryModel = require("../models/subcategory.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require("slugify");

exports.addSubcategoryController = asyncHandler(async (req, res, next) => {
  let { category, name } = req.body;
  let slug = slugify(name, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  let subcategory = new subcategoryModel({
    name,
    category,
    slug,
  });

  await subcategory.save();

  await categoryModel.findOneAndUpdate(
    { _id: category },
    { $push: { subcategory: subcategory._id } },
    { new: true },
  );

  apiResponse(res, 200, "subcatagory create", subcategory);
});
exports.allsubCategoryController = asyncHandler(async (req, res, next) => {
  let allsubcategory = await subcategoryModel.find({}).populate();
  apiResponse(res, 200, "all subcategory", allsubcategory);
});

exports.singleSubCategoryController = asyncHandler(async (req, res) => {
  let { slug } = req.params;
  let singlesubcategory = await subcategoryModel.findOne({ slug });
  if (singlesubcategory) {
    apiResponse(
      res,
      200,
      "single category fetched successfully",
      singlesubcategory,
    );
  } else {
    apiResponse(res, 500, "single category not found");
  }
});

exports.updateSubcategoryController = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let { name, category } = req.body;
  if (category) {
    let subcatagory = await subcategoryModel.findOneAndUpdate(
      { _id: id },
      { category, name },
      { new: true },
    );

    await categoryModel.findOneAndUpdate(
      { _id: category },
      { $push: { subcategory: id } },
      { new: true },
    );
    apiResponse(res, 200, "sub category updeted");
  } else {
    await subcategoryModel.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true },
    );
    apiResponse(res, 200, "sub category updeted");
  }
});

exports.deleteSubcategoryController = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  await subcategoryModel.findOneAndDelete({ _id: id });

  await categoryModel.findOneAndUpdate(
    { subcategory: id },
    { $pull: { subcategory: id } },
  );

  apiResponse(res,200, "sub category deleted")
});
