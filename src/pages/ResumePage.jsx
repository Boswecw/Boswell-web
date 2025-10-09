import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { FaArrowLeft, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import { trackResumeView, trackResumeDownload } from "@/utils/analytics";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
    trackResumeDownload(); // printing often saves as PDF
  };

  React.useEffect(() => {
    trackResumeView();
  }, []);

  return (
    <>
      <SEOHead 
        title="Charles Boswell Resume - Full-Stack Developer & Military Veteran"
        description="Resume of Charles Boswell - Full-stack web developer, military veteran, and founder of Boswell Digital Solutions LLC. MERN stack, React, AI integration expertise."
        keywords="charles boswell resume, full stack developer resume, veteran web developer, react developer resume, lexington ky developer"
        url="https://boswelldigitalsolutions.com/resume"
      />

      {/* Fixed navbar (hidden on print) */}
      <div className="no-print"><Navbar /></div>

      <div className="min-h-screen bg-white text-gray-900 pt-24 p-6">
        {/* Print/Navigation Controls - Hidden when printing */}
        <div className="no-print mb-6 flex justify-between items-center max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Button>
          
          <div className="flex gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FaDownload className="mr-2" />
              Print/Save as PDF
            </Button>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download
                onClick={() => trackResumeDownload()}
              >
                <FaDownload className="mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 print:shadow-none print:p-0"
        >
          {/* Header */}
          <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Charles Boswell</h1>
            <h2 className="text-xl text-blue-600 mb-4">Full-Stack Web Developer • AI Integration Specialist • U.S. Navy Veteran</h2>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>charlesboswell@boswelldigitalsolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>(859) 436-7304</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Lexington, KY</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-2">
              <span>LinkedIn: linkedin.com/in/charlesboswell</span>
              <span>GitHub: github.com/CharlesWBoswell</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Veteran full-stack web developer and founder of Boswell Digital Solutions LLC, building intelligent, secure, and high-performance web applications for small businesses and creative professionals. Skilled in React, SvelteKit, Node.js, and FastAPI with hands-on experience integrating AI systems (OpenAI, LangChain, TensorFlow.js) and deploying scalable solutions to Netlify, Render, and Firebase. Combines military-grade precision with modern development practices to deliver results that are efficient, accessible, and client-focused.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• React.js, SvelteKit, JavaScript (ES6+), TypeScript</li>
                  <li>• HTML5, CSS3, Tailwind CSS, ShadCN/UI, Framer Motion</li>
                  <li>• Responsive & Accessible Design (WCAG, ARIA)</li>
                  <li>• Progressive Web Apps (PWA), Mobile-First UI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Backend & Cloud</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Node.js, Express.js, FastAPI (Python), RESTful APIs</li>
                  <li>• MongoDB, Firebase (Auth, Firestore, Storage), SQL</li>
                  <li>• Google Cloud Storage, Netlify, Render, Docker</li>
                  <li>• Authentication (JWT, OAuth), Role-Based Access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">AI & Automation</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• OpenAI API, LangChain, TensorFlow.js, Ollama</li>
                  <li>• Chatbot & Image/Audio Classifier Integration</li>
                  <li>• Python Scripting for Data Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tools & DevOps</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Git, GitHub, Vite, Yarn</li>
                  <li>• CI/CD Pipelines, Postman, Linux CLI</li>
                  <li>• Agile / Kanban Workflow</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">Founder & Lead Developer</h4>
                <span className="text-gray-600">2024 - Present</span>
              </div>
              <p className="text-blue-600 font-semibold mb-3">Boswell Digital Solutions LLC • Lexington, KY</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Founded veteran-owned digital solutions business serving authors, small businesses, and environmental organizations</li>
                <li>• Delivered over a dozen responsive web apps using React, SvelteKit, Firebase, and FastAPI backends</li>
                <li>• Integrated AI features (chatbots, content tools, automation) via OpenAI API and LangChain</li>
                <li>• Built the Leopold Nature Observation App and FurBabies MERN Store as flagship portfolio projects</li>
                <li>• Deployed client sites to Netlify and Render with custom DNS and secure HTTPS via Google Domains</li>
                <li>• Developed reusable "AI Biz Starter Template" for rapid small-business web app deployment</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">U.S. Navy Veteran – Aviation & Operations</h4>
                <span className="text-gray-600">Previous Service</span>
              </div>
              <p className="text-blue-600 font-semibold mb-3">United States Navy</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Led and trained cross-functional teams in high-pressure operational settings</li>
                <li>• Maintained secure communications and compliance with military information handling protocols</li>
                <li>• Honored for leadership, precision, and mission readiness under critical timelines</li>
              </ul>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education & Certifications</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">Kable Academy — Full-Stack Web Developer Certification</h4>
                <span className="text-gray-600">Graduated July 2025</span>
              </div>
              <p className="text-gray-700">MERN stack specialization with AI integration and capstone project "FurBabies," a full-stack e-commerce app.</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Additional Training & Certifications</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• LangChain & OpenAI API Integration (2025)</li>
                <li>• FastAPI & SvelteKit Full-Stack Development (2025)</li>
                <li>• TensorFlow.js Audio Classification (Leopold Project)</li>
                <li>• Git & Version Control (GitHub Professional Workflow)</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Key Projects</h3>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Boswell Digital Solutions Website</h4>
              <p className="text-gray-700 mb-2">
                Company portfolio site with dynamic pricing packages, contact forms, and business branding integration.
              </p>
              <p className="text-blue-600 text-sm">Stack: React, Tailwind, Framer Motion, Firebase, Netlify</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Leopold Nature Observation App</h4>
              <p className="text-gray-700 mb-2">
                Progressive Web App enabling users to record wildlife sightings, identify species by sound, and sync data to Firebase.
              </p>
              <p className="text-blue-600 text-sm">Stack: SvelteKit, Tailwind, TensorFlow.js, Firebase, Google Maps API</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">AI Biz Starter Template</h4>
              <p className="text-gray-700 mb-2">
                Full-stack template using SvelteKit frontend + FastAPI backend for AI-powered business automation and chatbot integration.
              </p>
              <p className="text-blue-600 text-sm">Stack: SvelteKit, FastAPI, LangChain, OpenAI, Docker</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">FurBabies Pet Store (Capstone Project)</h4>
              <p className="text-gray-700 mb-2">
                E-commerce MERN stack application with admin dashboard, cloud-hosted images, and secure payments.
              </p>
              <p className="text-blue-600 text-sm">Stack: MongoDB, Express, React, Node.js, Firebase Storage, Stripe</p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-6 border-t border-gray-300">
            <p className="text-gray-600 text-sm">
              Portfolio: boswelldigitalsolutions.com • GitHub: github.com/CharlesWBoswell
            </p>
          </footer>
        </motion.div>

        {/* Print Styles */}
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white !important; }
            .shadow-lg { box-shadow: none !important; }
          }
        `}</style>
      </div>
    </>
  );
}
