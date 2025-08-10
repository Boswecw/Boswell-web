import React from 'react';

const CurrentProjectsSection = () => {
  // Your current projects data
  const currentProjects = [
    {
      id: 'leopold',
      name: 'Leopold',
      category: 'development',
      type: 'Web Application',
      description: 'Advanced web application featuring modern UI/UX design and robust backend functionality. Built with scalable architecture and optimized performance for enterprise-level usage.',
      status: 'In Progress',
      progress: 65,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
      startDate: 'Jan 2024',
      estimatedCompletion: 'Summer 2025',
      highlights: [
        'Advanced user authentication',
        'Real-time data processing',
        'Responsive design system'
      ],
      links: [
        { type: 'details', url: '/projects/leopold', label: 'Project Details' },
        { type: 'demo', url: '/leopold-demo', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/Boswecw/leopold', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'livy',
      name: 'Livy',
      category: 'development',
      type: 'Full-Stack Application',
      description: 'Comprehensive full-stack application with advanced features including user management, data analytics, and intuitive dashboard interfaces for business operations.',
      status: 'Planning',
      progress: 25,
      technologies: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Chart.js'],
      startDate: 'Nov 2024',
      estimatedCompletion: 'Late 2025',
      highlights: [
        'Advanced analytics dashboard',
        'User role management',
        'API integration framework'
      ],
      links: [
        { type: 'details', url: '/projects/livy', label: 'Project Details' },
        { type: 'concept', url: '/livy-concept', label: 'View Concept' },
        { type: 'github', url: 'https://github.com/Boswecw/livy', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'furbabies',
      name: 'FurBabies E-commerce',
      category: 'development',
      type: 'Full E-commerce Site',
      description: 'Complete e-commerce platform for pet supplies and accessories. Demonstrates full e-commerce capabilities including shopping cart, payment processing, inventory management, and customer accounts with order tracking. Perfect example for retail businesses looking to sell online - can be enhanced with AI features like smart recommendations and automated customer service.',
      status: 'Active Development',
      progress: 70,
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Express'],
      startDate: 'Sep 2024',
      estimatedCompletion: 'March 2025',
      highlights: [
        'Full payment integration',
        'Real-time inventory tracking',
        'Customer review system'
      ],
      links: [
        { type: 'details', url: '/projects/furbabies', label: 'Project Details' },
        { type: 'demo', url: '/furbabies-demo', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/Boswecw/furbabies-ecommerce', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'tribe-chat-app',
      name: 'Tribe Chat App',
      category: 'development',
      type: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, group conversations, file sharing, and user presence indicators. Built for team collaboration and community building. Showcases real-time capabilities perfect for businesses needing internal communication tools.',
      status: 'In Progress',
      progress: 55,
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      startDate: 'Nov 2024',
      estimatedCompletion: 'April 2025',
      highlights: [
        'Real-time messaging',
        'Group chat functionality',
        'File sharing capabilities'
      ],
      links: [
        { type: 'details', url: '/projects/tribe-chat', label: 'Project Details' },
        { type: 'demo', url: '/tribe-chat-demo', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/Boswecw/tribe-chat-app', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'ai-prompting-app',
      name: 'AI Prompting App',
      category: 'development',
      type: 'AI-Powered Tool',
      description: 'Intelligent prompting application that helps users craft better AI prompts with templates, optimization suggestions, and performance analytics for various AI models. Demonstrates seamless AI integration and how intelligent features can enhance any business application.',
      status: 'Active Development',
      progress: 85,
      technologies: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'Node.js'],
      startDate: 'Aug 2024',
      estimatedCompletion: 'Feb 2025',
      highlights: [
        'Smart prompt optimization',
        'Multi-model support',
        'Performance analytics'
      ],
      links: [
        { type: 'details', url: '/projects/ai-prompting', label: 'Project Details' },
        { type: 'demo', url: '/ai-prompting-demo', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/Boswecw/ai-prompting-app', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'ai-business-suite',
      name: 'AI Business Automation Suite',
      category: 'development',
      type: 'Web Application',
      description: 'Comprehensive business automation platform featuring AI-powered customer service, inventory management, and analytics dashboard for Kentucky businesses. Demonstrates enterprise-level capabilities for companies looking to automate operations and improve efficiency.',
      status: 'Active Development',
      progress: 80,
      technologies: ['React', 'Node.js', 'OpenAI API', 'Firebase', 'MongoDB'],
      startDate: 'Oct 2024',
      estimatedCompletion: 'Feb 2025',
      highlights: [
        'AI chatbot integration',
        'Real-time analytics',
        'Mobile-responsive design'
      ],
      links: [
        { type: 'details', url: '/projects/ai-business-suite', label: 'Project Details' },
        { type: 'demo', url: '/ai-suite-demo', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/Boswecw/ai-business-suite', label: 'GitHub' }
      ],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
      id: 'portfolio-enhancement',
      name: 'Interactive Portfolio Platform',
      category: 'development',
      type: 'Full-Stack Platform',
      description: 'Enhanced portfolio platform with dynamic project showcases, client testimonials, and integrated booking system for web development services.',
      status: 'In Progress',
      progress: 45,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Firebase'],
      startDate: 'Dec 2024',
      estimatedCompletion: 'March 2025',
      highlights: [
        'Dynamic project gallery',
        'Client portal integration',
        'Performance optimization'
      ],
      links: [
        { type: 'details', url: '/projects/portfolio-platform', label: 'Project Details' },
        { type: 'live', url: 'https://boswellwebdevelopment.com', label: 'Current Site' },
        { type: 'github', url: 'https://github.com/Boswecw/boswell-web', label: 'Source Code' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&w=600&q=80'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Development':
      case 'In Progress':
        return 'bg-blue-600';
      case 'Planning':
        return 'bg-yellow-600';
      case 'Completed':
        return 'bg-green-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getCategoryIcon = () => {
    return <span className="text-blue-400">💻</span>;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Current Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my active web development projects featuring cutting-edge technologies, AI integration, 
            and innovative solutions for businesses. Each project represents the quality and expertise I bring to 
            <strong className="text-blue-400"> custom application development</strong>, 
            <strong className="text-blue-400"> business website solutions</strong>, and 
            <strong className="text-purple-400"> AI integration services</strong>.
          </p>
        </div>

        {/* Services Introduction */}
        <div className="text-center mb-8 bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            <span className="text-blue-400 font-semibold">Ready to build your next application, business website, or integrate AI into your existing systems?</span> 
            {" "}The projects below demonstrate my expertise in full-stack development, AI integration, and modern web technologies. 
            Each represents the same level of quality, innovation, and attention to detail I bring to every client project.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500"
            >
              {/* Project Image & Status */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
                    <span className="text-xs">⏱️</span>
                    {project.status}
                  </span>
                  <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    {getCategoryIcon()}
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Progress</div>
                    <div className="text-lg font-bold text-white">{project.progress}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies/Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>Started: {project.startDate}</span>
                  <span>Target: {project.estimatedCompletion}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 text-sm ${
                        link.type === 'details'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                          : link.type === 'demo' || link.type === 'live'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : link.type === 'github'
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      {link.type === 'details' && <span>📋</span>}
                      {link.type === 'github' && <span>🐙</span>}
                      {(link.type === 'demo' || link.type === 'live') && <span>🔗</span>}
                      {(link.type === 'preview' || link.type === 'concept') && <span>👁️</span>}
                      {link.type === 'updates' && <span>📥</span>}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Turn Your Ideas Into Reality with AI-Powered Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Have an application idea you want to see built? Need a professional business website? 
              Want to integrate AI into your existing systems or new project?
              I specialize in bringing concepts to life with modern technology, scalable architecture, and intelligent automation.
            </p>
            
            {/* Service Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-xl font-bold text-white mb-2">Custom Application Development</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  From concept to deployment - E-commerce platforms, chat applications, business automation systems, 
                  and enterprise solutions. Full-stack development with modern technologies and scalable architecture.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="text-xl font-bold text-white mb-2">Business Website Solutions</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Professional websites that drive results - Responsive design, SEO optimization, 
                  e-commerce integration, content management, and ongoing maintenance. Perfect for Kentucky businesses.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-600">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-xl font-bold text-white mb-2">AI Integration Services</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transform your business with intelligent automation - AI chatbots, smart analytics, automated workflows, 
                  content generation, and custom AI solutions. Integrate cutting-edge AI into any website or application.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <span>💡</span>
                Discuss Your Project
              </a>
              <a
                href="/ai-services"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <span>🤖</span>
                AI Integration Services
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <span>📋</span>
                All Services & Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjectsSection;