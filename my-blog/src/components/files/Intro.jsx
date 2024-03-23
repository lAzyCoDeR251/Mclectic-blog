// import { Typography, Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Intro = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="bg-white">
      <div data-aos="zoom-in">
        <h4
          
          className="pt-10  p-4 pl-4 pr-4 font-roboto font-light text-4xl leading-tight tracking-tight text-center"
        >
          Explore a world of fascinating facts, stories, and events that span
          across movies, history, space, Earth, and every conceivable topic.
        </h4>
        <h6
         
          className="pb-10 m-0 font-roboto font-light text-xl leading-6 tracking-wide text-center mt-4"
        >
          {" "}
          - Dive into a treasure trove of knowledge and discovery with our blog.
        </h6>
      </div>
    </div>
  );
};

export default Intro;
