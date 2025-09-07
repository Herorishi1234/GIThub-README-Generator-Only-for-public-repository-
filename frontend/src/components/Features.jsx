const Features = () => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
        <span>⚡</span>
        Features
      </h3>
      <div className="space-y-4">
        {[
          {
            icon: "🔍",
            text: "Analyzes repository structure and technologies",
          },
          {
            icon: "🤖",
            text: "AI-powered content generation using Google Gemini",
          },
          { icon: "📊", text: "Includes project statistics and metadata" },
          { icon: "🎨", text: "Professional Markdown formatting" },
          { icon: "📱", text: "Works with any public GitHub repository" },
          { icon: "⚡", text: "No authentication required" },
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl">{feature.icon}</span>
            <p className="text-gray-300">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
