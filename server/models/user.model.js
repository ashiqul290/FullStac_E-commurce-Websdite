const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    enum: ["user", "admin", "subadmin"],
    default: "user",
  },
},{
 timestamps: true
});

module.exports = mongoose.model("user", userSchema);
