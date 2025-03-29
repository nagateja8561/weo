import React from "react";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import AQISection from "./AQISection";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const TelanganaAQIDataPage = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Top Blue-Green Box with "Telangana Cities Data" */}
          <motion.section
            className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white text-center py-24"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.5}
          >
            <motion.h1 className="text-5xl font-bold">
            AQI Data for All Cities in Telangana
            </motion.h1>
            <motion.p
              className="text-lg mt-4 max-w-2xl mx-auto"
              variants={fadeIn}
              custom={1}
            >
              Explore the Air Quality Index (AQI) data for cities in Telangana.
              Stay informed about the pollution levels and their impact on health.
            </motion.p>
          </motion.section>

          {/* AQI Section - Full Page View */}
          <AQISection view="full" />
        </div>
      </Layout>
    </PageTransition>
  );
};

export default TelanganaAQIDataPage;
