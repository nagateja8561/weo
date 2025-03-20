import React from "react";
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const Donate = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="bg-green-600 text-white py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">Donate</h1>
            <p className="text-lg">
              Your contributions help us create a sustainable future and expand
              our impactful initiatives.
            </p>
          </section>

          {/* Donation Methods Section */}
          <section className="py-16 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Scan to Donate</h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Use your mobile device to scan the QR code below and make a
                donation conveniently.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                {/* QR Code Image */}
                <img
                  src="/weo/images/qr-code.png"
                  alt="Scan to Donate QR Code"
                  className="w-56 h-56 mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Direct Donation Section */}
          <section className="py-16 px-4 sm:px-8 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Direct Donation</h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Prefer to donate directly? You can use the following details for
                bank transfers or other direct payments.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block text-left">
                <p className="text-lg font-bold mb-2">Bank Details:</p>
                <p>Account Name: WEO Foundation</p>
                <p>Account Number: 123456789</p>
                <p>IFSC Code: ABCD0123456</p>
                <p>Branch: Jubilee Hills, Hyderabad</p>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-16 bg-green-600 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Thank You for Your Support
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Your contributions make a significant impact and bring us closer
                to our goals. Together, we can achieve extraordinary things.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default Donate;
