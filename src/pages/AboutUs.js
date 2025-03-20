import React from "react";
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="py-32 text-center text-gray-800 bg-green-600 text-white relative">
          <img
            src="/weo/images/about-us.png" // Replace with your actual image path
            alt="About Us Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold">About Us</h1>
            <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Learn more about our mission, vision, and the journey that drives
              us to create a sustainable future.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* Mission Box */}
            <div className="bg-green-600 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                We are dedicated to solving global challenges with innovative,
                scalable, and sustainable solutions. Our mission is to empower
                individuals and communities while promoting environmental
                responsibility and long-term growth.
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-green-600 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                Our vision is a future where innovation and sustainability
                converge to create lasting positive change, empowering
                individuals and organizations to reach their full potential. We
                are committed to building a brighter, greener world where nature
                and humanity coexist in harmony, ensuring clean air, pure water,
                and a thriving planet for generations to come.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;
