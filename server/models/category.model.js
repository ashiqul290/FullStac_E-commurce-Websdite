const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    image: {
      type: String,
    },
    discount: {
      type: Number,
    },
    subcategory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("category", categorySchema);
