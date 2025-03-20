import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
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

const AboutUs = () => {
  return (
    <PageTransition>
      <Layout>
        {/* Hero Section with Image and Animation */}
        <motion.section
          className="relative bg-green-600 text-white text-center"
          initial="hidden"
          animate="visible"
        >
          {/* Hero Image */}
          <img
            src="/weo/images/about-us.png" // Replace with your actual image path
            alt="About Us Hero"
            className="absolute w-full h-[600px] object-cover opacity-80"
          />
          {/* Content Over Image */}
          <motion.div
            className="relative z-10 flex flex-col justify-center items-center h-[600px]"
            variants={fadeIn}
            custom={0.5}
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold"
              variants={fadeIn}
              custom={1}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
              custom={1.5}
            >
              Learn more about our mission, vision, and the journey that drives
              us to create a sustainable future.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Mission & Vision Section with Animation */}
        <motion.section
          className="py-16 px-4 sm:px-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // Stagger child animations
                },
              },
            }}
          >
            {/* Mission Box */}
            <motion.div
              className="bg-green-600 p-8 rounded-lg shadow-lg text-white"
              variants={fadeIn}
              custom={0.5}
            >
              <h2 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                We are dedicated to solving global challenges with innovative,
                scalable, and sustainable solutions. Our mission is to empower
                individuals and communities while promoting environmental
                responsibility and long-term growth.
              </p>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              className="bg-green-600 p-8 rounded-lg shadow-lg text-white"
              variants={fadeIn}
              custom={1}
            >
              <h2 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                Our vision is a future where innovation and sustainability
                converge to create lasting positive change, empowering
                individuals and organizations to reach their full potential. We
                are committed to building a brighter, greener world where nature
                and humanity coexist in harmony, ensuring clean air, pure water,
                and a thriving planet for generations to come.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;
