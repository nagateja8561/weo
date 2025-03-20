import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import PageTransition from "./PageTransition";
import Layout from "./Layout";

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
          {/* Hero Section with Image and Animation */}
          <motion.section
            className="relative bg-green-600 text-white text-center"
            initial="hidden"
            animate="visible"
          >
            <img
              src="/weo/images/contact-us.jpg" // Replace with your actual image path
              alt="Contact Us"
              className="absolute w-full h-[600px] object-cover"
            />
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
                Contact Us
              </motion.h1>
              <motion.p className="text-lg" variants={fadeIn} custom={1.5}>
                Have questions, feedback, or want to get involved? Reach out to
                us!
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Contact Form Section with Animation */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
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
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
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
                <p>info@weo.com</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Map Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
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
            <motion.div
              className="max-w-7xl mx-auto"
              variants={fadeIn}
              custom={0}
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Location
              </h2>
              <iframe
                title="Google Map"
                className="w-full h-72 md:h-96 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7695567902213!2d78.42348751540592!3d17.430376380563138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97746c5f935b%3A0x12345678abcdef!2sH%20No-8-3-231%2FA%2F11%2F1%2C%20Sri%20Krishna%20Nagar%20Main%20Road%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033%2C%20India!5e0!3m2!1sen!2sin!4v1618353171285!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default ContactUs;
