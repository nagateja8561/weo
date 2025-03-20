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
          {/* Hero Section with Image and Animation */}
          <motion.section
            className="relative bg-gray-600 text-white text-center"
            initial="hidden"
            animate="visible"
          >
            {/* Hero Image */}
            <img
              src="/weo/images/whatwe-do.jpg" // Replace with your actual image path
              alt="What We Do"
              className="absolute w-full h-[300px] sm:h-[680px] object-cover opacity-500"
            />
            {/* Content Layer */}
            <motion.div
              className="relative z-10 flex flex-col justify-center items-center h-[300px] sm:h-[680px]"
              variants={fadeIn}
              custom={0.5}
            >
              <motion.h1
                className="text-3xl sm:text-5xl font-bold mb-4"
                variants={fadeIn}
                custom={1}
              >
                What We Do
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg"
                variants={fadeIn}
                custom={1.5}
              >
                We are committed to creating a sustainable future through
                innovative solutions and impactful initiatives.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Priority Areas Section */}
          {/* Priority Areas Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden" // Initially hidden before animation starts
            animate="visible" // Immediately animate when the section is rendered
            variants={{
              hidden: { opacity: 0, y: 50 }, // Hidden state (before animation starts)
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 }, // Stagger animation for children
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
                {/* Priority 1 */}
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

                {/* Priority 2 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.8}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Protect & Restore Wild Habitats
                  </h3>
                  <p className="text-gray-600">
                    Conserving biodiversity by protecting and restoring critical
                    habitats for wildlife and ecosystems.
                  </p>
                </motion.div>

                {/* Priority 3 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={1.1}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Build Healthy Cities
                  </h3>
                  <p className="text-gray-600">
                    Creating sustainable urban environments by addressing air
                    pollution, water scarcity, and climate resilience.
                  </p>
                </motion.div>

                {/* Priority 4 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={1.4}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Support Renewable Energy
                  </h3>
                  <p className="text-gray-600">
                    Promoting clean energy solutions to reduce greenhouse gas
                    emissions and combat climate change.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

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

          {/* Final Call-to-Action Section */}
          <div className="bg-blue-50 py-16 text-center">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Join Us in Making a Difference
            </motion.h2>
            <motion.p
              className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Together, we can create a sustainable future for generations to
              come. Be a part of the change today.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link
                to="/get-involved"
                className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDo;
