import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants, 
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

          {/* Privacy Policy Content Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 space-y-6"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div variants={fadeIn} custom={0} className="flex items-start space-x-4">
                  <FaDatabase className="text-3xl text-[#00aaff] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                    <p className="text-gray-600">
                      We collect information that you provide directly to us, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Name and contact information</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Donation information</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} custom={0.2} className="flex items-start space-x-4">
                  <FaUserShield className="text-3xl text-[#00aaff] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-600">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Process your donations</li>
                      <li>Send you updates about our work</li>
                      <li>Improve our services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} custom={0.4} className="flex items-start space-x-4">
                  <FaShareAlt className="text-3xl text-[#00aaff] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                    <p className="text-gray-600">
                      We do not sell or rent your personal information to third parties. We may share your information with:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Service providers who assist in our operations</li>
                      <li>Legal authorities when required by law</li>
                      <li>Other organizations with your consent</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} custom={0.6} className="flex items-start space-x-4">
                  <FaLock className="text-3xl text-[#00aaff] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                    <p className="text-gray-600">
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} custom={0.8} className="flex items-start space-x-4">
                  <FaEnvelope className="text-3xl text-[#00aaff] mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                    <p className="text-gray-600">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mt-2 text-gray-600">
                      Email: privacy@weo.org<br />
                      Phone: +91 7075576601
                    </p>
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
