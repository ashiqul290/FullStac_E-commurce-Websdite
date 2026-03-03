const cardModel = require("../models/card.model");
const categoryModel = require("../models/category.model");
const productModel = require("../models/product.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addToCardController = asyncHandler(async (req, res) => {
  let { user, variant, quntity, product } = req.body;
  let productData = await productModel.findOne({ _id: product });
  let cardData = await cardModel.findOne({ product }).populate({
    path : "product",
    select: "price"
  })
 
   if(cardData){
    cardData.quntity++;
    cardData.totalprice = cardData.product.price * cardData.quntity
    await cardData.save()
    apiResponse(res, 200, 'card Data update')
   }else{

       let totalprice = productData.price * (quntity ? quntity : 1);
       if (productData.variantType == "multivariant") {
         if (!variant) {
           apiResponse(res, 404, "variant is required");
         } else {
           let addProduct = new cardModel({
             user,
             variant,
             quntity,
             product,
             totalprice,
           });
           await addProduct.save();
           apiResponse(res, 201, "Product add to card", addProduct);
         }
       } else {
         let addProduct = new cardModel({
           user,
           variant,
           quntity,
           product,
           totalprice,
         });
         await addProduct.save();
         apiResponse(res, 201, "Product add to card", addProduct);
       }
   }
});

exports.singleUserController = asyncHandler(async (req, res) => {
  let { user } = req.params;

  let getCardList = await cardModel.find({ user }).populate({
    path: "product",
    select: " title image price",
  }).select("totalprice quntity")
  apiResponse(res, 200, "user card list fetch successfull", getCardList);
});
