import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const images = [
  '/weo/images/hero1.jpg',
  '/weo/images/hero2.jpg'
];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <motion.section 
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white relative transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="bg-black bg-opacity-50 p-12 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Let Us Unite to Protect Our Environment</h1>
          <p className="text-xl md:text-3xl">Save Nature, Save Future</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 flex space-x-3">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`h-4 w-4 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </motion.section>

      {/* Other Sections */}
      <motion.section 
        id="vision-section" 
        className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <img src="/weo/images/vision.webp" alt="Our Vision" className="w-full rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">We envision a future where nature and humanity coexist in harmony, ensuring clean air, pure water, and a thriving planet for generations to come.</p>
          </div>
        </div>
      </motion.section>

      {/* CSR */}
      <motion.section 
        id="csr-section" 
        className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Corporate Social Responsibility (CSR)</h2>
            <p className="text-lg text-gray-600 mb-8">Collaborating with companies to implement green initiatives, reduce carbon footprints, and create a lasting environmental impact.</p>
          </div>
          <img src="/weo/images/csr.jpg" alt="CSR" className="w-full rounded-lg shadow-lg" />
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section 
        id="team-section" 
        className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <img src="/weo/images/ourteam.jpeg" alt="Our Team" className="w-full rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">We come from diverse backgrounds and have varied skills and expertise, but are united by our common love for nature.</p>
            {/* Use Link to navigate to the Team page */}
            <Link to="/team">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-800">Our People</button>
            </Link>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Homepage;
