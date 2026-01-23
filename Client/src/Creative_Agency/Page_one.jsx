import React from "react";
import { assets } from "../assets/assets";

const Page_one = () => {
  return (
    <section className="min-h-screen bg-yellow-400 flex flex-col">

      {/* Top Bar */}
      <div className="flex justify-between items-center 
                      px-6 sm:px-10 py-5 
                      border-b border-white/70 
                      text-sm sm:text-base font-medium">
        <span>2025</span>
        <span className="tracking-wide">Creative agency</span>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col 
                      justify-center items-center 
                      gap-12 sm:gap-16">

        {/* Logo */}
        <div className="w-32 sm:w-40 md:w-44">
          <img
            src={assets.LOGO}
            alt="ArKEd Media Logo"
            className="w-full object-contain"
          />
        </div>

        {/* PORTFOLIO Text */}
        <h1
          className="font-monoton text-center leading-none
                     text-[3.5rem] sm:text-[5rem] 
                     md:text-[7rem] lg:text-[9rem]
                     tracking-wide text-black"
        >
          PORTFOLIO
        </h1>

        {/* Optional Sub Text */}
        <p className="text-black/80 
                      text-xs sm:text-sm tracking-widest uppercase">
          ArKEd Media
        </p>
      </div>

    </section>
  );
};

export default Page_one;
