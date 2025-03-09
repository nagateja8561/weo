// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get current path

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center space-x-10">
          {/* Always show the logo in the navbar, wrap it in a Link to go home */}
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="WEO Logo"
              className="h-12 w-auto"
              style={{ maxWidth: '250px' }}
            />
          </Link>

          {/* Show "Home" text on all pages except home page */}
          {location.pathname !== '/' && (
            <Link to="/" className="font-bold text-lg hover:text-green-600">
              Home
            </Link>
          )}

          <nav className="flex space-x-8 text-lg text-gray-800">
            <Link to="/about-us" className="font-bold hover:text-green-600">About Us</Link>
            <Link to="/what-we-do" className="font-bold hover:text-green-600">What We Do</Link>
            <Link to="/get-involved" className="font-bold hover:text-green-600">Get Involved</Link>
          </nav>
        </div>

        {/* Donate button as a Link to '/donate' */}
        <Link to="/donate">
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-800">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
