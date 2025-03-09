// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold mb-4 border-b-2 border-green-500 inline-block">Write to Us</h3>
          <p className="text-lg mt-4">We would love to hear from you!</p>
          <p className="text-lg">Email: info@weo.org</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Contact Us</h3>
          <p className="text-lg mt-4">Reach out for collaborations or inquiries.</p>
          <p className="text-lg">Address: 123 Greenway Blvd, Nature City</p>
          <p className="text-lg">Phone: +1 234 567 8901</p>
          <p className="text-lg">Email: info@weo.org</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
