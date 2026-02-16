const { default: slugify } = require("slugify");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addProductcontroller = asyncHandler(async (req, res) => {
  let {
    category,
    title,
    discription,
    sku,
    price,
    descountprice,
    variantType,
    variant,
    review,
  } = req.body;
  let filename = req.files;

  let slug = slugify(title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
  //   let image = `${process.env.SERVER_URL}/${filename}`;

  const images = req.files.map(
    (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`,
  );

  if (!title) {
    apiResponse(res, 401, "title is  required");
  }

  let product = new productModel({
    ...req.body,
    image: images,
    slug,
    // category,
    // title,
    // discription,
    // sku,
    // slug,
    // price,
    // descountprice,
    // variantType,
    // variant,
    // review,
  });
  await product.save();
  apiResponse(res, 201, "product created", product);
});

exports.allProductcontroller = asyncHandler(async (req, res) => {
  let allProducts = await productModel.find({});
  apiResponse(res, 200, "data fatch successfully", allProducts);
});

exports.updateProductcontroller = asyncHandler(async (req, res) => {
 res.send('update products')
});
exports.deleteProductcontroller = asyncHandler(async (req, res) => {
 res.send('delete products')
});
