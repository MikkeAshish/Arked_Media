const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  addAudioBook,
  getAllAudioBooks,
  deleteAudioBook,
} = require("../controller/AudioBookController");

// ✅ Vercel-safe multer
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/add",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  addAudioBook
);

router.get("/all", getAllAudioBooks);
router.delete("/delete/:id", deleteAudioBook);

module.exports = router;
