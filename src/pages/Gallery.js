import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import { 
  fadeIn, 
  pageVariants, 
  cardHoverAnimation,
  sectionFadeIn
} from "../components/animations";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaType, setMediaType] = useState("images");

  const images = [
    { id: 1, type: "image", src: "/images/gallery/1.jpg" },
    { id: 2, type: "image", src: "/images/gallery/2.jpg" },
    { id: 3, type: "image", src: "/images/gallery/3.jpg" },
    { id: 4, type: "image", src: "/images/gallery/4.jpg" },
    { id: 5, type: "image", src: "/images/gallery/5.jpg" },
    { id: 6, type: "image", src: "/images/gallery/6.jpg" },
    { id: 7, type: "image", src: "/images/gallery/7.jpg" },
    { id: 8, type: "image", src: "/images/gallery/8.jpg" },
    { id: 9, type: "image", src: "/images/gallery/9.jpg" },
    { id: 10, type: "image", src: "/images/gallery/10.jpg" },
    { id: 11, type: "image", src: "/images/gallery/11.jpg" },
    { id: 12, type: "image", src: "/images/gallery/12.jpg" },
    { id: 13, type: "image", src: "/images/gallery/13.jpg" },
    { id: 14, type: "image", src: "/images/gallery/14.jpg" },
    { id: 15, type: "image", src: "/images/gallery/15.jpg" }
  ];

  const videos = [
    { id: 101, type: "video", src: "/videos/gallery/1.mp4" },
    { id: 102, type: "video", src: "/videos/gallery/2.mp4" }
  ];

  const banners = [
    { id: 201, type: "banner", src: "/banners/gallery/1.jpg" },
    { id: 202, type: "banner", src: "/banners/gallery/2.jpg" },
    { id: 203, type: "banner", src: "/banners/gallery/3.jpg" },
    { id: 204, type: "banner", src: "/banners/gallery/4.jpg" }
  ];

  const mediaItems =
    mediaType === "images" ? images :
    mediaType === "videos" ? videos :
    mediaType === "banners" ? banners : [];

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
          <GradientOverlay
            className="text-white py-24"
            title="Our Gallery"
            subtitle="Explore our journey through impactful environmental initiatives and community projects. Witness the transformation we're creating together."
          />

          {/* Toggle Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setMediaType("images")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                mediaType === "images"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setMediaType("videos")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                mediaType === "videos"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setMediaType("banners")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                mediaType === "banners"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Banners
            </button>
          </div>

          {/* Media Grid Section */}
          <motion.section
            className="py-12 px-4 sm:px-8"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {mediaItems.map((item, index) => (
                <motion.div
                  key={item.id}
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
                    {item.type === "image" || item.type === "banner" ? (
                      <img
                        src={item.src}
                        alt={`Item ${item.id}`}
                        className="w-full h-64 object-cover object-top cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      />
                    ) : (
                      <video
                        src={item.src}
                        className="w-full h-64 object-cover cursor-pointer"
                        muted
                        loop
                        playsInline
                        onClick={() => setSelectedItem(item)}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lightbox Overlay */}
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <div className="relative">
                  {/* Close Button */}
                  <motion.button
                    className={`absolute z-50 bg-black bg-opacity-50 text-white text-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-70 ${
                      selectedItem.type === "video"
                        ? "top-2 right-2"
                        : "bottom-2 left-1/2 transform -translate-x-1/2"
                    }`}
                    onClick={() => setSelectedItem(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &times;
                  </motion.button>

                  {/* Media Display */}
                  {selectedItem.type === "image" || selectedItem.type === "banner" ? (
                    <motion.img
                      src={selectedItem.src}
                      alt="Selected item"
                      className="rounded-lg max-w-full max-h-[80vh] object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="rounded-lg max-w-full max-h-[80vh]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default Gallery;