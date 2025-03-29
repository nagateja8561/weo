import React from "react";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import AQISection from "./AQISection";
import GradientOverlay from "../components/GradientOverlay";



const TelanganaAQIDataPage = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="AQI Data for All Cities in Telangana"
            subtitle="Explore the Air Quality Index (AQI) data for cities in Telangana. Stay informed about the pollution levels and their impact on health."
          />

          {/* AQI Section - Full Page View */}
          <AQISection view="full" />
        </div>
      </Layout>
    </PageTransition>
  );
};

export default TelanganaAQIDataPage;
