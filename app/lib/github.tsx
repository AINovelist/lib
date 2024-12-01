// lib/github.js
const { Octokit } = require('@octokit/octokit');

async function getFilesFromRepo(owner: any, repo: any, path: any) {
  const octokit = new Octokit();

  try {
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
}

module.exports = { getFilesFromRepo };
