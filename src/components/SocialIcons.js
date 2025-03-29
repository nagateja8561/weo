// SocialIcons.js
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md"
      >
        <FaFacebookF size={30} className="text-blue-600" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md"
      >
        <FaLinkedinIn size={30} className="text-blue-800" />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md"
      >
        <FaYoutube size={30} className="text-red-600" />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md"
      >
        <FaWhatsapp size={30} className="text-green-600" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md"
      >
        <FaInstagram size={30} className="text-pink-600" />
      </a>
    </div>
  );
};

export default SocialIcons;