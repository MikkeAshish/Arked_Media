const express = require("express");
const router = express.Router();

const {
  addSeminar,
  getAllSeminars,
  deleteSeminar,
} = require("../controller/SeminarController");

router.post("/add", addSeminar);
router.get("/all", getAllSeminars);
router.delete("/delete/:id", deleteSeminar);

module.exports = router;
