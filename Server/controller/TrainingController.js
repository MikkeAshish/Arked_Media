const Training = require("../models/TrainingModel");

// ➕ Add Training
exports.addTraining = async (req, res) => {
  try {
    const training = new Training(req.body);
    await training.save();

    res.status(201).json({
      success: true,
      message: "Training Added Successfully",
      training,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Adding Training",
      error: error.message,
    });
  }
};

// 📄 Get All Trainings
exports.getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      trainings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Fetching Trainings",
      error: error.message,
    });
  }
};

// Delete
exports.deleteTraining = async (req, res) => {
  try {
    await Training.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Training Deleted" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
