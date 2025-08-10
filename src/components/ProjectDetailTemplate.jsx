import React, { useState } from 'react';

const ProjectDetailTemplate = ({ projectData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Default project data structure (replace with actual project data)
  const defaultProjectData = {
    // Basic Info
    name: "FurBabies E-commerce Platform",
    type: "Full E-commerce Website",
    status: "Active Development",
    progress: 70,
    startDate: "September 2024",
    targetCompletion: "March 2025",
    
    // Hero Section
    tagline: "Complete pet supply e-commerce solution with modern features",
    heroImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&w=1200&q=80",
    liveDemo: "/furbabies-demo",
    githubRepo: "https://github.com/Boswecw/furbabies-ecommerce",
    
    // Problem & Solution
    problem: "Pet owners struggle to find quality supplies online with poor user experiences, limited product information, and unreliable shipping. Many pet supply websites lack modern features like reviews, wishlists, and mobile optimization.",
    solution: "A modern, responsive e-commerce platform built specifically for pet supplies. Features include advanced product filtering, customer reviews, secure payment processing, order tracking, and mobile-first design.",
    businessValue: "Increased conversion rates by 40%, reduced cart abandonment by 30%, and improved customer satisfaction through better user experience and reliable order fulfillment.",
    
    // Technical Details
    technologies: [
      { name: "React 18", purpose: "Frontend framework for dynamic UI" },
      { name: "Node.js", purpose: "Backend server and API development" },
      { name: "MongoDB", purpose: "Database for products and user data" },
      { name: "Stripe", purpose: "Secure payment processing" },
      { name: "Express.js", purpose: "Web application framework" },
      { name: "JWT", purpose: "User authentication and sessions" },
      { name: "Tailwind CSS", purpose: "Responsive styling and design" },
      { name: "Cloudinary", purpose: "Image storage and optimization" }
    ],
    
    // Architecture
    architecture: {
      frontend: "React SPA with component-based architecture",
      backend: "RESTful API with Express.js and Node.js",
      database: "MongoDB with Mongoose ODM for data modeling",
      hosting: "Frontend on Vercel, Backend on Railway, Database on MongoDB Atlas",
      security: "JWT tokens, bcrypt password hashing, input validation"
    },
    
    // Key Features
    features: [
      {
        title: "Advanced Product Catalog",
        description: "Organized product categories with detailed filtering by brand, price, size, and pet type",
        screenshot: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
        title: "Shopping Cart & Checkout",
        description: "Persistent cart across sessions, guest checkout option, multiple payment methods",
        screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
        title: "User Account Management",
        description: "Profile management, order history, saved addresses, wishlist functionality",
        screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
        title: "Admin Dashboard",
        description: "Complete product management, order processing, customer support tools",
        screenshot: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=600&q=80"
      }
    ],
    
    // Development Process
    timeline: [
      {
        phase: "Planning & Design",
        duration: "2 weeks",
        tasks: ["Market research", "UI/UX design", "Database schema design", "API planning"],
        status: "completed"
      },
      {
        phase: "Core Development",
        duration: "6 weeks",
        tasks: ["Frontend components", "Backend API", "Database setup", "Authentication"],
        status: "completed"
      },
      {
        phase: "E-commerce Features",
        duration: "4 weeks",
        tasks: ["Shopping cart", "Payment integration", "Order management", "Email notifications"],
        status: "completed"
      },
      {
        phase: "Testing & Optimization",
        duration: "3 weeks",
        tasks: ["Performance testing", "Security audit", "Mobile optimization", "Bug fixes"],
        status: "in-progress"
      },
      {
        phase: "Deployment & Launch",
        duration: "1 week",
        tasks: ["Production deployment", "DNS setup", "Monitoring", "Launch preparation"],
        status: "upcoming"
      }
    ],
    
    // Challenges & Solutions
    challenges: [
      {
        challenge: "Complex inventory management across multiple product variants",
        solution: "Implemented dynamic inventory tracking with real-time updates and low-stock alerts",
        technical: "Used MongoDB aggregation pipelines for efficient inventory queries"
      },
      {
        challenge: "Secure payment processing with multiple payment methods",
        solution: "Integrated Stripe with comprehensive error handling and webhook validation",
        technical: "Implemented secure webhook endpoints with signature verification"
      },
      {
        challenge: "Mobile performance optimization for large product catalogs",
        solution: "Implemented lazy loading, image optimization, and infinite scroll pagination",
        technical: "Used React.lazy() and Intersection Observer API for performance"
      }
    ],
    
    // Results & Metrics
    results: {
      performance: {
        pageLoadTime: "< 2 seconds",
        mobileFriendly: "100% responsive design",
        seoScore: "95/100 Lighthouse score"
      },
      business: {
        conversionRate: "8.5% (industry average: 2.8%)",
        cartAbandonment: "45% (industry average: 70%)",
        customerSatisfaction: "4.8/5 average rating"
      },
      technical: {
        uptime: "99.9% server uptime",
        security: "A+ SSL rating",
        scalability: "Handles 1000+ concurrent users"
      }
    },
    
    // Code Examples
    codeExamples: [
      {
        title: "Advanced Product Filtering",
        language: "javascript",
        code: `// Dynamic product filtering with React hooks
const useProductFilter = (products, filters) => {
  return useMemo(() => {
    return products.filter(product => {
      // Price range filtering
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (product.price < min || product.price > max) return false;
      }
      
      // Category filtering
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      // Brand filtering
      if (filters.brands?.length && !filters.brands.includes(product.brand)) {
        return false;
      }
      
      return true;
    });
  }, [products, filters]);
};`
      },
      {
        title: "Secure Payment Processing",
        language: "javascript", 
        code: `// Stripe payment processing with error handling
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', orderId } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      metadata: { orderId },
      automatic_payment_methods: { enabled: true }
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
      }
    ],
    
    // CTA Information
    cta: {
      title: "Ready to Launch Your E-commerce Store?",
      description: "Get the same professional e-commerce features for your business. From product catalogs to secure payments, I'll build a custom solution that drives sales and delights customers.",
      primaryAction: "Start Your E-commerce Project",
      secondaryAction: "View E-commerce Pricing",
      features: ["Custom product catalog", "Secure payment processing", "Mobile-responsive design", "Admin dashboard", "SEO optimization", "Ongoing support"]
    }
  };

  // Use provided data or fallback to default
  const project = projectData || defaultProjectData;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'in-progress': return 'bg-blue-600';
      case 'upcoming': return 'bg-gray-600';
      default: return 'bg-blue-600';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/portfolio" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <span>←</span> Back to Portfolio
          </a>
          <div className="flex items-center gap-4">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" 
                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                🔗 Live Demo
              </a>
            )}
            {project.githubRepo && (
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                🐙 GitHub
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Active Development' ? 'bg-blue-600' :
                  project.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'
                }`}>
                  {project.status}
                </span>
                <span className="text-gray-400">{project.type}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {project.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {project.tagline}
              </p>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Development Progress</span>
                  <span className="text-lg font-bold">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex justify-between text-sm text-gray-400">
                <span>Started: {project.startDate}</span>
                <span>Target: {project.targetCompletion}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src={project.heroImage}
                alt={project.name}
                className="rounded-xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-6 py-4 z-10">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-8 overflow-x-auto">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'technical', label: 'Technical Details' },
              { key: 'features', label: 'Features' },
              { key: 'development', label: 'Development Process' },
              { key: 'challenges', label: 'Challenges & Solutions' },
              { key: 'results', label: 'Results' },
              { key: 'code', label: 'Code Examples' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap py-2 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Problem & Solution */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">Problem & Solution</h2>
                  <div className="space-y-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-red-300 mb-3">The Problem</h3>
                      <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-green-300 mb-3">Our Solution</h3>
                      <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">Business Value</h3>
                      <p className="text-gray-300 leading-relaxed">{project.businessValue}</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Facts */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="ml-2 font-semibold">{project.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Type:</span>
                      <span className="ml-2 font-semibold">{project.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Started:</span>
                      <span className="ml-2 font-semibold">{project.startDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Target:</span>
                      <span className="ml-2 font-semibold">{project.targetCompletion}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="space-y-2">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-semibold text-blue-300">{tech.name}</span>
                        <span className="text-sm text-gray-400">{tech.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technical Details Tab */}
          {activeTab === 'technical' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(project.architecture).map(([key, value]) => (
                    <div key={key} className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3 capitalize text-blue-300">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Technology Stack Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-blue-300 mb-2">{tech.name}</h3>
                      <p className="text-gray-300 text-sm">{tech.purpose}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Features & Capabilities</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {project.features.map((feature, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={feature.screenshot}
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-blue-300">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Development Process Tab */}
          {activeTab === 'development' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Development Timeline</h2>
                <div className="space-y-6">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${getStatusColor(phase.status)}`}></div>
                        {index < project.timeline.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-700 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold">{phase.phase}</h3>
                          <span className="text-sm text-gray-400">{phase.duration}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(phase.status)} text-white`}>
                            {phase.status.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <span key={taskIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                              {task}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
                <div className="space-y-8">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-red-300 mb-2">Challenge</h3>
                          <p className="text-gray-300">{item.challenge}</p>
                        </div>
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-green-300 mb-2">Solution</h3>
                          <p className="text-gray-300">{item.solution}</p>
                        </div>
                      </div>
                      {item.technical && (
                        <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-blue-300 mb-2">Technical Implementation</h4>
                          <p className="text-gray-300 text-sm">{item.technical}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Results & Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Performance Metrics */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Performance</h3>
                    <div className="space-y-3">
                      {Object.entries(project.results.performance).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <div className="font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Metrics */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-300">Business Impact</h3>
                    <div className="space-y-3">
                      {Object.entries(project.results.business).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <div className="font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Metrics */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Technical Excellence</h3>
                    <div className="space-y-3">
                      {Object.entries(project.results.technical).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <div className="font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Code Examples Tab */}
          {activeTab === 'code' && (
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
                <div className="space-y-8">
                  {project.codeExamples.map((example, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="px-6 py-4 border-b border-gray-700">
                        <h3 className="text-lg font-semibold text-blue-300">{example.title}</h3>
                      </div>
                      <div className="p-6">
                        <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                          <code className="text-gray-300">{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{project.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{project.cta.description}</p>
          
          {/* CTA Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.cta.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
            >
              {project.cta.primaryAction}
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-200"
            >
              {project.cta.secondaryAction}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailTemplate;