import React from "react";
import { Divider } from "@mui/material";

const MoviesCardContainer = () => {
  return (
    <div className="flex justify-center md:justify-around my-20 bg-white">
      <div className="md:w-[20%]">
        <div className="bg-black text-white hidden md:block border rounded-sm p-3  shadow-xl m-5 h-fit">
          <div>
            <h3 className="p-3 text-2xl text-center">Explore Topics</h3>
            <Divider sx={{ bgcolor: "white" }} />
            <div className="my-5 text-center">
              <ul>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Space</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Moveis</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">History</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Facts</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Do you Know?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="movies-card-bg max-w-3xl relative overflow-hidden shadow-md m-5 group">
          <div className="max-w-2xl h-44 p-6 bg-cover border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
            <h5 className="my-9 text-4xl font-normal tracking-tight text-gray-900 dark:text-white group-hover:mt-0 group-hover:text-2xl group-hover:my-2 group-hover:text-white transition-all duration-300">
              Did you Know ?
            </h5>
            {/* Additional styles for h5 to position it in the center */}
            <p className="inset-0 flex items-center  text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              enim nesciunt. Molestiae, rem ut adipisci sit alias provident
              quidem sed, eius quas nam fuga deleniti repudiandae, veniam
              accusantium. Iure, porro.
            </p>
          </div>
        </div>

        <div className="movies-card-bg1 max-w-3xl relative overflow-hidden shadow-md m-5 group">
          <div className="max-w-2xl h-44 p-6 bg-cover border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
            <h5 className="my-9 text-4xl font-normal tracking-tight text-gray-900 dark:text-white group-hover:mt-0 group-hover:text-2xl group-hover:my-2 group-hover:text-white transition-all duration-300">
              Did you Know ?
            </h5>
            {/* Additional styles for h5 to position it in the center */}
            <p className="inset-0 flex items-center  text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              enim nesciunt. Molestiae, rem ut adipisci sit alias provident
              quidem sed, eius quas nam fuga deleniti repudiandae, veniam
              accusantium. Iure, porro.
            </p>
          </div>
        </div>

        <div className="movies-card-bg2 max-w-3xl relative overflow-hidden shadow-md m-5 group">
          <div className="max-w-2xl h-44 p-6 bg-cover border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
            <h5 className="my-9 text-4xl font-normal tracking-tight text-red-700 dark:text-white group-hover:mt-0 group-hover:text-2xl group-hover:my-2 group-hover:text-white transition-all duration-300">
              Did you Know ?
            </h5>
            {/* Additional styles for h5 to position it in the center */}
            <p className="inset-0 flex items-center  text-gray-100 dark:text-white opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              enim nesciunt. Molestiae, rem ut adipisci sit alias provident
              quidem sed, eius quas nam fuga deleniti repudiandae, veniam
              accusantium. Iure, porro.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[20%]">
        <div className="bg-black text-white hidden md:block border rounded-sm p-3 shadow-md m-5 h-fit">
          <div>
            <h3 className="p-3 text-2xl text-center">Explore Topics</h3>
            <Divider sx={{ bgcolor: "white" }} />
            <div className="my-5 text-center">
              <ul>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Space</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Moveis</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">History</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Facts</a>
                </li>
                <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                  <a href="@">Do you Know?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCardContainer;
