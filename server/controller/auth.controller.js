const userModel = require("../models/user.model");
const { apiResponse } = require("../utils/apiResponse");
const bcrypt = require('bcrypt');
const { asyncHandler } = require("../utils/asyncHandler");
const { sendEmail } = require("../helpers/sendEmail");
const { rendoOtpGanaret } = require("../helpers/otp");


exports.signupController = asyncHandler(
  async (req, res) => {
    let otp = rendoOtpGanaret()
    let { name, email, password, address, phone, role } = req.body;
     bcrypt.hash(password, 12, async function(err, hash) {
       if(err){
        apiResponse(res , 500 , err)
       }
  let user = new userModel({
    name,
    email,
    password : hash,
    address,
    phone,
    role,
    otp
  })

  await user.save()
  sendEmail(email, name,otp)
  apiResponse(res, 201, "user created successfull" , user)


    });

}
)

// exports.loginController = asyncHandler(
//     (req,res)=>{
//         res.send('login success')
//     }
// )
