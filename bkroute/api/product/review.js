const express = require("express");
const { reviewController } = require("../../../controller/review.controller");
const review = express.Router();

// localhost:5100/api/v1/api/variant/add-variant
review.post("/add-review/:id",reviewController);


module.exports = review;
