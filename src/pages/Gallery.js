import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import { 
  fadeIn, 
  pageVariants, 
  cardHoverAnimation,
  sectionFadeIn
} from "../components/animations";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    { id: 1, image: "/images/gallery/1.jpg" },
    { id: 2, image: "/images/gallery/2.jpg" },
    { id: 3, image: "/images/gallery/3.jpg" },
    { id: 4, image: "/images/gallery/4.jpg" },
    { id: 5, image: "/images/gallery/5.jpg" },
    { id: 6, image: "/images/gallery/6.jpg" },
    { id: 7, image: "/images/gallery/7.jpg" },
    { id: 8, image: "/images/gallery/8.jpg" },
    { id: 9, image: "/images/gallery/9.jpg" },
  ];

  return (
    <PageTransition>
      <Layout>
        <motion.div 
          className="bg-gray-50 text-gray-800"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Hero Section */}
          <motion.section
            className="relative bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white text-center py-28 mt-[10vh] md:mt-0"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6"
              variants={fadeIn}
              custom={0.5}
            >
              Gallery
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto px-4"
              variants={fadeIn}
              custom={0.8}
            >
              Explore our journey through impactful environmental initiatives and community projects
            </motion.p>
          </motion.section>

          {/* Gallery Grid Section */}
          <motion.section
            className="py-12 px-4 sm:px-8"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  variants={fadeIn}
                  custom={index * 0.2}
                  whileHover="hover"
                >
                  <motion.div
                    className="relative aspect-w-16 aspect-h-9"
                    whileHover="hover"
                    variants={cardHoverAnimation}
                  >
                    <img
                      src={achievement.image}
                      alt={`Item ${achievement.id}`}
                      className="w-full h-64 object-cover object-top cursor-pointer"
                      onClick={() => setSelectedImage(achievement.image)}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lightbox Overlay */}
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <motion.button
                  className="absolute bottom-2 center-2 z-50 bg-black bg-opacity-50 text-white text-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-70"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  &times;
                </motion.button>

                <motion.img
                  src={selectedImage}
                  alt="Selected item"
                  className="rounded-lg max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default Gallery;