import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable"; // Import swipe hook
import PageTransition from "./PageTransition";
import Layout from "./Layout";
import AQISection from "./AQISection";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
  });

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <motion.section
          className="relative w-full flex flex-col md:flex-row items-center justify-center text-white"
          initial="hidden"
          animate="visible"
        >
          {/* Image Section with Swiping */}
          <div
            {...swipeHandlers} // Add swipe handlers
            className="relative w-full h-[60vh] md:h-screen overflow-hidden"
          >
            <img
              src={images[currentImageIndex]}
              alt="Background"
              className="w-full h-full object-cover"
            />

            {/* Arrows - Hidden on Mobile */}
            <motion.div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4 hidden sm:flex">
              <button
                onClick={handlePrevImage}
                className="bg-black/30 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ width: "50px", height: "50px" }}
                aria-label="Previous Image"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="bg-black/30 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ width: "50px", height: "50px" }}
                aria-label="Next Image"
              >
                <ArrowRight size={24} />
              </button>
            </motion.div>
          </div>

          {/* Text Section (Overlay Text) */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-6 sm:p-12 bg-black bg-opacity-40 md:bg-opacity-50 z-10 w-full md:absolute md:inset-0 md:bottom-0 md:text-left md:flex-row md:justify-start md:p-8 mt-[-20vh] md:mt-0" // Adjusted margin-top for mobile
            variants={fadeIn}
            custom={0.5}
          >
            <motion.div className="text-center md:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
              variants={fadeIn}
              custom={1}
            >
              Let Us Unite to Protect Our Environment
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-3xl"
              variants={fadeIn}
              custom={1.5}
            >
              Save Nature, Save Future
            </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* AQI Section */}
        <AQISection view="home" />

        {/* Our Vision Section */}
        <motion.section
          className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.img
              src="/images/vision.webp"
              alt="Our Vision"
              className="w-full rounded-lg shadow-lg"
              variants={fadeIn}
              custom={0}
            />
            <motion.div className="flex flex-col justify-center">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
                variants={fadeIn}
                custom={0.5}
              >
                Our Vision
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={fadeIn}
                custom={1}
              >
                Our vision is a future where innovation and sustainability
                converge to create lasting positive change, empowering
                individuals and organizations to reach their full potential. We
                are committed to building a brighter, greener world where nature
                and humanity coexist in harmony, ensuring clean air, pure water,
                and a thriving planet for generations to come.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* CSR Section */}
        <motion.section
          className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div className="flex flex-col justify-center">
              <motion.h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
                Corporate Social Responsibility (CSR)
              </motion.h2>
              <motion.p className="text-lg text-gray-600 mb-8">
                Collaborating with companies to implement green initiatives,
                reduce carbon footprints, and create a lasting environmental
                impact.
              </motion.p>
            </motion.div>
            <motion.img
              src="/images/csr.jpg"
              alt="CSR"
              className="w-full rounded-lg shadow-lg"
              variants={fadeIn}
              custom={0}
            />
          </div>
        </motion.section>
      </Layout>
    </PageTransition>
  );
};

export default Homepage;