import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaStar, FaClock, FaShieldAlt, FaRocket, FaFlag, FaHandshake } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import { trackContactFormSubmit, trackPackageSelection, trackEmailClick, trackPhoneClick } from "@/utils/analytics";

export default function ContactPage() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('first-customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web-development',
    budget: '$375',
    timeline: '3 days',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packages = [
    {
      id: 'first-customer',
      name: 'First Customer Special',
      price: '$375',
      originalPrice: '$750',
      description: 'Launch discount for new Lexington businesses - Perfect starter website',
      pages: '1-3',
      revisions: '3',
      timeline: '3 business days',
      popular: true,
      badge: '🔥 LIMITED TIME',
      features: [
        'Custom design (not a template)',
        'Mobile-first responsive layout',
        'Contact form with spam protection',
        'Social media integration',
        'Basic SEO setup',
        'Google Analytics integration',
        '100% satisfaction guarantee',
        'Professional email setup guidance'
      ],
      notIncluded: [
        'eCommerce functionality',
        'Blog/CMS system',
        'Advanced integrations'
      ]
    },
    {
      id: 'starter',
      name: 'Starter Website',
      price: '$750 - $1,200',
      description: 'Custom-coded responsive website for individuals, portfolios, or small businesses',
      pages: '1-3',
      revisions: '3',
      timeline: '5-7 business days',
      features: [
        'Custom design (not a template)',
        'Mobile-first responsive layout',
        'Contact form with spam protection',
        'Social media integration',
        'Basic SEO setup',
        'Google Analytics integration',
        'Professional email setup guidance'
      ],
      notIncluded: [
        'eCommerce functionality',
        'Blog/CMS system',
        'Advanced integrations'
      ]
    },
    {
      id: 'business',
      name: 'Business Website',
      price: '$1,500 - $3,000',
      description: 'Professional business website with admin dashboard and advanced features',
      pages: '4-7',
      revisions: '5',
      timeline: '10-14 business days',
      features: [
        'Everything from Starter Package',
        'Blog/news feed system',
        'Admin dashboard for content management',
        'Multiple contact/inquiry forms',
        'Google Maps integration',
        'Image optimization & speed tuning',
        'Free hosting setup assistance',
        'Email automation setup',
        'Google Business Profile optimization'
      ],
      notIncluded: [
        'eCommerce store',
        'Payment processing',
        'AI features (available as add-on)'
      ]
    },
    {
      id: 'ecommerce',
      name: 'eCommerce Website',
      price: '$3,000 - $6,000+',
      description: 'Full-featured online store with custom admin panel and payment processing',
      pages: '5-10+',
      revisions: 'Unlimited',
      timeline: '14-21 business days',
      features: [
        'Everything from Business Package',
        'Product catalog (up to 50 products)',
        'Secure shopping cart & checkout',
        'Stripe/PayPal integration',
        'Customer account system',
        'Order management dashboard',
        'Inventory tracking system',
        'Email marketing integration',
        'Advanced SEO optimization',
        'Cloud-hosted image system',
        'SSL certificate & security setup'
      ],
      notIncluded: [
        'Products beyond 50 (add-on pricing)',
        'Custom AI features (quoted separately)'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
    const selectedPkg = packages.find(pkg => pkg.id === packageId);
    setFormData(prev => ({
      ...prev,
      budget: selectedPkg.price,
      projectType: packageId === 'ecommerce' ? 'ecommerce' : 'web-development',
      timeline: selectedPkg.timeline
    }));
    
    // Track package selection
    trackPackageSelection(selectedPkg.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    const subject = `${selectedPkg ? selectedPkg.name : 'Project'} Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

SELECTED PACKAGE: ${selectedPkg ? `${selectedPkg.name} (${selectedPkg.price})` : 'Not selected'}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline}

Project Details:
${formData.message}

Package Features Requested:
${selectedPkg ? selectedPkg.features.map(feature => `- ${feature}`).join('\n') : 'No package selected'}

${selectedPackage === 'first-customer' ? '\n🔥 FIRST CUSTOMER SPECIAL REQUEST - 50% OFF PRICING' : ''}
    `;
    
    const mailtoLink = `mailto:charlesboswell@boswellwebdevelopment.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Track form submission
    trackContactFormSubmit(selectedPkg ? selectedPkg.name : 'no_package_selected');
    
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <>
      <SEOHead 
        title="Web Development Pricing & Contact | Boswell Web Development Solutions"
        description="Get a custom website quote. First customer special $375 (50% off), Business websites $1,500-$3,000, eCommerce $3,000-$6,000+. Veteran-owned company in Lexington, KY."
        keywords="web development pricing, website cost lexington ky, react developer rates, custom website quote, veteran web developer, first customer discount"
        url="https://boswellwebdevelopment.com/contact"
      />
      <div className="min-h-screen bg-gray-950 text-white p-6">
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
              onClick={() => navigate('/')}
              className="mb-6 text-gray-300 hover:text-white"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h1>
            <p className="text-center text-gray-400 text-lg">
              Veteran-owned web development with military-grade precision
            </p>
          </motion.div>

          {/* First Customer Special Highlight */}
          <motion.div
            variants={itemVariants}
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
                Custom-coded React website - no templates, just quality work.
              </p>
            </div>
          </motion.div>

          {/* Service Packages */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Service Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className={`relative bg-gray-800/50 rounded-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
                    selectedPackage === pkg.id 
                      ? 'border-blue-400 bg-blue-900/20 transform scale-105' 
                      : 'border-gray-700 hover:border-gray-600'
                  } ${pkg.popular ? 'ring-2 ring-blue-400/50' : ''}`}
                  onClick={() => handlePackageSelect(pkg.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                  
                  {pkg.popular && (
                    <div className="absolute -top-3 right-3">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <FaStar className="text-xs" />
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      )}
                      <span className="text-2xl font-bold text-blue-400">{pkg.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                    
                    <div className="space-y-2 text-sm">
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
                  </div>
                  
                  <div className="space-y-2 mb-4">
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-blue-400/10 rounded-lg flex items-center justify-center"
                    >
                      <FaCheck className="text-blue-400 text-3xl" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add-on Services */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {[
                { name: 'Logo/Brand Kit Design', price: '$150 - $300' },
                { name: 'SEO Optimization', price: '$200+' },
                { name: 'Extra Pages', price: '$75 - $150/each' },
                { name: 'Content Writing', price: '$100/page' },
                { name: 'Ongoing Maintenance', price: '$75 - $150/month' },
                { name: 'AI Features Integration', price: 'Starting at $500+' }
              ].map((addon, index) => (
                <div key={index} className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">{addon.name}</h4>
                  <p className="text-blue-400 font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">Project Details</h2>
              
              {isSubmitted ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
                  <FaCheck className="text-green-400 text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent! I'll respond within 24 hours with next steps.
                  </p>
                  {selectedPackage === 'first-customer' && (
                    <div className="mt-4 p-3 bg-red-900/20 border border-red-400 rounded">
                      <p className="text-red-200 text-sm">
                        🔥 Your first customer special request has been noted - 50% discount secured!
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="3 days">3 days (First Customer Special)</option>
                      <option value="1 week">Within 1 week</option>
                      <option value="2 weeks">Within 2 weeks</option>
                      <option value="1 month">Within 1 month</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      placeholder="Tell me about your project goals, target audience, and any specific features you need..."
                    ></textarea>
                  </div>
                  
                  {selectedPackage === 'first-customer' && (
                    <div className="bg-red-900/20 border border-red-400 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaRocket className="text-red-400" />
                        <span className="text-red-200 font-semibold">First Customer Special Selected!</span>
                      </div>
                      <p className="text-red-200 text-sm">
                        You'll receive 50% off your first website ($375 instead of $750) with 3-day delivery 
                        and 100% satisfaction guarantee. Perfect for getting your business online quickly!
                      </p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                  >
                    {selectedPackage === 'first-customer' ? 'Claim My 50% Discount →' : 'Send Project Request →'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
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

              {/* Social Proof Section */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 text-center">Trusted by Kentucky Businesses</h3>
                
                {/* Credentials */}
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

                {/* Demo Social Proof */}
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg mb-4">
                  <h4 className="text-blue-200 font-semibold mb-2">🍽️ Live Demo Available</h4>
                  <p className="text-blue-200 text-sm mb-3">
                    See the quality of work you&apos;ll receive with our Kentucky Restaurant demo - 
                    built in just 2 days to showcase modern web development capabilities.
                  </p>
                  <a 
                    href="/restaurant-demo.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white text-sm font-semibold"
                  >
                    View Restaurant Demo →
                  </a>
                </div>

                {/* Process Transparency */}
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg mb-4">
                  <h4 className="text-green-200 font-semibold mb-2">🔧 Our Process</h4>
                  <div className="text-green-200 text-sm space-y-1">
                    <div>✓ Initial consultation within 24 hours</div>
                    <div>✓ Custom design mockup in 2-3 days</div>
                    <div>✓ Daily progress updates via email</div>
                    <div>✓ Full website delivery as promised</div>
                    <div>✓ 30-day support after launch</div>
                  </div>
                </div>

                {/* Technical Excellence */}
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="text-purple-200 font-semibold mb-2">⚡ Technical Standards</h4>
                  <div className="text-purple-200 text-sm space-y-1">
                    <div>✓ Custom React code (no templates)</div>
                    <div>✓ Mobile-responsive design</div>
                    <div>✓ Accessibility compliant (WCAG 2.1)</div>
                    <div>✓ SEO optimized from launch</div>
                    <div>✓ Fast loading speeds (&lt;3 seconds)</div>
                  </div>
                </div>
              </div>

              {/* Guarantee Section */}
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaShieldAlt className="text-red-400" />
                  <span className="text-red-200 font-semibold">100% Satisfaction Guarantee</span>
                </div>
                <p className="text-red-200 text-sm">
                  If you&apos;re not completely satisfied with your website, I&apos;ll work with you 
                  until it&apos;s perfect or provide a full refund. Your success is my mission.
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-green-400" />
                  <span className="text-green-200 font-semibold">Quick Response Guarantee</span>
                </div>
                <p className="text-green-200 text-sm">
                  I respond to all inquiries within 24 hours, usually much sooner. 
                  As a veteran-owned business, reliability is our foundation.
                </p>
              </div>

              {/* Local Community */}
              <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaHandshake className="text-yellow-400" />
                  <span className="text-yellow-200 font-semibold">Local Kentucky Partnership</span>
                </div>
                <p className="text-yellow-200 text-sm">
                  Supporting local businesses is my mission. Available for in-person meetings 
                  throughout the Bluegrass region. Let&apos;s build Kentucky&apos;s digital future together.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}