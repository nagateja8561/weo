import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
import { FaTree, FaSeedling, FaLeaf, FaWater } from "react-icons/fa";
import { GiButterfly, GiBirdHouse } from "react-icons/gi";

const GradientOverlay = ({ 
  children, 
  className = "",
  title,
  subtitle
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#00ff77]">
        {/* Nature Elements Layer */}
        <div className="absolute inset-0">
          {/* Growing Trees */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`tree-${i}`}
              className="absolute bottom-0"
              style={{
                left: `${10 + (i * 20)}%`,
              }}
              initial={{ scale: 0, y: 50 }}
              animate={{ 
                scale: [0.9, 1.1, 0.9],
                y: [2, -2, 2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <FaTree 
                className="text-white/40" 
                size={60 + Math.random() * 40}
              />
            </motion.div>
          ))}

          {/* Growing Seedlings */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`seedling-${i}`}
              className="absolute bottom-10"
              style={{
                left: `${5 + (i * 12)}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                rotate: [-5, 5, -5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <FaSeedling 
                className="text-white/30" 
                size={25 + Math.random() * 15}
              />
            </motion.div>
          ))}

          {/* Floating Leaves */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
              }}
              animate={{
                x: [-20, 20, -20],
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              <FaLeaf 
                className="text-white/20" 
                size={10 + Math.random() * 8}
              />
            </motion.div>
          ))}

          {/* Butterflies */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`butterfly-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${20 + Math.random() * 40}%`,
              }}
              animate={{
                x: [-50, 50, -50],
                y: [-30, 30, -30],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <GiButterfly 
                className="text-white/25" 
                size={20 + Math.random() * 10}
              />
            </motion.div>
          ))}

          {/* Bird Houses */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`birdhouse-${i}`}
              className="absolute"
              style={{
                right: `${10 + (i * 25)}%`,
                top: `${15 + (i * 10)}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                rotate: [-3, 3, -3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            >
              <GiBirdHouse 
                className="text-white/30" 
                size={35}
              />
            </motion.div>
          ))}

          {/* Water Droplets */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`water-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeIn",
              }}
            >
              <FaWater 
                className="text-white/20" 
                size={12}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight font-sans text-white drop-shadow-lg">
              {title}
            </h1>
          </motion.div>
          {subtitle && (
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed font-serif italic text-white/90 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GradientOverlay; 