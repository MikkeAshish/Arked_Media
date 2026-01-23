import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeadphones } from "react-icons/fa";

const AllAudioBook = () => {
  const [audioBooks, setAudioBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch audio books (USER SIDE)
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
            Audio Books Library
          </h1>
        </div>

        {audioBooks.length === 0 ? (
          <p className="text-center text-gray-500">
            No audio books available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {audioBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Cover */}
                <div className="overflow-hidden">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-44 object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="inline-block bg-indigo-100 text-indigo-600 text-[11px] font-semibold px-3 py-0.5 rounded-full">
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

                  {/* Audio Player */}
                  <audio controls className="w-full mt-2 h-8 ">
                    <source src={book.audioUrl}  />
                  </audio>

                  {/* CTA */}
                  {/* <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-1.5 rounded-lg transition">
                    ▶ Listen Now
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllAudioBook;
