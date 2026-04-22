const express = require("express");
const {
  signupController,
  loginController,
  allUserController,
  verifyOtpController,
  resendOtpController,
  getMeController,
} = require("../../../controller/auth.controller");
const { meddletoken } = require("../../../middleware/jwtMeddleToken");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");
const { marchentController } = require("../../../controller/marchent.controller");
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

auth.get("/me",isAuthoraize,isAdminorMarchen("admin") ,getMeController);


module.exports = auth;
