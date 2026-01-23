import React from "react";
import { assets } from "../assets/assets";

const Aishwarya_Clothing = () => {
  return (
    <section id="moodboard" className="bg-black text-yellow-400 overflow-x-hidden
                 px-6 sm:px-10 md:px-16 lg:px-20
                 py-12 md:py-16"
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center text-sm mb-10">
        <span>2025</span>
        <span className="opacity-80 tracking-wide">
          Aishwarya Clothing
        </span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING */}
      <h1
        className="font-extrabold leading-tight mb-14
                   text-4xl sm:text-5xl lg:text-6xl"
      >
        MOOD <br className="hidden sm:block" /> BOARD
      </h1>

      {/* IMAGE GRID */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {[
          assets.aishwarya_clothing_1,
          assets.aishwarya_clothing_2,
          assets.aishwarya_clothing_3,
        ].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl group"
          >
            <img
              src={img}
              alt=""
              className="
                w-full h-[360px]
                object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aishwarya_Clothing;
