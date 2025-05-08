import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import axios from "axios";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch booking history from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/bookings");
        setBookings(response.data); // Assuming the API returns an array of bookings
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchBookings();
  }, []);

  // Function to download invoice as PDF
  const downloadInvoice = (booking) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Booking Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Start Date: ${booking.startDate || "N/A"}`, 20, 40);
    doc.text(`End Date: ${booking.endDate || "N/A"}`, 20, 50);
    doc.text(`Pet Category: ${booking.petCategory || "N/A"}`, 20, 60);
    doc.text(`Pet Name: ${booking.petName || "N/A"}`, 20, 70);
    doc.text(`Cage Number: ${booking.cageNumber || "N/A"}`, 20, 80);
    doc.text(`Service Duration: ${booking.serviceDuration || "N/A"}`, 20, 90);
    doc.text(`Total Cost: $${booking.totalCost || 0} USD`, 20, 100);

    doc.save(`invoice_${booking.id}.pdf`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8 text-black">
        <h1 className="text-3xl font-bold text-center mb-6">Booking History</h1>

        {/* Booking Section */}
        <div className="space-y-8">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking.id} className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">
                  Booking ID: {booking.id}
                </h2>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <label className="font-medium">Start Date:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.startDate || "N/A"}
                  </p>

                  <label className="font-medium">End Date:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.endDate || "N/A"}
                  </p>

                  <label className="font-medium">Pet Category:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.petCategory || "N/A"}
                  </p>

                  <label className="font-medium">Pet Name:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.petName || "N/A"}
                  </p>

                  <label className="font-medium">Cage Number:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.cageNumber || "N/A"}
                  </p>

                  <label className="font-medium">Service Duration:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.serviceDuration || "N/A"}
                  </p>

                  <label className="font-medium">Total Cost:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    ${booking.totalCost || 0} USD
                  </p>

                  <label className="font-medium">Payment Status:</label>
                  <p className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
                    {booking.paymentStatus || "Pending"}
                  </p>
                </div>
                <button
                  onClick={() => downloadInvoice(booking)}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Download Invoice
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No bookings found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookingHistory;
