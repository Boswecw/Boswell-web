import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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

  return (
    <>
      <SEOHead
        title="GitHub Portfolio Projects | Boswell Web Development"
        description="Explore Charles Boswell's latest GitHub repositories. Full-stack React and MERN projects built with military-grade precision and a modern tech stack."
        keywords="GitHub portfolio, React developer, MERN stack projects, veteran web developer, Charles Boswell"
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
                My GitHub Projects
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore my latest React, JavaScript, and full-stack development projects.
                Each repository showcases different aspects of modern web development.
              </p>
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
                    <h2 className="text-xl font-semibold text-white truncate flex-1 mr-2">
                      {repo.name}
                    </h2>
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
        </div>
      </div>
    </>
  );
}
