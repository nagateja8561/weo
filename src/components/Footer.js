import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-20"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={fadeIn}
            custom={0.2}
          >
            <h3 className="text-2xl font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-400">
              The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="flex flex-col space-y-4"
            variants={fadeIn}
            custom={0.4}
          >
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
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="flex flex-col space-y-4"
            variants={fadeIn}
            custom={0.6}
          >
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61560845355012"
                aria-label="Facebook"
                className="text-2xl hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/weo.earth/"
                aria-label="Instagram"
                className="text-2xl hover:text-pink-600 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@WorldEnvironmentOrganization"
                aria-label="Youtube"
                className="text-2xl hover:text-red-600 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                href="https://wa.me/7075576601"
                aria-label="Whatsapp"
                className="text-2xl hover:text-green-500 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="flex flex-col space-y-4"
            variants={fadeIn}
            custom={0.8}
          >
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto: info@weoindia.in." className="text-green-500 hover:underline">info@weoindia.in</a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: <a href="mobile: 7075576601" className="text-green-500 hover:underline">+91 7075576601</a>
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom (Copyright & Links) */}
        <motion.div
          className="border-t border-gray-700 mt-6 pt-4 text-center text-sm"
          variants={fadeIn}
          custom={1}
        >
          <p className="text-gray-400">
            &copy; 2025 WEO |{" "}
            <Link to="/policy" className="text-green-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 