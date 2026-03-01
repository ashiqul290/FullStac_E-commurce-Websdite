const productModel = require("../models/product.model");
const reviewModel = require("../models/review.model");
const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.reviewController = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let { reting, comment, user } = req.body;

  let add_review = new reviewModel({
    reting,
    comment,
    user,
  });

  await add_review.save();
  await productModel.findOneAndUpdate(
    { _id: id },
    { $push: { review: add_review._id } },
    { new: true },
  );
  await userModel.findOneAndUpdate(
    { _id: user },
    { $push: { review: add_review._id } },
    { new: true },
  );
  apiResponse(res, 201, "Review created successfull", add_review);
});
