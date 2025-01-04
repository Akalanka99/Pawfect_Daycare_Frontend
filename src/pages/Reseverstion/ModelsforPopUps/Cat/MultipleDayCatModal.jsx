import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MultipleDayCatModal = ({ onClose, onSave }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (startDate && endDate) {
      navigate("/multiple-schedule", {
        state: { startDate, endDate },
      });
    } else {
      alert("Please select both start and end dates.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          PawFect For Your Adorable Cat
        </h2>
        <p className="text-center mb-6">Which dates do you want?</p>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-semibold">From:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-semibold">To:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={onClose}
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
    </div>
  );
};

export default MultipleDayCatModal;
