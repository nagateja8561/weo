import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const GradientOverlay = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative bg-gradient-to-r from-[#00aaff] to-[#00ff77] ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientOverlay; 