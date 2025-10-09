// src/pages/AboutPage.jsx
// import React from "react"; // Not needed in React 17+
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  FaArrowLeft,
  FaEnvelope,
  FaFire,
  FaTree,
  FaCode,
  FaGraduationCap,
  FaFlag,
  FaExternalLinkAlt,
} from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";

export default function AboutPage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <SEOHead
        title="About — Boswell Digital Solutions LLC | Veteran-Owned Web & AI Studio"
        description="Learn about Charles Boswell, U.S. Navy veteran and founder of Boswell Digital Solutions LLC. We build fast, secure, and accessible websites and AI tools for real-world impact."
        keywords="about, Boswell Digital Solutions, veteran-owned, web developer, Lexington KY, AI, SvelteKit, FastAPI"
        url="https://boswelldigitalsolutions.com/about"
      />

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-24 p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-gray-300 hover:text-white"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                About Boswell Digital Solutions LLC
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto" />
            </div>
          </motion.div>

          {/* Hero Statement */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
                Purpose-Built Websites & AI Tools with Real-World Impact
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At <strong className="text-blue-400">Boswell Digital Solutions LLC</strong>, the web
                isn't just visual—it's operational. We build fast, secure, and accessible
                experiences that help small businesses, authors, and mission-driven teams reach
                their goals with <em className="text-blue-300">measurable results</em>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded by U.S. Navy veteran <strong className="text-blue-300">Charles Boswell</strong>,
                our studio blends veteran precision with modern stacks—React &amp; SvelteKit on the
                front end, Node/Express or <strong>FastAPI</strong> on the back end—plus pragmatic AI
                integrations (OpenAI, LangChain, TensorFlow.js). Deployments are hardened and
                monitored on Netlify, Render, and Firebase.
              </p>
            </div>
          </motion.section>

          {/* From Field to Future */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="relative max-w-xs mx-auto">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/CharlesBoswell.jpg?alt=media&token=1ba4211f-b06c-49c3-9ef9-96e75fccc8e0"
                      alt="Portrait of Charles Boswell, Founder of Boswell Digital Solutions LLC"
                      className="w-full h-auto rounded-xl shadow-2xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-semibold">Charles Boswell</h3>
                    <p className="text-gray-400 text-sm">Founder &amp; Lead Developer</p>
                    <p className="text-blue-400 text-sm">U.S. Navy Veteran • Former USFS Leader</p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <FaFire className="text-orange-500 text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">From the Field to the Future</h2>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Charles spent 16 years in wildfire operations, habitat management, and
                  high-stakes logistics—experience that translates to calm execution, risk
                  management, and resilient systems in software.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After graduating Kable Academy's full-time Digital Solutions &amp; AI program in 2025,
                  he founded Boswell Digital Solutions in Lexington, Kentucky, with a mission to{" "}
                  <strong className="text-blue-400">build technology that serves people</strong>.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Today we ship accessible, performant apps with React or SvelteKit, secure APIs with
                  Node/Express or FastAPI, and pragmatic AI features that create real leverage.
                </p>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-white font-semibold mb-6 text-center">Charles's Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaFlag className="text-blue-400 text-sm" />
                          <span className="text-white font-medium">U.S. Navy Veteran</span>
                        </div>
                        <p className="text-gray-400 text-sm">Leadership, discipline, secure ops</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaTree className="text-green-400 text-sm" />
                          <span className="text-white font-medium">16 Years — U.S. Forest Service</span>
                        </div>
                        <p className="text-gray-400 text-sm">Wildfire operations &amp; habitat management</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaGraduationCap className="text-purple-400 text-sm" />
                          <span className="text-white font-medium">Kable Academy Graduate (2025)</span>
                        </div>
                        <p className="text-gray-400 text-sm">Full-Stack Digital Solutions &amp; AI</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-600 w-3 h-3 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaCode className="text-yellow-400 text-sm" />
                          <span className="text-white font-medium">Founded Boswell Digital Solutions</span>
                        </div>
                        <p className="text-gray-400 text-sm">Lexington, KY — 2024 to Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sample Work */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-center text-white mb-6">Sample Work</h3>

              {/* Card: Restaurant Demo */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-600">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=400&q=80"
                      alt="Kentucky Bistro Restaurant demo screenshot"
                      className="w-full h-32 object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Kentucky Bistro Restaurant Demo
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Full-feature restaurant site with online reservations, responsive UI, and
                      accessibility best practices. Built quickly to show local businesses what's possible.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-medium">React</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs font-medium">Responsive</span>
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs font-medium">Accessible</span>
                    </div>

                    <a
                      href="/restaurant-demo.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors inline-flex items-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      View Live Demo &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Optional: Brief line about other flagship projects */}
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  Also ask about our Leopold Nature Observation App, AI Biz Starter Template, and FurBabies MERN Store.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something That Matters</h2>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                We help small businesses grow, environmental ideas take root, and local dreams go digital—
                with performance, security, and accessibility baked in.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => navigate("/contact")}
                  className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-3 text-lg shadow-xl border-2 border-white/30 hover:border-white/50 transition-all"
                >
                  <FaEnvelope className="mr-2" />
                  Get Started Today
                </Button>
                <Button
                  onClick={() => navigate("/portfolio")}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transition-all"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* FAQ at the very bottom */}
      <FAQSection />
    </>
  );
}