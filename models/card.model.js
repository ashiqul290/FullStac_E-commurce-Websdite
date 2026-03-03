const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    quntity: {
      type: Number,
      default: 1,
    },
    variant: {
      type: mongoose.Types.ObjectId,
      ref: "Variant",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    totalprice: {
      type: Number,
       required: [true, "total price is required"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("card", cardSchema);
