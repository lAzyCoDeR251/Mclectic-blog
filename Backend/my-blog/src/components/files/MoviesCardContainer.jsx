import React from "react";

const MoviesCardContainer = () => {
  return (
    <div>
      <div className="max-w-2xl relative overflow-hidden">  
        <div
          className="group max-w-2xl p-6 bg-cover border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundImage: "url(../Assests/movies-bg1.webp)" }}
        >
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Need help with your claim?
          </h5>
          {/* Additional styles for h5 to position it in the center */}
          <p className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Step by step guideline on how to certify for your weekly benefits
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesCardContainer;
