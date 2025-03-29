import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import Button from "../components/Button";
// import AQISection from "./AQISection";
import { 
  fadeIn, 
  pageVariants, 
  staggerContainer, 
  imageHoverAnimation,
  statsCardAnimation,
  trendsCardAnimation,
  teamCardAnimation
} from "../components/animations";
import { 
  FaLeaf, 
  FaChartLine, 
  FaUsers, 
  FaGlobeAmericas,
  FaRecycle,
  FaWind,
  FaWater,
  FaVolumeUp
} from "react-icons/fa";
import { teamMembers } from "./Team";

const Homepage = () => {
  // Get first 3 team members for preview
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <PageTransition>
      <Layout>
        <motion.div 
          className="bg-gray-50 text-gray-800"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="Let Us Unite to Protect Our Environment"
            subtitle="Save Nature, Save Future"
          />

          {/* Environmental Impact Stats */}
          <motion.section
            className="py-12 md:py-16 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight font-sans"
                variants={fadeIn}
              >
                Our Environmental Impact
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { icon: <FaRecycle className="text-3xl md:text-4xl text-green-500" />, number: "10k+", text: "Trees Planted" },
                  { icon: <FaWind className="text-3xl md:text-4xl text-blue-500" />, number: "50K+", text: "CO2 Reduced" },
                  { icon: <FaWater className="text-3xl md:text-4xl text-cyan-500" />, number: "100k+", text: "Water Saved" },
                  { icon: <FaGlobeAmericas className="text-3xl md:text-4xl text-emerald-500" />, number: "5+", text: "Countries Reached" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    variants={statsCardAnimation}
                    custom={index * 0.1}
                    whileHover="hover"
                  >
                    <div className="flex flex-col items-center text-center">
                      {stat.icon}
                      <h3 className="text-3xl md:text-4xl font-black mt-2 md:mt-4 font-sans">{stat.number}</h3>
                      <p className="text-base md:text-lg text-gray-600 mt-1 md:mt-2 font-medium">{stat.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Pollution Trends Section */}
          <motion.section
            className="py-12 md:py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight font-sans"
                variants={fadeIn}
              >
                Pollution Trends Analysis
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Air Quality Card */}
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.2}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaChartLine className="text-3xl text-red-500" />
                    <h3 className="text-xl font-bold text-gray-800">Air Quality Trends</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2019</span>
                      <span className="text-red-500 font-semibold">21/30 Most Polluted Cities</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2020</span>
                      <span className="text-red-500 font-semibold">140M+ People Affected</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2021</span>
                      <span className="text-red-500 font-semibold">2M+ Premature Deaths</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2023</span>
                      <span className="text-red-500 font-semibold">$28.8B Economic Loss</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    India faces significant air quality challenges, with major cities consistently ranking among the world's most polluted.
                  </p>
                </motion.div>

                {/* Water Pollution Card */}
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.4}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaWater className="text-3xl text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-800">Water Pollution Status</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sewage Treatment</span>
                      <span className="text-red-500 font-semibold">11,786 MLD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sewage Generated</span>
                      <span className="text-orange-500 font-semibold">38,354 MLD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Water Available</span>
                      <span className="text-yellow-500 font-semibold">1,122 BCM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Rainfall</span>
                      <span className="text-green-500 font-semibold">4,000 BCM</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    India faces significant water quality challenges, with only 31% of sewage being treated despite abundant water resources.
                  </p>
                </motion.div>

                {/* Soil Contamination Card */}
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.6}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaLeaf className="text-3xl text-emerald-500" />
                    <h3 className="text-xl font-bold text-gray-800">Soil Contamination</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Industrial Waste</span>
                      <span className="text-red-500 font-semibold">7.17M Tonnes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Heavy Metals</span>
                      <span className="text-orange-500 font-semibold">Lead, Cadmium</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Affected Areas</span>
                      <span className="text-yellow-500 font-semibold">30% Urban</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Contamination</span>
                      <span className="text-green-500 font-semibold">Severe</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Industrial activities and urbanization have led to significant soil contamination with heavy metals and hazardous waste.
                  </p>
                </motion.div>

                {/* Noise Pollution Card */}
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.8}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaVolumeUp className="text-3xl text-purple-500" />
                    <h3 className="text-xl font-bold text-gray-800">Noise Pollution</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Urban Areas</span>
                      <span className="text-red-500 font-semibold">85+ dB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Traffic Noise</span>
                      <span className="text-orange-500 font-semibold">70-90 dB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Construction</span>
                      <span className="text-yellow-500 font-semibold">90+ dB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Safe Limit</span>
                      <span className="text-green-500 font-semibold">55 dB</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Urban areas face significant noise pollution from traffic, construction, and industrial activities, exceeding safe limits.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Market Trends Section */}
          <motion.section
            className="py-12 md:py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight font-sans"
                variants={fadeIn}
              >
                Latest Market Trends
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                  {
                    title: "Renewable Energy Growth",
                    description: "Global renewable energy capacity increased by 10% in 2023",
                    icon: <FaWind className="text-2xl md:text-3xl text-blue-500" />
                  },
                  {
                    title: "Sustainable Investments",
                    description: "ESG investments reached $40 trillion in 2023",
                    icon: <FaChartLine className="text-2xl md:text-3xl text-green-500" />
                  },
                  {
                    title: "Green Technology",
                    description: "Clean tech startups raised $50B+ in funding",
                    icon: <FaLeaf className="text-2xl md:text-3xl text-emerald-500" />
                  }
                ].map((trend, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    variants={trendsCardAnimation}
                    custom={index * 0.1}
                    whileHover="hover"
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      {trend.icon}
                      <h3 className="text-xl md:text-2xl font-bold font-sans">{trend.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 font-medium">{trend.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Environmental Initiatives Section */}
          <motion.section
            className="py-12 md:py-16 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight font-sans"
                variants={fadeIn}
              >
                Our Environmental Initiatives
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.2}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaLeaf className="text-3xl text-green-500" />
                    <h3 className="text-xl font-bold text-gray-800">Tree Plantation Drive</h3>
                  </div>
                  <p className="text-gray-600">
                    Our annual tree plantation initiative has successfully planted over 2.5 million trees across various regions, creating green corridors and restoring biodiversity.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.4}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaWater className="text-3xl text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-800">Water Conservation</h3>
                  </div>
                  <p className="text-gray-600">
                    Through our water conservation projects, we've saved over 1 million liters of water by implementing rainwater harvesting and water recycling systems.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeIn}
                  custom={0.6}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaWind className="text-3xl text-cyan-500" />
                    <h3 className="text-xl font-bold text-gray-800">Clean Energy Projects</h3>
                  </div>
                  <p className="text-gray-600">
                    We've installed solar panels and wind turbines in remote areas, reducing CO2 emissions by over 500,000 tons and providing clean energy to communities.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Team Preview Section */}
          <motion.section
            id="team-section"
            className="py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 md:mb-16 tracking-tight font-sans"
                variants={fadeIn}
              >
                Meet Our Team
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {previewTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-white shadow-xl rounded-lg p-6 text-center transform transition-all duration-300"
                    variants={teamCardAnimation}
                    custom={index * 0.1}
                    whileHover="hover"
                  >
                    <motion.div
                      className="relative h-64 overflow-hidden"
                      whileHover="hover"
                      variants={imageHoverAnimation}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 object-cover rounded-full mx-auto shadow-md"
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold mt-4 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.designation}</p>
                    <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex justify-center mt-12">
                <Link to="/team">
                <Button 
                    variant="primary" 
                    size="large"
                    className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300 flex items-center"
                  >
                    <FaUsers className="text-2xl mr-2" />
                    View Full Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default Homepage;
