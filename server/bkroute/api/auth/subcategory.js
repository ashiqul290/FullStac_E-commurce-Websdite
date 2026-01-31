const express = require("express");
const { addSubcategoryController } = require("../../../controller/subcategory.controller");
const auth = express.Router();
auth.post('/add-subcategory', addSubcategoryController)

module.exports = auth; 
