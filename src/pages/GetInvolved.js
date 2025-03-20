import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "./PageTransition";
import Layout from "./Layout";
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
          {/* Hero Section with Image and Animation */}
          <motion.section
            className="relative bg-green-600 text-white text-center"
            initial="hidden"
            animate="visible"
          >
            {/* Hero Image */}
            <img
              src="/weo/images/get-involved.jpg" // Replace with your actual image path
              alt="Get Involved Hero"
              className="absolute w-full h-[600px] object-cover opacity-800"
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
                Ways to Support Us
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Support Option 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  variants={fadeIn}
                  custom={0.5}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Volunteer With Us
                  </h3>
                  <p className="text-gray-600">
                    Contribute your time and skills to our initiatives. Help us
                    in creating sustainable solutions.
                  </p>
                  <Link
                    to="/contact-us"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
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
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Donate
                  </h3>
                  <p className="text-gray-600">
                    Your generous donations help us sustain and expand our
                    initiatives to make a greater impact.
                  </p>
                  <Link
                    to="/donate"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
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
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Corporate Partnerships
                  </h3>
                  <p className="text-gray-600">
                    Collaborate with us as a corporate partner and support
                    impactful projects that align with your goals.
                  </p>
                  <Link
                    to="/contact-us"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Contact Us
                  </Link>
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
                Become a Part of the Change
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed mb-8"
                variants={fadeIn}
                custom={0.5}
              >
                Whether it’s through volunteering, donations, or partnerships,
                your support helps us create a sustainable future.
              </motion.p>
            </motion.div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default GetInvolved;
