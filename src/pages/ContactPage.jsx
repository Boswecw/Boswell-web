import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaTimes, FaStar } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import { trackContactFormSubmit, trackPackageSelection, trackEmailClick, trackPhoneClick } from "@/utils/analytics";

export default function ContactPage() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web-development',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packages = [
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
      popular: true,
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
      projectType: packageId === 'premium' ? 'ecommerce' : 'web-development'
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
${selectedPkg ? selectedPkg.features.join('\n- ') : 'No package selected'}
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
        description="Get a custom website quote. Starter packages from $750, Business websites $1,500-$3,000, eCommerce $3,000-$6,000+. Veteran-owned company in Lexington, KY."
        keywords="web development pricing, website cost lexington ky, react developer rates, custom website quote, veteran web developer"
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
            Choose your package and let's bring your project to life
          </p>
        </motion.div>

        {/* Service Packages */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Service Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className={`relative bg-gray-800/50 rounded-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedPackage === pkg.id 
                    ? 'border-blue-400 bg-blue-900/20 transform scale-105' 
                    : 'border-gray-700 hover:border-gray-600'
                } ${pkg.popular ? 'ring-2 ring-blue-400' : ''}`}
                onClick={() => handlePackageSelect(pkg.id)}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FaStar className="mr-1" /> Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Pages:</span>
                    <span className="text-white">{pkg.pages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Revisions:</span>
                    <span className="text-white">{pkg.revisions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Timeline:</span>
                    <span className="text-white">{pkg.timeline}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-green-400 text-sm">Included:</h4>
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <FaCheck className="text-green-400 mr-2 text-xs" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-red-400 text-sm mt-3">Not Included:</h4>
                      {pkg.notIncluded.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <FaTimes className="text-red-400 mr-2 text-xs" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {selectedPackage === pkg.id && (
                  <div className="mt-4 text-center">
                    <span className="bg-blue-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Selected
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>✨ All packages include custom-coded websites (not templates) with mobile-first design</p>
            <p>🚀 AI integration, logo design, and ongoing maintenance available as add-ons</p>
          </div>
        </motion.div>

        {/* Add-On Services */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">Add-On Services</h2>
          
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
                    href="tel:859-436-7304" 
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
                  <p className="text-gray-300">Lexington, KY</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Why Choose Boswell Web Development?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✅ <strong>Veteran-owned business</strong> - Reliability and precision</li>
                <li>✅ <strong>Custom-coded websites</strong> - No templates or page builders</li>
                <li>✅ <strong>AI integration specialist</strong> - Cutting-edge technology</li>
                <li>✅ <strong>MERN stack expertise</strong> - React, Node.js, MongoDB</li>
                <li>✅ <strong>Security-focused</strong> - Government/military background</li>
                <li>✅ <strong>Local Lexington business</strong> - Available for in-person meetings</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/30 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                  {selectedPackage ? `${packages.find(p => p.id === selectedPackage)?.name} Inquiry` : 'Project Inquiry'}
                </h2>
                
                {selectedPackage && (
                  <div className="bg-blue-900/20 border border-blue-400 rounded-lg p-4 mb-6">
                    <p className="text-blue-400 font-semibold">
                      Selected: {packages.find(p => p.id === selectedPackage)?.name} - {packages.find(p => p.id === selectedPackage)?.price}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedPackage('')}
                      className="text-gray-400 hover:text-white text-sm mt-2"
                    >
                      Change package
                    </button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder={selectedPackage ? "Pre-filled from package" : "Your budget"}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
                >
                  Send Project Inquiry
                </Button>
              </form>
            ) : (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your email client should have opened with a pre-filled message. 
                  If not, please email me directly at charlesboswell@boswellwebdevelopment.com
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
                >
                  Send Another Inquiry
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
}