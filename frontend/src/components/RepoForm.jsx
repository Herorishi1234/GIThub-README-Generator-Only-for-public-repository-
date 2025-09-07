function RepoForm({ repoUrl, setRepoUrl, handleSubmit, loading }) {
  const examples = [
    { name: "VS Code", url: "https://github.com/microsoft/vscode" },
    { name: "React", url: "https://github.com/facebook/react" },
    { name: "Node.js", url: "https://github.com/nodejs/node" },
    { name: "Next.js", url: "https://github.com/vercel/next.js" },
  ];

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 mb-8 shadow-md">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <label
            htmlFor="repo-url"
            className="block text-lg font-semibold text-gray-300 mb-3"
          >
            GitHub Repository URL
          </label>
          <input
            id="repo-url"
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/username/repository-name"
            className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-base"
            disabled={loading}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !repoUrl.trim()}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          
        >
          {loading
            ? "Generating README..."
            : "✨ Generate Professional README 🚀"}
        </button>

        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4 text-sm">
            Try these popular repositories:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {examples.map((ex) => (
              <button
                key={ex.name}
                onClick={() => setRepoUrl(ex.url)}
                disabled={loading}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 text-sm transition-all duration-200"
              >
                {ex.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoForm;
