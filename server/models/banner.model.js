const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
      required: [true, "image is required"],
    },
    public_id : {
      type: String,
      },
    url: {
      type: String,
        trim: true,
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Banner", bannerSchema);
