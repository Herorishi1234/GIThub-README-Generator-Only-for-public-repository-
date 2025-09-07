// services/readmeService.js
const { generateWithGemini } = require('./geminiService');

async function generateReadmeSections(repoData) {
  const { repo, languages, packageInfo } = repoData;

  const prompt = `Generate professional README sections for a GitHub repository with the following information:

Repository Name: ${repo.name}
Description: ${repo.description || 'No description provided'}
Languages: ${Object.keys(languages).join(', ')}
${
  packageInfo
    ? `Package.json dependencies: ${Object.keys(
        packageInfo.dependencies || {}
      ).join(', ')}`
    : ''
}

Please provide:
1. A detailed description (2-3 sentences) if the original is missing or too brief
2. A list of 4-6 key features
3. Basic usage instructions
4. Installation instructions

Format your response as JSON with keys:
- description
- features (array of strings)
- usage
- installation`;

  try {
    const aiResponse = await generateWithGemini(prompt);
    const cleanResponse = aiResponse.replace(/```json\n?|\n?```/g, '');
    return JSON.parse(cleanResponse);
  } catch {
    console.warn('AI generation failed, using fallback content');
    return {
      description:
        repo.description ||
        `${repo.name} is a ${Object.keys(languages)[0] || 'software'} project.`,
      features: [
        'Modern technology stack',
        'Clean code architecture',
        'Easy to use and maintain',
        'Well documented'
      ],
      usage:
        'Please refer to the installation section and code comments for usage instructions.',
      installation: 'Clone the repository and follow the setup instructions below.'
    };
  }
}

function generateReadmeMarkdown(repoData, aiSections) {
  const { repo, languages, packageInfo, contents } = repoData;

  const techStack = Object.keys(languages)
    .map(lang => `- ${lang}`)
    .join('\n');

  const projectStructure = contents
    .filter(item => item.type === 'file' || item.type === 'dir')
    .slice(0, 10)
    .map(item => `${item.type === 'dir' ? '📁' : '📄'} ${item.name}`)
    .join('\n');

  let installationCommands = '';
  if (packageInfo) {
    installationCommands = `\`\`\`bash
git clone ${repo.html_url}
cd ${repo.name}
npm install
npm start
\`\`\``;
  } else if (languages.Python) {
    installationCommands = `\`\`\`bash
git clone ${repo.html_url}
cd ${repo.name}
pip install -r requirements.txt
python main.py
\`\`\``;
  } else {
    installationCommands = `\`\`\`bash
git clone ${repo.html_url}
cd ${repo.name}
# Follow language-specific setup instructions
\`\`\``;
  }

  return `# ${repo.name}

## Description
${aiSections.description}

## Features
${aiSections.features.map(feature => `- ${feature}`).join('\n')}

## Tech Stack
${techStack}

## Installation
${installationCommands}

## Usage
${aiSections.usage}

## Project Structure
\`\`\`
${projectStructure}
\`\`\`

## Repository Information
- **Stars:** ${repo.stargazers_count}
- **Forks:** ${repo.forks_count}
- **Language:** ${repo.language || 'Multiple'}
- **Created:** ${new Date(repo.created_at).toLocaleDateString()}
- **Last Updated:** ${new Date(repo.updated_at).toLocaleDateString()}

## License
${repo.license ? repo.license.name : 'No license specified'}

## Links
- **Repository:** [${repo.html_url}](${repo.html_url})
${repo.homepage ? `- **Website:** [${repo.homepage}](${repo.homepage})` : ''}

---
*This README was generated automatically using the README Generator tool.*
`;
}

module.exports = { generateReadmeSections, generateReadmeMarkdown };
