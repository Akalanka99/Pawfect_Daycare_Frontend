import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/context/Authprovider";
const API_URL=process.env.VITE_API_URL;

const ProfilePage = () => {
  const { user } = useContext(AuthContext); // Access user data from context
  const [profile, setProfile] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    if (user?.uid) {
      fetch(`${API_URL}/api/user/${user.uid}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setProfile({
              name: data.name,
              email: data.email,
              role: data.role,
            });
          }
        })
        .catch((error) => console.error("Error fetching user profile:", error));
    }
  }, [user?.uid]);

  const firstLetter = user?.email ? user.email.charAt(0).toUpperCase() : "?";
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">

      {/* Profile Section */}
      <main className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
        
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
              {user?.photoURL ? (
                <img
                  alt="User Profile"
                  src={user.photoURL}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <span>{firstLetter}</span>
              )}
          </div>

          {/* Profile Details */}
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{profile.name || "No Name"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">E-mail Address:</span>
              <span>{profile.email || "No email"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Role:</span>
              <span>{profile.role || "No role"}</span>
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
