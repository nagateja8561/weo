import React from 'react';
import PageTransition from './PageTransition';
import Layout from './Layout';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <div className="py-32 text-center text-gray-800 bg-green-600 text-white">
          <h1 className="text-5xl sm:text-6xl font-bold">About Us</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Learn more about our mission, vision, and the journey that drives us to create a sustainable future.
          </p>
        </div>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
                We are dedicated to solving global challenges with innovative, scalable, and sustainable solutions. Our
                mission is to empower individuals and communities while promoting environmental responsibility and
                long-term growth.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
            Our vision is a future where innovation and sustainability converge to create lasting positive change, 
            empowering individuals and organizations to reach their full potential. We are committed to building a brighter, 
            greener world where nature and humanity coexist in harmony, ensuring clean air, pure water, 
            and a thriving planet for generations to come.
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-lg leading-relaxed mb-8">
              Be a part of our mission to create sustainable solutions for the challenges of tomorrow.
            </p>
            <Link
              to="/get-involved"
              className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold shadow hover:bg-gray-200 transition"
            >
              Get Involved
            </Link>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;
