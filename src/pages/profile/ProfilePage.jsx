import React, { useContext } from "react";
import { AuthContext } from "../../components/context/Authprovider";

const ProfilePage = () => {
  const { user } = useContext(AuthContext); // Access user data from context

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">

      {/* Profile Section */}
      <main className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
        
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img
              src={user?.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Profile Details */}
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{user?.name || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">E-mail Address:</span>
              <span>{user?.email || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="font-semibold">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={user?.password || ""}
                readOnly
                className="border border-gray-300 rounded px-2 py-1 w-3/5 bg-white"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 w-full max-w-sm">
            <button className='bg-[#1B4A7B] px-4 py-2 text-white w-full rounded hover:bg-blue-700'>UPDATE</button>
            <button className='bg-[#1B4A7B] px-4 py-2 text-white w-full rounded hover:bg-blue-700'>BOOK NOW</button>
          </div>

          {/* Secondary Actions */}
          <div className="flex justify-between w-full max-w-sm text-sm text-gray-600">
            <button className="hover:underline">DELETE PROFILE</button>
            <button className="hover:underline">SIGN OUT</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
