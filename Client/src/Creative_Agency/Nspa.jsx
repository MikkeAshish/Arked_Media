import React from "react";
import { assets } from "../assets/assets";

const Nspa = () => {
  return (
    <section id="projects" className="bg-black text-white overflow-x-hidden
                        px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">

      {/* TOP BAR */}
      <div className="flex justify-between items-center 
                      text-yellow-400 text-xs sm:text-sm tracking-widest mb-6">
        <span>2025</span>
        <span>Digital Creative Partner</span>
      </div>

      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* HEADING + INTRO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-8 lg:gap-16 items-start mb-14">

        <h1
          className="text-yellow-400 font-extrabold tracking-tight
                     text-[3rem] sm:text-[4rem] 
                     md:text-[5rem] lg:text-[6rem]"
        >
          NSPA 2025
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
          <span className="font-semibold text-white">ArkEd Media</span>{" "}
          partnered with NSPA as their official digital creative partner.
          We designed and managed key visual assets to ensure consistent branding
          and a professional visual identity across all event touchpoints.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-10 lg:gap-16 items-start">

        {/* IMAGE */}
        <div>
          <img
            src={assets.NSPA}
            alt="NSPA 2025"
            className="w-full rounded-xl object-cover shadow-xl"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-10">

          {/* WHAT WE DID */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 tracking-wide">
              WHAT WE DID
            </h3>
            <ul className="space-y-2 text-yellow-400 text-sm sm:text-base">
              <li>• Designed event banners aligned with brand guidelines</li>
              <li>• Created digital & printable promotional flyers</li>
              <li>• Designed clean, professional event tickets</li>
              <li>• Maintained consistent visual identity</li>
              <li>• Optimized creatives for digital & print</li>
            </ul>
          </div>

          {/* IMPACT */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 tracking-wide">
              IMPACT
            </h3>
            <ul className="space-y-2 text-yellow-400 text-sm sm:text-base">
              <li>• Strong and cohesive event branding</li>
              <li>• Higher engagement through clear visuals</li>
              <li>• Smooth event communication</li>
              <li>• Improved brand recall</li>
            </ul>
          </div>

          {/* QUOTE */}
          <div className="pt-6 border-t border-yellow-400/40">
            <p className="text-lg sm:text-xl font-semibold text-white leading-snug">
              “THERE’S A LONG WAY <br />
              FOR ARKED MEDIA IN THE FUTURE”
            </p>
            <p className="text-yellow-400 mt-2 text-sm sm:text-base">
              – NAVEEN SHARMA (NSPA)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nspa;
