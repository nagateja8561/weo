// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialIcons from './SocialIcons';

const Layout = ({ children }) => {
  return (
    <div className="bg-white font-sans">
      <Header />
      {children}
      <Footer />
      <SocialIcons />
    </div>
  );
};

export default Layout;
