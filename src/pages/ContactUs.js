import React from "react";
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

const ContactUs = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Top Section with Gradient Background */}
          <motion.section
            className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-24"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
              variants={fadeIn}
              custom={0.5}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg sm:text-m md:text-3xl"
              variants={fadeIn}
              custom={1}
            >
              Have questions, feedback, or want to get involved? Reach out to
              us—we’d love to hear from you!
            </motion.p>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
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
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
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
                  className="w-full bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
                  variants={fadeIn}
                  custom={1.5}
                >
                  Submit
                </motion.button>
              </motion.form>
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

          {/* Contact Information Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} custom={0}>
                <h3 className="text-xl font-bold mb-2">Our Address</h3>
                <p>H No- 8-3-231/A/11/1</p>
                <p>Sri Krishna Nagar Main Road, Jubilee Hills</p>
                <p>India, Hyderabad-500033</p>
              </motion.div>
              <motion.div variants={fadeIn} custom={0.3}>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p>+91 7075576601</p>
                <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
              </motion.div>
              <motion.div variants={fadeIn} custom={0.6}>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p>info@weoindia.in</p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default ContactUs;
