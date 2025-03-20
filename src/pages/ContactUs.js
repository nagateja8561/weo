import React from "react";
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const ContactUs = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="bg-green-600 text-white py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              Have questions, feedback, or want to get involved? Reach out to
              us!
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Get in Touch
              </h2>
              <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-16 px-4 sm:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Our Address</h3>
                <p>H No- 8-3-231/A/11/1</p>
                <p>Sri Krishna Nagar Main Road, Jubilee Hills</p>
                <p>India, Hyderabad-500033</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p>+91 7075576601</p>
                <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p>info@weo.com</p>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Location
              </h2>
              <iframe
                title="Google Map"
                className="w-full h-72 md:h-96 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7695567902213!2d78.42348751540592!3d17.430376380563138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97746c5f935b%3A0x12345678abcdef!2sH%20No-8-3-231%2FA%2F11%2F1%2C%20Sri%20Krishna%20Nagar%20Main%20Road%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033%2C%20India!5e0!3m2!1sen!2sin!4v1618353171285!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default ContactUs;
