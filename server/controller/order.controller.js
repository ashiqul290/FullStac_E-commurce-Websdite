const orderModel = require("../models/order.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const cardModel = require("../models/card.model");
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "techn69c816344d929";
const store_passwd = "techn69c816344d929@ssl";
const is_live = false; //true for live, false for sandbox
const { v4 } = require("uuid");
const userModel = require("../models/user.model");

exports.orderController = asyncHandler(async (req, res) => {
  let { user, shipping, paymentmethod } = req.body;
  let carditems = await cardModel.find({ user }).populate({
    path: "product",
  });
  let totalPricecard = carditems.reduce((curr, prev) => {
    return prev.totalprice + curr;
  }, 0);

  // let trans_id = Math.round(Date.now() * 100 * Math.random());
  if (paymentmethod == "cod") {
    let placeOrder = new orderModel({
      user,
      shipping,
      paymentmethod,
      items: carditems,
      totalprice: totalPricecard,
    });
    await placeOrder.save();
    apiResponse(res, 200, "cod order confrim", placeOrder);
  } else {
    let userData = await userModel.find({ _id: user });
    let tran_idRendom = v4();
    let trans_id = tran_idRendom.slice(0, 13);
    let placeOrder = new orderModel({
      user,
      shipping,
      trans_id,
      paymentmethod,
      items: carditems,
      totalprice: totalPricecard,
    });
    await placeOrder.save();

    const data = {
      total_amount: totalPricecard,
      currency: "BDT",
      tran_id: trans_id, // use unique tran_id for each api call
      success_url: `http://localhost:5100/api/v1/api/order/payment-success/${trans_id}`,
      fail_url: `http://localhost:5100/api/v1/api/order/payment-fail`,
      cancel_url: "http://localhost:5100/api/v1/api/order/payment-cencel",
      ipn_url: "http://localhost:5100/api/v1/api/order/ipn",
      shipping_method: "Courier",
      product_name: `${carditems[0].product.title} ${carditems.length} more items`,
      product_category: "Electronic",
      product_profile: "general",
      cus_name: userData[0].name,
      cus_email: userData[0].email,
      cus_add1: shipping.address,
      cus_add2: "Dhaka",
      cus_city: shipping.city,
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: shipping.phone,
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      console.log("Redirecting to: ", GatewayPageURL);
    });
    // apiResponse(res, 200, "online order confrim");
  }
});

exports.paymentSuccessController = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let updatepaymentStatus = await orderModel.findOneAndUpdate(
    { trans_id: id },
    { paymentStatus: "paid" },
    { new: true },
  );
 apiResponse(res, 200, "payment successfull working",updatepaymentStatus)
});
exports.paymentFailController = asyncHandler(async (req, res) => {
 
 apiResponse(res, 500, "payment fail")
});
exports.paymentCencelController = asyncHandler(async (req, res) => {
 
 apiResponse(res, 500, "payment Cencel")
});
exports.ipnController = asyncHandler(async (req, res) => {
 
 apiResponse(res, 200, "ipn test")
});

exports.AllorderController = asyncHandler(async (req, res) => {
  let orderData = await orderModel
    .find({})
    .populate({
      path: "user",
      select: "name email",
    })
    .populate({
      path: "items.product",
      select: "title price image  -_id",
    });
  apiResponse(res, 200, "all order fetch", orderData);
});
