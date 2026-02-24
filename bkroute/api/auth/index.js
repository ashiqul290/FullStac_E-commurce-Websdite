const express = require("express");
const {
  signupController,
  loginController,
  allUserController,
  verifyOtpController,
  resendOtpController,
} = require("../../../controller/auth.controller");
const { meddletoken } = require("../../../middleware/jwtMeddleToken");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");
const auth = express.Router();

// localhost:5100/api/v1/api/auth/signup
auth.post("/signup", signupController);

// localhost:5100/api/v1/api/auth/login
auth.post("/login", loginController);

// localhost:5100/api/v1/api/auth/verifyotp
auth.post("/verifyotp", verifyOtpController);
auth.post("/resendotp", resendOtpController);
// localhost:5100/api/v1/api/auth/login
// auth.get('/allusers',meddletoken, allUserController)
auth.get(
  "/allusers",
  isAuthoraize,
  isAdminorMarchen("admin", "marchent"),
  allUserController,
);

module.exports = auth;
