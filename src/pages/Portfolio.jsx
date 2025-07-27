import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch GitHub repos from your public account
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Boswecw/repos");
        if (!res.ok) {
          throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        // Sort by most recently updated
        const sorted = data.sort((a, b) =>
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      } catch (err) {
        // Use proper error handling instead of console.log
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My GitHub Projects</h1>

      {loading && <p className="text-center text-gray-400">Loading projects...</p>}
      {error && (
        <div className="text-center">
          <p className="text-red-500 mb-2">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            Try Again
          </button>
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
            <p className="text-sm text-gray-300 mb-4">
              {repo.description || "No description provided."}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.language && (
                <span className="px-2 py-1 bg-blue-600 text-xs rounded">
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="px-2 py-1 bg-gray-600 text-xs rounded">
                  ⭐ {repo.stargazers_count}
                </span>
              )}
            </div>
            <div className="flex justify-between text-sm text-blue-400">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View Repo
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}