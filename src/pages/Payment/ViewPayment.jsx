import React from "react";

const ViewPayment = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      
      {/* Main Content */}
      <main className="w-full max-w-4xl bg-white shadow-md mt-8 rounded-lg p-8 text-black">
        
        <h1 className="text-3xl font-bold text-center mb-8">Pawfect Payment Details</h1>
        
        <h2 className="text-xl font-semibold mb-6">We’ll make sure they have a paw-some time!</h2>

        <form className="space-y-4">
          {/* Owner Information */}
          <div>
            <label className="block font-medium mb-2">Owners Name:</label>
            <input type="text" className="w-full border rounded-md p-2 bg-white" placeholder="Enter your name" />
          </div>

          <div>
            <label className="block font-medium mb-2">E-mail Address:</label>
            <input type="email" className="w-full border rounded-md p-2 bg-white" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block font-medium mb-2">Home Address:</label>
            <input type="text" className="w-full border rounded-md p-2 bg-white" placeholder="Enter your address" />
          </div>

          <div>
            <label className="block font-medium mb-2">Phone Number:</label>
            <input type="text" className="w-full border rounded-md p-2 bg-white" placeholder="Enter your phone number" />
          </div>

          <div>
            <label className="block font-medium mb-2">Emergency Contact:</label>
            <input type="text" className="w-full border rounded-md p-2 bg-white" placeholder="Enter an emergency contact number" />
          </div>

          {/* Pet Information */}
          <div>
            <label className="block font-medium mb-2">Pet Category:</label>
            <select className="w-full border rounded-md p-2 bg-white ">
              <option>Dog</option>
              <option>Cat</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">Pet Breed:</label>
            <input type="text" className="w-full border rounded-md p-2 bg-white" placeholder="Enter breed" />
          </div>

          <div>
            <label className="block font-medium mb-2">Age:</label>
            <input type="number" className="w-full border rounded-md p-2 bg-white" placeholder="Enter age" />
          </div>

          {/* Reservation Details */}
          <div>
            <label className="block font-medium mb-2">Reservation Date:</label>
            <input type="date" className="w-full border rounded-md p-2 bg-white" />
          </div>

          <div>
            <label className="block font-medium mb-2">Service Duration:</label>
            <select className="w-full border rounded-md p-2 bg-white">
              <option>Full Time (8 AM - 6 PM)</option>
              <option>Half Time</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">Select Grooming Services:</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Bath
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Nail Trim
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Health Check-Up
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Vaccination Records:</label>
            <input type="file" className="w-full border rounded-md p-2" />
          </div>

          <div>
            <label className="block font-medium mb-2">Additional Comments:</label>
            <textarea className="w-full border rounded-md p-2 bg-white" rows="4" placeholder="Enter any special instructions or remarks"></textarea>
          </div>

          {/* Total Payment */}
          <div className="text-right">
            <p className="text-lg font-semibold">Total Payment: <span className="text-blue-600">LKR 3000</span></p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 PAWFECT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ViewPayment;