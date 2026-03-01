const express = require("express");
const { variantController, updateVariantController, deleteVariantController } = require("../../../controller/variant.controller");
const variant = express.Router();

// localhost:5100/api/v1/api/variant/add-variant
variant.post("/add-variant",variantController);

// localhost:5100/api/v1/api/variant/update-variant
variant.patch("/update-variant/:id",updateVariantController);

// localhost:5100/api/v1/api/variant/add-variant
variant.delete("/delete-variant/:id",deleteVariantController);


module.exports = variant;
