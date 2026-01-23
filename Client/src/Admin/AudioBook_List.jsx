import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaHeadphones } from "react-icons/fa";

const AllAudioBook_List = () => {
  const [audioBooks, setAudioBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAudioBooks = async () => {
    try {
      const res = await axios.get(
        // "https://arked-media-kyki.vercel.app/api/audiobook/all"
        "http://localhost:3006/api/audiobook/all"
      );
      setAudioBooks(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAudioBooks();
  }, []);

  const deleteAudioBook = async (id) => {
    if (!window.confirm("⚠️ Delete this audio book permanently?")) return;

    try {
      await axios.delete(
        // `https://arked-media-kyki.vercel.app/api/audiobook/delete/${id}`
        `http://localhost:3006/api/audiobook/delete/${id}`
      );
      setAudioBooks((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-indigo-600">
        Loading Audio Books...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <FaHeadphones className="text-indigo-600 text-4xl" />
          <h1 className="text-4xl font-extrabold text-indigo-700">
            Audio Books – Admin Panel
          </h1>
        </div>

        {audioBooks.length === 0 ? (
          <p className="text-center text-gray-500">
            No audio books found
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioBooks.map((book) => (
              <div
                key={book._id}
                className="group bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                {/* ✅ DELETE BUTTON (FIXED) */}
                <button
                  onClick={() => deleteAudioBook(book._id)}
                  className="absolute top-3 right-3 z-20 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition pointer-events-auto"
                >
                  <FaTrash size={13} />
                </button>

                {/* ✅ IMAGE WRAPPER (FIXED) */}
                <div className="overflow-hidden">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[11px] font-semibold px-3 py-0.5 rounded-full">
                    {book.category}
                  </span>

                  <h3 className="text-base font-bold text-gray-800">
                    {book.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    By {book.author}
                  </p>

                  <div className="flex justify-between text-xs text-gray-600">
                    <span>⏱ {book.duration}</span>
                    <span className="font-bold text-indigo-600">
                      {book.price === 0 ? "FREE" : `₹${book.price}`}
                    </span>
                  </div>

                  {/* Audio */}
                  <audio controls className="w-full mt-2 h-8">
                    <source src={book.audioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllAudioBook_List;
