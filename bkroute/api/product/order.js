const express = require("express");
const { orderController } = require("../../../controller/order.controller");
const order = express.Router();

order.post("/place-order", orderController)


module.exports = order;
