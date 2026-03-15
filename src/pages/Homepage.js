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
  teamCardAnimation,
  sectionFadeIn,
} from "../components/animations";
import { 
  FaLeaf, 
  FaChartLine, 
  FaUsers,
  FaRecycle,
  FaWind,
  FaWater,
  FaVolumeUp,
  FaCalendarCheck
} from "react-icons/fa";
import { teamMembers } from "./Team";

const Homepage = () => {
  // Get first 3 team members for preview
  const previewTeam = teamMembers.slice(0, 4);

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
            className="text-white"
            title="Let Us Unite to Protect Our Environment"
            subtitle="Save Nature, Save Future"
            backgroundImage="/images/homepage.jpeg"
          />

          {/* Live Impact Ticker */}

            <section className="bg-black text-white py-3 overflow-hidden">

              <div className="relative w-full overflow-hidden">

                <div className="animate-marquee whitespace-nowrap text-lg font-medium">

                  🌍 Average person eats 5g of microplastics weekly — the weight of a credit card

                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

                  ⚠️ Breast cancer in India has surged 477.8% since 1990 linked to plastic toxins

                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

                  🧬 Humans inhale 68,000 microplastic particles every day

                </div>

              </div>

            </section>

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
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight"
                variants={fadeIn}
              >
                Our Environmental Impact
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">

                {[
                  {
                    icon: <FaRecycle className="text-3xl md:text-4xl text-green-500" />,
                    number: "40K+",
                    text: "Trees Planted"
                  },
                  {
                    icon: <FaWater className="text-3xl md:text-4xl text-blue-500" />,
                    number: "1.2M+",
                    text: "Litres of Water Saved"
                  },
                  {
                    icon: <FaUsers className="text-3xl md:text-4xl text-purple-500" />,
                    number: "3000+",
                    text: "Teachers Trained"
                  },
                  {
                    icon: <FaUsers className="text-3xl md:text-4xl text-indigo-500" />,
                    number: "200K+",
                    text: "Students Awareness"
                  },
                  {
                    icon: <FaWind className="text-3xl md:text-4xl text-cyan-500" />,
                    number: "500K+",
                    text: "kg CO2 Reduced"
                  },
                  {
                    icon: <FaCalendarCheck className="text-3xl md:text-4xl text-orange-500" />,
                    number: "500+",
                    text: "Awareness Events"
                  },
                  {
                    icon: <FaRecycle className="text-3xl md:text-4xl text-green-600" />,
                    number: "3",
                    text: "Plastic-Free Schools"
                  }

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

                      <h3 className="text-3xl md:text-4xl font-black mt-2 md:mt-4">
                        {stat.number}
                      </h3>

                      <p className="text-base md:text-lg text-gray-600 mt-1 md:mt-2 font-medium">
                        {stat.text}
                      </p>
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
                      description:
                        "India added a record 44.5 GW renewable energy capacity in 2025, nearly doubling annual additions.",
                      icon: <FaWind className="text-2xl md:text-3xl text-blue-500" />
                    },
                    {
                      title: "Global Energy Transition",
                      description:
                        "Global investment in energy transition reached $2.1 trillion in 2024.",
                      icon: <FaChartLine className="text-2xl md:text-3xl text-green-500" />
                    },
                    {
                      title: "Sustainable Investments",
                      description:
                        "The global ESG market is projected to grow from $35.48T to $191T by 2035.",
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
        
                  {/* Environmental Initiatives */}
                  <motion.section
                    className="py-12 md:py-20 px-4 sm:px-8 bg-gray-50"
                    initial="hidden"
                    animate="visible"
                    variants={sectionFadeIn}
                  >
                    <div className="max-w-7xl mx-auto">
        
                      <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight text-center"
                        variants={fadeIn}
                        custom={0.5}
                      >
                        Our Environmental Initiatives
                      </motion.h2>
        
                      <motion.p
                        className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center"
                        variants={fadeIn}
                        custom={0.8}
                      >
                        Our initiatives focus on real-world environmental impact through
                        education, restoration, clean energy, and community-driven sustainability.
                      </motion.p>
        
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={staggerContainer}
                      >
        
                        {/* Net Zero Schools */}
                        <motion.div
                          className="bg-white rounded-lg shadow-lg p-6"
                          variants={fadeIn}
                          custom={0.8}
                        >
                          <h3 className="text-xl font-bold mb-3 text-green-600">
                            Net Zero Schools
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Following our 2025 success in training over 3,000 teachers and
                            educating 100,000 students, we are expanding our Plastic-Free
                            initiative to 1,000 schools in 2026. This program aims to move
                            from pilot success to a large-scale framework for planetary
                            stewardship in education systems.
                          </p>
                        </motion.div>
        
                        {/* Tree Plantation */}
                        <motion.div
                          className="bg-white rounded-lg shadow-lg p-6"
                          variants={fadeIn}
                          custom={1}
                        >
                          <h3 className="text-xl font-bold mb-3 text-green-600">
                            Tree Plantation Initiative
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our annual tree plantation drive in 2025 resulted in planting
                            more than 12,000 trees across multiple regions, helping create
                            green corridors and restore biodiversity in vulnerable ecosystems.
                          </p>
                        </motion.div>
        
                        {/* Water Conservation */}
                        <motion.div
                          className="bg-white rounded-lg shadow-lg p-6"
                          variants={fadeIn}
                          custom={1.2}
                        >
                          <h3 className="text-xl font-bold mb-3 text-green-600">
                            Water Conservation
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Through rainwater harvesting and water recycling initiatives,
                            our projects have helped save over 1 million liters of water,
                            supporting sustainable water management in communities.
                          </p>
                        </motion.div>
        
                        {/* Clean Energy */}
                        <motion.div
                          className="bg-white rounded-lg shadow-lg p-6"
                          variants={fadeIn}
                          custom={1.4}
                        >
                          <h3 className="text-xl font-bold mb-3 text-green-600">
                            Clean Energy Projects
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Solar panels and wind turbines installed in remote regions
                            are helping communities transition to renewable energy while
                            reducing over 500,000 tons of CO₂ emissions.
                          </p>
                        </motion.div>
        
                        {/* Heritage Meets Science */}
                        <motion.div
                          className="bg-white rounded-lg shadow-lg p-6 md:col-span-2"
                          variants={fadeIn}
                          custom={1.6}
                        >
                          <h3 className="text-xl font-bold mb-3 text-green-600">
                            Heritage Meets Science
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We bridge Tribal Ecological Knowledge with modern scientific
                            innovation, creating restoration strategies that combine
                            ancestral wisdom with advanced technology to build a
                            sustainable and resilient future.
                          </p>
                        </motion.div>
        
                      </motion.div>
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
