import React, { useState } from "react";
import SingleDayDogModal from "./SingleDayDogModal";
import MultipleDayDogModal from "./MultipleDayDogModal";

const DogModal1 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSingleDayDogModal, setShowSingleDayDogModal] = useState(false);
  const [showMultipleDayDogModal, setShowMultipleDayDogModal] = useState(false);

  const handleNext = () => {
    if (selectedOption === "singleDay") {
      setShowSingleDayDogModal(true); // Show the single day modal when option is selected
    } else if (selectedOption === "multipleDay") {
      setShowMultipleDayDogModal(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-center text-xl font-bold mb-4">
          PawFect for Your Beloved Dog
        </h2>
        <p className="text-center mb-6">
          How long do you need daycare services for your dog?
        </p>

        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="daycareOption"
              value="singleDay"
              className="form-radio h-5 w-5 text-blue-600"
              checked={selectedOption === "singleDay"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Single Day</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="daycareOption"
              value="multipleDay"
              className="form-radio h-5 w-5 text-blue-600"
              checked={selectedOption === "multipleDay"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Multiple Day</span>
          </label>
        </div>

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded shadow hover:bg-blue-700 transition"
          disabled={!selectedOption} // Disable button if no option is selected
        >
          Next
        </button>
      </div>
      {/* Display the SingleDayDogModal */}
      {showSingleDayDogModal && (
        <SingleDayDogModal onClose={() => setShowSingleDayDogModal(false)} />
      )}
      {/* Display the MultipleDayDogModal */}
      {showMultipleDayDogModal && (
        <MultipleDayDogModal
          onClose={() => setShowMultipleDayDogModal(false)}
        />
      )}
    </div>
  );
};

export default DogModal1;
