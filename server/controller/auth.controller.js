const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../helpers/sendEmail");
const { rendoOtpGanaret } = require("../helpers/otp");
const { validEmailCheker } = require("../helpers/validEmailCheker");
const { genaretJWTtoken } = require("../utils/jwt");

exports.signupController = async (req, res) => {
  try {
    let { name, email, password, address, phone, role } = req.body;
    let emailCheker = validEmailCheker(email);
    if (!emailCheker) {
      apiResponse(res, 400, "invelid email address");
    }

    let otp = rendoOtpGanaret();
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
            login: true
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
