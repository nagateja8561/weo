import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm">
              The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
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

        {/* Footer Bottom (Copyright & Links) */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>&copy; 2025 WEO | <a href="#" className="hover:underline">Terms of Use</a> | <a href="#" className="hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
