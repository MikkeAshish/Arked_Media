const AudioBook = require("../models/AudioBookModel");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// ➕ Add Audio Book
exports.addAudioBook = async (req, res) => {
  try {
    const { title, author, category, duration, price } = req.body;

    const audioFile = req.files?.audio?.[0];
    const coverFile = req.files?.cover?.[0];

    if (!audioFile || !coverFile) {
      return res.status(400).json({
        success: false,
        message: "Audio & Cover image both required",
      });
    }

    // 🔊 Upload Audio (BUFFER)
    const uploadAudio = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "video",
            folder: "audio_books/audio",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        streamifier.createReadStream(audioFile.buffer).pipe(stream);
      });

    // 🖼 Upload Cover (BUFFER)
    const uploadCover = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: "audio_books/covers",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        streamifier.createReadStream(coverFile.buffer).pipe(stream);
      });

    const audioResult = await uploadAudio();
    const imageResult = await uploadCover();

    const audioBook = await AudioBook.create({
      title,
      author,
      category,
      duration,
      price,

      audioUrl: audioResult.secure_url,
      audioPublicId: audioResult.public_id,

      coverUrl: imageResult.secure_url,
      coverPublicId: imageResult.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Audio Book Added Successfully",
      audioBook,
    });

  } catch (error) {
    console.error("Add AudioBook Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// 📄 Get All Audio Books
exports.getAllAudioBooks = async (req, res) => {
  try {
    const data = await AudioBook.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ❌ Delete Audio Book
exports.deleteAudioBook = async (req, res) => {
  try {
    const audioBook = await AudioBook.findById(req.params.id);

    if (!audioBook) {
      return res.status(404).json({
        success: false,
        message: "Audio Book not found",
      });
    }

    await cloudinary.uploader.destroy(audioBook.audioPublicId, {
      resource_type: "video",
    });

    await cloudinary.uploader.destroy(audioBook.coverPublicId);

    await AudioBook.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Audio Book deleted successfully",
    });

  } catch (error) {
    console.error("Delete AudioBook Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
