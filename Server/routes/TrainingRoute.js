const express = require("express");
const router = express.Router();

const {
  addTraining,
  getAllTrainings,
  deleteTraining,
} = require("../controller/TrainingController");

router.post("/add", addTraining);
router.get("/all", getAllTrainings);
router.delete("/delete/:id", deleteTraining);


module.exports = router;
