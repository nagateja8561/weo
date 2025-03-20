import React from "react";
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
        <div className="py-32 text-center text-gray-800">
          <h1 className="text-6xl font-bold">Our Team</h1>
          <p className="text-lg mt-4">
            Meet the passionate individuals behind our mission.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default OurTeam;
