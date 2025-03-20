import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "./PageTransition";
import Layout from "./Layout";

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
  className="relative bg-green-600 text-white text-center"
  initial="hidden"
  animate="visible"
>
  {/* Hero Image */}
  <img
    src="/weo/images/whatwe-do.jpg" // Replace with your actual image path
    alt="What We Do"
    className="absolute w-full h-[600px] object-cover opacity-70"
  />

  {/* Content Layer */}
  <motion.div
    className="relative z-10 flex flex-col justify-center items-center h-[600px]"
    variants={fadeIn}
    custom={0.5}
  >
    <motion.h1
      className="text-5xl font-bold mb-4"
      variants={fadeIn}
      custom={1}
    >
      What We Do
    </motion.h1>
    <motion.p
      className="text-lg"
      variants={fadeIn}
      custom={1.5}
    >
      We are committed to creating a sustainable future through innovative solutions and impactful initiatives.
    </motion.p>
  </motion.div>
</motion.section>


          {/* Priority Areas Section with Animations */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // Stagger child animations
                },
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

          {/* Call-to-Action Section with Animations */}
          <motion.section
            className="py-16 bg-green-600 text-white text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="max-w-4xl mx-auto"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.h2
                className="text-3xl font-bold mb-4"
                variants={fadeIn}
                custom={0}
              >
                Join Us in Making a Difference
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-8"
                variants={fadeIn}
                custom={0.5}
              >
                Together, we can create a sustainable future for generations to
                come. Be a part of the change today.
              </motion.p>
            </motion.div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDo;
