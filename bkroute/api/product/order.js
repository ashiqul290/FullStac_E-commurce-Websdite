const express = require("express");
const { orderController, AllorderController } = require("../../../controller/order.controller");
const order = express.Router();

order.post("/place-order", orderController)
order.get("/all-order", AllorderController)


module.exports = order;
