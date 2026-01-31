const categoryModel = require("../models/category.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

let path = require("path");
let fs = require("fs");

exports.addCategoryController = asyncHandler(async (req, res, next) => {
  let { name, discount, subcategory } = req.body;
  let { filename } = req.file;
  let image = `${process.env.SERVER_URL}/${filename}`;
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
  apiResponse(res, 201, "category created", category);
});

exports.allCategoryController = asyncHandler(async (req, res, next) => {
  let allcategory = await categoryModel.find({}).populate();
  apiResponse(res, 200, "all category", allcategory);
});

exports.updateCategoryController = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  //  let {filename} = req.file;
  //  let img = filename
  //   console.log(img)
  let { name, discount } = req.body;
  let { filename } = req.file;
  if (req.file) {
    let category = await categoryModel.findOne({ _id: id });
    let filepath = category.image.split("/");
    let imagepath = filepath[filepath.length - 1];
    fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
      if (err) {
        apiResponse(res, 500, err.massage);
      } else {
        let image = `${process.env.SERVER_URL}/${filename}`;
        category.image = image;
        await category.save()
        apiResponse(res, 200, "category img update");
      }
    });
    let oldpath = path.join(__dirname, "../uploads");

    return res.send("alghalhgk");
  } else {
    let update = await categoryModel.findOneAndUpdate(
      { _id: id },
      { name, discount },
      { new: true },
    );
    apiResponse(res, 200, "category updated", update);
  }
});

exports.deleteCategoryController = asyncHandler(async(req,res)=>{
 let {id} = req.params;
 let category = await categoryModel.findOne({_id : id})

  let filepath = category.image.split("/");
    let imagepath = filepath[filepath.length - 1];
    fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
      if (err) {
        apiResponse(res, 500, err.massage);
      } else {
        await categoryModel.findOneAndDelete({_id: id})
        apiResponse(res, 200, "category delete successfully");
      }
})
})
