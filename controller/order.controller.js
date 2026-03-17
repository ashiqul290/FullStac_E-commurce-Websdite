const orderModel = require("../models/order.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const cardModel = require("../models/card.model");

exports.orderController = asyncHandler(async (req, res) => {
  let { user, shipping, paymentmethod, items } = req.body;
  let carditems = await cardModel.find({ user });

  placeOrder = new orderModel({
    user,
    shipping,
    paymentmethod,
    items: carditems,
  });

  await placeOrder.save();
  apiResponse(res, 200, "order confrim", placeOrder);
});

exports.AllorderController = asyncHandler(async (req, res) => {
  let orderData = await orderModel.find({}).populate({
    path: "user",
    select: "name email"
  }).populate({
      path: "items.product",
      select: "title price image -_id"
  })
  apiResponse(res, 200, "all order fetch", orderData);
});
