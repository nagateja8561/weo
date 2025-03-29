import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <div className="bg-white font-sans">
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout; 