const otpGenerator = require('otp-generator')

exports.rendoOtpGanaret = ()=>{
   return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
}