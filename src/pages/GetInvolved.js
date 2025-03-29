import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
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

const GetInvolved = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section with Video */}
          <motion.section
            className="relative text-white text-center"
            initial="hidden"
            animate="visible"
          >
            <video
              src="/videos/get-involved.mp4" // Replace with your actual video path
              autoPlay
              muted
              loop
              className="absolute w-full h-[300px] sm:h-[600px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
            <motion.div
              className="relative z-10 flex flex-col justify-center bg-black bg-opacity-40 md:bg-opacity-50 items-center sm:h-[600px] h-[300px] py-16"
              variants={fadeIn}
              custom={0.5}
            >
              <motion.h1 className="text-5xl font-bold mb-4" variants={fadeIn} custom={1}>
                Get Involved
              </motion.h1>
              <motion.p className="text-lg" variants={fadeIn} custom={1.5}>
                Join hands with us to create a lasting impact. Together, we can
                make a difference.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Ways to Support Section with Animations */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2 className="text-3xl font-bold text-center mb-12" variants={fadeIn} custom={0}>
                Ways to Support Us
              </motion.h2>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Support Option 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.5}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">Volunteer With Us</h3>
                  <p className="text-gray-600">
                    Contribute your time and skills to our initiatives. Help us
                    in creating sustainable solutions.
                  </p>
                  <Link
                    to="/contact-us"
                    className="mt-4 inline-block bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                {/* Support Option 2 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.8}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">Donate</h3>
                  <p className="text-gray-600">
                    Your generous donations help us sustain and expand our
                    initiatives to make a greater impact.
                  </p>
                  <Link
                    to="/donate"
                    className="mt-4 inline-block bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Donate Now
                  </Link>
                </motion.div>

                {/* Support Option 3 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={1.1}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">Corporate Partnerships</h3>
                  <p className="text-gray-600">
                    Collaborate with us as a corporate partner and support
                    impactful projects that align with your goals.
                  </p>
                  <Link
                    to="/contact-us"
                    className="mt-4 inline-block bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Final Call-to-Action Section */}
          <div className="bg-blue-50 py-16 text-center">
            <motion.h2
              className="text-4xl font-bold text-gray-800"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              Together for a Better Tomorrow
            </motion.h2>
            <motion.p
              className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.2}
            >
              Your involvement is the driving force behind our mission. Join us
              today and help build a sustainable future for generations to come.
            </motion.p>
            <motion.div
              className="mt-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.4}
            >
              <Link
                to="/contact-us"
                className="inline-block bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default GetInvolved;
