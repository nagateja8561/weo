import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants, 
  staggerContainer, 
  cardHoverAnimation,
  sectionFadeIn,
  iconRotationAnimation
} from "../components/animations";
import { FaLeaf, FaTree, FaSeedling } from "react-icons/fa";

const AboutUs = () => {
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
            title="About Us"
            subtitle="Learn about our mission, vision, and the team behind our environmental initiatives."
          />

          {/* About Us Content Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight"
                variants={fadeIn}
                custom={0.5}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed font-light px-4"
                variants={fadeIn}
                custom={0.8}
              >
                At the core of our mission is a belief in empowering communities,
                fostering innovation, and working tirelessly towards building a
                greener planet. By tackling challenges such as sustainability,
                equality, and development, we strive to leave a lasting, positive
                impact on the world.
              </motion.p>
              
              {/* Special Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={fadeIn}
                  custom={1}
                  whileHover="hover"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2 md:mb-3">10+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">Years of Impact</div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={fadeIn}
                  custom={1.2}
                  whileHover="hover"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2 md:mb-3">500+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">Projects Completed</div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 md:col-span-1"
                  variants={fadeIn}
                  custom={1.4}
                  whileHover="hover"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#00aaff] mb-2 md:mb-3">1000+</div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">Lives Impacted</div>
                </motion.div>
              </div>

              {/* Key Values */}
              <motion.div 
                className="mt-12 md:mt-16"
                variants={fadeIn}
                custom={1.6}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#00aaff] tracking-wide">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                  <motion.div 
                    className="flex items-center space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={fadeIn}
                    custom={1.8}
                    whileHover="hover"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00aaff] rounded-full"></div>
                    <span className="text-base md:text-xl text-gray-700 font-medium">Environmental Stewardship</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={fadeIn}
                    custom={2}
                    whileHover="hover"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00aaff] rounded-full"></div>
                    <span className="text-base md:text-xl text-gray-700 font-medium">Community Empowerment</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={fadeIn}
                    custom={2.2}
                    whileHover="hover"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00aaff] rounded-full"></div>
                    <span className="text-base md:text-xl text-gray-700 font-medium">Innovation & Creativity</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={fadeIn}
                    custom={2.4}
                    whileHover="hover"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00aaff] rounded-full"></div>
                    <span className="text-base md:text-xl text-gray-700 font-medium">Sustainable Development</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Decorative Pattern Section */}
          <motion.section 
            className="py-12 md:py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-green-50"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                <motion.div 
                  className="flex flex-col items-center text-center p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.2}
                >
                  <motion.div
                    className="bg-white rounded-full p-6 md:p-8 shadow-lg mb-4 md:mb-6"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaLeaf className="text-4xl md:text-6xl text-green-500" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Sustainability</h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">Committed to environmental preservation</p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.4}
                >
                  <motion.div
                    className="bg-white rounded-full p-6 md:p-8 shadow-lg mb-4 md:mb-6"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaTree className="text-4xl md:text-6xl text-green-500" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Growth</h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">Fostering community development</p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center p-6 md:p-8 sm:col-span-2 md:col-span-1"
                  variants={fadeIn}
                  custom={0.6}
                >
                  <motion.div
                    className="bg-white rounded-full p-6 md:p-8 shadow-lg mb-4 md:mb-6"
                    whileHover="hover"
                    variants={iconRotationAnimation}
                  >
                    <FaSeedling className="text-4xl md:text-6xl text-green-500" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Innovation</h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">Creating sustainable solutions</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision Section */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <motion.div
              className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center"
              variants={staggerContainer}
            >
              {/* Mission */}
              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-6 md:p-10 rounded-lg shadow-lg text-white"
                variants={{
                  ...fadeIn,
                  ...cardHoverAnimation
                }}
                custom={0.5}
                whileHover="hover"
              >
                <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 border-b-4 border-white pb-3 md:pb-4">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  We strive to empower communities and individuals by promoting
                  environmental sustainability and innovation. Our mission is to
                  build a world where progress is inclusive, impactful, and
                  aligned with our planet's needs.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-6 md:p-10 rounded-lg shadow-lg text-white"
                variants={{
                  ...fadeIn,
                  ...cardHoverAnimation
                }}
                custom={1}
                whileHover="hover"
              >
                <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 border-b-4 border-white pb-3 md:pb-4">
                  Our Vision
                </h2>
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Our vision is a future of harmony where humanity and nature
                  coexist, enabling generations to thrive with sustainable
                  practices, clean energy, and a greener Earth.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;
