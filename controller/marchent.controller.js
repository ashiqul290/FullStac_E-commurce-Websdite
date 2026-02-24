const { sendEmail } = require("../helpers/sendEmail");
const marchentModel = require("../models/marchent.model");
const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.marchentController = asyncHandler(async (req, res) => {
  let { user, storename, phone, logo } = req.body;
  let marchent = await marchentModel.findOne({ _id: user });
  let userData = await userModel.findOne({ _id: user })

  if (marchent) {
    apiResponse(res, 400, "marchent already exist");
  } else {
  
    let marchentapply = new marchentModel({ user, storename, phone, logo });
    await marchentapply.save();
    // sendEmail(userData.email ,userData.name )
    apiResponse(res, 200, "your marchent request send successfull");
  }
}); 

exports.marchentApproveController = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let { status } = req.body;

  let marchent = await marchentModel.findOneAndUpdate(
    { _id: id },
    { status },
    { new: true },
  );

  apiResponse(res, 200,'marchent status updated',marchent)
});
