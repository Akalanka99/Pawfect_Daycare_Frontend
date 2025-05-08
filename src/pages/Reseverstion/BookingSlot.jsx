import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookingSlot = () => {
  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [cages, setCages] = useState([]);
  const [selectedCages, setSelectedCages] = useState({});
  const [loading, setLoading] = useState(false);

  // Convert date to string format for API calls
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Fetch cage availability based on the selected date
  useEffect(() => {
    const fetchCageAvailability = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/cage-bookings/availability`,
          {
            params: {
              date: formatDate(dateRange[0].startDate),
            },
          }
        );
        if (response.status === 200 && Array.isArray(response.data)) {
          setCages(response.data);
        } else {
          setCages([]);
          console.warn("Invalid response format or no cages available.");
        }
      } catch (error) {
        console.error("Error fetching cage availability:", error);
        alert("Failed to fetch cage availability. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCageAvailability();
  }, [dateRange]);

  // Load reservation data from localStorage on initial load
  useEffect(() => {
    const reservationData =
      JSON.parse(localStorage.getItem("reservationData")) || {};

    if (reservationData.bookingDetails?.startDate) {
      const startDate = new Date(reservationData.bookingDetails.startDate);
      const endDate = reservationData.bookingDetails.endDate
        ? new Date(reservationData.bookingDetails.endDate)
        : new Date(reservationData.bookingDetails.startDate);

      setDateRange([
        {
          startDate,
          endDate,
          key: "selection",
        },
      ]);
    }
  }, []);

  // Handle slot selection for morning or afternoon
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

  // Handle booking submission
  const handleBooking = () => {
    // Check if any cage is selected
    if (Object.keys(selectedCages).length === 0) {
      alert("Please select at least one cage slot.");
      return;
    }

    const isMultipleDay =
      dateRange[0].startDate.getTime() !== dateRange[0].endDate.getTime();

    const bookingData = Object.entries(selectedCages).map(
      ([cageId, slots]) => ({
        cageId: parseInt(cageId, 10),
        morning: slots.morning,
        afternoon: slots.afternoon,
        fullDay: slots.morning && slots.afternoon,
      })
    );

    const selectedCageNumbers = bookingData.map((cage) => cage.cageId);

    const existingData =
      JSON.parse(localStorage.getItem("reservationData")) || {};

    // Merge the new booking data with the existing data
    const mergedData = {
      ...existingData,
      bookingDetails: {
        ...existingData.bookingDetails,
        startDate: formatDate(dateRange[0].startDate),
        endDate: formatDate(dateRange[0].endDate),
        singleDay: !isMultipleDay,
        multipleDay: isMultipleDay,
      },
      cages: bookingData,
      selectedCageNumbers,
    };

    // Store the merged data back to localStorage
    localStorage.setItem("reservationData", JSON.stringify(mergedData));

    // Navigate to the UpdatedReservationForm with the merged data
    navigate("/updated-reservation", { state: mergedData });
  };

  return (
    <div className="flex flex-col items-center p-4 bg-blue-100 min-h-screen">
      {/* Calendar Section */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Select Your Booking Dates</h2>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          minDate={new Date()}
        />
      </div>

      {/* Cage Availability Section */}
      <h2 className="text-2xl font-bold mb-4">
        Available Cages for {formatDate(dateRange[0].startDate)}
      </h2>
      {loading ? (
        <p>Loading cage availability...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-4xl">
          {cages.map((cage) => (
            <div
              key={cage.id}
              className="border rounded-lg shadow p-4 bg-white"
            >
              <h3 className="font-bold text-lg mb-2 text-center">
                Cage {cage.id}
              </h3>
              <div
                className={`py-2 text-center rounded-lg mb-2 cursor-pointer ${
                  !cage.morning
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : selectedCages[cage.id]?.morning
                    ? "bg-green-500 text-white"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() =>
                  cage.morning && handleSlotSelection(cage.id, "morning")
                }
              >
                {!cage.morning
                  ? "Morning (Not Available)"
                  : selectedCages[cage.id]?.morning
                  ? "Morning (Selected)"
                  : "Morning (Available)"}
              </div>
              <div
                className={`py-2 text-center rounded-lg cursor-pointer ${
                  !cage.afternoon
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : selectedCages[cage.id]?.afternoon
                    ? "bg-green-500 text-white"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() =>
                  cage.afternoon && handleSlotSelection(cage.id, "afternoon")
                }
              >
                {!cage.afternoon
                  ? "Afternoon (Not Available)"
                  : selectedCages[cage.id]?.afternoon
                  ? "Afternoon (Selected)"
                  : "Afternoon (Available)"}
              </div>
            </div>
          ))}
        </div>
      )}

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
