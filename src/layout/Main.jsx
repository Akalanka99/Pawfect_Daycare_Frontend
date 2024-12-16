import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../App.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top equal to the Navbar height */}
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
