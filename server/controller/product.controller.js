const { default: slugify } = require("slugify");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const path = require('path')
const fs = require('fs')

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
  
  // let { id } = req.params;

//    let  filename = req.files;
//    if (req.files) {
//      let product = await productModel.findOne({ _id: id });
 
//      let filepath = product.image.split("/");
//      let imagepath = filepath[filepath.length - 1];
//      let oldpath = path.join(__dirname, "../uploads");
//      fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
//        if (err) {
//          apiResponse(res, 500, err.message);
//        } else {
//          let image = `${process.env.SERVER_URL}/${filename}`;
//          product.image = image;
//          await product.save();
//          apiResponse(res, 200, "product img updated successfull");
//        }
//      });
//    } else {
//      let update = await productModel.findOneAndUpdate(
//        { _id: id },
//        req.body,
//        { new: true },
//      );
//      apiResponse(res, 200, "proudct updated", update);
//    }
});

exports.deleteProductcontroller = asyncHandler(async (req, res) => {
  res.send('delete Product')

//  let {id} = req.params;
//      let product = await productModel.findOne({ _id: id });
//       let filepath = product.image.split("/");
//       let imagepath = filepath[filepath.length - 1];
//       let oldpath = path.join(__dirname, "../uploads");
//       fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
//         if (err) {
//           apiResponse(res, 500, err.message);
//         } else {
//           await productModel.findOneAndDelete({ _id: id });
//           apiResponse(res, 200, "bannar delete successfully");
//         }
//       });
});
