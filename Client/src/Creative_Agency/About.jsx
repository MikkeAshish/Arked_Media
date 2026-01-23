import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section  id="about"  className="min-h-screen flex flex-col lg:flex-row overflow-x-hidden">

      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-[40%] h-[45vh] lg:h-auto">
        <img
          src={assets.about}
          alt="about"
          className="w-full h-full object-cover grayscale"
        />

        <span className="absolute top-4 left-4 sm:top-6 sm:left-6 
                          text-yellow-400 text-xs sm:text-sm tracking-widest">
          2025
        </span>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-[60%] bg-yellow-400 
                      px-6 sm:px-10 md:px-14 lg:px-16 
                      py-10 sm:py-12 
                      flex flex-col justify-between gap-10">

        {/* Top Right Text */}
        <div className="text-right text-xs sm:text-sm tracking-widest">
          Marketing agency
        </div>

        {/* Main Content */}
        <div className="max-w-[640px]">
          <h1
            className="font-extrabold leading-none tracking-tight
                       text-[3.2rem] sm:text-[4.5rem] 
                       md:text-[6rem] lg:text-[7rem]"
          >
            ABOUT&nbsp;US
          </h1>

          <p className="mt-6 sm:mt-8 
                        text-sm sm:text-base md:text-lg 
                        leading-relaxed font-medium">
            ArkEd Media is a creative studio built on the belief that good
            content doesn’t just look good — it tells a story.
            We craft scroll-stopping visuals, impactful reels, and thoughtful
            brand content that connects businesses with their audience in a
            meaningful way.
            <br /><br />
            From strategy to execution, ArkEd Media blends creativity with
            clarity to help brands grow, engage, and stand out in the digital
            space.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-end">
          <img
            src={assets.LOGO}
            alt="ArkEd Media"
            className="w-24 sm:w-28 md:w-32 opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
