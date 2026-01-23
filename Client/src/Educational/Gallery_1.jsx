import React from "react";
import { assets } from "../assets/assets";

const Gallery_1 = () => {

  const galleryImages = [
    assets.Gallery_1,
    assets.Gallery_2,
    assets.Gallery_3,
    assets.Gallery_4,
    assets.Gallery_5,
    assets.Gallery_6,
    assets.Gallery_7,
    assets.Gallery_8,
    assets.Gallery_9,
    assets.Gallery_10,
  ];

  return (
    <section className="py-20 mb-10 bg-white overflow-hidden">

      {/* ROW 1 → Right to Left (Text) */}
      <div className="w-full overflow-hidden mb-10">
        <div className="flex whitespace-nowrap w-max animate-marquee-left text-2xl font-bold text-blue-700">
          <span className="mx-6">Creative Gallery • Workshops • Seminars • Training Programs •</span>
          <span className="mx-6">Creative Gallery • Workshops • Seminars • Training Programs •</span>
          <span className="mx-6">Creative Gallery • Workshops • Seminars • Training Programs •</span>
        </div>
      </div>

      {/* GALLERY IMAGES */}
      <div className="w-full overflow-hidden">
        <div className="flex whitespace-nowrap w-max animate-marquee-left">

          {galleryImages.concat(galleryImages).map((img, index) => (
            <div
              key={index}
              className="mx-6 w-[300px] h-[200px] flex-shrink-0 rounded-2xl bg-gray-100 shadow-lg flex items-center justify-center"
            >
              <img
                src={img}
                alt="Gallery"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      {/* ROW 2 → Left to Right (Text) */}
      <div className="w-full overflow-hidden mt-10">
        <div className="flex whitespace-nowrap w-max animate-marquee-right text-2xl font-bold text-blue-700">
          <span className="mx-6">Innovation • Learning • Growth • Skill Development •</span>
          <span className="mx-6">Innovation • Learning • Growth • Skill Development •</span>
          <span className="mx-6">Innovation • Learning • Growth • Skill Development •</span>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee-left {
            animation: marquee-left 25s linear infinite;
          }

          .animate-marquee-right {
            animation: marquee-right 25s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default Gallery_1;
