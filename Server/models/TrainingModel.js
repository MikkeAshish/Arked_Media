const mongoose = require("mongoose");

const TrainingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    trainer: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    audience: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", TrainingSchema);
