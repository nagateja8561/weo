import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Hamburger and close icons

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile navigation
  const location = useLocation(); // Get current path

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src="/weo/images/logo.png"
              alt="WEO Logo"
              className="h-16 w-auto"
              style={{ maxWidth: '500px' }}
            />
          </Link>

          {/* Navigation Links (Desktop only) */}
          <nav className="hidden md:flex space-x-8 text-lg text-gray-800">
            {/* Show "Home" link if not on the home page */}
            {location.pathname !== '/' && (
              <Link to="/" className="font-bold text-lg hover:text-green-600">
                Home
              </Link>
            )}
            <Link to="/about-us" className="font-bold hover:text-green-600">
              About Us
            </Link>
            <Link to="/what-we-do" className="font-bold hover:text-green-600">
              What We Do
            </Link>
            <Link to="/get-involved" className="font-bold hover:text-green-600">
              Get Involved
            </Link>
          </nav>
        </div>

        {/* Donate Button (Desktop only) */}
        <div className="hidden md:block">
          <Link to="/donate">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-800">
              Donate
            </button>
          </Link>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <div className="md:hidden flex items-center" onClick={toggleNav}>
          <FaBars size={30} className="text-gray-800" />
        </div>
      </div>

    {/* Mobile Navigation (Toggled on click of hamburger icon) */}
    <div
      className={`${
        isNavOpen ? 'block' : 'hidden'
      } md:hidden flex flex-col items-end bg-white shadow-md absolute w-full top-16 left-0 py-4 transition-all duration-300 ease-in-out z-10`}
    >
      <Link to="/" className="font-bold text-lg hover:text-green-600 mb-4" onClick={toggleNav}>
        Home
      </Link>
      <Link to="/about-us" className="font-bold text-lg hover:text-green-600 mb-4" onClick={toggleNav}>
        About Us
      </Link>
      <Link to="/what-we-do" className="font-bold text-lg hover:text-green-600 mb-4" onClick={toggleNav}>
        What We Do
      </Link>
      <Link to="/get-involved" className="font-bold text-lg hover:text-green-600 mb-4" onClick={toggleNav}>
        Get Involved
      </Link>
      <Link to="/donate">
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-800" onClick={toggleNav}>
          Donate
        </button>
      </Link>
    </div>
    </header>
  );
};

export default Header;
