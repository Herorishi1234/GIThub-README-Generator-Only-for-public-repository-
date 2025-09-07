// routes/readmeRoutes.js
const express = require('express');
const router = express.Router();

const { parseGitHubUrl, fetchRepoData } = require('../services/githubService');
const { generateReadmeSections, generateReadmeMarkdown } = require('../services/readmeService');

router.post('/generate-readme', async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: 'Repository URL is required' });
    }

    const { owner, repo } = parseGitHubUrl(repoUrl);
    console.log(`Fetching data for ${owner}/${repo}...`);

    const repoData = await fetchRepoData(owner, repo);

    console.log('Generating README sections with AI...');
    const aiSections = await generateReadmeSections(repoData);

    const readmeContent = generateReadmeMarkdown(repoData, aiSections);

    res.json({
      success: true,
      readme: readmeContent,
      repository: {
        name: repoData.repo.name,
        fullName: repoData.repo.full_name,
        url: repoData.repo.html_url,
        description: repoData.repo.description,
        language: repoData.repo.language,
        stars: repoData.repo.stargazers_count
      }
    });
  } catch (error) {
    console.error('Error generating README:', error.message);
    res.status(400).json({ error: error.message, success: false });
  }
});

module.exports = router;


