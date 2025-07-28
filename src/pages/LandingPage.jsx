import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaEnvelope, FaCertificate } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import {
  trackResumeDownload,
  trackResumeView,
  trackSocialClick,
} from "@/utils/analytics";

export default function LandingPage() {
  // Animation variants for better organization
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  const buttonTap = {
    scale: 0.95,
    transition: { duration: 0.1 },
  };

  return (
    <>
      <SEOHead
        title="Boswell Web Development Solutions LLC - Custom React Websites | Lexington, KY"
        description="Veteran-owned web development company in Lexington, KY. Custom React websites, AI integration, and business automation. Starting at $750. Professional, reliable, military-grade precision."
        keywords="web development lexington ky, react developer kentucky, veteran owned business, custom websites, AI integration, MERN stack, web design lexington"
        url="https://boswellwebdevelopment.com"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full text-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG?alt=media&token=e0c77b96-1841-43a0-8ee9-43e5ef2cb344"
              alt="Boswell Web Development Solutions LLC Logo"
              className="mx-auto w-80 h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent"
          >
            Boswell Web Development Solutions LLC
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-200"
          >
            Veteran-owned and AI-powered development studio specializing in
            custom web solutions, business process automation, and intelligent
            tools built with React, Node.js, Firebase, and OpenAI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            <motion.div
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                className="text-base md:text-lg px-8 py-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 shadow-lg"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Hire Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                asChild
                className="text-base md:text-lg px-8 py-4 w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 shadow-lg"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="w-full sm:w-auto"
            >
              <Button
                variant="ghost"
                asChild
                className="text-base md:text-lg px-8 py-4 w-full sm:w-auto text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg"
              >
                <Link to="/resume" onClick={() => trackResumeView()}>
                  View Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() => trackResumeDownload()}
                >
                  📄 Download PDF Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 text-3xl md:text-4xl mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/charles-boswell-0057b1340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
              onClick={() => trackSocialClick("linkedin")}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Boswecw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
              onClick={() => trackSocialClick("github")}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.credly.com/users/charles-boswell.a88e7759"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Credly Badges"
              onClick={() => trackSocialClick("credly")}
            >
              <FaCertificate />
            </motion.a>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            variants={itemVariants}
            className="text-sm md:text-base opacity-80 mb-8"
          >
            <p className="text-gray-300">
              Based in Lexington, KY • Proudly Veteran-Owned • Built with
              Passion & Precision
            </p>
          </motion.div>

          {/* Certification Badge */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.img
              src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/full-stack-web-developer-nanodegree.png?alt=media&token=0eb8452d-aeed-481c-809f-3f156392e153"
              alt="Full Stack Web Developer Certification Badge"
              className="w-32 h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <p className="mt-3 text-xs md:text-sm text-gray-400">
              Certified by Kable Academy – July 2025
            </p>
          </motion.div>
        </motion.div>

        {/* Background decoration elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-5 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </>
  );
}
