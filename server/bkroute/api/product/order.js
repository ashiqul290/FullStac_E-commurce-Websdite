const express = require("express");
const { orderController, AllorderController, paymentSuccessController, paymentFailController, paymentCencelController, ipnController } = require("../../../controller/order.controller");
const order = express.Router();

order.post("/place-order", orderController)
order.post('/payment-success/:id',paymentSuccessController)
order.post('/payment-fail',paymentFailController)
order.post('/payment-cencel',paymentCencelController)
order.post('/ipn',ipnController)
order.get("/all-order", AllorderController)


module.exports = order;
