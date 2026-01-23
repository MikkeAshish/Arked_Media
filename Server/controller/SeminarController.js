const Seminar = require("../models/SeminarModel");

// ➕ Add Seminar
exports.addSeminar = async (req, res) => {
  try {
    // console.log("👉 Incoming Body:", req.body);

    const seminar = new Seminar(req.body);
    const savedSeminar = await seminar.save(); // ✅ FIXED

    console.log("✅ Saved In DB:", savedSeminar);

    res.status(201).json({
      success: true,
      message: "Seminar Added Successfully",
      seminar: savedSeminar,
    });
  } catch (error) {
    // console.error("❌ DB Error:", error);
    res.status(500).json({
      success: false,
      message: "Error Adding Seminar",
      error: error.message,
    });
  }
};

// 📄 Get All Seminars
exports.getAllSeminars = async (req, res) => {
  try {
    const seminars = await Seminar.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      seminars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Fetching Seminars",
      error: error.message,
    });
  }
};

// ❌ Delete Seminar
exports.deleteSeminar = async (req, res) => {
  try {
    await Seminar.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Seminar Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Deleting Seminar",
      error: error.message,
    });
  }
};
