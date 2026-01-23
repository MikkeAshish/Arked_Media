import React from "react";
import { assets } from "../assets/assets";

const Vision_Mission = () => {
  return (
    <section id="vision" className="min-h-screen bg-yellow-400 overflow-x-hidden
                        px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12">

      {/* TOP BAR */}
      <div className="flex justify-between text-xs sm:text-sm tracking-widest mb-12">
        <span>2025</span>
        <span>Marketing agency</span>
      </div>

      {/* ========== VISION SECTION ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-10 lg:gap-16 items-start mb-20 sm:mb-28">

        {/* LEFT */}
        <h1
          className="font-extrabold leading-none tracking-tight
                     text-[4rem] sm:text-[6rem] 
                     md:text-[8rem] lg:text-[9rem]"
        >
          VISION
        </h1>

        {/* RIGHT */}
        <div className="pt-2 sm:pt-4">
          <p className="text-sm sm:text-base md:text-lg 
                        leading-relaxed max-w-xl">
            To become a trusted creative partner for brands worldwide by setting
            new standards in digital storytelling — where content is not just
            created, but crafted with intention, clarity, and impact.
          </p>

          <div className="h-[2px] bg-black mt-6 sm:mt-8 w-24 sm:w-full" />
        </div>
      </div>

      {/* ========== MISSION SECTION ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-10 lg:gap-16 items-start">

        {/* LEFT IMAGES */}
        <div className="flex gap-4 sm:gap-6">
          <img
            src={assets.vision_mission}
            alt=""
            className="w-32 h-32 sm:w-40 sm:h-40 
                       object-cover rounded-md"
          />
          <img
            src={assets.marketing}
            alt=""
            className="w-32 h-32 sm:w-40 sm:h-40 
                       object-cover rounded-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h1
            className="font-extrabold leading-none tracking-tight
                       text-[3.5rem] sm:text-[5rem] 
                       md:text-[7rem] lg:text-[8rem] 
                       mb-4 sm:mb-6"
          >
            MISSION
          </h1>

          <p className="text-sm sm:text-base md:text-lg 
                        leading-relaxed max-w-xl">
            Our mission is to empower brands, educators, and entrepreneurs with
            meaningful content that connects, communicates, and converts.
            We aim to simplify digital marketing through creative strategy,
            high-quality execution, and authentic storytelling that helps
            brands stand out in a crowded digital space.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Vision_Mission;
