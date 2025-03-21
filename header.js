import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (menu) => {
    if (menu === "about") {
      setIsGetInvolvedOpen(false);
      setIsAboutUsOpen(!isAboutUsOpen);
    } else {
      setIsAboutUsOpen(false);
      setIsGetInvolvedOpen(!isGetInvolvedOpen);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="WEO Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 text-[16px]">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="font-medium hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300 px-5 py-2"
            >
              Home
            </Link>
          )}

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center space-x-2 font-medium hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300 px-5 py-2"
            >
              <span>About Us</span>
              <FaChevronDown size={14} className={`transition-transform ${isAboutUsOpen ? "rotate-180" : ""}`} />
            </button>
            {isAboutUsOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48 flex flex-col space-y-2 py-2 z-20">
                {["About Us", "What We Do", "What We Done", "Our Team"].map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-800 text-[15px] hover:bg-gray-100 px-4 py-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Get Involved Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("involve")}
              className="flex items-center space-x-2 font-medium hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-300 px-5 py-2"
            >
              <span>Get Involved</span>
              <FaChevronDown size={14} className={`transition-transform ${isGetInvolvedOpen ? "rotate-180" : ""}`} />
            </button>
            {isGetInvolvedOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48 flex flex-col space-y-2 py-2 z-20">
                {["Get Involved", "Contact Us"].map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-800 text-[15px] hover:bg-gray-100 px-4 py-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/donate">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md text-[15px] font-medium hover:bg-blue-700 transition-all duration-300 shadow-md">
              Donate
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center cursor-pointer relative" onClick={toggleNav}>
          {isNavOpen ? <FaTimes size={22} className="text-gray-800" /> : <FaBars size={22} className="text-gray-800" />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-500 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center space-y-6 z-50`}
      >
        <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleNav}>
          <FaTimes size={24} className="text-gray-800" />
        </div>

        {["Home", "About Us", "What We Do", "What We Done", "Our Team", "Get Involved", "Contact Us"].map(
          (item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 text-[18px] font-medium hover:text-primary hover:bg-gray-100 rounded-md px-6 py-3 transition-all duration-300"
              onClick={toggleNav}
            >
              {item}
            </Link>
          )
        )}

        {/* Donate Button (Mobile) */}
        <Link to="/donate">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md text-[16px] font-medium hover:bg-blue-700 transition-all duration-300 shadow-md">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
