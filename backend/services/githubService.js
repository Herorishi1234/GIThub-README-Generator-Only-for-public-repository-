// services/githubService.js
const axios = require('axios');

const GITHUB_API_BASE = process.env.GITHUB_API_BASE || 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;

// Parse GitHub URL
function parseGitHubUrl(url) {
  try {
    const cleanUrl = url.replace(/\/$/, '').replace(/\.git$/, '');
    const match = cleanUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);

    if (!match) throw new Error('Invalid GitHub URL format');
    return { owner: match[1], repo: match[2] };
  } catch {
    throw new Error('Unable to parse GitHub URL');
  }
}

// Fetch repository data
async function fetchRepoData(owner, repo) {
  try {
    const headers = {
      Accept: 'application/vnd.github.v3+json'
    };
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

    const repoResponse = await axios.get(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
      { headers }
    );

    const contentsResponse = await axios.get(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents`,
      { headers }
    );

    const languagesResponse = await axios.get(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
      { headers }
    );

    let packageInfo = null;
    try {
      const packageResponse = await axios.get(
        `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/package.json`,
        { headers }
      );
      const packageContent = Buffer.from(
        packageResponse.data.content,
        'base64'
      ).toString('utf8');
      packageInfo = JSON.parse(packageContent);
    } catch {
      // No package.json found
    }

    return {
      repo: repoResponse.data,
      contents: contentsResponse.data,
      languages: languagesResponse.data,
      packageInfo
    };
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Repository not found or is private');
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded or access forbidden');
    } else {
      throw new Error(`Failed to fetch repository data: ${error.message}`);
    }
  }
}

module.exports = { parseGitHubUrl, fetchRepoData };
