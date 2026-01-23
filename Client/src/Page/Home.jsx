import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-yellow-400 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CREATIVE AGENCY */}
        <div
          onClick={() => navigate("/Creative_Agence")}
          className="group cursor-pointer border border-yellow-400/40 
                     rounded-2xl p-10 transition-all duration-300
                     hover:bg-yellow-400 hover:text-black"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Creative Agency
          </h1>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Explore our creative portfolio showcasing branding, content creation,
            marketing strategies, design systems, and real-world projects we’ve
            successfully delivered for various brands.
          </p>

          <span className="inline-block mt-6 font-semibold tracking-wide
                           group-hover:translate-x-2 transition-transform">
            View Portfolio →
          </span>
        </div>

        {/* EDUCATIONAL */}
        <div
          onClick={() => navigate("/Eductional")}
          className="group cursor-pointer border border-blue-700 text-white
                     rounded-2xl p-10 transition-all duration-300
                     hover:bg-white hover:text-blue-700"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700">
            Educational
          </h1>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Learn about our educational initiatives including professional
            training programs, workshops, seminars, skill development sessions,
            and industry-oriented learning experiences.
          </p>

          <span className="inline-block mt-6 font-semibold tracking-wide
                           group-hover:translate-x-2 transition-transform">
            Explore Learning →
          </span>
        </div>

      </div>
    </section>
  );
};

export default Home;
