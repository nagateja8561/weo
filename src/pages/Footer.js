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
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm">
              The World Environment Organization is dedicated to protecting
              nature and conserving our planet's resources.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560845355012"
                aria-label="Facebook"
                className="text-xl hover:text-gray-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/weo.earth/"
                aria-label="Instagram"
                className="text-xl hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@WorldEnvironmentOrganization"
                aria-label="Youtube"
                className="text-xl hover:text-gray-400"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/7075576601"
                aria-label="Whatsapp"
                className="text-xl hover:text-gray-400"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright & Links) */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; 2025 WEO |{" "}
            <Link to="/policy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
