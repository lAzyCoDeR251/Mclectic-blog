import React from "react";

const MoviesLanding = () => {
  return (
    <div className="relative">
      <div className="movies-t-bg h-400 bg-cover bg-center"></div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl md:text-9xl font-extrabold">
        <span className="border border-black p-4 bg-black">M</span>
        <span className="border border-black  bg-black">O</span>
        <span className="border border-black p-4 bg-black">V</span>
        <span className="border border-black bg-black">I</span>
        <span className="border border-black p-4 bg-black">E</span>
        <span className="border border-black  bg-black pr-4">S</span>
      </div>
      <div className="bg-black h-[143px] flex justify-center items-center">
      <h1 className="movies-h1 text-white text-base px-6 md:text-3xl">
          {/* Movies are windows to diverse worlds, inviting us to escape reality
          and explore the extraordinary within the frames of imagination */}
          Every film is a journey, and each frame tells a story waiting to
          unfold.
        </h1>
      </div>
    </div>
  );
};

export default MoviesLanding;
