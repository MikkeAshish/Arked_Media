import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Seminar = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [seminars, setSeminars] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // 🔄 Handle responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
      setIndex(0); // resize pe reset
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔄 Fetch seminars
  const fetchSeminars = async () => {
    try {
      const res = await axios.get(
        // "https://arked-media-kyki.vercel.app/api/seminar/all"
        "http://localhost:3006/api/seminar/all"
      );
      setSeminars(res.data.seminars || []);
    } catch (error) {
      console.error("Error fetching seminars", error);
    }
  };

  useEffect(() => {
    fetchSeminars();
  }, []);

  // 👉 CARD WIDTH + GAP (px based – no bug)
  const getTranslateX = () => {
    if (!sliderRef.current) return 0;
    const firstCard = sliderRef.current.children[0];
    if (!firstCard) return 0;

    const gap = 24; // gap-6 = 24px
    return index * (firstCard.offsetWidth + gap);
  };

  const next = () => {
    if (index < seminars.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (seminars.length === 0) {
    return (
      <section className="py-24 text-center text-gray-500">
        No seminars available
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center md:text-left">
            Seminars & Workshops
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 bg-blue-700 text-white rounded-full hover:bg-blue-800 disabled:opacity-40"
              disabled={index === 0}
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-9 h-9 bg-blue-700 text-white rounded-full hover:bg-blue-800 disabled:opacity-40"
              disabled={index >= seminars.length - visibleCards}
            >
              →
            </button>

            <button
              onClick={() => navigate("/all-seminar")}
              className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold hover:bg-blue-800"
            >
              See All
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${getTranslateX()}px)`,
            }}
          >
            {seminars.map((s) => (
              <div
                key={s._id}
                className="flex-shrink-0 bg-blue-50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition
                           w-full sm:w-[48%] lg:w-[32%]"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {s.desc}
                </p>

                <div className="space-y-1 text-sm text-gray-700">
                  <p><b>Speaker:</b> {s.speaker}</p>
                  <p><b>Date:</b> {s.date}</p>
                  <p><b>Time:</b> {s.time}</p>
                  <p><b>Venue:</b> {s.venue}</p>
                  <p><b>Audience:</b> {s.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Seminar;
