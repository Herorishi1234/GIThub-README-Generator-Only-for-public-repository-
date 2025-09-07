import React from 'react'

const Instructions = () => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                <span>🚀</span>
                How to Use
              </h3>
              <div className="space-y-4">
                {[
                  'Paste any public GitHub repository URL',
                  'Click "Generate README" and wait for the magic ✨',
                  'Copy the generated README or download it',
                  'Customize the content as needed for your project'
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Instructions
