import React from "react";
import { assets } from "../assets/assets";

const Blue_Plum = () => {
  return (
    <section
      className="bg-black text-yellow-400 overflow-x-hidden
                 px-6 sm:px-10 md:px-16 lg:px-20
                 py-12 md:py-16"
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center text-sm mb-10">
        <span>2025</span>
        <span className="opacity-80 tracking-wide">Blue Palm</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING */}
      <h1
        className="font-extrabold leading-tight mb-14
                   text-4xl sm:text-5xl lg:text-6xl"
      >
        MOODBOARD <br className="hidden sm:block" /> STRATEGY
      </h1>

      {/* IMAGE GRID */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          lg:grid-rows-2
        "
      >
        {/* Small images */}
        <img
          src={assets.blue_palm_1}
          className="w-full h-[220px] object-cover rounded-2xl"
        />
        <img
          src={assets.blue_palm_2}
          className="w-full h-[220px] object-cover rounded-2xl"
        />
        <img
          src={assets.blue_palm_3}
          className="w-full h-[220px] object-cover rounded-2xl"
        />

        {/* BIG FEATURED IMAGE */}
        <img
          src={assets.blue_palm_7}
          className="
            w-full h-full
            object-cover
            rounded-2xl
            lg:row-span-2
            sm:col-span-2
            lg:col-span-1
          "
        />

        {/* Bottom row images */}
        <img
          src={assets.blue_palm_4}
          className="w-full h-[220px] object-cover rounded-2xl"
        />
        <img
          src={assets.blue_palm_5}
          className="w-full h-[220px] object-cover rounded-2xl"
        />
        <img
          src={assets.blue_palm_6}
          className="w-full h-[220px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Blue_Plum;
