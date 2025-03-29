import React from "react";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-24">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6">Privacy Policy</h1>
            <p className="text-lg sm:text-m md:text-3xl">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-lg text-gray-600">
                  This Privacy Policy outlines how we handle your personal
                  information when you visit our website or use our services. By
                  accessing our website, you agree to the terms of this Privacy
                  Policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Information We Collect
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                  <li>
                    Personal information such as your name, email address, and
                    phone number.
                  </li>
                  <li>
                    Usage data, including your IP address, browser type, and
                    pages visited.
                  </li>
                  <li>
                    Cookies and similar technologies to enhance your browsing
                    experience.
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-lg text-gray-600">
                  We use your information to provide and improve our services,
                  communicate with you, and ensure the security of our platform.
                  Your data will never be sold to third parties.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-lg text-gray-600">
                  You have the right to access, update, or delete your personal
                  information. If you have any concerns about your data, please
                  contact us at{" "}
                  <a href="mailto:privacy@weoindia.in" className="text-green-600">
                    privacy@weoindia.in
                  </a>
                  .
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@weoindia.in" className="text-green-600">
                    privacy@weoindia.in
                  </a>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Address:</strong> H No- 8-3-231/A/11/1, Sri Krishna
                  Nagar Main Road, Jubilee Hills, Hyderabad-500033, India
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default PrivacyPolicy;
