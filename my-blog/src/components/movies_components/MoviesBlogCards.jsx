import React from "react";
import cardImg from "../Assests/movies-card1.jpg";

const MoviesBlogCards = () => {
  return (
    <div className="bg-white my-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="group transition duration-1000 ease-in-out">
            <div class="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer group-hover:bg-black">
              <img class="rounded-t-lg group-hover:opacity-75" src={cardImg} alt="" />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  group-hover:text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="#/"
          class="border-2 border-transparent hover:border-gray-600 inline-flex items-center my-5 px-7 py-2 text-sm font-medium text-center text-white hover:text-black bg-black rounded-md hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-200 dark:focus:ring-blue-800"
        >
           More
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MoviesBlogCards;
