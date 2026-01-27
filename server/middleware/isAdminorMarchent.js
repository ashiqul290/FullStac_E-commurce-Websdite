const { apiResponse } = require("../utils/apiResponse")

exports.isAdminorMarchen = (req , res, next, role)=>{
    if(role.includes(req.session.user.role)){
        next()
    }else{
        apiResponse(res, 401, "Access denied")
    }
}