import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "./PageTransition";
import Layout from "./Layout";
import { Link } from "react-router-dom";

// Animation Configuration
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const WhatWeDo = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section with Video and Animation */}
          <motion.section
            className="relative bg-gray-600 text-white text-center"
            initial="hidden"
            animate="visible"
          >
            {/* Hero Video */}
            <video
              className="absolute w-full h-[300px] sm:h-[600px] object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="/videos/whatwe-do.mp4" // Replace with your actual video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Content Layer */}
            <motion.div
              className="relative z-10 flex flex-col justify-center bg-black bg-opacity-40 md:bg-opacity-50 items-center h-[300px] sm:h-[600px] mt-[10vh] md:mt-0"
              variants={fadeIn}
              custom={0.5}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
                variants={fadeIn}
                custom={1}
              >
                What We Do
              </motion.h1>
              <motion.p
                className="text-lg sm:text-m md:text-3xl"
                variants={fadeIn}
                custom={1.5}
              >
                We are committed to creating a sustainable future through
                innovative solutions and impactful initiatives.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Priority Areas Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-center mb-12"
                variants={fadeIn}
                custom={0}
              >
                Our Priorities
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Priority Items */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.5}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Provide Food & Water Sustainably
                  </h3>
                  <p className="text-gray-600">
                    Addressing global food and water challenges by promoting
                    sustainable practices and innovative solutions.
                  </p>
                </motion.div>

                {/* Add additional priority items as needed */}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDo;
