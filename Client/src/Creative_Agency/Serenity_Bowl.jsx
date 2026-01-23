import React from "react";
import { assets } from "../assets/assets";

const Serenity_Bowl = () => {
  return (
    <section className="bg-black px-6 md:px-16 lg:px-24 py-16">
      {/* Top bar */}
      <div className="flex justify-between items-center text-yellow-400 text-sm mb-6 md:mb-10">
        <span>2025</span>
        <span className="font-semibold">Serenity Bowl</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* Heading */}
      <h1 className="text-yellow-400 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 text-center md:text-left">
        Product Design
      </h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-center">
        {/* Left Image */}
        <img
          src={assets.bowl_1}
          alt="Serenity Bowl 1"
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Center Image with text */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
          <p className="text-white text-lg md:text-xl font-medium text-center md:text-left">
            Serenity Bowl
          </p>
          <img
            src={assets.bowl_2}
            alt="Serenity Bowl 2"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Image */}
        <img
          src={assets.bowl_3}
          alt="Serenity Bowl 3"
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Serenity_Bowl;
