const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    comment: {
      type: String,
      required: [true, "comment is required"],
    },
    image: {
      type: String,
    },
    reting: {
      type: Number,
      required: [true, "reting is required"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Review", reviewSchema);
