const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.orderController = asyncHandler(async(req,res)=>{
    apiResponse(res, 200 ,"order confrim")
})