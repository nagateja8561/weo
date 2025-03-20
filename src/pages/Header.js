import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false); // Track About Us dropdown
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false); // Track Get Involved dropdown
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleAboutUs = () => {
    // Close Get Involved dropdown if it's open
    if (isGetInvolvedOpen) setIsGetInvolvedOpen(false);
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const toggleGetInvolved = () => {
    // Close About Us dropdown if it's open
    if (isAboutUsOpen) setIsAboutUsOpen(false);
    setIsGetInvolvedOpen(!isGetInvolvedOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src="/weo/images/logo.png"
              alt="WEO Logo"
              className="h-14 w-auto"
              style={{ maxWidth: "500px" }}
            />
          </Link>

          <nav className="hidden md:flex space-x-8 text-lg text-gray-800">
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="font-medium text-lg hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
              >
                Home
              </Link>
            )}

            {/* About Us Section with Vertical Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutUs}
                className="flex items-center space-x-2 font-medium text-lg hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
              >
                <span>About Us</span>
                <FaChevronDown
                  size={16} // smaller size
                  className={`transition-transform duration-300 ${
                    isAboutUsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutUsOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col space-y-4 py-2 z-20">
                  <Link
                    to="/about-us"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    What We Do
                  </Link>
                  <Link
                    to="/what-we-have-done"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    What We Have Done
                  </Link>
                  <Link
                    to="/team"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Section with Dropdown Arrow */}
            <div className="relative">
              <button
                onClick={toggleGetInvolved}
                className="flex items-center space-x-2 font-medium text-lg hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
              >
                <span>Get Involved</span>
                <FaChevronDown
                  size={16} // smaller size
                  className={`transition-transform duration-300 ${
                    isGetInvolvedOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isGetInvolvedOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col space-y-4 py-2 z-20">
                  <Link
                    to="/get-involved"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    Get Involved
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-6 py-2 whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="hidden md:block">
          <Link to="/donate">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-green-700 transition-all duration-300">
              Donate
            </button>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div
          className="md:hidden flex items-center cursor-pointer relative"
          onClick={toggleNav}
        >
          <FaBars
            size={20}
            className={`text-gray-800 transition-opacity duration-700 ease-in-out ${
              isNavOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <FaTimes
            size={20}
            className={`text-gray-800 transition-opacity duration-700 ease-in-out absolute ${
              isNavOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 bg-white bg-opacity-100 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out z-50`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={toggleNav}
        >
          <FaTimes size={25} className="text-gray-800" />
        </div>

        <Link
          to="/"
          className="font-medium text-2xl text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
          onClick={toggleNav}
        >
          Home
        </Link>
        <div className="relative">
          <button
            onClick={toggleAboutUs}
            className="flex items-center justify-center space-x-2 font-medium text-2xl text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
          >
            <span>About Us</span>
            <FaChevronDown
              size={16} // smaller size
              className={`transition-transform duration-300 ${
                isAboutUsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isAboutUsOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-full flex flex-col space-y-4 py-2 z-10">
              <Link
                to="/about-us"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                About Us
              </Link>
              <Link
                to="/what-we-do"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                What We Do
              </Link>
              <Link
                to="/what-we-have-done"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                What We Done
              </Link>
              <Link
                to="/team"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                Our Team
              </Link>
            </div>
          )}
        </div>

        {/* Get Involved Section with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleGetInvolved}
            className="flex items-center justify-center space-x-2 font-medium text-2xl text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
          >
            <span>Get Involved</span>
            <FaChevronDown
              size={16} // smaller size
              className={`transition-transform duration-300 ${
                isGetInvolvedOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isGetInvolvedOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-full flex flex-col space-y-4 py-2 z-10">
              <Link
                to="/get-involved"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                Get Involved
              </Link>
              <Link
                to="/contact-us"
                className="block px-6 py-3 text-lg text-gray-800 hover:text-primary hover:bg-accent hover:shadow-lg hover:rounded-full transition-all duration-300 whitespace-nowrap"
                onClick={toggleNav}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>

        {/* Donate Button for Mobile */}
        <Link to="/donate">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-2xl font-medium hover:bg-green-700 transition-all duration-300">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
