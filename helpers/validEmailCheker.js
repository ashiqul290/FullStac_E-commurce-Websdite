
exports.validEmailCheker = (email)=>{
 return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

// exports.validPasswordCheker = (password ,res)=>{
//     if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
//         apiResponse(res, 400, 'invelid email' )
//     }
// }