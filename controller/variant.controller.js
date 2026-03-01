const productModel = require("../models/product.model");
const variantModel = require("../models/variant.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.variantController = asyncHandler(async (req, res) => {
  let { sku, size, color, product } = req.body;
  let productdata = await productModel.findOne({ _id: product });
  if (productdata.variantType == "multivariant") {
    let variant = new variantModel({
      sku,
      size,
      color,
      product,
    });
    await variant.save();
    await productModel.findOneAndUpdate(
      { _id: product },
      { $push: { variant: variant._id } },
      { new: true },
    );
    apiResponse(res, 201, "variant created successfull", variant);
  } else {
    apiResponse(
      res,
      500,
      "only multivariant product have a variant",
      productdata,
    );
  }
});
exports.updateVariantController = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let { sku, size, color } = req.body;
  let variant = await variantModel.findOneAndUpdate(
    { _id: id },
    { sku, size, color },
    { new: true },
  );
  apiResponse(res, 200, "variant update successfull", variant);
});
exports.deleteVariantController = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let variant = await variantModel.findOneAndDelete({ _id : id });
    if(!variant){
      apiResponse(res, 404, "variant not found")
    }else{
      await productModel.findOneAndUpdate(
        { _id: variant.product },
        { $pull: { variant: variant._id } }
      );
      apiResponse(res, 200, "variant deleted");
    }
});
