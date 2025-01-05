import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Authprovider';

const Banner = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const handleBookingClick = () => {
    if (user) {
      navigate('/bookingnow'); 
    } else {
      alert("Please sign in before booking!"); // Show an alert message
      document.getElementById("my_modal_5").showModal(); // Show modal
    }
  };

  return (
    <div className="section-container bg-gradient-to-r from-[#52b5c7] from-0% to-[#6d849c] to-100%">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-3/4 flex justify-center">
          <img src="/Banner.png" alt="Banner" className="w-full h-auto max-w-none object-contain" />
        </div>
        <div className="md:w-3/4 space-y-7 px-4">
          <p className="text-xl text-white leading-relaxed">
            Providing a nurturing environment where your pets are pampered, loved,
            and cared for as our own, ensuring they thrive, play, and feel right
            at home every day.
          </p>
          <button 
            onClick={handleBookingClick} 
            className="btn bg-[#1B4A7B] px-8 py-3 font-semibold text-white rounded-full hover:bg-[#163c66] transition">
            Booking Now
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sign In Required</h3>
          <p className="py-4">Please Sign In before booking.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      
    </div>
  );
};

export default Banner;
