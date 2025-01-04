


import React from "react";

const PetInfo = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-100 p-4">
        <ul className="space-y-4 font-semibold text-gray-700">
          <li className="hover:text-black cursor-pointer">Profile</li>
          <li className="hover:text-black cursor-pointer">Pet Information</li>
        </ul>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-8 bg-white text-black">
        <h1 className="text-3xl font-bold text-center mb-8">Pet Information</h1>

        {/* Pet Information Form */}
        <form className="space-y-8">
          {/* Repeating Section for Each Pet */}
          {[1, 2, 3].map((pet, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold">Pet 0{pet}</h2>

              {/* Pet Details */}
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex items-center">
                  <label className="w-1/3 font-medium">Name:</label>
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white"
                  />
                </div>

                {/* Category */}
                <div className="flex items-center">
                  <label className="w-1/3 font-medium">Pet Category:</label>
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white"
                  />
                </div>

                {/* Breed */}
                <div className="flex items-center">
                  <label className="w-1/3 font-medium">Breed:</label>
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white"
                  />
                </div>

                {/* Age */}
                <div className="flex items-center">
                  <label className="w-1/3 font-medium">Age:</label>
                  <input
                    type="number"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white"
                  />
                </div>

                {/* Vaccination Records */}
                <div className="flex items-center">
                  <label className="w-1/3 font-medium">Vaccination Records:</label>
                  <input
                    type="file"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 bg-white"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              UPDATE
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              SAVE
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PetInfo;