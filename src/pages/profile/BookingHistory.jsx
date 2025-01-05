import React from "react";

const BookingHistory = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8 text-black">
        <h1 className="text-3xl font-bold text-center mb-6">Booking History</h1>

        {/* Booking Section */}
        <div className="space-y-8">
          {[1, 2, 3].map((booking) => (
            <div key={booking}>
              <h2 className="text-xl font-semibold mb-4">Booking {booking}</h2>
              <div className="grid grid-cols-2 gap-4 items-center">
                <label className="font-medium">Date:</label>
                {/*Supposed to be displays*/}
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 bg-white"
                />

                <label className="font-medium">Pet Category:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 bg-white"
                />

                <label className="font-medium">Name:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 bg-white"
                />

                <label className="font-medium">Cage Number:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 bg-white"
                />

                <label className="font-medium">Payment:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookingHistory;