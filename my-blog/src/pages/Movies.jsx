import React from "react";
import Header from "../components/Header_footer/Header";
import MoviesLanding from "../components/movies_components/MoviesLanding";
import MoviesCardContainer from "../components/movies_components/MoviesCardContainer"
import MoviesBlogCards from "../components/movies_components/MoviesBlogCards";
import Footer from "../components/Header_footer/Footer"

const Movies = () => {
  return (
    <div className="bg-fixed-mov">
      <div className="">
        <Header />
        <MoviesLanding />
        <MoviesCardContainer />
        <MoviesBlogCards />
        <Footer />
      </div>
    </div>
  );
};

export default Movies;
