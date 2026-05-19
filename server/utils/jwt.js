const  jwt = require('jsonwebtoken')

exports.genaretJWTtoken = (user)=>{
 return jwt.sign({user }, process.env.JWT_SECRET , { expiresIn: '1m' })
}