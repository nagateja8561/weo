import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants, 
  staggerContainer, 
  sectionFadeIn,
  iconRotationAnimation
} from "../components/animations";
import { FaLeaf, FaTree, FaSeedling, FaChartLine, FaGlobe, FaWater, FaWind } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <PageTransition>
      <Layout>
        <motion.div 
          className="bg-gray-50 text-gray-800 relative"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="What We Do"
            subtitle="Explore our initiatives and programs dedicated to environmental conservation and sustainability."
          />

          {/* Priority Areas Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight text-center"
                variants={fadeIn}
                custom={0.5}
              >
                Our Priorities
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto text-center leading-relaxed font-light"
                variants={fadeIn}
                custom={0.8}
              >
                We focus on key areas that have the greatest potential for positive environmental impact and community development.
              </motion.p>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
              >
                {/* Priority 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.8}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaLeaf className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
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
                  custom={1}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaTree className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
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
                  custom={1.2}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaSeedling className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
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
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaChartLine className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
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

          {/* Impact Statistics Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-green-50"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight text-center"
                variants={fadeIn}
                custom={0.5}
              >
                Our Impact
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.8}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaGlobe className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2">50+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">Countries Reached</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={1}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaWater className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2">1M+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">Liters of Water Saved</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={1.2}
                  whileHover="hover"
                >
                  <motion.div
                    className="mb-4"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaWind className="text-3xl text-green-500 mx-auto" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2">500K+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">CO2 Emissions Reduced</div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Approach Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight text-center"
                variants={fadeIn}
                custom={0.5}
              >
                Our Approach
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-lg shadow-sm"
                  variants={fadeIn}
                  custom={0.8}
                  whileHover="hover"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600">Research & Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We invest in cutting-edge research and innovative solutions to address environmental challenges. Our team of experts continuously develops and implements new technologies and methodologies.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-lg shadow-sm"
                  variants={fadeIn}
                  custom={1}
                  whileHover="hover"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600">Community Engagement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in the power of community. Through education, workshops, and collaborative projects, we empower local communities to take action and make a difference in their environment.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Final Call-to-Action Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-green-50"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight"
                variants={fadeIn}
                custom={0.5}
              >
                Join Us in Making a Difference
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                variants={fadeIn}
                custom={0.8}
              >
                Together, we can create a sustainable future for generations to
                come. Be a part of the change today.
              </motion.p>
              <motion.div
                variants={fadeIn}
                custom={1}
              >
                <Link
                  to="/get-involved"
                  className="inline-block bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                >
                  Get Involved
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDo;
