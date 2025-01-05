import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


const BookingSlot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservationData = JSON.parse(localStorage.getItem("reservationData"));
  const { startDate, endDate, date } = location.state || {};

  const [isMultipleDay, setIsMultipleDay] = useState(!!startDate && !!endDate);
  const [selectedStartDate, setSelectedStartDate] = useState(
    startDate || date || new Date().toISOString().substring(0, 10)
  );
  const [selectedEndDate, setSelectedEndDate] = useState(
    endDate || selectedStartDate
  );
  const [cages, setCages] = useState([]);
  const [selectedCages, setSelectedCages] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const fetchCageAvailability = async () => {
    const data = [
      { id: 1, morning: true, afternoon: true },
      { id: 2, morning: false, afternoon: true },
      { id: 3, morning: true, afternoon: false },
      { id: 4, morning: true, afternoon: true },
      { id: 5, morning: false, afternoon: false },
    ];
    setCages(data);
  };

  useEffect(() => {
    fetchCageAvailability();
  }, [selectedStartDate, selectedEndDate]);

  const handleSlotSelection = (cageId, slot) => {
    setSelectedCages((prev) => {
      const newSelection = { ...prev };
      if (!newSelection[cageId]) {
        newSelection[cageId] = { morning: false, afternoon: false };
      }
      newSelection[cageId][slot] = !newSelection[cageId][slot];
      return newSelection;
    });
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (currentMonth === 0) {
        setCurrentYear((prev) => prev - 1);
      }
    } else if (direction === "next") {
      setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
      if (currentMonth === 11) {
        setCurrentYear((prev) => prev + 1);
      }
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const isDateInRange = (date) => {
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    const current = new Date(date);
    return current >= start && current <= end;
  };

  const selectedMonthYear = new Date(currentYear, currentMonth).toLocaleString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

  const handleBooking = async () => {
    const bookingData = Object.entries(selectedCages).map(
      ([cageId, slots]) => ({
        cageId: parseInt(cageId, 10),
        startDate: selectedStartDate,
        endDate: isMultipleDay ? selectedEndDate : selectedStartDate,
        morning: slots.morning,
        afternoon: slots.afternoon,
      })
    );

    try {
    
      console.log("reservationData:", reservationData);  
      const response = await axios.post("http://localhost:8080/api/reservations", reservationData, {headers: {
        "Content-Type": "application/json",
      }});
      alert(response.data);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-blue-100 min-h-screen">
      {/* Calendar Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => handleMonthChange("prev")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <h2 className="text-xl font-bold text-center">{selectedMonthYear}</h2>
          <button
            onClick={() => handleMonthChange("next")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
            (day, index) => (
              <div key={index} className="font-semibold text-gray-600">
                {day}
              </div>
            )
          )}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = String(i + 1).padStart(2, "0");
            const fullDate = `${currentYear}-${String(
              currentMonth + 1
            ).padStart(2, "0")}-${day}`;
            return (
              <button
                key={i}
                className={`py-2 rounded-lg ${
                  isDateInRange(fullDate)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  setIsMultipleDay
                    ? setSelectedStartDate(fullDate)
                    : setSelectedStartDate(fullDate)
                }
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cage Availability Section */}
      <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-4xl">
        {cages.map((cage) => {
          const isMorningBooked =
            !cage.morning && selectedCages[cage.id]?.morning;
          const isAfternoonBooked =
            !cage.afternoon && selectedCages[cage.id]?.afternoon;
          const isFullDayBooked =
            selectedCages[cage.id]?.morning &&
            selectedCages[cage.id]?.afternoon;

          return (
            <div
              key={cage.id}
              className="border rounded-lg shadow p-4 bg-white"
            >
              <h3 className="font-bold text-lg mb-2 text-center">
                Cage {cage.id}
              </h3>
              <div
                className={`py-2 text-center rounded-lg mb-2 cursor-pointer ${
                  isFullDayBooked
                    ? "bg-[#075FD1] text-white cursor-not-allowed"
                    : selectedCages[cage.id]?.morning
                    ? "bg-[#319F43] text-white"
                    : !cage.morning
                    ? "bg-[#319F43] text-white cursor-not-allowed"
                    : "bg-white"
                }`}
                onClick={() =>
                  !isMorningBooked && handleSlotSelection(cage.id, "morning")
                }
              >
                Morning
              </div>
              <div
                className={`py-2 text-center rounded-lg cursor-pointer ${
                  isFullDayBooked
                    ? "bg-[#075FD1] text-white cursor-not-allowed"
                    : selectedCages[cage.id]?.afternoon
                    ? "bg-[#F8BD00] text-white"
                    : !cage.afternoon
                    ? "bg-[#F8BD00] text-white cursor-not-allowed"
                    : "bg-white"
                }`}
                onClick={() =>
                  !isAfternoonBooked &&
                  handleSlotSelection(cage.id, "afternoon")
                }
              >
                Afternoon
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Button */}
      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Book the Slot
      </button>
    </div>
  );
};

export default BookingSlot;
