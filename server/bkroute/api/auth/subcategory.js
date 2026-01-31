const express = require("express");
const { addSubcategoryController } = require("../../../controller/subcategory.controller");
const { isAuthoraize } = require("../../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../../middleware/isAdminorMarchent");
const auth = express.Router();
auth.post('/add-subcategory',isAuthoraize,isAdminorMarchen("marchent","admin"), addSubcategoryController)

module.exports = auth; 

