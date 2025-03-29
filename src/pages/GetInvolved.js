import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import Button from "../components/Button";
import { fadeIn, sectionFadeIn } from "../components/animations";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaHandshake, FaUsers, FaTree, FaGlobe, FaLightbulb } from "react-icons/fa";

const GetInvolved = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="Get Involved"
            subtitle="Join our global community of environmental champions. Together, we can create a sustainable future for generations to come."
          />

          {/* Ways to Support Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12" 
                variants={fadeIn} 
                custom={0}
              >
                Ways to Support Us
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                {/* Support Option 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                  variants={fadeIn}
                  custom={0.5}
                  whileHover="hover"
                >
                  <div className="flex justify-center mb-4">
                    <FaHandHoldingHeart className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Volunteer With Us</h3>
                  <p className="text-gray-600">
                    Make a direct impact by volunteering your time and skills. From tree planting to community education, your hands-on involvement helps create lasting environmental change.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link to="/contact-us">
                      <Button 
                        variant="primary" 
                        size="large"
                        className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300"
                      >
                        Join as Volunteer
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Support Option 2 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                  variants={fadeIn}
                  custom={0.8}
                  whileHover="hover"
                >
                  <div className="flex justify-center mb-4">
                    <FaHandshake className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Donate</h3>
                  <p className="text-gray-600">
                    Your financial support enables us to expand our environmental initiatives, fund research projects, and implement sustainable solutions across communities.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link to="/donate">
                      <Button 
                        variant="primary" 
                        size="large"
                        className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300"
                      >
                        Make a Donation
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Support Option 3 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                  variants={fadeIn}
                  custom={1.1}
                  whileHover="hover"
                >
                  <div className="flex justify-center mb-4">
                    <FaUsers className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Corporate Partnerships</h3>
                  <p className="text-gray-600">
                    Partner with us to drive environmental innovation. Together, we can develop sustainable business practices and create a positive impact on our planet.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link to="/contact-us">
                      <Button 
                        variant="primary" 
                        size="large"
                        className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300"
                      >
                        Partner With Us
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Impact Stats Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12" 
                variants={fadeIn} 
                custom={0}
              >
                Our Impact Together
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  custom={0.2}
                >
                  <FaTree className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">2.5M+</h3>
                  <p className="text-gray-600">Trees Planted</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  custom={0.4}
                >
                  <FaGlobe className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">50+</h3>
                  <p className="text-gray-600">Countries Reached</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  custom={0.6}
                >
                  <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">10K+</h3>
                  <p className="text-gray-600">Active Volunteers</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  custom={0.8}
                >
                  <FaLightbulb className="text-4xl text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">100+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Final Call-to-Action Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl font-bold mb-6"
                variants={fadeIn}
                custom={0}
              >
                Together for a Better Tomorrow
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={fadeIn}
                custom={0.2}
              >
                Every action counts in our mission to protect and preserve our planet. Join our community of environmental champions and be part of the solution.
              </motion.p>
              <motion.div 
                variants={fadeIn} 
                custom={0.4}
                className="flex justify-center"
              >
                <Link to="/contact-us">
                  <Button 
                    variant="primary" 
                    size="large"
                    className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-3 px-8 rounded-full text-[14px] font-bold hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default GetInvolved;
