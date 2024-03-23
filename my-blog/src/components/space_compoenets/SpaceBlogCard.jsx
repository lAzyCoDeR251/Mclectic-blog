import React from "react";
import spaceImg from "../Assests/movies-card2.avif";

const SpaceBlogCard = () => {
  return (
    <div id="section-testimonials">
      <div className="flex flex-col md:flex-row">

        <div
          className="max-w-3xl relative overflow-hidden shadow-md m-5 border border-gray-200 rounded-md group"
          style={{
            backgroundImage: `url(${spaceImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-3xl h-48 p-6 bg-cover  dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
            <h5 className="my-9 text-4xl font-normal tracking-tight text-gray-900 dark:text-white group-hover:mt-0 group-hover:text-2xl group-hover:my-2 group-hover:text-white transition-all duration-300">
              Did you Know ?
            </h5>
            {/* Additional styles for h5 to position it in the center */}
            <p className="mb-9 inset-0 flex items-center  text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
              enim nesciunt. Molestiae, rem ut adipisci sit alias provident
              quidem sed, eius quas nam fuga deleniti repudiandae, veniam
              accusantium. Iure, porro.
            </p>
          </div>
        </div>

        <div
          className="max-w-3xl relative overflow-hidden shadow-md m-5 border border-gray-200 rounded-md group"
          style={{
            backgroundImage: `url(${spaceImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-3xl h-48 p-6 bg-cover  dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
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

        <div
          className="max-w-3xl relative overflow-hidden shadow-md m-5 border border-gray-200 rounded-md group"
          style={{
            backgroundImage: `url(${spaceImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-3xl h-48 p-6 bg-cover  dark:bg-gray-800 dark:border-gray-700 group-hover:bg-black group-hover:bg-opacity-50">
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
      </div>
    </div>
  );
};

export default SpaceBlogCard;
// npx update-browserslist-db@latest
