const express = require("express");
const { addToCardController, singleUserController } = require("../../../controller/card.controller");
const card = express.Router();

card.post("/add-card", addToCardController);
card.get('/singlecard/:user',singleUserController)

module.exports = card;
