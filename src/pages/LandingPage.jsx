import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaStar,
  FaTimes,
  FaCertificate,
} from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import { trackSocialClick } from "@/utils/analytics";

export default function ImprovedLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  const faqs = [
    {
      q: "Why should I choose a newly launched business?",
      a: "You're not choosing a beginner—you're choosing an experienced professional with 20+ years of proven leadership. Newly independent means you get the full attention and responsiveness of someone building their reputation, combined with the discipline and reliability of a military veteran. No corporate overhead, no junior developers—just direct access to an experienced developer who cares about your success.",
    },
    {
      q: "What's your experience level?",
      a: "20+ years in leadership roles (U.S. Navy + Forest Service), recent Kable Academy graduate with modern full-stack certification, and hands-on experience building production applications including GPS-enabled apps, AI integrations, and e-commerce platforms. I bring operational excellence from the military to web development.",
    },
    {
      q: "How long does a typical project take?",
      a: "Starter websites: 5-7 days • Business websites: 10-14 days • eCommerce: 14-21 days. Military training taught me the importance of meeting deadlines—your timeline is my mission.",
    },
    {
      q: "What makes you different from other developers?",
      a: "Military-grade reliability with modern technology expertise. I use cutting-edge tools (React, AI integration) while bringing the discipline and communication skills from 20+ years of professional service. You work directly with me—no outsourcing, no project managers, no surprises.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Absolutely. Each package includes revisions during development. Post-launch, I offer maintenance packages ($75-$150/month) including updates, security monitoring, backups, and direct support. I'm not disappearing after delivery—reliability is foundational to how I operate.",
    },
  ];

  const projects = [
    {
      title: "Kentucky Bistro Demo",
      description: "Full-featured restaurant website with online ordering, reservations, and mobile-responsive design",
      tech: "React • Tailwind • Framer Motion",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      title: "Livy History Tour App",
      description: "Production PWA with GPS navigation, offline capabilities, AI Q&A, and Firebase real-time sync",
      tech: "React • Firebase • OpenAI • PWA",
      image: "https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/The%20old%20downtown%20Lexington_.jpg?alt=media&token=ea8bd943-92f9-4ac3-bfa7-f96229a26561",
    },
    {
      title: "Leopold Nature Tracker",
      description: "Advanced nature observation app with TensorFlow audio classification and cloud data management",
      tech: "React • TensorFlow.js • Firebase",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <SEOHead
        title="Boswell Digital Solutions LLC | Veteran-Owned Web Development & AI Studio"
        description="Veteran-owned digital solutions company in Lexington, KY. Custom React websites, AI integration, and business automation. Starting at $750."
        keywords="digital solutions lexington ky, react developer kentucky, veteran owned business, custom websites, AI integration, MERN stack, web design lexington"
        url="https://boswelldigitalsolutions.com"
      />

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Launch Special Banner */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-4 text-center relative z-50"
            >
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex-1 text-sm md:text-base font-semibold">
                  🚀 <span className="text-yellow-200">LAUNCH SPECIAL:</span> 50% Off Starter Packages - Building Our Lexington Portfolio • Limited Slots Available
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="ml-4 text-white hover:text-gray-200"
                >
                  <FaTimes />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-16 pt-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Hero Image/Logo - Improved Integration */}
          <motion.div variants={itemVariants} className="mb-8" animate={floatingAnimation}>
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/HeroBanner.webp?alt=media&token=166c48c7-919c-402e-9479-6e1583efba39"
                alt="Boswell Digital Solutions"
                className="w-full h-auto rounded-xl shadow-2xl border border-blue-500/20"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* New Compelling Headline */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
              Web Solutions That Don't Miss the Target
            </span>
          </motion.h1>

          {/* Stronger Tagline */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg md:text-2xl mb-3 text-gray-200 font-light">
              Veteran-owned studio with 20+ years leadership experience, now serving Lexington businesses
            </p>
            <p className="text-base md:text-lg text-blue-300">
              Custom React websites • AI integration • Business automation • Starting at $900
            </p>
          </motion.div>

          {/* Dual CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Get Your Free Quote
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <span>20+ Years Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-400" />
              <span>Launch in 5-7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
              {["React", "Node.js", "Firebase", "OpenAI", "TypeScript"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us - Benefit-Focused */}
      <section id="services" className="py-16 px-6 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Experience Meets Innovation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: "Built for Your Exact Needs",
                description: "No cookie-cutter templates. Every site is custom-coded to work exactly how you need it to, with features that actually help your business grow.",
              },
              {
                icon: FaRocket,
                title: "Stay Ahead of Competition",
                description: "AI-powered features that save you time and delight your customers. From intelligent chatbots to automated workflows—technology that actually works.",
              },
              {
                icon: FaShieldAlt,
                title: "Mission-Critical Reliability",
                description: "20+ years in the Navy and Forest Service taught me that reliability isn't negotiable. Your deadlines are my mission objectives—I deliver on time, every time, with military-grade precision.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <item.icon className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Capabilities</h2>
            <p className="text-gray-300">Real applications showcasing professional-grade development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <p className="text-xs text-blue-400 font-mono">{project.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              See more projects <FaExternalLinkAlt />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / About */}
      <section className="py-16 px-6 bg-gray-900/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                CB
              </div>
              <div>
                <h3 className="text-2xl font-bold">Veteran-Owned, Newly Serving Lexington</h3>
                <p className="text-gray-400">Charles Boswell • U.S. Navy Veteran • Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              After 20+ years of leadership in the U.S. Navy and Forest Service, I recently transitioned to private sector web development. I bring the same mission-critical precision, reliability, and attention to detail that defined my military service—now applied to building websites that actually work for your business.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Why choose a newly independent studio?</strong> You get the experience of a seasoned professional with the responsiveness and dedication of someone building their reputation. No corporate bureaucracy, no project managers—just direct communication with the developer who builds your site.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Navy Veteran", icon: "🎖️", sub: "Operational Leadership" },
                { label: "16 Years USFS", icon: "🌲", sub: "Team Management" },
                { label: "2025 Graduate", icon: "🎓", sub: "Modern Tech Stack" },
                { label: "Lexington Based", icon: "📍", sub: "Local Support" },
              ].map((badge, idx) => (
                <div key={idx} className="bg-gray-900/50 rounded p-3">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-sm font-semibold text-white mb-1">{badge.label}</div>
                  <div className="text-xs text-gray-400">{badge.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Everything you need to know</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-700/30 transition"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  {openFaq === idx ? (
                    <FaChevronUp className="text-blue-400 flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-blue-900 to-purple-900 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Work With a Veteran Developer?</h2>
          <p className="text-xl text-gray-200 mb-2">
            Direct access to an experienced professional. No sales team, no project managers.
          </p>
          <p className="text-lg text-blue-300 mb-8">
            Free consultation • Launch special pricing • Fast turnaround
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:charlesboswell@boswelldigitalsolutions.com"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Email Us
            </a>
            <a
              href="tel:+18594367304"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition inline-flex items-center justify-center gap-2"
            >
              📞 (859) 436-7304
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/kywebdevboswell/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-blue-400"
              onClick={() => trackSocialClick('LinkedIn')}
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/CharlesWBoswell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-white"
              onClick={() => trackSocialClick('GitHub')}
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="mailto:charlesboswell@boswelldigitalsolutions.com"
              onClick={() => trackSocialClick('Email')}
              className="text-gray-300 hover:text-red-400 transition p-3 bg-gray-800/30 rounded-full border border-gray-700 hover:border-red-400"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>

          {/* Cert line */}
          <div className="flex justify-center items-center gap-3 text-gray-400">
            <FaCertificate className="text-yellow-400 text-lg" />
            <span className="text-sm md:text-base">
              Veteran-Owned Business • Lexington, Kentucky
            </span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-400 text-sm relative z-10">
        <p className="mb-2">© 2025 Boswell Digital Solutions LLC. All rights reserved.</p>
        <p className="text-xs">
          Veteran-Owned • 20+ Years Professional Leadership • Newly Serving Lexington, KY & Beyond • Built with React + ❤️
        </p>
      </footer>
      </div>
    </>
  );
}