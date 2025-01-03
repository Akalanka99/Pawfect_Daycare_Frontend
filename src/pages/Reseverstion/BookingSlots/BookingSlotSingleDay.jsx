import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSlotSingleDay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time } = location.state || {};

  const [selectedDate, setSelectedDate] = useState(
    date || new Date().toISOString().substring(0, 10)
  );
  const [currentMonth, setCurrentMonth] = useState(
    new Date(selectedDate).getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    new Date(selectedDate).getFullYear()
  );
  const [cages, setCages] = useState([]);
  const [selectedCages, setSelectedCages] = useState({});

  const fetchCageAvailability = async () => {
    // Simulating data for demonstration purposes
    const data = [
      { id: 1, morning: true, afternoon: true },
      { id: 2, morning: false, afternoon: true },
      { id: 3, morning: true, afternoon: false },
      { id: 4, morning: true, afternoon: true },
      { id: 5, morning: false, afternoon: false },
      { id: 6, morning: false, afternoon: true },
      { id: 7, morning: true, afternoon: false },
      { id: 8, morning: false, afternoon: true },
      { id: 9, morning: true, afternoon: false },
      { id: 10, morning: true, afternoon: true },
    ];
    setCages(data);
  };

  useEffect(() => {
    fetchCageAvailability();
  }, [selectedDate]);

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

  const handleBooking = () => {
    const bookingData = Object.entries(selectedCages).map(
      ([cageId, slots]) => ({
        cageId: parseInt(cageId, 10),
        date: selectedDate,
        morning: slots.morning,
        afternoon: slots.afternoon,
      })
    );

    console.log("Booking Data:", bookingData);
    alert("Booking confirmed. Data logged to the console.");
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prev) => prev - 1);
      } else {
        setCurrentMonth((prev) => prev - 1);
      }
    } else if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prev) => prev + 1);
      } else {
        setCurrentMonth((prev) => prev + 1);
      }
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const selectedMonthYear = new Date(currentYear, currentMonth).toLocaleString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

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
                  selectedDate === fullDate
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedDate(fullDate)}
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

export default BookingSlotSingleDay;
