// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
// import SocialIcons from './SocialIcons';

const Layout = ({ children }) => {
  return (
    <div className="bg-white font-sans">
      <Header />
      {/* Add top padding equal to header height (set by Header). Fallback 80px.
          Add a small transition to avoid a hard jump when header height updates. */}
      <main
        style={{
          paddingTop: "var(--header-height, 80px)",
          transition: "padding-top 220ms ease",
        }}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      {/* <SocialIcons /> */}
    </div>
  );
};

export default Layout;