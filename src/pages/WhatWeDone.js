import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const WhatWeDone = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Manage clicked image

  const achievements = [
    { id: 1, image: "/images/wedone/1.jpg" },
    { id: 2, image: "/images/wedone/2.jpg" },
    { id: 3, image: "/images/wedone/3.jpg" },
    { id: 4, image: "/images/wedone/4.jpg" },
    { id: 5, image: "/images/wedone/5.jpg" },
    { id: 6, image: "/images/wedone/6.jpg" },
    { id: 7, image: "/images/wedone/7.jpg" },
    { id: 8, image: "/images/wedone/8.jpg" },
    { id: 9, image: "/images/wedone/9.jpg" },
  ];

  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <motion.section
            className="relative bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-28 mt-[10vh] md:mt-0"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
              variants={fadeIn}
              custom={0.5}
            >
              What We Have Done
            </motion.h1>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            className="py-12 px-4 sm:px-8"
            initial="hidden" // Animation will start immediately
            animate="visible" // Animation will run once visible
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  variants={fadeIn} // Reuse the fadeIn animation
                  custom={index * 0.3}
                  initial="hidden" // Start from hidden
                  animate="visible" // Animate into view
                >
                  <img
                    src={achievement.image}
                    alt={`Achievement ${achievement.id}`}
                    className="w-full h-64 object-cover object-top cursor-pointer"
                    onClick={() => setSelectedImage(achievement.image)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lightbox Overlay */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
              {/* Image container to position the close button relative to the image */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                  className="absolute bottom-2 center-2 z-50 bg-black bg-opacity-50 text-white text-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-70"
                  onClick={() => setSelectedImage(null)} // Close lightbox
                >
                  &times;
                </button>

                {/* Responsive Image */}
                <motion.img
                  src={selectedImage}
                  alt="Selected Achievement"
                  className="rounded-lg max-w-full max-h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDone;
