import React from "react";
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const GetInvolved = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="bg-green-600 text-white py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">Get Involved</h1>
            <p className="text-lg">
              Join hands with us to create a lasting impact. Together, we can make a difference.
            </p>
          </section>

          {/* Ways to Support Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ways to Support Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Support Option 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Volunteer With Us</h3>
                  <p className="text-gray-600">
                    Contribute your time and skills to our initiatives. Help us in creating sustainable solutions.
                  </p>
                  <a
                    href="/weo/contact-us"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    ContactUs
                  </a>
                </div>
                {/* Support Option 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Donate</h3>
                  <p className="text-gray-600">
                    Your generous donations help us sustain and expand our initiatives to make a greater impact.
                  </p>
                  <a
                    href="/weo/donate"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Donate Now
                  </a>
                </div>
                {/* Support Option 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Corporate Partnerships</h3>
                  <p className="text-gray-600">
                    Collaborate with us as a corporate partner and support impactful projects that align with your goals.
                  </p>
                  <a
                    href="/weo/contact-us"
                    className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    ContactUs
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-16 bg-green-600 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Become a Part of the Change</h2>
              <p className="text-lg leading-relaxed mb-8">
                Whether it’s through volunteering, donations, or partnerships, your support helps us create a sustainable future.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default GetInvolved;
