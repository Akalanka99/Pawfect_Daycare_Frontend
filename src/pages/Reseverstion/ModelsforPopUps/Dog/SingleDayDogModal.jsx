import React, { useState } from "react";

const SingleDayDogModal = ({ onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isHalfDay, setIsHalfDay] = useState(false);

  const handleSave = () => {
    if (selectedDate && (selectedTime || !isHalfDay)) {
      onSave({ date: selectedDate, time: selectedTime });
      onClose();
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          PawFect For Your Beloved Dog
        </h2>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-600">
            Choose the date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
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
                checked={!isHalfDay}
                onChange={() => {
                  setIsHalfDay(false);
                  setSelectedTime("Full Day");
                }}
                className="mr-2"
              />
              <label htmlFor="fullDay">Full Day (8:00 a.m. - 6:00 p.m.)</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="halfDay"
                name="timePreference"
                value="Half Day"
                checked={isHalfDay}
                onChange={() => {
                  setIsHalfDay(true);
                  setSelectedTime("");
                }}
                className="mr-2"
              />
              <label htmlFor="halfDay">Half Day</label>
            </div>
            {isHalfDay && (
              <div className="pl-6">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="morning"
                    name="halfDayTime"
                    value="Morning"
                    checked={selectedTime === "Morning"}
                    onChange={() => setSelectedTime("Morning")}
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
                    checked={selectedTime === "Afternoon"}
                    onChange={() => setSelectedTime("Afternoon")}
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
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDayDogModal;
