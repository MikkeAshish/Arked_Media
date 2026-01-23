import React from "react";
import { assets } from "../assets/assets";

const Frooti = () => {
  return (
    <section className="bg-black px-6 md:px-16 lg:px-24 py-16">
      {/* Top bar */}
      <div className="flex justify-between items-center text-yellow-400 text-sm mb-6 md:mb-10">
        <span>2025</span>
        <span className="font-semibold">SMM</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* Heading and Description */}
      <div className="text-center md:text-left mb-12 md:mb-16">
        <h1 className="text-yellow-400 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
          Packaging Design
        </h1>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Imagine if Frooti was designed in 2025! A fresh, modern, and vibrant approach to an iconic drink.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <img
          src={assets.frooti_1}
          alt="Frooti Packaging 1"
          className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src={assets.frooti_2}
          alt="Frooti Packaging 2"
          className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src={assets.frooti_3}
          alt="Frooti Packaging 3"
          className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Frooti;
