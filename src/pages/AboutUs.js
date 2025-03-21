import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "./PageTransition";
import Layout from "./Layout";

// Animation Configuration
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
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section with Image */}
          <motion.section
            className="relative bg-white-60 text-white text-center"
            initial="hidden"
            animate="visible"
          >
            <img
              src="/images/about-us.png" // Add your actual image path here
              alt="About Us Hero"
              className="absolute w-full h-[300px] sm:h-[600px] object-cover opacity-800"
            />
            {/* Content Overlay */}
            <motion.div
              className="relative z-10 flex flex-col justify-center items-center sm:h-[600px] h-[300px] py-16" // Removed background styling here
              variants={fadeIn}
              custom={0.5}
            >
              <motion.h1
                className="text-5xl font-bold mb-4"
                variants={fadeIn}
                custom={1}
              >
                About Us
              </motion.h1>
              <motion.p className="text-lg" variants={fadeIn} custom={1.5}>
                Discover our journey, mission, and the values driving us to
                create a sustainable future.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* About Us Content Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                className="text-3xl font-bold mb-6"
                variants={fadeIn}
                custom={0.5}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-gray-600"
                variants={fadeIn}
                custom={0.8}
              >
                At the core of our mission is a belief in empowering
                communities, fostering innovation, and working tirelessly
                towards building a greener planet. By tackling challenges such
                as sustainability, equality, and development, we strive to leave
                a lasting, positive impact on the world.
              </motion.p>
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

          {/* Mission & Vision Section */}
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
                    staggerChildren: 0.3, // Stagger animations for child elements
                  },
                },
              }}
            >
              {/* Mission */}
              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-8 rounded-lg shadow-lg text-white hover:scale-105 transition-transform"
                variants={fadeIn}
                custom={0.5}
              >
                <h2 className="text-3xl font-bold mb-4 border-b-4 border-white pb-2">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed">
                  We strive to empower communities and individuals by promoting
                  environmental sustainability and innovation. Our mission is to
                  build a world where progress is inclusive, impactful, and
                  aligned with our planet's needs.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-8 rounded-lg shadow-lg text-white hover:scale-105 transition-transform"
                variants={fadeIn}
                custom={1}
              >
                <h2 className="text-3xl font-bold mb-4 border-b-4 border-white pb-2">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed">
                  Our vision is a future of harmony where humanity and nature
                  coexist, enabling generations to thrive with sustainable
                  practices, clean energy, and a greener Earth.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;
