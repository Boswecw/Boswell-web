import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCertificate,
  FaRocket,
  FaShieldAlt,
  FaFlag,
  FaCode,
  FaClock,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

export default function LandingPage() {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <>
      <SEOHead
        title="Boswell Web Development Solutions LLC - Custom React Websites | Lexington, KY"
        description="Veteran-owned web development company in Lexington, KY. Custom React websites, AI integration, and business automation. Professional, reliable, military-grade precision."
        keywords="web development lexington ky, react developer kentucky, veteran owned business, custom websites, AI integration, MERN stack, web design lexington"
        url="https://boswellwebdevelopment.com"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative">
        <Navbar />

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero */}
        <div className="pt-24 pb-16 px-6 flex flex-col items-center justify-center min-h-screen relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl w-full text-center relative z-10"
          >
            {/* Hero Banner */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
              animate={floatingAnimation}
            >
              <div className="relative">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/HeroBanner.webp?alt=media&token=166c48c7-919c-402e-9479-6e1583efba39"
                  alt="Boswell Web Development — Hero Banner"
                  width="1600" // 👈 real width of your file
                  height="800" // 👈 real height of your file
                  className="mx-auto w-full max-w-5xl h-auto rounded-2xl shadow-2xl border border-blue-500/20"
                  loading="eager"
                  decoding="async"
                />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide"
            >
              <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                Boswell Web Development
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light">
                Solutions LLC
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed text-gray-200 font-light">
                Veteran-owned development studio crafting
              </p>
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-blue-300">
                custom web solutions • AI integration • business automation
              </p>
            </motion.div>

            {/* Tech chips */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-400">
                <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  React
                </span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  Firebase
                </span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  OpenAI
                </span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  TypeScript
                </span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-8 mb-12"
            >
              <motion.a
                href="https://www.linkedin.com/in/kywebdevboswell/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-blue-400 transition-colors p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-blue-400"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Boswecw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-white"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="mailto:charlesboswell@boswellwebdevelopment.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-red-400 transition-colors p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-red-400"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </motion.div>

            {/* Cert line */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-3 text-gray-400"
            >
              <FaCertificate className="text-yellow-400 text-lg" />
              <span className="text-sm md:text-base">
                Veteran-Owned Business • Lexington, Kentucky
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6 bg-gray-900/30 backdrop-blur-sm"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Military Precision Meets Modern Innovation
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaFlag className="text-red-500 text-3xl" />
                  <h3 className="text-2xl font-bold text-white">
                    Our Foundation
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Founded by Charles Boswell, a U.S. Navy veteran with over 20
                  years of government service, including 16 years managing
                  wildfire operations. We bring military-grade precision,
                  reliability, and problem-solving expertise to every project.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Every solution is crafted with the same attention to detail
                  and commitment to excellence that defined our military
                  service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-6"
              >
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCode className="text-blue-400 text-xl" />
                    <span className="text-white font-semibold">
                      Custom Development
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    No templates. Every line of code is purpose-built.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaRocket className="text-green-400 text-xl" />
                    <span className="text-white font-semibold">
                      AI Integration
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Cutting-edge AI features for competitive advantage.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <FaShieldAlt className="text-red-400 text-xl" />
                    <span className="text-white font-semibold">
                      Veteran Standards
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Military-grade security and reliability.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              What Sets Us Apart
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCode,
                  title: "Custom Solutions",
                  description:
                    "Built from scratch using modern frameworks. No WordPress templates or cookie-cutter approaches.",
                },
                {
                  icon: FaRocket,
                  title: "AI-Powered",
                  description:
                    "Intelligent automation, chatbots, and AI features that give your business a competitive edge.",
                },
                {
                  icon: FaShieldAlt,
                  title: "Battle-Tested",
                  description:
                    "Veteran-owned reliability with military precision in security, performance, and delivery.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6 bg-gray-900/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Start Your Project?
            </motion.h2>
            <motion.p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create something extraordinary
              together. Every project begins with understanding your unique
              needs.
            </motion.p>

            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <FaClock className="text-green-400" />
              <span className="text-sm">Response Time: Under 24 Hours</span>
              <span className="mx-2">•</span>
              <span className="text-sm">Based in Lexington, KY</span>
            </div>

            <div className="text-center">
              <a
                href="mailto:charlesboswell@boswellwebdevelopment.com"
                className="text-blue-400 hover:text-blue-300 text-lg font-medium underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors"
              >
                charlesboswell@boswellwebdevelopment.com
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
