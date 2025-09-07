function RepoInfo({ repoInfo }) {
  if (!repoInfo) return null;
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 mb-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
        <span>📊</span> Repository Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="text-gray-500 text-sm mb-1">Name</div>
          <div className="text-gray-100 font-semibold text-lg">{repoInfo.name}</div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="text-gray-500 text-sm mb-1">Full Name</div>
          <div className="text-gray-100 font-semibold text-lg">{repoInfo.fullName}</div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="text-gray-500 text-sm mb-1">Language</div>
          <div className="text-gray-100 font-semibold text-lg">{repoInfo.language || 'Multiple'}</div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="text-gray-500 text-sm mb-1">Stars</div>
          <div className="text-gray-100 font-semibold text-lg flex items-center gap-2">
            <span>⭐</span>
            {repoInfo.stars.toLocaleString()}
          </div>
        </div>
        {repoInfo.description && (
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700 md:col-span-2">
            <div className="text-gray-500 text-sm mb-1">Description</div>
            <div className="text-gray-100 font-semibold">{repoInfo.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default RepoInfo;
