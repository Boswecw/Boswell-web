import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaRocket, FaStar } from "react-icons/fa";
import { trackPortfolioView, trackProjectClick } from "@/utils/analytics";
import BackToHomeButton from "@/components/BackToHomeButton";
import SEOHead from "@/components/SEOHead";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    trackPortfolioView();

    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Boswecw/repos");
        if (!res.ok) {
          throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        const sorted = data.sort((a, b) =>
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Featured demo projects
  const featuredProjects = [
    {
      id: 'restaurant-demo',
      name: 'Kentucky Bistro Restaurant',
      description: 'Full-featured restaurant website with online reservations, menu display, and mobile-responsive design. Built to showcase modern web development capabilities for local Kentucky businesses.',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Accessibility'],
      demoUrl: '/restaurant-demo.html',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=600&q=80',
      type: 'Live Demo',
      featured: true,
      buildTime: '2 days'
    }
  ];

  return (
    <>
      <SEOHead
        title="Portfolio & Live Demos | Boswell Web Development"
        description="View live demos and GitHub projects by Charles Boswell. Custom React websites, restaurant demos, and full-stack applications built with military-grade precision."
        keywords="portfolio, live demos, React developer, restaurant website demo, GitHub projects, veteran web developer, Charles Boswell"
        url="https://boswellwebdevelopment.com/portfolio"
      />

      <div className="min-h-screen bg-gray-950 text-white">
        {/* Navigation Header */}
        <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <BackToHomeButton />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Boswecw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="text-lg" />
                <span className="hidden sm:inline">GitHub Profile</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                Portfolio & Live Demos
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore live website demos and GitHub projects showcasing modern web development with React, AI integration, and responsive design.
              </p>
            </div>

            {/* Featured Projects Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaStar className="text-yellow-400 text-xl" />
                <h2 className="text-3xl font-bold text-white">Featured Live Demos</h2>
              </div>
              
              <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <FaRocket className="text-xs" />
                          {project.type}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                        {project.buildTime && (
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                            Built in {project.buildTime}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                          onClick={() => trackProjectClick(project.name, project.demoUrl, "demo")}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          View Live Demo
                        </a>
                      </div>

                      {/* Demo Note */}
                      <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-gray-400 text-sm">
                          💡 <strong>For Potential Clients:</strong> This demo showcases the quality and features you can expect for your business website.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Projects Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaGithub className="text-gray-400 text-xl" />
                <h2 className="text-3xl font-bold text-white">GitHub Projects</h2>
              </div>

              {loading && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mb-4"></div>
                  <p className="text-gray-400">Loading projects...</p>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-md mx-auto">
                    <p className="text-red-400 mb-4">Error: {error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-200"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {!loading && !error && repos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No repositories found.</p>
                </div>
              )}

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white truncate flex-1 mr-2">
                        {repo.name}
                      </h3>
                      {repo.private && (
                        <span className="px-2 py-1 bg-yellow-600 text-xs rounded text-black font-medium">
                          Private
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                      {repo.description || "No description provided."}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <span className="px-2 py-1 bg-blue-600 text-xs rounded font-medium">
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="px-2 py-1 bg-gray-600 text-xs rounded font-medium">
                          ⭐ {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="px-2 py-1 bg-gray-600 text-xs rounded font-medium">
                          🍴 {repo.forks_count}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        onClick={() => trackProjectClick(repo.name, repo.html_url, "repo")}
                      >
                        <FaGithub className="text-xs" />
                        View Repo
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-200"
                          onClick={() => trackProjectClick(repo.name, repo.homepage, "demo")}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </a>
                      )}
                    </div>

                    {repo.updated_at && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">
                          Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {repos.length > 6 && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <FaArrowLeft className="rotate-90" />
                    Back to Top
                  </button>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border border-blue-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for Your Custom Website?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                These demos showcase the quality and features you can expect. Get your professional website with the same attention to detail and modern technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <FaRocket />
                  Get 50% Off - First 3 Clients
                </a>
                <a
                  href="/about"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Learn About Our Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}