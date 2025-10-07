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
        url="https://boswellwebdevelopment.com/resume"
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
            <h2 className="text-xl text-blue-600 mb-4">Full-Stack Web Developer & Military Veteran</h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>charlesboswell@boswellwebdevelopment.com</span>
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
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Military veteran and certified full-stack web developer specializing in React, Node.js, and AI integration. 
              Founder of Boswell Web Development Solutions LLC, delivering custom web applications with military-grade 
              precision and security. Experienced in MERN stack development, cloud deployment, and business process automation.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• React.js, JavaScript (ES6+), TypeScript</li>
                  <li>• HTML5, CSS3, Tailwind CSS</li>
                  <li>• Responsive Design, Mobile-First</li>
                  <li>• Framer Motion, Component Libraries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Node.js, Express.js, RESTful APIs</li>
                  <li>• MongoDB, Firebase, SQL</li>
                  <li>• Authentication & Security</li>
                  <li>• Cloud Services (AWS, Google Cloud)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tools & Technologies</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Git, GitHub, Version Control</li>
                  <li>• Vite, Webpack, Build Tools</li>
                  <li>• Docker, CI/CD Pipelines</li>
                  <li>• OpenAI API, AI Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Military/Security</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Security Clearance Background</li>
                  <li>• Risk Assessment & Management</li>
                  <li>• Project Leadership</li>
                  <li>• Operational Excellence</li>
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
              <p className="text-blue-600 font-semibold mb-3">Boswell Web Development Solutions LLC • Lexington, KY</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Founded veteran-owned web development company specializing in custom React applications</li>
                <li>• Developed pricing strategy from $750-$6,000+ based on market research and technical complexity</li>
                <li>• Integrated AI features using OpenAI API for intelligent business automation</li>
                <li>• Built responsive, mobile-first websites with custom admin dashboards</li>
                <li>• Implemented secure payment processing and e-commerce solutions</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">Military Service Member</h4>
                <span className="text-gray-600">Previous Service</span>
              </div>
              <p className="text-blue-600 font-semibold mb-3">United States Military</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed leadership, discipline, and attention to detail in high-pressure environments</li>
                <li>• Managed complex projects with strict deadlines and quality requirements</li>
                <li>• Maintained security protocols and confidential information handling</li>
                <li>• Trained in risk assessment and operational planning</li>
              </ul>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education & Certifications</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">Full Stack Web Developer Certification</h4>
                <span className="text-gray-600">July 2025</span>
              </div>
              <p className="text-blue-600 font-semibold">Kable Academy</p>
              <p className="text-gray-700">Comprehensive MERN stack training with real-world project experience</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Technical Certifications</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• React.js Development</li>
                <li>• Node.js Backend Development</li>
                <li>• MongoDB Database Management</li>
                <li>• Git Version Control</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Key Projects</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Boswell Web Development Portfolio Site</h4>
              <p className="text-gray-700 mb-2">
                Custom React website with pricing packages, contact forms, and GitHub integration. 
                Features responsive design, Framer Motion animations, and professional business presentation.
              </p>
              <p className="text-blue-600 text-sm">Technologies: React, Tailwind CSS, Framer Motion, Vite</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Custom Business Applications</h4>
              <p className="text-gray-700 mb-2">
                Developed custom web applications for local Kentucky businesses including e-commerce stores, 
                admin dashboards, and AI-powered automation tools.
              </p>
              <p className="text-blue-600 text-sm">Technologies: MERN Stack, Firebase, Stripe API, OpenAI API</p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-6 border-t border-gray-300">
            <p className="text-gray-600 text-sm">
              Portfolio: boswellwebdevelopment.com • GitHub: github.com/Boswecw
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
