import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Layout from "../components/Layout";
import GradientOverlay from "../components/GradientOverlay";
import {
  fadeIn,
  pageVariants,
  staggerContainer,
  cardHoverAnimation,
  sectionFadeIn,
  iconRotationAnimation
} from "../components/animations";

import {
  FaLeaf,
  FaTree,
  FaSeedling,
  FaHandsHelping,
  FaFlask,
  FaGlobe
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <PageTransition>
      <Layout>
        <motion.div
          className="bg-gray-50 text-gray-800 relative"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Hero */}
          <GradientOverlay
            className="text-white"
            title="About WEO"
            subtitle="Helping Our Earth, Helping People"
            backgroundImage="/images/aboutus.jpeg"
          />

          {/* About WEO Section */}

          <motion.section
            className="py-16 md:py-20 px-4 sm:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >
            <div className="max-w-6xl mx-auto text-center">

              <motion.h2
                className="text-4xl md:text-5xl font-black mb-8 tracking-tight"
                variants={fadeIn}
              >
                What is WEO?
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={fadeIn}
              >
                The World Environment Organization (WEO) is a Public Charitable
                Trust functioning as a Global Stewardship Sanctuary. We bridge
                ancient tribal wisdom with modern scientific research to restore
                our planet’s health and protect human life.
              </motion.p>

            </div>
          </motion.section>

          {/* How We Work */}

          <motion.section
            className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-blue-50"
            initial="hidden"
            animate="visible"
            variants={sectionFadeIn}
          >

            <div className="max-w-7xl mx-auto text-center">

              <h2 className="text-4xl font-bold mb-12">
                How We Work
              </h2>

              <div className="grid md:grid-cols-3 gap-10">

                {/* Heritage + Science */}

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg"
                  variants={fadeIn}
                >
                  <FaFlask className="text-5xl text-blue-500 mx-auto mb-4" />

                  <h3 className="text-xl font-bold mb-3">
                    Heritage & Science Sync
                  </h3>

                  <p className="text-gray-600">
                    We fuse indigenous ecological knowledge with cutting-edge
                    scientific research and technology to solve modern
                    environmental crises.
                  </p>

                </motion.div>

                {/* Green Rangers */}

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg"
                  variants={fadeIn}
                >
                  <FaSeedling className="text-5xl text-green-500 mx-auto mb-4" />

                  <h3 className="text-xl font-bold mb-3">
                    WEO Green Rangers
                  </h3>

                  <p className="text-gray-600">
                    Our research-backed curriculum transforms students into
                    active guardians of nature and helps build Net-Zero schools
                    for the future.
                  </p>

                </motion.div>

                {/* Community */}

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg"
                  variants={fadeIn}
                >
                  <FaHandsHelping className="text-5xl text-orange-500 mx-auto mb-4" />

                  <h3 className="text-xl font-bold mb-3">
                    Community Restoration
                  </h3>

                  <p className="text-gray-600">
                    We adopt villages to create self-sufficient sustainability
                    models while providing medical aid, environmental education,
                    and social support to communities.
                  </p>

                </motion.div>

              </div>

            </div>

          </motion.section>

          {/* Why We Exist */}

          <motion.section
            className="py-16 px-4 sm:px-8 bg-white"
            variants={sectionFadeIn}
            initial="hidden"
            animate="visible"
          >

            <div className="max-w-5xl mx-auto text-center">

              <h2 className="text-4xl font-bold mb-8">
                Why We Exist
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are responding to a global environmental and health emergency.
                Scientific research shows that the average person now unknowingly
                ingests about <strong>5 grams of microplastics weekly</strong> —
                roughly the weight of a credit card. These toxins are increasingly
                linked to severe health risks including hormonal disruption and
                cancer.
              </p>

              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                In India, breast cancer incidence has surged by
                <strong> 477.8% since 1990</strong>, and scientists are exploring
                connections between rising plastic exposure and this alarming
                trend.
              </p>

            </div>

          </motion.section>

          {/* Pollution Free Goal */}

          <motion.section
            className="py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-500 to-green-400 text-white"
            variants={sectionFadeIn}
            initial="hidden"
            animate="visible"
          >

            <div className="max-w-5xl mx-auto text-center">

              <FaGlobe className="text-6xl mx-auto mb-6" />

              <h2 className="text-4xl font-bold mb-6">
                Our Goal: Pollution-Free 2050
              </h2>

              <p className="text-lg md:text-xl leading-relaxed">
                WEO is dedicated to restoring the purity of the three essential
                elements of life: <strong>Water, Soil, and Air</strong>.
                Through education, environmental restoration, policy advocacy,
                and scientific innovation, we are working toward a planet free
                from pollution by the year 2050.
              </p>

              <p className="mt-8 text-xl font-semibold tracking-wide">
                "LET US UNITE — PROTECT OUR ENVIRONMENT"
              </p>

            </div>

          </motion.section>

          {/* Mission Vision */}

          <motion.section
            className="py-16 md:py-20 px-4 sm:px-8 bg-white"
            variants={sectionFadeIn}
            initial="hidden"
            animate="visible"
          >

            <motion.div
              className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-center"
              variants={staggerContainer}
            >

              {/* Mission */}

              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-10 rounded-lg shadow-lg text-white"
                variants={{ ...fadeIn, ...cardHoverAnimation }}
              >

                <h2 className="text-4xl font-black mb-6 border-b-4 border-white pb-4">
                  Our Mission
                </h2>

                <p className="text-lg leading-relaxed">
                  To protect our planet by combining traditional ecological
                  wisdom with scientific innovation while empowering communities,
                  students, and institutions to become guardians of nature.
                </p>

              </motion.div>

              {/* Vision */}

              <motion.div
                className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] p-10 rounded-lg shadow-lg text-white"
                variants={{ ...fadeIn, ...cardHoverAnimation }}
              >

                <h2 className="text-4xl font-black mb-6 border-b-4 border-white pb-4">
                  Our Vision
                </h2>

                <p className="text-lg leading-relaxed">
                  A world where humanity and nature coexist in harmony, ensuring
                  clean air, pure water, healthy soil, and a sustainable future
                  for generations to come.
                </p>

              </motion.div>

            </motion.div>

          </motion.section>

        </motion.div>
      </Layout>
    </PageTransition>
  );
};

export default AboutUs;