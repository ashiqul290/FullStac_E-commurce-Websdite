const mongoose = require("mongoose");
const { Schema } = mongoose;


const shippingSchema = new Schema(
  {
    phone: {
      type: String,
      trim: true,
      required: [true, "phone price is required"],
    },
    address: {
      type: String,
      required: [true, "address price is required"],
    },
    city: {
      type: String,
      required: [true, "city price is required"],
    },
    district: {
      type: String,
      required: [true, "district price is required"],
    },
    postcode: {
      type: String,
    },
  },
  {
    _id: false,
  },
);

const orderShema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    totalprice: {
      type: Number,
      required: [true, "totalprice price is required"],
    },
    // card: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "card",
    // },
    items: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        variant: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        quntity: {
          type: Number,
          default : 1
        },
      },
    ],
    shipping: [shippingSchema],
    paymentmethod: {
      type: String,
      enum: ["cod", "online"],
      required: [true, "paymentmethod is required"],
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid"
    },
    deliveryStatus: {
      type: String,
      enum: ["pending", "confrimed", "deliverd", "cenceled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Order", orderShema);
