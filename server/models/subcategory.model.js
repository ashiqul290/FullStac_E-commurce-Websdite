const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
   category: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Subcategory"
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("subcategory", subcategorySchema);
