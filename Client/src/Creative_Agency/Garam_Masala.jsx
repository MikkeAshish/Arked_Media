import React from "react";
import { assets } from "../assets/assets";

const Garam_Masala = () => {
  return (
    <section
      className="bg-black text-white overflow-x-hidden
                        px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16"
    >
      <div
        className="flex justify-between items-center 
                      text-yellow-400 text-xs sm:text-sm tracking-widest mb-6"
      >
        <span>2025</span>
        <span>Digital Creative Partner</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT TEXT */}
        <div>
          <h1
            className="text-yellow-400 font-extrabold leading-tight tracking-tight
                       text-[2.2rem] sm:text-[2.8rem]
                       md:text-[3.2rem] lg:text-[3.8rem]"
          >
            SOCIAL MEDIA <br />
            REVAMP & <br />
            CONTENT STRATEGY
          </h1>

          <h2 className="text-yellow-400 text-lg sm:text-xl font-semibold mt-4">
            GARAM MASALAA
          </h2>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <img
            src={assets.garam_masala_1}
            alt=""
            className="rounded-xl object-cover aspect-square"
          />
          <img
            src={assets.garam_masala_2}
            alt=""
            className="rounded-xl object-cover aspect-square"
          />
          <img
            src={assets.garam_masala_3}
            alt=""
            className="rounded-xl object-cover aspect-square sm:block hidden"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-14">
        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
          ArkEd Media revamped Garam Masalaa’s Instagram presence by curating
          fresh visual content and crafting engaging captions aligned with the
          brand’s tone. Our focus was on improving content consistency, brand
          recall, and organic reach. Through strategic posting and
          storytelling-driven captions, we helped boost visibility and audience
          engagement.
        </p>

        {/* FULL IMAGE */}
        <img
          src={assets.garam_masala_4}
          alt=""
          className="w-full rounded-2xl object-cover h-56 sm:h-64 md:h-72 lg:h-80"
        />
      </div>
    </section>
  );
};

export default Garam_Masala;
