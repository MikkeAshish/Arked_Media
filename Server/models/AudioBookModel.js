const mongoose = require("mongoose");

const audioBookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String },
    price: { type: Number, default: 0 },

    audioUrl: { type: String, required: true },
    audioPublicId: { type: String, required: true },

    coverUrl: { type: String, required: true },
    coverPublicId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AudioBook", audioBookSchema);
