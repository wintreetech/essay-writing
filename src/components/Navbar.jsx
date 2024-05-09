import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div class="bg-gray-100 text-black py-2">
        <div class="container mx-auto text-center">
          <h1 class="text-lg font-semibold">
            Order an essay with CustomWritings
          </h1>
        </div>
      </div>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            {/* Brand logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-gray-800 font-bold text-lg">
                <img src={logo} />
              </Link>
            </div>
            {/* Desktop menu items */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link
                  to="/pricing"
                  className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out py-2 px-4 rounded-md hover:bg-gray-100"
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out py-2 px-4 rounded-md hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/orderguide"
                  className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out py-2 px-4 rounded-md hover:bg-gray-100"
                >
                  How to Order
                </Link>
                <Link
                  to="/services"
                  className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out py-2 px-4 rounded-md hover:bg-gray-100"
                >
                  Services
                </Link>
                <a
                  href="#"
                  class="transform rounded-md bg-indigo-600/95 px-3 py-2 font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  Order Now
                </a>
              </div>
            </div>
            {/* CTA button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 flex flex-col text-center gap-[20px] space-y-1 sm:px-3">
              <Link to="/pricing" className="text-gray-800 block py-2 px-4">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-800 block py-2 px-4">
                About
              </Link>
              <Link to="/orderguide" className="text-gray-800 block py-2 px-4">
                How to Order
              </Link>
              <Link to="/services" className="text-gray-800 block py-2 px-4">
                Services
              </Link>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
