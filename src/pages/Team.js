import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PageTransition from "./PageTransition";
import Layout from "./Layout";

const teamMembers = [
  {
    name: "CHIPPA VEERABHADRAM",
    designation: "Founder & CEO",
    image: "/weo/images/bhadra.jpg",
  },
  {
    name: "NIKHIL SAI KONETI",
    designation: "General Secretary",
    image: "/weo/images/nikhil.jpg",
  },
  {
    name: "MOHAMMED RIZWAN",
    designation: "Treasurer",
    image: "/weo/images/rizwan.jpg",
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <PageTransition>
      <Layout>
        {/* Background Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-24 text-center">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At <strong>World Environment Organization</strong>, we are united by
            a shared vision of a sustainable planet. Meet the change-makers
            leading our efforts to protect and nurture our environment.
          </motion.p>
        </div>

        {/* Team Members Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto shadow-md"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
                <h3 className="text-xl font-bold mt-4 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave Section Divider */}
        <div className="wave-divider bg-gradient-to-r from-blue-500 to-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,224L30,229.3C60,235,120,245,180,240C240,235,300,213,360,186.7C420,160,480,128,540,117.3C600,107,660,117,720,133.3C780,149,840,171,900,160C960,149,1020,107,1080,112C1140,117,1200,171,1260,197.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Additional Professional Message Section */}
        <div className="bg-blue-50 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Together for a Greener Tomorrow
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto">
            Our team is dedicated to leading initiatives that inspire
            communities and drive lasting change. Join us in making an impact
            and creating a sustainable future for generations to come.
          </p>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default OurTeam;
