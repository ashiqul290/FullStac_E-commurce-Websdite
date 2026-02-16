const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    title: {
      type: String,
      required: [true , "title is required"],
      trim: true
    },
    image: [String],
    discription: {
      type: String,
    },
    sku: {
      type: String,
    },
    slug: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    descountprice: {
      type: Number,
    },
    variantType: {
      type: String,
      enum: ["singlevariant", "multivariant"],
      default: "singlevariant",
    },
    variant: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Variant",
      },
    ],
    review: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
