import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const GradientOverlay = ({ 
  children, 
  className = "",
  title,
  subtitle
}) => {
  return (
    <motion.div
      className={`relative bg-gradient-to-r from-[#00aaff] to-[#00ff77] ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="relative z-10">
          <motion.div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight font-sans">
              {title}
            </h1>
          </motion.div>
          {subtitle && (
            <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed font-serif italic">
              {subtitle}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default GradientOverlay; 