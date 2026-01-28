const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../helpers/sendEmail");
const { rendoOtpGanaret } = require("../helpers/otp");
const { validEmailCheker } = require("../helpers/validEmailCheker");
const { genaretJWTtoken } = require("../utils/jwt");

const { asyncHandler } = require("../utils/asyncHandler");

exports.signupController = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, address, phone, role } = req.body;

    // email validation
    if (!validEmailCheker(email)) {
      return apiResponse(res, 400, "Invalid email address");
    }

    // check existing user (good UX)
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return apiResponse(res, 409, "Email already in use");
    }

    // generate otp & hash password
    const otp = rendoOtpGanaret();
    const hash = await bcrypt.hash(password, 12);

    const user = new userModel({
      name,
      email,
      password: hash,
      address,
      phone,
      role,
      otp,
      otpExpire: new Date(Date.now() + 1 * 60 * 1000),
    });

    await user.save();

    sendEmail(email, name, otp);

    return apiResponse(res, 201, "User created successfully", user);
  } catch (error) {
    // Mongo duplicate key fallback
    if (error.code === 11000) {
      return apiResponse(res, 409, "Email already in use");
    }

    return apiResponse(res, 500, "Server error", error.message);
  }
});

exports.verifyOtpController = asyncHandler(async (req, res) => {
  let { email, otp } = req.body;
  let existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    apiResponse(res, 401, "invelid email");
  }
  if (existingUser.otp != otp) {
    apiResponse(res, 401, "invalid otp");
  }
  if (existingUser.otpExpire < new Date()) {
    existingUser.otp = null;
    existingUser.otpExpire = null;
    await existingUser.save();
    apiResponse(res, 401, "otp expired");
  } else {
    existingUser.verify = true;
    await existingUser.save();
    apiResponse(res, 200, "otp verify");
  }
});
exports.resendOtpController = asyncHandler(async (req, res) => {
  let { email } = req.body;
  let existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    apiResponse(res, 401, "invelid email");
  }
  if (!existingUser.verify) {
    apiResponse(res, 409, "email already verify");
  } else {
    const otp = rendoOtpGanaret();
    existingUser.otpExpire = new Date(Date.now() + 1 * 60 * 1000);
    existingUser.otp = otp;
    await existingUser.save();
    sendEmail(email, existingUser.name, otp);
    apiResponse(res, 200, "otp verify successfully");
  }
});

exports.loginController = async (req, res) => {
  let { email, password } = req.body;
  let emailCheker = validEmailCheker(email);
  if (!emailCheker) {
    apiResponse(res, 400, "invelid email address");
  }

  let existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    apiResponse(res, 404, "invelid  credential");
  } else {
    bcrypt.compare(password, existingUser.password, function (err, result) {
      if (err) {
        apiResponse(res, 500, "Somting went wrong");
      } else {
        if (!result) {
          apiResponse(res, 401, "invelid credential ");
        } else {
          let user = {
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            login: true,
          };
          if (existingUser.role == "admin" || existingUser.role == "marchent") {
            req.session.cookie.maxAge = 60000 * 20;
            req.session.user = user;
          } else {
            req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
            req.session.user = user;
          }
          // jwt genaret
          // let  token = genaretJWTtoken(user);
          apiResponse(res, 200, "login successfully", user);
        }
      }
    });
  }
};
exports.allUserController = async (req, res) => {
  let users = await userModel.find({}).select("_id name email role");
  apiResponse(res, 200, "fatch user all data successfull", users);
};
