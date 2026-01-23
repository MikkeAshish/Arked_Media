import React from "react";
import { assets } from "../assets/assets";

const Anuda = () => {
  return (
    <section
      className="bg-black text-yellow-400 overflow-x-hidden
                 px-6 sm:px-10 md:px-16 lg:px-20
                 py-12 md:py-16"
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center text-sm mb-10">
        <span>2025</span>
        <span className="opacity-80 tracking-wide">ANUDA</span>
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
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {[assets.anuda_1, assets.anuda_2, assets.anuda_3].map((img, i) => (
          <div
            key={i}
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

export default Anuda;
