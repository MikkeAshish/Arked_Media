import React, { useState } from "react";
import axios from "axios";

const Add_AudioBook = () => {

  const [audioBook, setAudioBook] = useState({
    title: "",
    author: "",
    category: "",
    duration: "",
    price: "",
  });

  const [audioFile, setAudioFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null); // ✅ NEW
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAudioBook({ ...audioBook, [e.target.name]: e.target.value });
  };

  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleCoverChange = (e) => {
    setCoverFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!audioFile || !coverFile) {
      alert("Please select both audio & cover image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", audioBook.title);
      formData.append("author", audioBook.author);
      formData.append("category", audioBook.category);
      formData.append("duration", audioBook.duration);
      formData.append("price", audioBook.price);

      formData.append("audio", audioFile); // 🔊 audio
      formData.append("cover", coverFile); // 🖼 image

      await axios.post(
        "https://arked-media-kyki.vercel.app/api/audiobook/add",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("🎧 Audio Book Added Successfully");

      setAudioBook({
        title: "",
        author: "",
        // category: "",
        // duration: "",
        // price: "",
      });
      setAudioFile(null);
      setCoverFile(null);

    } catch (error) {
      console.error(error);
      alert("❌ Failed to add audio book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          🎧 Add New Audio Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={audioBook.title}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={audioBook.author}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <select
            name="category"
            value={audioBook.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="">Select Category</option>
            <option>Motivation</option>
            <option>Education</option>
            <option>Story</option>
            <option>Self Help</option>
          </select>

          <input
            type="text"
            name="duration"
            placeholder="Duration (2h 30m)"
            value={audioBook.duration}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={audioBook.price}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* 🖼 Cover Image */}
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* 🔊 Audio */}
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
          >
            {loading ? "Uploading..." : "➕ Add Audio Book"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Add_AudioBook;
