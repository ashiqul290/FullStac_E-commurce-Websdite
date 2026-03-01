const { asyncHandler } = require("../utils/asyncHandler");

exports.reviewController = asyncHandler(async(req,res)=>{
 res.send('rivew')
})