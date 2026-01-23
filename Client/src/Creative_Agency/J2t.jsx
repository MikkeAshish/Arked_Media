import React from "react";
import { assets } from "../assets/assets";

const J2t = () => {
  return (
    <section className="bg-black text-white overflow-x-hidden
                        px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">

      {/* TOP BAR */}
      <div className="flex justify-between items-center text-yellow-400 text-sm mb-10">
        <span>2025</span>
        <span className="opacity-90">J2T Media</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING + DESCRIPTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
        
        {/* LEFT HEADING */}
        <h1
          className="text-yellow-400 font-extrabold leading-tight tracking-tight
                     text-[2.2rem] sm:text-[2.8rem]
                     md:text-[3.2rem] lg:text-[3.8rem]"
        >
          Social media <br />
          management
        </h1>

        {/* RIGHT TEXT */}
        <p className="text-gray-300 leading-relaxed max-w-2xl text-sm sm:text-base">
          As a content partner for{" "}
          <span className="text-white font-semibold">J2T Media</span>, we
          supported their digital presence through consistent social media
          creatives and content ideation. Our focus was on maintaining brand
          consistency while creating engaging visuals that complemented their
          marketing objectives and strengthened their online visibility.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div
        className="grid gap-4
                   grid-cols-2 sm:grid-cols-3
                   lg:grid-cols-4 lg:grid-rows-2"
      >
        {/* Small Images */}
        <img src={assets.j2t_media_1} className="rounded-xl object-cover aspect-square" />
        <img src={assets.j2t_media_2} className="rounded-xl object-cover aspect-square" />
        <img src={assets.j2t_media_3} className="rounded-xl object-cover aspect-square" />

        {/* BIG IMAGE */}
        <img
          src={assets.j2t_media_7}
          className="rounded-xl bg-black object-contain
                     lg:row-span-2 aspect-square"
        />

        <img src={assets.j2t_media_4} className="rounded-xl object-cover aspect-square" />
        <img src={assets.j2t_media_5} className="rounded-xl object-cover aspect-square" />
        <img src={assets.j2t_media_6} className="rounded-xl object-cover aspect-square" />
      </div>

    </section>
  );
};

export default J2t;
