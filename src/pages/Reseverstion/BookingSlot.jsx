import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const BookingSlot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [storedStartDate,setStoredStartDate]=useState(null);
  const [storedEndDate,setStoredEndDate]=useState(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: storedStartDate ? new Date(storedStartDate) : new Date(),
      endDate: storedEndDate ? new Date(storedEndDate) : new Date(),
      key: "selection",
    },
  ]);

  const [cages, setCages] = useState([]);
  const [selectedCages, setSelectedCages] = useState({});

  const fetchCageAvailability = async () => {

    const data = [
      { id: 1, morning: true, afternoon: true },
      { id: 2, morning: true, afternoon: true },
      { id: 3, morning: true, afternoon: true },
      { id: 4, morning: true, afternoon: true },
      { id: 5, morning: true, afternoon: true },
      { id: 6, morning: true, afternoon: true },
      { id: 7, morning: true, afternoon: true },
      { id: 8, morning: true, afternoon: true },
      { id: 9, morning: true, afternoon: true },
      { id: 10, morning: true, afternoon: true }
    ];
    for (let i = 1; i < 11; i++) {
      try {
        const response = await axios.get("http://localhost:8080/api/reservations/cage/"+i);
      if(response.status === 200){
        data.forEach(element => {
          if(element.id === response.data.cageId){
            element.morning = !response.data.morning;
            element.afternoon = !response.data.afternoon;
          }
          
        });
        console.log(response.data);

        
      }
        
      } catch (error) {
        console.log('');
        
      }
      
      
      
    }
    
    
    setCages(data);
  };

  useEffect(() => {
    fetchCageAvailability();
    const reservationData = JSON.parse(localStorage.getItem("reservationData")) || {};
  console.log("reservationData is ", reservationData);
  setStoredStartDate(reservationData.bookingDetails.startDate);
  setStoredEndDate(reservationData.bookingDetails.endDate);
  setDateRange([
    {
      startDate: new Date(reservationData.bookingDetails.startDate),
      endDate: new Date(reservationData.bookingDetails.endDate),
      key: "selection",
    },
  ]);
  console.log(storedStartDate);
  console.log(storedEndDate);
  }, [storedStartDate]);

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
    const isMultipleDay =
      dateRange[0].startDate.getTime() !== dateRange[0].endDate.getTime();
  
    const bookingData = Object.entries(selectedCages).map(([cageId, slots]) => ({
      cageId: parseInt(cageId, 10),
      startDate: dateRange[0].startDate.toISOString().split("T")[0],
      endDate: isMultipleDay
        ? dateRange[0].endDate.toISOString().split("T")[0]
        : dateRange[0].startDate.toISOString().split("T")[0],
      morning: slots.morning,
      afternoon: slots.afternoon,
    }));
  
    const existingData = JSON.parse(localStorage.getItem("reservationData")) || {};

    // Merge the new booking data with the existing data
  const mergedData = {
    ...existingData,
    bookingDetails: {
      ...existingData.bookingDetails, // Keep any existing booking details
      startDate: dateRange[0].startDate,
      endDate: dateRange[0].endDate,
    },
    cages: [
      ...(existingData.cages || []), // Retain any existing cages data
      ...bookingData, // Add the new cage booking data
    ],
  };

  // Store the merged data back to localStorage
  localStorage.setItem("reservationData", JSON.stringify(mergedData));

  // Navigate to the UpdatedReservationForm with the merged data
  navigate("/updated-reservation", { state: mergedData });
};
  
  return (
    <div className="flex flex-col items-center p-4 bg-blue-100 min-h-screen">
      {/* Calendar Section */}
      <div className=" flex flex-col items-center bg-white rounded-lg   shadow-lg p-6 mb-6 w-full max-w-xl">
        <DateRange
          editableDateInputs={false}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          minDate={new Date()}
        />
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
