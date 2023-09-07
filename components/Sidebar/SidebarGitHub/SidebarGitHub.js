import { useState, useEffect } from 'react';

function SidebarGitHub({ gitHubLink }) {
  const [githubData, setGithubData] = useState(null);
  const [latestCommit, setLatestCommit] = useState(null);

  useEffect(() => {
    async function fetchGitHubData() {
      const repoName = gitHubLink.split('/').slice(-2).join('/'); // Get "username/repo" from the URL
      const apiUrl = `https://api.github.com/repos/${repoName}`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setGithubData(data);

        // Fetch the latest commit
        const commitResponse = await fetch(data.commits_url.replace('{/sha}', ''));
        const commits = await commitResponse.json();
        setLatestCommit(commits[0]);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    }

    fetchGitHubData();
  }, [gitHubLink]);

  if (!githubData || !latestCommit) return null;

  return (
    <div>
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <p>Latest commit: {latestCommit.commit.message}</p>
      <p>Language: {githubData.language}</p>
      <p>Stars: {githubData.stargazers_count}</p>
      <p>Watchers: {githubData.watchers_count}</p>
      <p>Forks: {githubData.forks_count}</p>
      <p>Issues: {githubData.open_issues_count}</p>
    </div>
  );
}

export default SidebarGitHub;
