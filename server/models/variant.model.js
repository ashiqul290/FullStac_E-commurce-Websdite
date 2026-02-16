const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    size:[ {
      type: String,
     required : [true , "size is required"],
     emum: ["S","L","M","XL"],
     default:"L"
    }],
    color: {
        type: String,
        trim: true
    },
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
