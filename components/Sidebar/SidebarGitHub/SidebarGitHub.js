import { useState, useEffect } from 'react';
import { Github, StarFill, BinocularsFill } from 'react-bootstrap-icons';
import Link from 'next/link';

function SidebarGitHub({ gitHubLink, demoUrl }) {
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
    <div className="card mb-4">
      <div className="card-header">Code</div>
      <div className="card-body">
        <h5 className="card-title"><Github className="me-1" /> {githubData.name}</h5>
        <p><small className='text-muted'>Latest commit: {latestCommit.commit.message}</small></p>
        <div className="d-grid gap-2">
          <Link className='btn btn-dark' href={gitHubLink} target='_blank' rel='noopener noreferrer'>
            <Github /> View on GitHub
          </Link>
          {demoUrl && (<Link className='btn btn-dark' href={demoUrl} target='_blank' rel='noopener noreferrer'>View Demo</Link>)}
        </div>
      </div>
      <div className='card-footer'>
          <span className='badge bg-primary me-1'>{githubData.language}</span>
          <span className='badge bg-warning me-1'><StarFill /> {githubData.stargazers_count}</span>
          <span className='badge bg-info me-1'><BinocularsFill /> {githubData.watchers_count}</span>
          <span className='badge bg-success me-1'>{githubData.forks_count}</span>
          {githubData.license && <span className='badge bg-secondary me-1'>License: {githubData.license.name}</span>}
          <span className='badge bg-danger me-1'>{githubData.open_issues_count}</span>
      </div>
    </div>
  );
}

export default SidebarGitHub;
