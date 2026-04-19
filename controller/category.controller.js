const categoryModel = require("../models/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const slugify = require("slugify");
const fs = require("fs").promises;
const  cloudinary  = require("../utils/cloudinary");

exports.addCategoryController = asyncHandler(async (req, res) => {
  const { name, discount, subcategory } = req.body;

  if (!name) {
    return apiResponse(res, 400, "name is required");
  }

  if (!req.file) {
    return apiResponse(res, 400, "image is required");
  }

  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "categories",
  });

  await fs.unlink(req.file.path);

  const slug = slugify(name, { lower: true });

  const category = await categoryModel.create({
    name,
    discount,
    subcategory,
    image: result.secure_url,
    public_id: result.public_id,
    slug,
  });

  return apiResponse(res, 201, "category created", category);
});

exports.allCategoryController = asyncHandler(async (req, res, next) => {
  let allcategory = await categoryModel
    .find({})
    .populate()
    .select("_id name slug image subcategory");
  apiResponse(res, 200, "all category", allcategory);
});

exports.updateCategoryController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, discount } = req.body;

  const category = await categoryModel.findById(id);
  if (!category) {
    return apiResponse(res, 404, "Category not found");
  }

  let image = category.image;
  let public_id = category.public_id;

  // যদি নতুন image আসে
  if (req.file) {
    // ✅ upload new
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "categories",
    });

    await fs.unlink(req.file.path);

    // ✅ delete old
    await cloudinary.uploader.destroy(category.public_id);

    image = result.secure_url;
    public_id = result.public_id;
  }

  const slug = name ? slugify(name, { lower: true }) : category.slug;

  const updated = await categoryModel.findByIdAndUpdate(
    id,
    {
      name,
      discount,
      image,
      public_id,
      slug,
    },
    { new: true }
  );

  return apiResponse(res, 200, "category updated", updated);
});

exports.deleteCategoryController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await categoryModel.findById(id);
  if (!category) {
    return apiResponse(res, 404, "Category not found");
  }

  await cloudinary.uploader.destroy(category.public_id);

  await categoryModel.findByIdAndDelete(id);

  return apiResponse(res, 200, "category deleted successfully");
});