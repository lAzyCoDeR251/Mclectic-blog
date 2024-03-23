import { ArrowForward } from "@mui/icons-material";
import React from "react";

const AboutUsShort = () => {
  return (
    <div className=" bg-black text-white">
      <div className="w-3/4 mx-auto py-10">
        <h3 className="text-center font-thin text-2xl">
          Welcome to Mclectic – Your Gateway to Eclectic Knowledge!
        </h3>
        <p className="p-2 font-extralight text-lg text-justify">
          Mclectic is a platform that offers a wide range of content on movies,
          space, history, animals, and more. It's not just a blog, but a
          celebration of curiosity and the richness of our world. Mclectic
          offers captivating stories and mind-expanding facts to inspire,
          educate, and entertain. It's a place to explore the realms of cinema,
          outer space, history, and the wonders of the animal kingdom.{" "}
        </p>
        <p className="text-center font-extralight text-xl">
          Join us on an adventure of endless discovery with Mclectic.
        </p>
        <span className="flex justify-center mt-5 cursor-pointer">
          <ArrowForward className="hover:text-gray-400"/>{" "}
        </span>
      </div>
    </div>
  );
};

export default AboutUsShort;
