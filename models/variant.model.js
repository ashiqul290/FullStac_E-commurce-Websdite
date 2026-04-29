const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    product : {
      type: mongoose.Types.ObjectId,
      ref: "Product"
    },
    size:[ {
      type: String,
     required : [true , "size is required"],
     enum: ["S","M","L","XL","XXL"],
     default:"L"
    }],
    sku: {
        required : [true , "sku is required"],
        type: String,
        trim: true
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Variant", variantSchema);
