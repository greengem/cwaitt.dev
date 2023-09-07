import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Github, StarFill, BinocularsFill } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';

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
    <Card className="mb-4">
      <Card.Header>Code</Card.Header>
      <Card.Body>
        <Card.Title><Github className="me-1" /> {githubData.name}</Card.Title>
        <p><small className='text-muted'>Latest commit: {latestCommit.commit.message}</small></p>
        <div className="d-grid gap-2">
  <Button 
    variant='dark'
    href={gitHubLink}
    target='_blank'
    rel='noopener noreferrer'
  >
    <Github /> View on GitHub
  </Button>

  {demoUrl && (
    <Button
      href={demoUrl}
      target='_blank'
      rel='noopener noreferrer'
    >
      View Demo
    </Button>
  )}
</div>

      </Card.Body>
      <Card.Footer>
          <Badge bg="primary" className='me-1'>{githubData.language}</Badge>
          <Badge bg="warning" className='me-1'><StarFill /> {githubData.stargazers_count}</Badge>
          <Badge bg="info" className='me-1'><BinocularsFill /> {githubData.watchers_count}</Badge>
          <Badge bg="success" className='me-1'>{githubData.forks_count}</Badge>
          {githubData.license && <Badge bg='secondary' className='me-1'>License: {githubData.license.name}</Badge>}
          <Badge bg="danger">{githubData.open_issues_count}</Badge>
        </Card.Footer>
    </Card>
  );
}

export default SidebarGitHub;
