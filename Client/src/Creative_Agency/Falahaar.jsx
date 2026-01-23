import React from "react";
import { assets } from "../assets/assets";

const Falahaar = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-16">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-yellow-400 text-sm mb-10">
        <span>2025</span>
        <span>Marketing agency</span>
      </div> 
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* Heading + Info */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
        {/* Left Big Heading */}
        <h1 className="text-yellow-400 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
          DIGITAL CONTENT & <br />
          BRAND PRESENCE
        </h1>

        {/* Right Info */}
        <div className="space-y-4">
          <h2 className="text-yellow-400 text-2xl font-semibold">
            Falahaar
          </h2>

          <p className="text-gray-300">
            <span className="text-yellow-400 font-semibold">Role:</span>{" "}
            Social Media Content & Visual Branding
          </p>

          <p className="text-gray-300">
            <span className="text-yellow-400 font-semibold">Services:</span>{" "}
            Creative content, visual design, brand consistency
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        <img
          src={assets.falahaar_1}
          alt=""
          className="rounded-lg object-cover"
        />
        <img
          src={assets.falahaar_2}
          alt=""
          className="rounded-lg object-cover"
        />
        <img
          src={assets.falahaar_3}
          alt=""
          className="rounded-lg object-cover"
        />
        <img
          src={assets.falahaar_4}
          alt=""
          className="rounded-lg object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
        For <span className="text-white font-semibold">Falahaar</span>, we
        developed visually appealing social media content that highlighted the
        brand’s essence and offerings. Our work focused on maintaining a clean,
        consistent visual style while creating engaging posts that connected
        with the audience. The result was a stronger digital presence and a more
        recognizable brand identity across platforms.
      </p>
    </section>
  );
};

export default Falahaar;
