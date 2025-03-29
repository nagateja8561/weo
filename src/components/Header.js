import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleAboutUs = () => {
    if (isGetInvolvedOpen) setIsGetInvolvedOpen(false);
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const toggleGetInvolved = () => {
    if (isAboutUsOpen) setIsAboutUsOpen(false);
    setIsGetInvolvedOpen(!isGetInvolvedOpen);
  };

  // Close dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsAboutUsOpen(false);
      setIsGetInvolvedOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-sans"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="WEO Logo"
              className="h-14 w-auto"
              style={{ maxWidth: "500px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-[15px] text-gray-800">
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="font-bold text-[15px] hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
              >
                Home
              </Link>
            )}

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutUs}
                className="flex items-center space-x-2 font-bold text-[15px] hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
              >
                <span>About Us</span>
                <FaChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isAboutUsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutUsOpen && (
                <motion.div
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col space-y-4 py-2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Link
                    to="/about-us"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    What We Do
                  </Link>
                  <Link
                    to="/what-we-have-done"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    What We Have Done
                  </Link>
                  <Link
                    to="/team"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    Our Team
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            <div className="relative">
              <button
                onClick={toggleGetInvolved}
                className="flex items-center space-x-2 font-bold text-[15px] hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
              >
                <span>Get Involved</span>
                <FaChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isGetInvolvedOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isGetInvolvedOpen && (
                <motion.div
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col space-y-4 py-2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Link
                    to="/get-involved"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    Get Involved
                  </Link>
                  <Link
                    to="/donate"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    Donate
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              )}
            </div>

            <Link
              to="/telangana-aqi-data"
              className="font-bold text-[15px] hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              AQI Data
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-800 hover:text-primary"
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <motion.nav
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
              >
                Home
              </Link>
            )}
            <Link
              to="/about-us"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              About Us
            </Link>
            <Link
              to="/what-we-do"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              What We Do
            </Link>
            <Link
              to="/what-we-have-done"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              What We Have Done
            </Link>
            <Link
              to="/team"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              Our Team
            </Link>
            <Link
              to="/get-involved"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              Donate
            </Link>
            <Link
              to="/contact-us"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              Contact Us
            </Link>
            <Link
              to="/telangana-aqi-data"
              className="block font-bold text-[15px] text-gray-800 hover:text-primary hover:bg-gradient-to-r from-[#00aaff] to-[#00ff77] hover:shadow-md hover:rounded-lg transition-all duration-300 px-6 py-2"
            >
              AQI Data
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header; 