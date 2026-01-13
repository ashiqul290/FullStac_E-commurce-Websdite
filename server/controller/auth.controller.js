const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../helpers/sendEmail");
const { rendoOtpGanaret } = require("../helpers/otp");

exports.signupController = async (req, res) => {
  try {
    let otp = rendoOtpGanaret();
    let { name, email, password, address, phone, role } = req.body;
    bcrypt.hash(password, 12, async function (err, hash) {
      if (err) {
        apiResponse(res, 500, err);
      }
      let user = new userModel({
        name,
        email,
        password: hash,
        address,
        phone,
        role,
        otp,
      });

      await user.save();
      sendEmail(email, name, otp);
      apiResponse(res, 201, "user created successfull", user);
    });
  } catch (error) {
    if (error.code === 11000) {
      return apiResponse(res, 409, "Email already in use");
    }

    console.error(error);
    return apiResponse(res, 500, "Server error");
  }
};

exports.loginController = async (req, res) => {
  let { email, password } = req.body;
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
          apiResponse(res, 200, "login successfully", existingUser);
        }
      }
    });
  }
};
 