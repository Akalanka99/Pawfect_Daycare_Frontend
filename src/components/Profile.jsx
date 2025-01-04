import React, { useContext } from "react";
import { AuthContext } from './context/Authprovider';


function Profile() {
  const { user, logOut } = useContext(AuthContext); // Get user from context

  const handleLogout = async () => {
    try {
        await logOut();
        console.log("User logged out successfully");
        localStorage.removeItem('auth');
    } catch (error) {
        console.error("Logout failed:", error.message);
    }
};

  // Extract the first letter of the email as a fallback avatar
  const firstLetter = user?.email ? user.email.charAt(0).toUpperCase() : "?";

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Profile button */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
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
          </label>
        </div>

        {/* Sidebar Content */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
