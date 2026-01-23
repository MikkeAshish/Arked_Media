// import React from "react";
// import { assets } from "../assets/assets";

// const Manikar_Jewellers = () => {
//   return (
//     <section className="bg-black text-white px-6 md:px-24 py-20">
      
//       {/* Top Bar */}
//       <div className="flex justify-between items-center text-yellow-400 text-sm tracking-widest mb-14">
//         <span>2025</span>
//         <span className="uppercase opacity-80">Manikar Jewellers</span>
//       </div>

//       {/* Main Layout */}
//       <div className="grid lg:grid-cols-2 gap-20 items-start">

//         {/* Left Big Heading */}
//         <div>
//           <h1 className="text-yellow-400 font-extrabold leading-[1.1] 
//                          text-4xl md:text-5xl lg:text-7xl tracking-tight">
//             Social Media <br />
//             Management <br />
//             & Content <br />
//             Strategy
//           </h1>

//           {/* Accent line */}
//           <div className="mt-8 h-[2px] w-24 bg-yellow-400"></div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-10">

//           {/* Paragraph */}
//           <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
//             For <span className="text-white font-semibold">Manikar Jewellery</span>, 
//             ArkEd Media handled complete social media management with a focus on
//             aesthetic visual grids, elegant content, and brand-aligned storytelling.
//             Each post highlighted the brand’s craftsmanship while maintaining a
//             refined and luxurious visual identity.
//           </p>

//           {/* Image Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             <img
//               src={assets.manikar_jewellers_1}
//               alt=""
//               className="rounded-xl object-cover 
//                          transition duration-500 hover:scale-[1.03]"
//             />
//             <img
//               src={assets.manikar_jewellers_2}
//               alt=""
//               className="rounded-xl object-cover 
//                          transition duration-500 hover:scale-[1.03]"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Manikar_Jewellers;




import React from "react";
import { assets } from "../assets/assets";

const Manikar_Jewellers = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">

      {/* Top Bar */}
      <div className="flex justify-between items-center 
                      text-yellow-400 text-xs sm:text-sm 
                      tracking-widest mb-10 sm:mb-14">
        <span>2025</span>
        <span className="uppercase opacity-80">Manikar Jewellers</span>
      </div>
      <div className="border-t border-yellow-400/70 mb-12"></div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      gap-12 lg:gap-20 items-start">

        {/* Left Heading */}
        <div>
          <h1
            className="text-yellow-400 font-extrabold tracking-tight
                       leading-tight sm:leading-[1.15] lg:leading-[1.1]
                       text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          >
            Social Media <br />
            Management <br />
            & Content <br />
            Strategy
          </h1>

          {/* Accent Line */}
          <div className="mt-6 sm:mt-8 h-[2px] w-20 sm:w-24 bg-yellow-400"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-8 sm:space-y-10">

          {/* Paragraph */}
          <p className="text-gray-300 leading-relaxed 
                        text-sm sm:text-base md:text-lg 
                        max-w-full sm:max-w-xl">
            For <span className="text-white font-semibold">Manikar Jewellery</span>, 
            ArkEd Media handled complete social media management, focusing on
            aesthetic visual grids, elegant content, and brand-aligned storytelling.
            Each post highlighted the brand’s craftsmanship while maintaining a
            premium and cohesive visual identity.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <img
              src={assets.manikar_jewellers_1}
              alt=""
              className="rounded-xl object-cover w-full h-[220px] sm:h-[260px]
                         transition duration-500 hover:scale-[1.03]"
            />
            <img
              src={assets.manikar_jewellers_2}
              alt=""
              className="rounded-xl object-cover w-full h-[220px] sm:h-[260px]
                         transition duration-500 hover:scale-[1.03]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manikar_Jewellers;
