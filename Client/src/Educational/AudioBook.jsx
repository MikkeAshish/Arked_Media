import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AudioBook = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [audioBooks, setAudioBooks] = useState([]);

  // 🔹 Fetch audio books (same API as AllAudioBook)
  const fetchAudioBooks = async () => {
    try {
      const res = await axios.get(
        // "https://arked-media-kyki.vercel.app/api/audiobook/all"
        "http://localhost:3006/api/audiobook/all"
      );
      setAudioBooks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAudioBooks();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 320;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-indigo-700">
            🎧 Audio Books
          </h2>

          <button
            className="text-indigo-600 font-semibold hover:underline"
            onClick={() => navigate("/all-audioBook")}
          >
            See All
          </button>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-1"
          >
            {audioBooks.map((book) => (
              <div
                key={book._id}
                className="
                  min-w-[85%]
                  sm:min-w-[48%]
                  md:min-w-[32%]
                  lg:min-w-[24%]
                  bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 overflow-hidden
                "
              >
                {/* Image */}
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="inline-block bg-indigo-100 text-indigo-600 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                    {book.category}
                  </span>

                  <h3 className="text-base font-bold text-gray-800 leading-tight">
                    {book.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    By {book.author}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>⏱ {book.duration}</span>
                    <span className="font-semibold text-indigo-600">
                      {book.price === 0 ? "FREE" : `₹${book.price}`}
                    </span>
                  </div>

                  {/* Audio */}
                  <audio controls className="w-full h-8 mt-2">
                    <source src={book.audioUrl} type="audio/mpeg" />
                  </audio>

                  {/* <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-1.5 rounded-lg transition">
                    ▶ Listen
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AudioBook;
