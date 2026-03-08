const express = require("express");
const {
  addToCardController,
  singleUserController,
} = require("../../../controller/card.controller");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const card = express.Router();

card.post("/add-card", isAuthoraize, addToCardController);
card.get("/singlecard/:user",isAuthoraize, singleUserController);

module.exports = card;
