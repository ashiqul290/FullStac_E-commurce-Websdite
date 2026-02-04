const mongoose = require("mongoose");

const marchentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user"
    },
    storename: {
      type: String,
      required: [true, "storename is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    logo: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "approve", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Marchent", marchentSchema);
