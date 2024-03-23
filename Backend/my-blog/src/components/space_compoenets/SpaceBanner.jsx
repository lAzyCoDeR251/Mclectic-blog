import React from "react";

const SpaceBanner = () => {
  return (
    <div className="">
      <div className="bg-black h-96">
        <div className="space_main"></div>
        <div className="flex justify-center top-48">
          <div
            className="flex absolute top-52 text-white
         text-6xl md:text-9xl font-extrabold"
          >
            <div class="floating text-white text-stroke border-transparent border-2 border-solid">
              S
            </div>
            <div className="floating text-white text-stroke border-transparent border-2 border-solid p-4 bg-black">
              P
            </div>
            <div className="floating text-white text-stroke border-transparent border-2 border-solid  bg-black">
              A
            </div>
            <div className="floating text-white text-stroke border-transparent border-2 border-solid bg-black">
              C
            </div>
            <div className="floating text-white text-stroke border-transparent border-2 border-solid p-4 bg-black">
              E
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[157px] flex flex-col justify-center items-center">
        {/* <p className="movies-h1 text-white text-base px-4 md:text-3xl">
          Explore the universe and beyond with our cutting-edge space
          exploration technologies.
        </p> */}
        <div className="floating">
          <p
            className="movies-h1 text-white text-base px-6 md:text-3xl"
            style={{ color: "white" }}
          >
            Join us on an epic journey to discover the wonders of the cosmos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpaceBanner;
