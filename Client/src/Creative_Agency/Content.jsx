import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { assets } from "../assets/assets";

const Content = () => {
  const menuItems = [
    { label: "ABOUT US", id: "about" },
    { label: "VISION & MISSION", id: "vision" },
    { label: "PROJECTS", id: "projects" },
    { label: "MOODBOARD STRATEGY", id: "moodboard" },
    { label: "PRODUCT / PACKAGE DESIGNING", id: "product" },
  ];

  return (
    <section className="min-h-screen bg-black text-yellow-400 px-6 sm:px-10 md:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 min-h-[85vh]">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <span className="text-xs sm:text-sm tracking-widest">2025</span>

          <div>
            <h1 className="font-extrabold leading-none text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] tracking-tight">
              CONTENT
            </h1>

            <img
              src={assets.content}
              alt="content"
              className="mt-6 w-full max-w-[420px] h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start lg:items-end">
          <span className="text-xs sm:text-sm tracking-widest">Marketing agency</span>

          <div className="w-full max-w-md space-y-6 mt-12 lg:mt-0">
            {menuItems.map((item, index) => (
              <div key={index} className="group">
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-50} // optional: scroll offset
                  className="block text-base sm:text-lg font-semibold tracking-wide text-right lg:text-right cursor-pointer transition duration-300 group-hover:opacity-80"
                >
                  {item.label}
                </ScrollLink>
                <div className="h-[1px] bg-yellow-400 mt-2 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Content;
