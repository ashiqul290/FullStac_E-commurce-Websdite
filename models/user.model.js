const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email already in use"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "marchent"],
      default: "user",
    },
    otp: {
      type: String,
    },
    otpExpire: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    review: [{
      type: mongoose.Types.ObjectId,
      ref: "Review"
    }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("user", userSchema);
