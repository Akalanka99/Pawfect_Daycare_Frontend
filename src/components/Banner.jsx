import React from 'react';

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#52b5c7] from-0% to-[#6d849c] to-100%">
      {/* Background color */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        
        {/* Image */}
        <div className="md:w-3/4 flex justify-center">
          <img 
            src="/Banner.png" 
            alt="Banner" 
            className="w-full h-auto max-w-none object-contain"
          />
        </div> 
        
        {/* Text */}
        <div className="md:w-3/4 space-y-7 px-4">
          <p className="text-xl text-white leading-relaxed">
            Providing a nurturing environment where your pets are pampered, loved,
            and cared for as our own, ensuring they thrive, play, and feel right
            at home every day.
          </p>
          <button 
            className="btn bg-[#1B4A7B] px-8 py-3 font-semibold text-white rounded-full hover:bg-[#163c66] transition">
            <a href="/bookingnow">Booking Now</a>
          </button>
        </div> 
      </div>
    </div>
  );
};

export default Banner;
