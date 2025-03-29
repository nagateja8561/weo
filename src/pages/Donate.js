import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";

const Donate = () => {
  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-24 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Donate
          </motion.h1>
          <motion.p
            className="text-lg sm:text-m md:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your contributions help us create a sustainable future and expand
            our impactful initiatives.
          </motion.p>
        </div>

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

        {/* Wave Section Divider */}
        <div className="wave-divider bg-gradient-to-r from-blue-500 to-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,224L30,229.3C60,235,120,245,180,240C240,235,300,213,360,186.7C420,160,480,128,540,117.3C600,107,660,117,720,133.3C780,149,840,171,900,160C960,149,1020,107,1080,112C1140,117,1200,171,1260,197.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>

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
      </Layout>
    </PageTransition>
  );
};

export default Donate;
