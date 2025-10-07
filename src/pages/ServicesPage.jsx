import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import {
  FaCode,
  FaRocket,
  FaShoppingCart,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaCloud,
  FaTools,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      id: "starter",
      icon: FaCode,
      title: "Starter Website",
      blurb:
        "A clean, fast, custom-coded site for portfolios and small businesses.",
      bullets: [
        "Custom React components (no templates)",
        "Responsive & accessible (WCAG 2.1)",
        "Contact form + basic SEO",
        "Deployed with best practices",
      ],
      meta: { timeline: "~1–2 weeks" },
    },
    {
      id: "business",
      icon: FaCogs,
      title: "Business Website",
      blurb:
        "Marketing site plus content tools and integrations for growing teams.",
      bullets: [
        "CMS/admin for easy updates",
        "Multiple forms & analytics",
        "Performance & image optimization",
        "Google Business/Maps integration",
      ],
      meta: { timeline: "~2–3 weeks" },
    },
    {
      id: "ecommerce",
      icon: FaShoppingCart,
      title: "eCommerce",
      blurb:
        "Modern storefront with secure checkout, dashboards, and inventory.",
      bullets: [
        "Stripe/PayPal integration",
        "Product catalog & order management",
        "Customer accounts & email receipts",
        "Speed & SEO tuned for conversions",
      ],
      meta: { timeline: "~3–5 weeks" },
    },
    {
      id: "custom-app",
      icon: FaRocket,
      title: "Custom Web App",
      blurb:
        "Bespoke applications, dashboards, and workflow automation tailored to your ops.",
      bullets: [
        "React + Node/Express APIs",
        "Auth & role-based access",
        "Data modeling (MongoDB/Firebase)",
        "Scalable, testable architecture",
      ],
      meta: { timeline: "Scoped per project" },
    },
  ];

  const addons = [
    { icon: FaMobileAlt, name: "PWA / Mobile Hardening" },
    { icon: FaSearch, name: "SEO & Content Strategy" },
    { icon: FaCloud, name: "Cloud & DevOps Setup" },
    { icon: FaTools, name: "Maintenance & Care Plans" },
    { icon: FaChartLine, name: "Analytics & Conversion" },
    { icon: FaShieldAlt, name: "Security Reviews" },
  ];

  const steps = [
    {
      icon: FaHandshake,
      title: "1) Discover",
      text: "Understand goals, users, and constraints. Clear scope, clear success.",
    },
    {
      icon: FaClipboardCheck,
      title: "2) Design",
      text: "Wireframes & UI decisions aligned to your brand and accessibility.",
    },
    {
      icon: FaCode,
      title: "3) Build",
      text: "Iterative development with frequent previews and feedback loops.",
    },
    {
      icon: FaRocket,
      title: "4) Launch",
      text: "Deploy, harden, monitor, and measure. Smooth handoff with docs.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Services | Boswell Digital Solutions LLC"
        description="Custom React websites, business sites, eCommerce, and bespoke digital solutions. Veteran-owned, Lexington KY. Accessibility-first, SEO-ready, and performance focused."
        keywords="web development services, react developer, ecommerce development, custom web app, lexington ky"
        url="https://boswellwebdevelopment.com/services"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-16 px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent"
            >
              Services Built for Real Results
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Veteran-owned studio crafting custom, accessible, and fast
              websites—from idea to launch and beyond.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
              >
                <Link to="/portfolio">See Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Service Cards */}
        <section className="px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-center mb-10"
            >
              What We Offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {services.map((svc) => (
                <motion.div
                  key={svc.id}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mb-4">
                    <svc.icon className="text-blue-300 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{svc.blurb}</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-4">
                    {svc.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400 mb-4">
                    Typical timeline: <span className="text-gray-200">{svc.meta.timeline}</span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate("/contact")}
                  >
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Add-ons & Capabilities */}
        <section className="px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-center mb-10"
            >
              Add-Ons & Capabilities
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addons.map((a, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-4 border border-gray-700"
                >
                  <div className="w-10 h-10 rounded-md bg-gray-900/60 border border-gray-700 flex items-center justify-center">
                    <a.icon className="text-blue-300" />
                  </div>
                  <div className="text-gray-200 font-medium">{a.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process */}
        <section className="px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-center mb-10"
            >
              How We Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mb-4">
                    <s.icon className="text-blue-300 text-xl" />
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-300">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Guarantee / Values */}
        <section className="px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                  <FaShieldAlt className="text-red-300 text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Veteran Standards. Built to Last.
                  </h3>
                  <p className="text-gray-300">
                    We design for performance, security, and accessibility—then
                    prove it with audits and real metrics. Clear communication,
                    dependable delivery, and support after launch.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build?
            </motion.h2>
            <motion.p variants={item} className="text-gray-300 mb-8">
              Tell us about your goals—we’ll propose a clear, no-pressure plan and timeline.
            </motion.p>
            <motion.div variants={item} className="flex gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
