import React from 'react';
import bannerImg from "/public/banner.jpeg";

const Banner = () => {
  return (
    <div
      className="section-container bg-cover bg-center "
      style={{
        backgroundImage: `url(${bannerImg})`, // Set the image as the background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8 ">
        {/* Images */}
        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4"></div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4 py-24 ">
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed  ">
          Providing a Nurturing Environment Where Your Pets are Pampered, Loved, and Cared for as Our Own, Ensuring They Thrive, Play, and Feel Right at Home Every Days
          </h2>
          <button  className="btn bg-[#1B4A7B] px-8 py-3 font-semibold text-white rounded-full">
          <a href="/booknow">
            Book Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
