import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants,
  staggerContainer, 
  sectionFadeIn 
} from "../components/animations";
import { 
  FaDatabase, 
  FaUserShield, 
  FaShareAlt, 
  FaLock, 
  FaEnvelope 
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <Layout>
        <motion.div 
          className="bg-gray-50 text-gray-800"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="Privacy Policy"
            subtitle="Learn about how we protect and handle your personal information."
          />

          {/* Privacy Policy Content */}
          <motion.section
            className="py-12 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-8 md:space-y-12"
                variants={staggerContainer}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.2}
                >
                  <div className="flex items-start space-x-4">
                    <FaDatabase className="text-3xl text-[#00aaff] mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        Information We Collect
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We collect information that you provide directly to us, including:
                      </p>
                      <ul className="mt-4 space-y-2 text-gray-600 text-base md:text-lg">
                        <li>• Name and contact information</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Donation information</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.4}
                >
                  <div className="flex items-start space-x-4">
                    <FaUserShield className="text-3xl text-[#00aaff] mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        How We Use Your Information
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We use the information we collect to:
                      </p>
                      <ul className="mt-4 space-y-2 text-gray-600 text-base md:text-lg">
                        <li>• Process your donations</li>
                        <li>• Send you updates about our work</li>
                        <li>• Improve our services</li>
                        <li>• Comply with legal obligations</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.6}
                >
                  <div className="flex items-start space-x-4">
                    <FaShareAlt className="text-3xl text-[#00aaff] mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        Information Sharing
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We do not sell or rent your personal information to third parties. We may share your information with:
                      </p>
                      <ul className="mt-4 space-y-2 text-gray-600 text-base md:text-lg">
                        <li>• Service providers who assist our operations</li>
                        <li>• Legal authorities when required by law</li>
                        <li>• Other organizations with your consent</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                  variants={fadeIn}
                  custom={0.8}
                >
                  <div className="flex items-start space-x-4">
                    <FaLock className="text-3xl text-[#00aaff] mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        Data Security
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                  variants={fadeIn}
                  custom={1}
                >
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-3xl text-[#00aaff] mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        Contact Us
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:
                      </p>
                      <p className="mt-2 text-gray-600 text-base md:text-lg">
                        Email: privacy@weo.org
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default PrivacyPolicy;
