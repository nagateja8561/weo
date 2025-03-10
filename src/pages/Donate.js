// AboutUs.js
import React from 'react';
import PageTransition from './PageTransition';
import Layout from './Layout';

const AboutUs = () => {
  return (
    <PageTransition>
    <Layout>
      <div className="py-32 text-center text-gray-800">
        <h1 className="text-6xl font-bold">Donate</h1>
        <p className="text-lg mt-4">Learn more about our mission and our journey</p>
        {/* Additional about us content */}
      </div>
    </Layout>
    </PageTransition>
  );
};

export default AboutUs;
