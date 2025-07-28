import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaEnvelope, FaCertificate, FaRocket, FaShieldAlt, FaFlag, FaCode, FaHandshake, FaClock, FaFileAlt } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import {
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
        description="Veteran-owned web development company in Lexington, KY. Custom React websites, AI integration, and business automation. First customer special: 50% off ($375). Professional, reliable, military-grade precision."
        keywords="web development lexington ky, react developer kentucky, veteran owned business, custom websites, AI integration, MERN stack, web design lexington, first customer special"
        url="https://boswellwebdevelopment.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        {/* Hero Section */}
        <div className="p-6 flex flex-col items-center justify-center min-h-screen">
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
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
            >
              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  className="text-base md:text-lg px-8 py-4 w-full sm:w-auto bg-red-600 hover:bg-red-700 shadow-lg font-bold"
                >
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    <FaRocket className="text-sm" />
                    Get 50% Off - First 3 Clients
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
                  <Link to="/about">About Us</Link>
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
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Secondary Actions */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  <Link
                    to="/resume"
                    onClick={() => trackResumeView()}
                    className="inline-flex items-center gap-2"
                  >
                    <FaFileAlt className="text-sm" />
                    View Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6 mb-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/charlesboswell/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick('LinkedIn')}
                whileHover={{ scale: 1.1, color: "#0077b5" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/Boswecw"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick('GitHub')}
                whileHover={{ scale: 1.1, color: "#333" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-3xl" />
              </motion.a>

              <motion.a
                href="mailto:charlesboswell@boswellwebdevelopment.com"
                onClick={() => trackSocialClick('Email')}
                whileHover={{ scale: 1.1, color: "#ea4335" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <FaEnvelope className="text-3xl" />
              </motion.a>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-4 text-gray-400"
            >
              <FaCertificate className="text-yellow-400" />
              <span className="text-sm">Veteran-Owned Business | Lexington, KY</span>
            </motion.div>
          </motion.div>
        </div>

        {/* First Customer Special Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-2xl p-8 mb-12 relative overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-block mb-4"
                >
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase">
                    🎯 Limited Time - First 3 Clients Only
                  </span>
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Launch Special: Professional Website
                </h2>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl text-white/60 line-through">$750</span>
                  <span className="text-4xl md:text-5xl font-bold text-white">$375</span>
                  <span className="text-white/80 text-lg">- 50% OFF</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 text-white">
                    <FaRocket className="text-yellow-300 text-xl flex-shrink-0" />
                    <span>3-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaShieldAlt className="text-yellow-300 text-xl flex-shrink-0" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaFlag className="text-yellow-300 text-xl flex-shrink-0" />
                    <span>Veteran-Owned Business</span>
                  </div>
                </div>
                
                <p className="text-white/90 mb-6 max-w-lg mx-auto">
                  Perfect for small businesses, professionals, and portfolios. 
                  Custom-coded React website with contact forms and SEO setup.
                </p>
                
                <Button
                  asChild
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <Link to="/contact">
                    Claim Your 50% Discount →
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Us Teaser */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-6 bg-gray-900/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaFlag className="text-red-500 text-2xl" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Veteran-Owned & Mission-Driven
                </h2>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                Founded by Charles Boswell, a U.S. Navy veteran with 20+ years of government service including 
                16 years managing wildfire operations. We bring military-grade precision and real-world 
                problem-solving to every line of code.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-white">
                  <FaFlag className="text-red-400" />
                  <span className="text-sm">Navy Veteran</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <FaCode className="text-blue-400" />
                  <span className="text-sm">Custom Code Only</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <FaHandshake className="text-green-400" />
                  <span className="text-sm">Local Partnership</span>
                </div>
              </div>
              
              <Button
                asChild
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-2"
              >
                <Link to="/about">
                  Learn Our Story →
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Overview */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              What Makes Us Different
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
                <p className="text-gray-300">
                  No WordPress templates. Every website is built from scratch using modern React, 
                  ensuring fast performance and unique design.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Integration</h3>
                <p className="text-gray-300">
                  Cutting-edge AI features including chatbots, automation, and intelligent content 
                  management to give your business a competitive edge.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Military Precision</h3>
                <p className="text-gray-300">
                  Veteran-owned business with military-grade attention to detail, security, 
                  and reliability you can trust for your critical business needs.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-6 bg-gray-900/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p className="text-lg text-gray-300 mb-8">
              Join the first 3 Kentucky businesses to get a professional website at 50% off. 
              Limited time offer with 3-day delivery and 100% satisfaction guarantee.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                >
                  <Link to="/contact">
                    <FaRocket className="mr-2" />
                    Get 50% Off Now
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Button
                  variant="outline"
                  asChild
                  className="border-gray-400 text-gray-300 hover:bg-gray-700 px-8 py-4 text-lg"
                >
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
              <FaClock className="text-green-400" />
              <span className="text-sm">
                Response time: Under 24 hours | Based in Lexington, KY
              </span>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}