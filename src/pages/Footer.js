import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Explore and Connect Section */}
        <div className="flex flex-wrap justify-between mb-12">
          {/* Explore Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-xl hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="text-xl hover:text-gray-400"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" className="text-xl hover:text-gray-400"><FaTwitter /></a>
              <a href="#" aria-label="Youtube" className="text-xl hover:text-gray-400"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn" className="text-xl hover:text-gray-400"><FaLinkedinIn /></a>
              <a href="#" aria-label="Whatsapp" className="text-xl hover:text-gray-400"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Bottom Legal and Copyright Information */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.</p>
          <p>&copy; 2025 WEO | <a href="#" className="hover:underline">Terms of Use</a> | <a href="#" className="hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
