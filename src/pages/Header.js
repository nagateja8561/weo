import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-1">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src="/weo/images/logo.png"
              alt="WEO Logo"
              className="h-14 w-auto"
              style={{ maxWidth: '500px' }}
            />
          </Link>

          <nav className="hidden md:flex space-x-8 text-lg text-gray-800">
            {location.pathname !== '/' && (
              <Link
                to="/"
                className="font-bold text-lg hover:text-green-600 hover:bg-green-100 hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
              >
                Home
              </Link>
            )}
            <Link
              to="/about-us"
              className="font-bold text-lg hover:text-green-600 hover:bg-green-100 hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
            >
              About Us
            </Link>
            <Link
              to="/what-we-do"
              className="font-bold text-lg hover:text-green-600 hover:bg-green-100 hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
            >
              What We Do
            </Link>
            <Link
              to="/get-involved"
              className="font-bold text-lg hover:text-green-600 hover:bg-green-100 hover:shadow-lg hover:rounded-full transition-all duration-300 px-4 py-2"
            >
              Get Involved
            </Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <Link to="/donate">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-800">
              Donate
            </button>
          </Link>
        </div>

        <div
          className="md:hidden flex items-center cursor-pointer relative"
          onClick={toggleNav}
        >
          <FaBars
            size={20}
            className={`text-gray-800 transition-opacity duration-700 ease-in-out ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <FaTimes
            size={20}
            className={`text-gray-800 transition-opacity duration-700 ease-in-out absolute ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>

      <div
        className={`${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 bg-white bg-opacity-100 flex flex-col items-center justify-center space-y-8 transition-transform duration-[1500ms] ease-in-out z-50`}
      >
        <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleNav}>
          <FaTimes size={25} className="text-gray-800" />
        </div>

        <Link
          to="/"
          className="font-bold text-2xl text-gray-800 hover:text-green-600 focus:text-green-600 active:text-green-600 hover:bg-green-100 focus:bg-green-100 active:bg-green-100 hover:shadow-lg focus:shadow-lg active:shadow-lg hover:rounded-full focus:rounded-full active:rounded-full transition-all duration-300 px-4 py-2"
          onClick={toggleNav}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="font-bold text-2xl text-gray-800 hover:text-green-600 focus:text-green-600 active:text-green-600 hover:bg-green-100 focus:bg-green-100 active:bg-green-100 hover:shadow-lg focus:shadow-lg active:shadow-lg hover:rounded-full focus:rounded-full active:rounded-full transition-all duration-300 px-4 py-2"
          onClick={toggleNav}
        >
          About Us
        </Link>
        <Link
          to="/what-we-do"
          className="font-bold text-2xl text-gray-800 hover:text-green-600 focus:text-green-600 active:text-green-600 hover:bg-green-100 focus:bg-green-100 active:bg-green-100 hover:shadow-lg focus:shadow-lg active:shadow-lg hover:rounded-full focus:rounded-full active:rounded-full transition-all duration-300 px-4 py-2"
          onClick={toggleNav}
        >
          What We Do
        </Link>
        <Link
          to="/get-involved"
          className="font-bold text-2xl text-gray-800 hover:text-green-600 focus:text-green-600 active:text-green-600 hover:bg-green-100 focus:bg-green-100 active:bg-green-100 hover:shadow-lg focus:shadow-lg active:shadow-lg hover:rounded-full focus:rounded-full active:rounded-full transition-all duration-300 px-4 py-2"
          onClick={toggleNav}
        >
          Get Involved
        </Link>

        <Link to="/donate" onClick={toggleNav}>
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-800 transition-all duration-300">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
