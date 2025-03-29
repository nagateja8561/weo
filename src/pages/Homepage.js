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
  FaWater
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
                  { icon: <FaRecycle className="text-3xl md:text-4xl text-green-500" />, number: "2.5M+", text: "Trees Planted" },
                  { icon: <FaWind className="text-3xl md:text-4xl text-blue-500" />, number: "500K+", text: "CO2 Reduced" },
                  { icon: <FaWater className="text-3xl md:text-4xl text-cyan-500" />, number: "1M+", text: "Water Saved" },
                  { icon: <FaGlobeAmericas className="text-3xl md:text-4xl text-emerald-500" />, number: "50+", text: "Countries Reached" }
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

          {/* AQI Section */}
          {/* <AQISection view="home" /> */}

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
              <div className="text-center mt-12">
                <Link to="/team">
                  <Button variant="primary" size="large">
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
