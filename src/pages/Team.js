import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import Button from "../components/Button";
import { fadeIn, sectionFadeIn, cardHoverAnimation } from "../components/animations";
import { Link } from "react-router-dom";

export const teamMembers = [
  {
    name: "CHIPPA VEERABHADRAM",
    designation: "Founder & CEO",
    image: "/images/team/bhadra.jpg",
    bio: "Leading the charge for environmental sustainability with over 10 years of experience in environmental conservation."
  },
  {
    name: "NIKHIL SAI KONETI",
    designation: "General Secretary",
    image: "/images/team/nikhil.jpg",
    bio: "Driving organizational excellence and strategic initiatives for environmental impact."
  },
  {
    name: "MOHAMMED RIZWAN",
    designation: "Treasurer",
    image: "/images/team/rizwan.jpg",
    bio: "Managing financial resources to maximize our environmental initiatives and community impact."
  },
];

const Team = () => {
  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <GradientOverlay 
            className="text-white py-24"
            title="Our Team"
            subtitle="At World Environment Organization, we are united by a shared vision of a sustainable planet. Meet the change-makers leading our efforts to protect and nurture our environment."
          />

          {/* Team Section */}
          <motion.section
            className="py-12 sm:py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-white shadow-xl rounded-lg p-4 sm:p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                    variants={fadeIn}
                    custom={index * 0.2}
                    whileHover="hover"
                  >
                    <motion.div
                      className="relative h-48 sm:h-64 overflow-hidden rounded-lg mb-4"
                      variants={cardHoverAnimation}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto shadow-md"
                      />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{member.designation}</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">{member.bio}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Join Us Section */}
          <motion.section
            className="py-12 sm:py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeIn}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                variants={fadeIn}
                custom={0}
              >
                Together for a Greener Tomorrow
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
                variants={fadeIn}
                custom={0.2}
              >
                Our team is dedicated to leading initiatives that inspire
                communities and drive lasting change. Join us in making an impact
                and creating a sustainable future for generations to come.
              </motion.p>
              <motion.div 
                variants={fadeIn} 
                custom={0.4}
                className="flex justify-center"
              >
                <Link to="/contact-us">
                  <Button 
                    variant="primary" 
                    size="large"
                    className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold hover:from-[#0099cc] hover:to-[#00cc66] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default Team;
