import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants, 
  staggerContainer, 
  formStaggerAnimation 
} from "../components/animations";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
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
            title="Contact Us"
            subtitle="Have questions, feedback, or want to get involved? Reach out to us—we'd love to hear from you!"
          />

          {/* Contact Form Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold mb-8 text-center"
                variants={fadeIn}
                custom={0}
              >
                Get in Touch
              </motion.h2>
              <motion.form
                className="bg-white shadow-lg rounded-lg p-8 space-y-6"
                variants={formStaggerAnimation}
              >
                <motion.div variants={fadeIn} custom={0.5}>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div variants={fadeIn} custom={0.8}>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div variants={fadeIn} custom={1.1}>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Write your message"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-3 rounded-lg font-bold text-lg hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300 shadow-lg hover:shadow-xl"
                  variants={fadeIn}
                  custom={1.5}
                >
                  Submit
                </motion.button>
              </motion.form>
            </div>
          </motion.section>

          {/* Contact Information Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} custom={0} className="flex flex-col items-center text-center">
                <FaMapMarkerAlt className="text-4xl text-[#00aaff] mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Address</h3>
                <p>H No- 8-3-231/A/11/1</p>
                <p>Sri Krishna Nagar Main Road, Jubilee Hills</p>
                <p>India, Hyderabad-500033</p>
              </motion.div>
              <motion.div variants={fadeIn} custom={0.3} className="flex flex-col items-center text-center">
                <FaPhone className="text-4xl text-[#00aaff] mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p>+91 7075576601</p>
                <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
              </motion.div>
              <motion.div variants={fadeIn} custom={0.6} className="flex flex-col items-center text-center">
                <FaEnvelope className="text-4xl text-[#00aaff] mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p>info@weoindia.in</p>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default ContactUs;
