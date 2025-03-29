import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { FaHandHoldingHeart, FaGlobe, FaTree, FaUsers, FaBuilding } from "react-icons/fa";

const Donate = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="Support Our Mission"
            subtitle="Your contribution helps us create a sustainable future for generations to come."
          />

          {/* Donation Methods Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
              {/* QR Code Donation */}
              <motion.div
                className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h2
                  className="text-3xl font-bold mb-4"
                  whileHover={{ color: "#22c55e" }}
                >
                  Scan to Donate
                </motion.h2>
                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  Use your mobile device to scan the QR code below and make a
                  donation conveniently.
                </p>
                <motion.img
                  src="/images/qr-code.png"
                  alt="Scan to Donate QR Code"
                  className="w-56 h-56 mx-auto rounded-lg shadow-md"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
              </motion.div>

              {/* Direct Donation */}
              <motion.div
                className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h2
                  className="text-3xl font-bold mb-4"
                  whileHover={{ color: "#22c55e" }}
                >
                  Direct Donation
                </motion.h2>
                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  Prefer to donate directly? Use the details below for bank
                  transfers or direct payments.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-left">
                  <p className="text-lg font-bold mb-2">Bank Details:</p>
                  <p>Account Name: WORLD ENVIRONMENT ORGANIZATION</p>
                  <p>Account Number: 053411100006001</p>
                  <p>IFSC Code: UBIN0805343</p>
                  <p>Branch: Somajiguda, Hyderabad</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Donation Options Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* One-time Donation */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <FaHandHoldingHeart className="text-4xl text-[#00aaff]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">One-time Donation</h3>
                      <p className="text-sm text-gray-600">Make a single contribution to support our initiatives</p>
                    </div>
                  </div>
                </div>

                {/* Monthly Donation */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <FaGlobe className="text-4xl text-[#00aaff]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Monthly Donation</h3>
                      <p className="text-sm text-gray-600">Support us regularly with a monthly contribution</p>
                    </div>
                  </div>
                </div>

                {/* Project-specific Donation */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <FaTree className="text-4xl text-[#00aaff]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Project-specific</h3>
                      <p className="text-sm text-gray-600">Support specific environmental projects</p>
                    </div>
                  </div>
                </div>

                {/* Corporate Partnership */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <FaUsers className="text-4xl text-[#00aaff]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Corporate Partnership</h3>
                      <p className="text-sm text-gray-600">Partner with us for larger impact</p>
                    </div>
                  </div>
                </div>

                {/* CSR Initiative */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <FaBuilding className="text-4xl text-[#00aaff]" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">CSR Initiative</h3>
                      <p className="text-sm text-gray-600">Fulfill your CSR commitments through environmental projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <div className="bg-blue-50 py-16 text-center">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Together for a Better Future
            </motion.h2>
            <motion.p
              className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Every contribution makes a lasting impact. Thank you for joining us
              in our mission to create a sustainable and thriving planet for
              generations to come.
            </motion.p>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default Donate;
