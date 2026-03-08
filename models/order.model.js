const mongoose = require("mongoose");
const { Schema } = mongoose;

const shippingSchema = new Schema({
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
});

const orderShema = new Schema({
  shipping: [shippingSchema],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  totalprice: {
    type: String,
    required: [true, "totalprice price is required"],
},
card: {
    type: mongoose.Types.ObjectId,
    ref: "card",
},
paymentmethod : {
    type: String,
    enum:['cod', "online"],
    required: [true, "paymentmethod is required"],
  },
},
{
    timestamps: true,

});

module.exports = mongoose.model('Order', orderShema)
