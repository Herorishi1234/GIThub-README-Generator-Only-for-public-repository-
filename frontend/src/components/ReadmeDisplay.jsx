function ReadmeDisplay({ readme, copyToClipboard, downloadReadme }) {
  if (!readme) return null;
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold text-gray-200 flex items-center gap-3">
          <span>📝</span> Generated README.md
        </h3>
        <div className="flex gap-3">
          <button onClick={copyToClipboard} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl">
            📋 Copy
          </button>
          <button onClick={downloadReadme} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl">
            💾 Download
          </button>
        </div>
      </div>
      <div className="bg-gray-950 rounded-2xl p-6 border border-gray-700 max-h-96 overflow-y-auto">
        <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap break-words">{readme}</pre>
      </div>
    </div>
  );
}
export default ReadmeDisplay;
