import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <Link to="/">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-white text-lg font-semibold">Your Logo</h1>
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="flex justify-between items-center gap-4">
        <div className="hidden lg:flex space-x-4">
          <Link to="/pricing" className="text-black">Pricing</Link>
          <Link to="/about" className="text-black">About</Link>
          <Link to="/orderguide" className="text-black">How to Order</Link>
          <Link to="/services" className="text-black">Services</Link> 
        </div>

        {/* CTA Button - Desktop Only */}
        <button className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded">
          Order Now
        </button>
      </div>

       {/* Mobile Menu Toggle */}
      <button
        className="text-black block lg:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-800 p-4">
          <Link to="/pricing" className="text-white">Pricing</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/orderguide" className="text-white">How to Order</Link>
          <Link to="/services" className="text-white">Services</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
