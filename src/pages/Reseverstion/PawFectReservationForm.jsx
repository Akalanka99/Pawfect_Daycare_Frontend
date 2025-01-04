import React, { useState } from "react";
import BookingModal from "../Reseverstion/BookingModal";

const InputField = ({ label, ...props }) => (
  <div className="mb-4 flex justify-between items-center">
    <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
    <input className="w-2/3 p-2 border border-gray-300 rounded" {...props} />
  </div>
);

const PawFectReservationForm = () => {
  const [petCategory, setPetCategory] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleShowModal = () => {
    if (petCategory) {
      setShowBookingModal(true); // Show the unified modal
    } else {
      alert("Please select a pet category to see available slots.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-center font-sans font-bold text-2xl mb-4">
        PawFect Reservation
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Fill in your pet's details, and we'll make sure they have a paw-some
        stay!
      </p>
      <form>
        <InputField label="Owner's Name" type="text" required />
        <InputField label="E-mail Address" type="email" required />
        <InputField label="Home Address" type="text" required />
        <InputField label="Phone Number" type="tel" required />
        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Emergency Contact
          </label>
          <div className="w-2/3">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              required
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              (Provide name and contact number in case of emergency)
            </p>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">
            Pet Category
          </label>
          <select
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
            value={petCategory}
            onChange={(e) => setPetCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {petCategory === "dog" && (
          <>
            <InputField label="Dog's Name" type="text" required />
            <InputField label="Dog's Breed" type="text" required />
          </>
        )}

        {petCategory === "cat" && (
          <>
            <InputField label="Cat's Name" type="text" required />
            <InputField label="Cat's Breed" type="text" required />
          </>
        )}

        <InputField label="Age" type="number" />

        <button
          type="button"
          className="w-full bg-[#1B4A7B] text-white py-2 px-4 rounded hover:bg-[#58B5C6] transition duration-300"
          onClick={handleShowModal}
        >
          Available Slots
        </button>
      </form>

      {/* BookingModal */}
      {showBookingModal && (
        <BookingModal
          animalType={petCategory} // Pass the selected pet category
          onClose={() => setShowBookingModal(false)} // Handle modal close
        />
      )}
    </div>
  );
};

export default PawFectReservationForm;
