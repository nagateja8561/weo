import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs'; // Import the AboutUs component

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg'
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
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-white font-sans">
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
              <div className="container mx-auto flex justify-between items-center p-5">
                <div className="flex items-center space-x-10">
                  <img src="/images/logo.png" alt="WEO Logo" className="h-12 w-auto" style={{ maxWidth: '250px' }} />
                  <nav className="flex space-x-8 text-lg text-gray-800">
                    <a href="/about-us" className="font-bold hover:text-green-600">About Us</a> {/* Updated Link */}
                    <a href="#what-we-do" className="font-bold hover:text-green-600">What We Do</a>
                    <a href="#get-involved" className="font-bold hover:text-green-600">Get Involved</a>
                  </nav>
                </div>
                <a href="#donate" className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-800">Donate</a>
              </div>
            </header>

            {/* Social Icons */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md">
                <FaFacebookF size={30} className="text-blue-600" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md">
                <FaLinkedinIn size={30} className="text-blue-800" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md">
                <FaYoutube size={30} className="text-red-600" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md">
                <FaWhatsapp size={30} className="text-green-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-shadow shadow-md">
                <FaInstagram size={30} className="text-pink-600" />
              </a>
            </div>

            {/* Hero Section */}
            <motion.section 
              className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white relative transition-all duration-1000"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
              <div className="bg-black bg-opacity-50 p-12 rounded-lg">
                <h1 className="text-7xl font-extrabold mb-6">Let's Unite to Protect Our Environment</h1>
                <p className="text-3xl">Save Nature, Save Future</p>
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

{/* Our Vision */}
<motion.section 
              id="vision-section" 
              className="py-32 bg-white flex justify-center items-center text-left px-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
                <img src="/images/vision.webp" alt="Our Vision" className="w-full rounded-lg shadow-lg" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-6xl font-bold mb-4 text-gray-800">Our Vision</h2>
                  <p className="text-lg text-gray-600 mb-8">We envision a future where nature and humanity coexist in harmony, ensuring clean air, pure water, and a thriving planet for generations to come.</p>
                </div>
              </div>
            </motion.section>

            {/* CSR */}
            <motion.section 
              id="csr-section" 
              className="py-32 bg-white flex justify-center items-center text-left px-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
                <div className="flex flex-col justify-center">
                  <h2 className="text-6xl font-bold mb-4 text-gray-800">Corporate Social Responsibility (CSR)</h2>
                  <p className="text-lg text-gray-600 mb-8">Collaborating with companies to implement green initiatives, reduce carbon footprints, and create a lasting environmental impact.</p>
                </div>
                <img src="/images/csr.jpg" alt="CSR" className="w-full rounded-lg shadow-lg" />
              </div>
            </motion.section>

            {/* Our Team */}
            <motion.section 
              id="team-section" 
              className="py-32 bg-white flex justify-center items-center text-left px-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
                <img src="/images/ourteam.jpeg" alt="Our Team" className="w-full rounded-lg shadow-lg" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-6xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
                  <p className="text-lg text-gray-600 mb-8">We come from diverse backgrounds and have varied skills and expertise, but are united by our common love for nature.</p>
                  <button className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-800">Our People</button>
                </div>
              </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold mb-4 border-b-2 border-green-500 inline-block">Write to Us</h3>
                  <p className="text-lg mt-4">We would love to hear from you!</p>
                  <p className="text-lg">Email: info@weo.org</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Contact Us</h3>
                  <p className="text-lg mt-4">Reach out for collaborations or inquiries.</p>
                  <p className="text-lg">Address: 123 Greenway Blvd, Nature City</p>
                  <p className="text-lg">Phone: +1 234 567 8901</p>
                  <p className="text-lg">Email: info@weo.org</p>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/about-us" element={<AboutUs />} /> {/* Added About Us Route */}
      </Routes>
    </Router>
  );
};

export default Homepage;
