import React from "react";
import Layout from "../components/Layout";
import PageTransition from "../components/PageTransition";
import { FaBolt, FaRecycle, FaBalanceScale, FaSchool } from "react-icons/fa";

const MinuteADayRead = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-12">

          <div className="max-w-6xl mx-auto">

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              Minute a Day Read
            </h1>

            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              A quick one-minute read to understand key environmental trends
              and simple actions that help build a sustainable future.
            </p>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Energy Digital Shift */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FaBolt className="text-3xl text-yellow-500" />
                  <h2 className="text-2xl font-bold">
                    Energy–Digital Shift
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Electricity is becoming the world’s primary power source for
                  transport and heating. Artificial Intelligence acts as the
                  system's “brain,” optimizing renewable energy grids,
                  predicting demand, and improving industrial efficiency.
                </p>
              </div>

              {/* Restoration and Circularity */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FaRecycle className="text-3xl text-green-500" />
                  <h2 className="text-2xl font-bold">
                    Restoration & Circularity
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Businesses are moving toward regenerative practices that
                  restore ecosystems. Circular models are becoming a strategic
                  priority as companies design products for reuse and longer
                  life cycles to reduce waste and material costs.
                </p>
              </div>

              {/* Legalized Stewardship */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FaBalanceScale className="text-3xl text-blue-500" />
                  <h2 className="text-2xl font-bold">
                    Legalized Stewardship
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Environmental protection is shifting from voluntary action to
                  mandatory policy. The 2026 High Seas Treaty and new global
                  regulations treat sustainability reporting as seriously as
                  financial reporting, making environmental accountability a
                  legal responsibility.
                </p>
              </div>

              {/* School Programs */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FaSchool className="text-3xl text-purple-500" />
                  <h2 className="text-2xl font-bold">
                    School Environmental Programs
                  </h2>
                </div>

                <ul className="text-gray-600 space-y-3">
                  <li>
                    🌱 <strong>Daily Micro-Tasks:</strong> Simple actions
                    students can practice every day to build sustainable habits.
                  </li>

                  <li>
                    🌍 <strong>The Daily Pledge:</strong> One-minute assembly
                    video modules designed to inspire environmental stewardship
                    among students.
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </Layout>
    </PageTransition>
  );
};

export default MinuteADayRead;
