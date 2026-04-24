const { default: slugify } = require("slugify");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const path = require("path");
const fs = require("fs").promises
const orderModel = require("../models/order.model");
const cloudinary = require("cloudinary").v2;

exports.addProductcontroller = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return apiResponse(res, 400, "Title is required");
  }

  if (!req.files || req.files.length === 0) {
    return apiResponse(res, 400, "Image is required");
  }

  const slug = slugify(title, { lower: true });

  const images = await Promise.all(
    req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "products",
      });

      // ✅ local file delete (FIXED)
      await fs.unlink(file.path);

      return {
        url: result.secure_url,
        public_id: result.public_id,
      };
    })
  );

  const product = await productModel.create({
    ...req.body,
    image: images, // ✅ array of objects
    slug,
  });

  return apiResponse(res, 201, "Product created successfully", product);
});

exports.allProductcontroller = asyncHandler(async (req, res) => {
  let allProducts = await productModel.find({}).populate({
    path: "variant",
    select: "sku size color",
  });
  apiResponse(res, 200, "data fatch successfully", allProducts);
});

exports.updateProductcontroller = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await productModel.findById(id);
  if (!product) {
    return apiResponse(res, 404, "Product not found");
  }

  let images = product.image;

  if (req.files && req.files.length > 0) {
    // ✅ 1. upload new images first
    const newImages = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "products",
        });

        await fs.unlink(file.path);

        return {
          url: result.secure_url,
          public_id: result.public_id,
        };
      })
    );

    // ✅ 2. delete old images
    for (let item of product.image) {
      await cloudinary.uploader.destroy(item.public_id);
    }

    images = newImages;
  }

  const slug = req.body.title
    ? slugify(req.body.title, { lower: true })
    : product.slug;

  const updatedProduct = await productModel.findByIdAndUpdate(
    id,
    {
      ...req.body,
      image: images,
      slug,
    },
    { new: true }
  );

  return apiResponse(res, 200, "Product updated successfully", updatedProduct);
});

exports.deleteProductcontroller = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await productModel.findById(id);
  if (!product) {
    return apiResponse(res, 404, "Product not found");
  }

  // ✅ delete from Cloudinary
  for (let item of product.image) {
    await cloudinary.uploader.destroy(item.public_id);
  }

  await productModel.findByIdAndDelete(id);

  return apiResponse(res, 200, "Product deleted successfully");
});

exports.singleProductController = asyncHandler(async (req, res) => {
  let { slug } = req.params;
  let product = await productModel.findOne({ slug }).populate({
    path: "variant",
    select: "sku size color",
  });
  if (!product) {
    apiResponse(res, 404, " product not found");
  } else {
    apiResponse(res, 200, "single product fatch", product);
  }
});

exports.letestProductController = asyncHandler(async (req, res) => {
  const { limit } = req.query;
  let product = await productModel
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit || 10);
  apiResponse(res, 200, "letest product fatch", product);
});

exports.topsellProductController = asyncHandler(async (req, res) => {
  let topSelling = await orderModel.aggregate([
    {
      $unwind: "$items",
    },
    {
      $group: {
        _id: "$items.product",
        totalSells: {
          $sum: "$items.quntity",
        },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $limit: 5,
    },
    {
      $sort: {
        totalSells: -1,
      },
    },
  ]);

  apiResponse(res, 200, "top sell product fatch", topSelling);
});
