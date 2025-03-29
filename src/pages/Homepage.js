import React, { useState, useEffect, useCallback  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import AQISection from "./AQISection";

const Homepage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoDuration = 5000; // Duration for each video (in milliseconds)

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };
  const videos = [
    "/videos/first-video.mp4", // Replace with your actual video paths
  ];

 // Memoize `handleVideoSwitch`
 const handleVideoSwitch = useCallback(() => {
  setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
}, [videos.length]); // Include 'videos.length' as a dependency


useEffect(() => {
  const timer = setTimeout(() => {
    handleVideoSwitch();
  }, videoDuration);
  return () => clearTimeout(timer);
}, [currentVideoIndex, handleVideoSwitch]); // Include memoized `handleVideoSwitch`

  const videoAnimation = {
    initial: { opacity: 0, scale: 0.9 }, // Start slightly smaller and transparent
    animate: { opacity: 1, scale: 1 }, // Smoothly fade in and scale up
    exit: { opacity: 0, scale: 1.1 }, // Slight zoom-out and fade out
    transition: { duration: 1 }, // Adjust duration for a smooth, professional feel
  };

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section with Video */}
        <motion.section
          className="relative w-full flex flex-col md:flex-row items-center justify-center text-white"
          initial="hidden"
          animate="visible"
        >
          {/* Video Section with Crossfade & Scale Animation */}
          <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
            <AnimatePresence>
              <motion.video
                key={currentVideoIndex}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                loop
                className="absolute w-full h-full object-cover"
                {...videoAnimation}
                aria-label={`Hero Video ${currentVideoIndex + 1}`}
              />
            </AnimatePresence>
          </div>

          {/* Text Section (Overlay Text) */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-black bg-opacity-40 md:bg-opacity-50 z-10 w-full mt-[1vh] md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="text-left md:text-left">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
              >
                Let Us Unite to Protect Our Environment
              </motion.h1>
              <motion.p className="text-lg sm:text-m md:text-3xl">
                Save Nature, Save Future
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* AQI Section */}
        <AQISection view="home" />

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
                   staggerChildren: 0.3, // stagger animations for children
                 },
               },
             }}
           >
             {/* Image Animation */}
             <motion.img
               src="/images/vision.webp"
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
           id="csr-section"
           className="py-16 md:py-32 bg-white flex justify-center items-center text-left px-8 sm:px-16"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
             <motion.div
               className="flex flex-col justify-center"
               variants={fadeIn}
               custom={0.5}
             >
               <motion.h2
                 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
                 variants={fadeIn}
                 custom={1}
               >
                 Corporate Social Responsibility (CSR)
               </motion.h2>
               <motion.p
                 className="text-lg text-gray-600 mb-8"
                 variants={fadeIn}
                 custom={1.5}
               >
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
               src="/images/ourteam.jpeg"
               alt="Our Team"
               className="w-full rounded-lg shadow-lg"
               variants={fadeIn}
               custom={0}
             />
             <motion.div
               className="flex flex-col justify-center"
               variants={fadeIn}
               custom={0.5}
             >
               <motion.h2
                 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
                 variants={fadeIn}
                 custom={1}
               >
                 Meet Our Team
               </motion.h2>
               <motion.p
                 className="text-lg text-gray-600 mb-8"
                 variants={fadeIn}
                 custom={1.5}
               >
                 We come from diverse backgrounds and have varied skills and
                 expertise, but are united by our common love for nature.
               </motion.p>
               <Link to="/team">
                 <motion.button
                   className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-3 px-8 rounded-lg text-lg hover:bg-green-800"
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