import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Training_Info = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [trainings, setTrainings] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // 🔹 Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Fetch trainings
  const fetchTrainings = async () => {
    try {
      const res = await fetch(
        "https://arked-media-kyki.vercel.app/api/training/all"
      );
      const data = await res.json();
      setTrainings(data.trainings || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  // 🔹 PX based slide calculation (no bug)
  const getTranslateX = () => {
    if (!sliderRef.current) return 0;
    const firstCard = sliderRef.current.children[0];
    if (!firstCard) return 0;

    const gap = 32; // gap-8 = 32px
    return index * (firstCard.offsetWidth + gap);
  };

  const next = () => {
    if (index < trainings.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (trainings.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            Training Programs
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 bg-blue-700 text-white rounded-full shadow disabled:opacity-40"
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={index >= trainings.length - visibleCards}
              className="w-10 h-10 bg-blue-700 text-white rounded-full shadow disabled:opacity-40"
            >
              →
            </button>

            <button
              onClick={() => navigate("/all-trainings")}
              className="ml-3 px-5 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800"
            >
              See All
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${getTranslateX()}px)`,
            }}
          >
            {trainings.map((t) => (
              <div
                key={t._id}
                className="flex-shrink-0 bg-slate-100 rounded-3xl p-8
                           w-full sm:w-[48%] lg:w-[32%]"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {t.title}
                </h3>

                <p className="text-gray-600 mb-5 line-clamp-3">
                  {t.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p><b>Trainer:</b> {t.trainer}</p>
                  <p><b>Duration:</b> {t.duration}</p>
                  <p><b>Timing:</b> {t.timing}</p>
                  <p><b>Mode:</b> {t.mode}</p>
                  <p><b>Audience:</b> {t.audience}</p>
                  <p><b>Certificate:</b> {t.certificate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Training_Info;
