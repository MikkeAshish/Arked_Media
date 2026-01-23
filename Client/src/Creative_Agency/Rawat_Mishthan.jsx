import React from "react";
import { assets } from "../assets/assets";

const Rawat_Mishthan = () => {
  return (
    <section className="bg-black text-yellow-400 overflow-x-hidden
                        px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">

      {/* TOP BAR */}
      <div className="flex justify-between items-center text-sm mb-8">
        <span>2025</span>
        <span className="opacity-90">Rawat Mishthan Bhandar</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING + INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
        
        <h1 className="font-extrabold leading-tight
                       text-4xl sm:text-5xl lg:text-6xl">
          BRAND <br /> PRESENCE
        </h1>

        <div className="lg:text-right">
          <p className="font-semibold">Rawat Mishthan Bhandar</p>
          <span className="text-white text-sm">
            Social Media Content | Visual Design | Brand Representation
          </span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-5">
          {[assets.rawat_1, assets.rawat_2, assets.rawat_3, assets.rawat_4].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-full aspect-square object-cover rounded-xl"
              />
            )
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-10">

          {/* TOP IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={assets.rawat_5}
              alt=""
              className="w-full aspect-square object-cover rounded-xl"
            />
            <img
              src={assets.rawat_6}
              alt=""
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          {/* TEXT */}
          <p className="text-white leading-relaxed max-w-xl text-sm sm:text-base">
            For <span className="font-semibold">Rawat Mishthan Bhandar</span>, we
            created visually rich content that reflected the brand’s legacy and
            authenticity while adapting it for modern digital platforms. The
            content focused on highlighting products, maintaining cultural
            essence, and improving digital visibility.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Rawat_Mishthan;
