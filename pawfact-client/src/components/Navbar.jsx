import React from 'react';
import logo from '/logo.jpg';

const Navbar = () => {
  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/petshop">Pet Shop</a></li>
      <li><a href="/petshop">Services</a></li>
      <li><a href="/booknow">Book Now</a></li>
    </>
  );

  return (
    <header className='bg-[#F9D9A5] shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-1'>
        {/* Logo */}
        <img src={logo} alt="Logo" className='w-20 h-20 rounded-full' />

        {/* Navigation */}
        <nav className="flex flex-grow justify-end">
          <ul className="flex font-semibold font-sans text-lg space-x-20">
            {navItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
