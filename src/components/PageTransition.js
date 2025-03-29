import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "./animations";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 