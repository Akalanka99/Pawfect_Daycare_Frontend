import React, { useEffect, useState, useContext } from "react";
import logo from "/logo.jpg";
import Modal from "./Modal";
import { User } from "react-feather";
import Profile from "../components/Profile";
import { AuthContext } from './context/Authprovider';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext); // Get the logged-in user from context

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0 ? false : true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/" className="hover:text-gray-300">Home</a>
      </li>
      <li>
        <a href="shop" className="hover:text-gray-300">Shop</a>
      </li>
      <li>
        <a href="#" className="hover:text-gray-300">Service</a>
      </li>
      <li>
        <a href="aboutus" className="hover:text-gray-300">About Us</a>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-[#1B4A7B]" : ""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0114 0z" />
            </svg>
          </button> */}

          {/* Login/Profile Button */}
          {user ? (
            <Profile user={user} />
          ) : (
            <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn flex items-center gap-2 rounded-full px-6 bg-[#58B5C6]">
              SignIn
            </button>
          )}

          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
