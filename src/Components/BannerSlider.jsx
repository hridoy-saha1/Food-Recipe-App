import React from "react";
import banner from "../assets/photo/banner.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="relative text-white "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="md:w-1/2  space-y-6">
          <p className="text-lg font-medium tracking-wide">
            Best Choice For Restaurant, Cafe and More..
          </p>
          <h1 className="text-4xl md:text-6xl  font-extrabold leading-tight">
            Let’s Get Dirty!
          </h1>
         
          <p className="text-gray-200 mb-11">
            Our friendly team experts have had the experience and knowledge to
            grow and building our collection of featured and all available
            menus.
          </p>
         <Link to="/availableFood">
          <button className="border border-red-700 text-red-700 px-6 py-3 rounded-full font-semibold bg-white hover:bg-red-700 hover:text-white transition">
            Explore Now
          </button>
         </Link>

        </div>

        {/* Right Image */}

      </div>
    </div>
  );
};

export default Banner;
