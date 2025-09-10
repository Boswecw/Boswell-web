// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      question: "What's included in the Starter Package for $750-$1,200?",
      answer: "The Starter Package includes a custom-coded responsive website (1-3 pages), contact form with spam protection, social media integration, basic SEO setup, Google Analytics integration, and professional email setup guidance. Perfect for individuals, portfolios, or small businesses."
    },
    {
      question: "Why are your prices higher than Fiverr or template sites?",
      answer: "We build custom-coded websites from scratch, not templates. You get military-grade reliability, modern React technology, AI integration capabilities, and local support. Our veteran-owned business provides professional-level service that template sites can't match."
    },
    {
      question: "How long does it take to build my website?",
      answer: "Starter websites: 5-7 business days, Business websites: 10-14 business days, eCommerce sites: 14-21 business days. We work efficiently while maintaining high quality standards."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "We provide hosting setup assistance and offer ongoing maintenance packages ($75-$150/month). This includes updates, security monitoring, backups, and technical support."
    },
    {
      question: "Can you integrate AI features into my website?",
      answer: "Yes! AI integration starts at $500+ and can include chatbots, automated customer service, content generation, and business process automation using OpenAI and other modern AI tools."
    },
    {
      question: "What makes you different from other web developers?",
      answer: "We're veteran-owned with military precision, use cutting-edge technology (React, AI integration), provide local Lexington support, and focus on security and reliability. No templates - everything is custom-coded for your specific needs."
    },
    {
      question: "Do you work with businesses outside of Kentucky?",
      answer: "Yes! While we're based in Lexington, KY, we work with clients nationwide. Local clients get the benefit of in-person meetings, but we provide excellent remote support for all clients."
    },
    {
      question: "What if I need changes after the website is complete?",
      answer: "Each package includes multiple revisions during development. After completion, we offer ongoing maintenance packages or can quote individual updates. Small text changes are often included in maintenance packages."
    },
    {
      question: "Can you help with SEO and Google rankings?",
      answer: "Yes! All packages include basic SEO setup. We also offer advanced SEO optimization starting at $200+ including Google Business Profile optimization, local SEO, and ongoing SEO maintenance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, checks, and can set up payment plans for larger projects. A 50% deposit is typically required to start, with the balance due upon completion."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our web development services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
              >
                <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                <div className="text-blue-400 flex-shrink-0">
                  {openItem === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="px-6 py-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:charlesboswell@boswellwebdevelopment.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}