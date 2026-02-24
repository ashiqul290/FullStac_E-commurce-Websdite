const bannerModel = require("../models/banner.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const path = require('path')
const fs = require('fs')
exports.addBannerController = asyncHandler(async (req, res, next) => {
  let { filename } = req.file;
  let { url } = req.body;
  let image = `${process.env.SERVER_URL}/${filename}`;
  let banner = new bannerModel({
    image,
    url,
  });
  await banner.save()
  apiResponse(res, 200, "banner created successfull",banner);
});
exports.allBannerController = asyncHandler(async(req,res)=>{
    let banner = await bannerModel.find({})

    apiResponse(res,200,"all banner fatch",banner)
})
exports.updateBannerController = asyncHandler(async(req,res)=>{
  let { id } = req.params;
   let { url } = req.body;
   let { filename } = req.file;
   if (req.file) {
     let banner = await bannerModel.findOne({ _id: id });
 
     let filepath = banner.image.split("/");
     let imagepath = filepath[filepath.length - 1];
     let oldpath = path.join(__dirname, "../uploads");
     fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
       if (err) {
         apiResponse(res, 500, err.message);
       } else {
         let image = `${process.env.SERVER_URL}/${filename}`;
         banner.image = image;
         await banner.save();
         apiResponse(res, 200, "banner img updated successfull");
       }
     });
   } else {
     let update = await bannerModel.findOneAndUpdate(
       { _id: id },
       { url },
       { new: true },
     );
     apiResponse(res, 200, "url updated", update);
   }
})
exports.deleteBannerController = asyncHandler(async(req,res)=>{
    let {id} = req.params;
     let bannar = await bannerModel.findOne({ _id: id });
      let filepath = bannar.image.split("/");
      let imagepath = filepath[filepath.length - 1];
      let oldpath = path.join(__dirname, "../uploads");
      fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
        if (err) {
          apiResponse(res, 500, err.message);
        } else {
          await bannerModel.findOneAndDelete({ _id: id });
          apiResponse(res, 200, "bannar delete successfully");
        }
      });
})
