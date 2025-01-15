import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ animalType, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    time: "",
    isHalfDay: false,
    startDate: "",
    endDate: "",
  });
  const [step, setStep] = useState(1); // Step 1: Choose duration, Step 2: Configure schedule
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1) {
      if (selectedOption === "singleDay") setStep(2);
      else if (selectedOption === "multipleDay") setStep(3);
    } else if (step === 2) {
      if (
        bookingDetails.startDate &&
        (bookingDetails.time || !bookingDetails.isHalfDay)
      ) {
        const existingData = JSON.parse(
          localStorage.getItem("reservationData")
        );
        const updatedData = {
          ...existingData,
          bookingDetails: { ...bookingDetails, multipleDay: false, singleDay: true },
        };
        localStorage.setItem("reservationData", JSON.stringify(updatedData));
        navigate("/booking-slot", { state: updatedData });
      } else {
        alert("Please select a date and time.");
      }
    } else if (step === 3) {
      if (bookingDetails.startDate && bookingDetails.endDate) {
        const existingData = JSON.parse(
          localStorage.getItem("reservationData")
        );
        const updatedData = {
          ...existingData,
          bookingDetails: { ...bookingDetails, multipleDay: true },
        };
        localStorage.setItem("reservationData", JSON.stringify(updatedData));
        navigate("/booking-slot", { state: updatedData });
      } else {
        alert("Please select valid start and end dates.");
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg p-6 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &#x2715;
        </button>
        {/* Header */}
        <h2 className="text-xl font-bold text-center mb-4">
          PawFect for Your Beloved {animalType === "dog" ? "Dog" : "Cat"}
        </h2>

        {/* Step 1: Choose Duration */}
        {step === 1 && (
          <>
            <p className="text-center mb-6">
              How long do you need daycare services for your {animalType}?
            </p>
            <div className="space-y-4 mb-6">
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
                <span>Multiple Days</span>
              </label>
            </div>
          </>
        )}

        {/* Step 2: Single Day Configuration */}
        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-600">
                Choose the date
              </label>
              <input
                type="date"
                value={bookingDetails.startDate}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    startDate: e.target.value,
                    endDate: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-600">
                Time Preferences
              </label>
              <div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="fullDay"
                    name="timePreference"
                    value="Full Day"
                    checked={!bookingDetails.isHalfDay}
                    onChange={() =>
                      setBookingDetails({
                        ...bookingDetails,
                        isHalfDay: false,
                        time: "Full Day",
                      })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="fullDay">
                    Full Day (8:00 a.m. - 6:00 p.m.)
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="halfDay"
                    name="timePreference"
                    value="Half Day"
                    checked={bookingDetails.isHalfDay}
                    onChange={() =>
                      setBookingDetails({
                        ...bookingDetails,
                        isHalfDay: true,
                        time: "",
                      })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="halfDay">Half Day</label>
                </div>
                {bookingDetails.isHalfDay && (
                  <div className="pl-6">
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="morning"
                        name="halfDayTime"
                        value="Morning"
                        checked={bookingDetails.time === "Morning"}
                        onChange={() =>
                          setBookingDetails({
                            ...bookingDetails,
                            time: "Morning",
                          })
                        }
                        className="mr-2"
                      />
                      <label htmlFor="morning">
                        Morning (8:00 a.m. - 12:00 p.m.)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="afternoon"
                        name="halfDayTime"
                        value="Afternoon"
                        checked={bookingDetails.time === "Afternoon"}
                        onChange={() =>
                          setBookingDetails({
                            ...bookingDetails,
                            time: "Afternoon",
                          })
                        }
                        className="mr-2"
                      />
                      <label htmlFor="afternoon">
                        Afternoon (1:00 p.m. - 6:00 p.m.)
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Step 3: Multiple Days Configuration */}
        {step === 3 && (
          <>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-semibold text-gray-600">From:</label>
              <input
                type="date"
                value={bookingDetails.startDate}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    startDate: e.target.value,
                  })
                }
                className="p-2 border rounded-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-semibold text-gray-600">To:</label>
              <input
                type="date"
                value={bookingDetails.endDate}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    endDate: e.target.value,
                  })
                }
                className="p-2 border rounded-lg"
              />
            </div>
          </>
        )}

        {/* Footer Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
