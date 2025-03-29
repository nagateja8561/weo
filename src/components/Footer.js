import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-400">
              The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-green-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-green-500 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61560845355012"
                aria-label="Facebook"
                className="text-2xl hover:text-blue-600 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/weo.earth/"
                aria-label="Instagram"
                className="text-2xl hover:text-pink-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@WorldEnvironmentOrganization"
                aria-label="Youtube"
                className="text-2xl hover:text-red-600 transition duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/7075576601"
                aria-label="Whatsapp"
                className="text-2xl hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto: info@weoindia.in." className="text-green-500 hover:underline">info@weoindia.in</a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: <a href="mobile: 7075576601" className="text-green-500 hover:underline">+91 7075576601</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom (Copyright & Links) */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm"> {/* Reduced margin and padding */}
          <p className="text-gray-400">
            &copy; 2025 WEO |{" "}
            <Link to="/policy" className="text-green-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;