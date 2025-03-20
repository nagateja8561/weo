import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Ensure framer-motion is imported correctly
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import WhatWeDo from './pages/WhatWeDo';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';

// ScrollToTop Component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the pathname changes
  }, [pathname]);

  return null; // No visible output needed
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop /> {/* Ensures the scroll resets on every route change */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
          <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/what-we-do" element={<PageWrapper><WhatWeDo /></PageWrapper>} />
          <Route path="/get-involved" element={<PageWrapper><GetInvolved /></PageWrapper>} />
          <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const App = () => (
  <Router basename="/weo">
    <AnimatedRoutes />
  </Router>
);

export default App;
