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
    <footer className="bg-emerald-700 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-sm text-emerald-100 leading-relaxed">
              The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-lime-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-lime-300 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5 text-2xl">
              <a
                href="https://www.facebook.com/profile.php?id=61560845355012"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/weo.earth/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@WorldEnvironmentOrganization"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/7075576601"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-sm text-emerald-100">
              Email:{" "}
              <a href="mailto:info@weo.earth" className="text-white hover:underline">
                info@weo.earth
              </a>
            </p>
            <p className="text-sm text-emerald-100">
              Phone:{" "}
              <a href="tel:+917075576601" className="text-white hover:underline">
                +91 7075576601
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-600 mt-12 pt-4 text-center text-sm text-emerald-100">
          &copy; {new Date().getFullYear()} WEO |{" "}
          <Link to="/policy" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
