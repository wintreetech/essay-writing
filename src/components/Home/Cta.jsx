import React from "react";

function Cta() {
  return (
    <section
      className="flex border border-solid bg-gray-50"
      style={{ borderRadius: "30px 30px 0px 0px" }}
    >
      <div className="flex justify-center items-center w-full  py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-5">
          <h2 className="text-base font-semibold text-pink-400 dark:text-pink-300 tracking-wide uppercase">
            Unlock Your Potential Today
          </h2>
          <div className="inline-flex items-end justify-center w-full text-center mx-auto">
            <img
              src="https://cdn.devdojo.com/tails/avatars/024.jpg"
              className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/012.jpg"
              className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/029.jpg"
              className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/005.jpg"
              className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/032.jpg"
              className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
            />
          </div>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Discover
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-blue-300 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth={12}
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                />
              </svg>
              <span className="relative">Your True Potential</span>
            </span>
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Take the leap and unleash your capabilities. Experience one week of
            unlimited access on us and witness the transformation.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 mt-8 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
