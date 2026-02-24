const categoryModel = require("../models/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require("slugify");

let path = require("path");
let fs = require("fs");

exports.addCategoryController = asyncHandler(async (req, res, next) => {
  let { name, discount, subcategory } = req.body;
  let { filename } = req.file;

  let slug = slugify(name, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  }); 
  let image = `${process.env.SERVER_URL}/${filename}`;
  if (!name) {
    apiResponse(res, 401, "name is  required");
  }
  let category = new categoryModel({
    name,
    discount,
    subcategory,
    image,
    slug,
  });
  await category.save();
  apiResponse(res, 201, "category created", category);
});

exports.allCategoryController = asyncHandler(async (req, res, next) => {
  let allcategory = await categoryModel.find({}).populate().select('_id name slug image subcategory')
  apiResponse(res, 200, "all category", allcategory);
});

exports.updateCategoryController = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  let { name, discount } = req.body;
  let { filename } = req.file;
  if (req.file) {
    let category = await categoryModel.findOne({ _id: id });

    let filepath = category.image.split("/");
    let imagepath = filepath[filepath.length - 1];
    let oldpath = path.join(__dirname, "../uploads");
    fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
      if (err) {
        apiResponse(res, 500, err.message);
      } else {
        let image = `${process.env.SERVER_URL}/${filename}`;
        category.image = image;
        await category.save();
        apiResponse(res, 200, "category img update");
      }
    });
  } else {
    let update = await categoryModel.findOneAndUpdate(
      { _id: id },
      { name, discount },
      { new: true },
    );
    apiResponse(res, 200, "category updated", update);
  }
});

exports.deleteCategoryController = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let category = await categoryModel.findOne({ _id: id });

  let filepath = category.image.split("/");
  let imagepath = filepath[filepath.length - 1];
  let oldpath = path.join(__dirname, "../uploads");
  fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
    if (err) {
      apiResponse(res, 500, err.message);
    } else {
      await categoryModel.findOneAndDelete({ _id: id });
      apiResponse(res, 200, "category delete successfully");
    }
  });
});

exports.singleCategoryController = asyncHandler(async (req, res) => {
  let { slug } = req.params;
  let singlecategory = await categoryModel.findOne({ slug });
  if (singlecategory) {
    apiResponse(
      res,
      200,
      "single category fetched successfully",
      singlecategory,
    );
  } else {
    apiResponse(res, 500, "single category not found");
  }
});
