// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
  FaStar,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaFlag,
  FaHandshake,
} from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import {
  trackContactFormSubmit,
  trackPackageSelection,
  trackEmailClick,
  trackPhoneClick,
} from "@/utils/analytics";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const navigate = useNavigate();

  // Pricing packages
  const packages = [
    {
      id: "starter",
      name: "Starter Website",
      price: "$900 – $1,500",
      description: "Clean, fast, custom-coded site for portfolios and small businesses.",
      pages: "1–3",
      revisions: "3",
      timeline: "1–2 weeks",
      popular: false,
      features: [
        "Custom React components (no templates)",
        "Responsive & accessible (WCAG 2.1)",
        "Contact form + basic SEO",
        "Deployed with best practices",
        "Analytics setup",
        "Email/domain setup guidance",
      ],
    },
    {
      id: "business",
      name: "Business Website",
      price: "$1,800 – $3,500",
      description: "Marketing site plus content tools and integrations for growing teams.",
      pages: "4–7",
      revisions: "5",
      timeline: "2–3 weeks",
      popular: true,
      features: [
        "Everything from Starter",
        "CMS/admin for easy updates",
        "Multiple forms & dashboards",
        "Performance & image optimization",
        "Google Business/Maps integration",
        "Content modeling & SEO enhancements",
      ],
    },
    {
      id: "ecommerce",
      name: "eCommerce Website",
      price: "$3,000 – $6,000+",
      description:
        "Modern storefront with secure checkout, inventory, and order management.",
      pages: "5–10+",
      revisions: "Unlimited",
      timeline: "3–5 weeks",
      popular: false,
      features: [
        "Stripe/PayPal integration",
        "Product catalog & orders",
        "Customer accounts & email receipts",
        "Speed & SEO tuned for conversions",
        "Admin dashboard for products",
        "Tax/shipping rules setup",
      ],
    },
    {
      id: "custom",
      name: "Custom Web App",
      price: "Custom Quote",
      description:
        "Bespoke apps, dashboards, workflows, and automation tailored to your ops.",
      pages: "Scoped",
      revisions: "Scoped",
      timeline: "Scoped per project",
      popular: false,
      features: [
        "React front-end + Node/Express APIs",
        "Auth & role-based access",
        "MongoDB/Firebase data modeling",
        "Scalable, testable architecture",
      ],
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState("starter");
  const defaultPkg = packages.find((p) => p.id === "starter");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "web-development",
    budget: defaultPkg?.price || "$900 – $1,500",
    timeline: defaultPkg?.timeline || "1–2 weeks",
    message: "",
  });

  // UI state for AJAX + toast working
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: null, msg: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (packageId) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    if (!selected) return;
    
    setSelectedPackage(packageId);
    setFormData((prev) => ({
      ...prev,
      budget: selected.price,
      projectType: packageId === "ecommerce" ? "ecommerce" : "web-development",
      timeline: selected.timeline,
    }));
    trackPackageSelection(selected.name);
  };

  // FIXED: Enhanced form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setToast({ type: null, msg: "" });

    try {
      const formEl = e.currentTarget;
      const selected = packages.find((pkg) => pkg.id === selectedPackage);
      
      // Create FormData from the actual form
      const data = new FormData(formEl);
      
      // CRITICAL FIX: Ensure form-name is set
      data.set("form-name", "contact");
      
      // CRITICAL FIX: Manually add all the state values to ensure they're included
      data.set("name", formData.name);
      data.set("email", formData.email);
      data.set("company", formData.company);
      data.set("timeline", formData.timeline);
      data.set("budget", formData.budget);
      data.set("message", formData.message);
      data.set("projectType", formData.projectType);
      
      // Add package selection data
      data.set("selectedPackageId", selectedPackage);
      data.set("selectedPackageName", selected?.name || "");
      data.set("selectedPackagePrice", selected?.price || "");

      // CRITICAL FIX: Convert FormData to URLSearchParams properly
      const formParams = new URLSearchParams();
      for (let [key, value] of data.entries()) {
        formParams.append(key, value);
      }

      // Debug logging (remove in production)
      console.log("Submitting form data:", Object.fromEntries(formParams.entries()));

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });

      if (!res.ok) {
        throw new Error(`Netlify form POST failed: ${res.status} ${res.statusText}`);
      }

      // Success handling
      trackContactFormSubmit(
        packages.find((p) => p.id === selectedPackage)?.name || "no_package_selected"
      );

      setToast({ 
        type: "success", 
        msg: "Thanks — message received. I'll reply within 24 hours." 
      });

      // Clear form and reset to defaults
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "web-development",
        budget: defaultPkg?.price || "$900 – $1,500",
        timeline: defaultPkg?.timeline || "1–2 weeks",
        message: "",
      });

      // Reset package selection to default
      setSelectedPackage("starter");

      // Auto-hide toast after 4s
      setTimeout(() => setToast({ type: null, msg: "" }), 4000);
      
    } catch (err) {
      console.error("Form submission error:", err);
      setToast({
        type: "error",
        msg: "Submit failed. Please check your connection and try again, or email charlesboswell@boswellwebdevelopment.com.",
      });
      setTimeout(() => setToast({ type: null, msg: "" }), 6000);
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const selected = packages.find((pkg) => pkg.id === selectedPackage);

  return (
    <>
      <SEOHead
        title="Digital Solutions Pricing & Contact | Boswell Digital Solutions LLC"
        description="Custom React websites, business sites, eCommerce, and bespoke digital solutions. Transparent pricing and timelines. Veteran-owned in Lexington, Kentucky."
        keywords="web development pricing, website quote lexington ky, react developer rates, ecommerce development, custom web app"
        url="https://boswellwebdevelopment.com/contact"
      />

      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />

        <div className="pt-24 p-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
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

              <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Let&apos;s Work Together
              </h1>
              <p className="text-center text-gray-400 text-lg">
                Veteran-owned digital solutions with military-grade precision
              </p>
            </motion.div>

            {/* Service Packages */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
                Service Packages
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    className={`relative bg-gray-800/50 rounded-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? "border-blue-400 bg-blue-900/20 transform scale-105"
                        : "border-gray-700 hover:border-gray-600"
                    } ${pkg.popular ? "ring-2 ring-blue-400/40" : ""}`}
                    onClick={() => handlePackageSelect(pkg.id)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 right-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <FaStar className="text-xs" />
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                    <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pages:</span>
                        <span className="text-white">{pkg.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Revisions:</span>
                        <span className="text-white">{pkg.revisions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-white">{pkg.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-2">
                      <h4 className="text-white font-semibold text-sm">Included:</h4>
                      {pkg.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs">
                          <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {pkg.features.length > 4 && (
                        <div className="text-blue-400 text-xs">
                          +{pkg.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {selectedPackage === pkg.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 pointer-events-none rounded-lg"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form & Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                  Project Details
                </h2>

                {/* Debug Info - Remove in production */}
                {process.env.NODE_ENV === 'development' && (
                  <div style={{ background: '#333', color: '#fff', padding: '10px', margin: '10px 0', fontSize: '12px' }}>
                    <h4>Debug Info:</h4>
                    <p>Selected Package: {selectedPackage}</p>
                    <p>Budget: {formData.budget}</p>
                    <p>Timeline: {formData.timeline}</p>
                    <p>Project Type: {formData.projectType}</p>
                  </div>
                )}

                {/* Netlify-form (AJAX) */}
                <form
                  name="contact"
                  method="POST"
                  netlify
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify required hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Helpful hidden metadata */}
                  <input type="hidden" name="selectedPackageId" value={selectedPackage} />
                  <input type="hidden" name="selectedPackageName" value={selected?.name || ""} />
                  <input type="hidden" name="selectedPackagePrice" value={selected?.price || ""} />
                  <input type="hidden" name="projectType" value={formData.projectType} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      placeholder="Your business name (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      >
                        <option value="1–2 weeks">1–2 weeks</option>
                        <option value="2–3 weeks">2–3 weeks</option>
                        <option value="3–5 weeks">3–5 weeks</option>
                        <option value="1–2 months">1–2 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Package / Budget Range
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        placeholder="e.g., $1,800 – $3,500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      placeholder="Tell me about your goals, target audience, pages/features needed, and any examples you like..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className={`w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform ${
                      submitting
                        ? "bg-blue-800 cursor-not-allowed opacity-50"
                        : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                    }`}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Project Request →"
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info & Social Proof */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">Get in Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-400 text-xl" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:charlesboswell@boswellwebdevelopment.com"
                        className="text-gray-300 hover:text-blue-400"
                        onClick={() => trackEmailClick()}
                      >
                        charlesboswell@boswellwebdevelopment.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaPhone className="text-blue-400 text-xl" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+18594367304"
                        className="text-gray-300 hover:text-blue-400"
                        onClick={() => trackPhoneClick()}
                      >
                        (859) 436-7304
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300">Lexington, Kentucky</p>
                      <p className="text-gray-400 text-sm">Serving all of Kentucky</p>
                    </div>
                  </div>
                </div>

                {/* Social Proof / Standards */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-white font-semibold mb-4 text-center">Trusted Standards</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">🎖️ U.S. Navy Veteran</span>
                      <span className="text-blue-400 font-semibold">✓ Verified</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">🌲 16 Years Forest Service</span>
                      <span className="text-green-400 font-semibold">✓ Leadership</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">🎓 Kable Academy Graduate</span>
                      <span className="text-purple-400 font-semibold">✓ Certified</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">📍 Lexington Local</span>
                      <span className="text-yellow-400 font-semibold">✓ Available</span>
                    </div>
                  </div>

                  <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <FaClock className="text-green-400" />
                      <span className="text-green-200 font-semibold">Quick Response</span>
                    </div>
                    <p className="text-green-200 text-sm">
                      I respond to all inquiries within 24 hours. Reliability is our foundation.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <FaShieldAlt className="text-red-400" />
                      <span className="text-red-200 font-semibold">100% Satisfaction Commitment</span>
                    </div>
                    <p className="text-red-200 text-sm">
                      Clear communication, dependable delivery, and support after launch.
                    </p>
                  </div>
                </div>

                {/* Process Snapshot */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-white font-semibold mb-4 text-center">Our Process</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-900/40 p-3 rounded flex items-center gap-2">
                      <FaHandshake className="text-blue-400" /> Discover
                    </div>
                    <div className="bg-gray-900/40 p-3 rounded flex items-center gap-2">
                      <FaFlag className="text-blue-400" /> Plan
                    </div>
                    <div className="bg-gray-900/40 p-3 rounded flex items-center gap-2">
                      <FaRocket className="text-blue-400" /> Build
                    </div>
                    <div className="bg-gray-900/40 p-3 rounded flex items-center gap-2">
                      <FaShieldAlt className="text-blue-400" /> Launch
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Toast Notifications */}
        <AnimatePresence>
          {toast.type && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`fixed bottom-4 right-4 z-[100] rounded-lg px-4 py-3 shadow-lg border max-w-md ${
                toast.type === "success"
                  ? "bg-green-900/80 border-green-600 text-green-100"
                  : "bg-red-900/80 border-red-600 text-red-100"
              }`}
            >
              <div className="flex items-center gap-2">
                {toast.type === "success" ? "✅" : "❌"}
                <span>{toast.msg}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}