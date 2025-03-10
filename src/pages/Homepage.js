import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import Layout from './Layout';

const images = [
  '/weo/images/hero1.jpg',
  '/weo/images/hero2.jpg'
];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <motion.section 
          className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white relative"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-black bg-opacity-50 p-12 rounded-lg"
            variants={fadeIn}
            custom={0.5}
          >
            <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6" variants={fadeIn} custom={1}>
              Let Us Unite to Protect Our Environment
            </motion.h1>
            <motion.p className="text-xl md:text-3xl" variants={fadeIn} custom={1.5}>
              Save Nature, Save Future
            </motion.p>
          </motion.div>

          {/* Dots */}
          <motion.div 
            className="absolute bottom-8 flex space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Our Vision Section */}
        <motion.section 
          id="vision-section" 
          className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Ensures animation triggers when 50% of the section is visible
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3 // stagger animations for children
                }
              }
            }}
          >
            {/* Image Animation */}
            <motion.img 
              src="/weo/images/vision.webp" 
              alt="Our Vision" 
              className="w-full rounded-lg shadow-lg" 
              variants={fadeIn} 
              custom={0}
            />

            {/* Text Animation */}
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
                We envision a future where nature and humanity coexist in harmony, ensuring clean air, pure water, and a thriving planet for generations to come.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>


        {/* CSR Section */}
        <motion.section 
          id="csr-section" 
          className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div className="flex flex-col justify-center" variants={fadeIn} custom={0.5}>
              <motion.h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800" variants={fadeIn} custom={1}>
                Corporate Social Responsibility (CSR)
              </motion.h2>
              <motion.p className="text-lg text-gray-600 mb-8" variants={fadeIn} custom={1.5}>
                Collaborating with companies to implement green initiatives, reduce carbon footprints, and create a lasting environmental impact.
              </motion.p>
            </motion.div>
            <motion.img 
              src="/weo/images/csr.jpg" 
              alt="CSR" 
              className="w-full rounded-lg shadow-lg" 
              variants={fadeIn} 
              custom={0}
            />
          </div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section 
          id="team-section" 
          className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.img 
              src="/weo/images/ourteam.jpeg" 
              alt="Our Team" 
              className="w-full rounded-lg shadow-lg" 
              variants={fadeIn} 
              custom={0}
            />
            <motion.div className="flex flex-col justify-center" variants={fadeIn} custom={0.5}>
              <motion.h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800" variants={fadeIn} custom={1}>
                Meet Our Team
              </motion.h2>
              <motion.p className="text-lg text-gray-600 mb-8" variants={fadeIn} custom={1.5}>
                We come from diverse backgrounds and have varied skills and expertise, but are united by our common love for nature.
              </motion.p>
              <Link to="/team">
                <motion.button 
                  className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-800" 
                  variants={fadeIn} 
                  custom={2}
                >
                  Our People
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </Layout>
    </PageTransition>
  );
};

export default Homepage;
