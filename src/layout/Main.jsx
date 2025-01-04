import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../App.css";
import { AuthContext } from '../components/context/Authprovider';

const Main = () => {
  const {loading} =useContext(AuthContext);

  return (
    <div>
      {
        loading ? <p>Loading....</p> : <div>

      <Navbar />
      
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
      </div>
    }
    </div>
      
  );
};

export default Main;
