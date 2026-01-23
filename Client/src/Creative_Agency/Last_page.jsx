import React from "react";

const Last_page = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col justify-center items-center px-6 md:px-16 text-center gap-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black drop-shadow-lg">
        CONTACT US
      </h1>

      {/* Social Handle */}
      <p className="text-xl md:text-2xl lg:text-3xl font-medium text-black hover:text-white transition-colors duration-300 cursor-pointer">
        @arkedmediaofficial
      </p>

      {/* Optional Button */}
      <a
        href="https://instagram.com/arkedmediaofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-black text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-black transition-colors duration-300"
      >
        Visit Instagram
      </a>
    </div>
  );
};

export default Last_page;
