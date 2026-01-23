import React from "react";
import { assets } from "../assets/assets";

const SG_Education = () => {
  return (
    <section
      className="bg-black text-yellow-400 overflow-x-hidden
                 px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16"
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-center text-sm mb-8">
        <span>2025</span>
        <span className="opacity-80">SG Education Solutions</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING */}
      <h1
        className="font-extrabold leading-tight mb-14
                   text-4xl sm:text-5xl lg:text-6xl"
      >
        BRAND <br className="hidden sm:block" /> PRESENCE
      </h1>

      {/* IMAGE GRID */}
      <div
        className="
          grid gap-5
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          lg:grid-rows-2
        "
      >

        {/* SMALL IMAGES */}
        {[assets.SG_1, assets.SG_2, assets.SG_3].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl group">
            <img
              src={img}
              className="w-full h-[220px] object-cover
                         transition-transform duration-500
                         group-hover:scale-105"
            />
          </div>
        ))}

        {/* BIG IMAGE */}
        <div
          className="overflow-hidden rounded-xl group
                     lg:row-span-2"
        >
          <img
            src={assets.SG_7}
            className="w-full h-full object-cover
                       transition-transform duration-700
                       group-hover:scale-105"
          />
        </div>

        {/* SMALL IMAGES ROW 2 */}
        {[assets.SG_4, assets.SG_5, assets.SG_6].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl group">
            <img
              src={img}
              className="w-full h-[220px] object-cover
                         transition-transform duration-500
                         group-hover:scale-105"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default SG_Education;
