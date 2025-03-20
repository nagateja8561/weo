import React from "react";
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const WhatWeDo = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="bg-green-600 text-white py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-lg">
              We are committed to creating a sustainable future through innovative solutions and impactful initiatives.
            </p>
          </section>

          {/* Priority Areas Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Priorities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Priority 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Provide Food & Water Sustainably</h3>
                  <p className="text-gray-600">
                    Addressing global food and water challenges by promoting sustainable practices and innovative solutions.
                  </p>
                </div>
                {/* Priority 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Protect & Restore Wild Habitats</h3>
                  <p className="text-gray-600">
                    Conserving biodiversity by protecting and restoring critical habitats for wildlife and ecosystems.
                  </p>
                </div>
                {/* Priority 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Build Healthy Cities</h3>
                  <p className="text-gray-600">
                    Creating sustainable urban environments by addressing air pollution, water scarcity, and climate resilience.
                  </p>
                </div>
                {/* Priority 4 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Support Renewable Energy</h3>
                  <p className="text-gray-600">
                    Promoting clean energy solutions to reduce greenhouse gas emissions and combat climate change.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-16 bg-green-600 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
              <p className="text-lg leading-relaxed mb-8">
                Together, we can create a sustainable future for generations to come. Be a part of the change today.
              </p>
              <a
                href="/weo/get-involved"
                className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold shadow hover:bg-gray-200 transition"
              >
                Get Involved
              </a>
            </div>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default WhatWeDo;
