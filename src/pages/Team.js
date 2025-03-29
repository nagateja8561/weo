import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import Button from "../components/Button";
import { fadeIn, staggerContainer, imageHoverAnimation } from "../components/animations";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "CHIPPA VEERABHADRAM",
      designation: "Founder & CEO",
      image: "/images/team/bhadra.jpg",
    },
    {
      name: "NIKHIL SAI KONETI",
      designation: "General Secretary",
      image: "/images/team/nikhil.jpg",
    },
    {
      name: "MOHAMMED RIZWAN",
      designation: "Treasurer",
      image: "/images/team/rizwan.jpg",
    },
  ];

  return (
    <PageTransition>
      <Layout>
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <GradientOverlay className="text-white text-center py-24">
            <motion.h1
              className="text-5xl font-bold mb-4"
              variants={fadeIn}
              custom={0.5}
            >
              Our Team
            </motion.h1>
            <motion.p
              className="text-lg"
              variants={fadeIn}
              custom={1}
            >
              At <strong>World Environment Organization</strong>, we are united by
              a shared vision of a sustainable planet. Meet the change-makers
              leading our efforts to protect and nurture our environment.
            </motion.p>
          </GradientOverlay>

          {/* Team Section */}
          <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
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
                    className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                    variants={fadeIn}
                    custom={index * 0.2}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Join Us Section */}
          <motion.section
            className="py-16 px-4 sm:px-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl font-bold mb-6"
                variants={fadeIn}
                custom={0}
              >
                Together for a Greener Tomorrow
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={fadeIn}
                custom={0.2}
              >
                Our team is dedicated to leading initiatives that inspire
                communities and drive lasting change. Join us in making an impact
                and creating a sustainable future for generations to come.
              </motion.p>
              <motion.div variants={fadeIn} custom={0.4}>
                <Link to="/contact-us">
                  <Button variant="primary" size="large">
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
