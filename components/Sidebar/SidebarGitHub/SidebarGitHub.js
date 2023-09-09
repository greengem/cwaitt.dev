import { useState, useEffect } from 'react';
import { Github, StarFill, BinocularsFill } from 'react-bootstrap-icons';
import {Card, CardHeader, CardBody, CardFooter, Chip, Button} from "@nextui-org/react";
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
    <Card className='mb-4'>
      <CardHeader>Code</CardHeader>
      <CardBody>
        <h5 className="card-title"><Github className="me-1" /> {githubData.name}</h5>
        <p><small className='text-muted'>Latest commit: {latestCommit.commit.message}</small></p>
        <div className="d-grid gap-2">
          <Link href={gitHubLink} target='_blank' rel='noopener noreferrer'>
            <Button color='danger'><Github /> View on GitHub</Button>
            
          </Link>
          {demoUrl && (<Link href={demoUrl} target='_blank' rel='noopener noreferrer'><Button>View Demo</Button></Link>)}
        </div>
      </CardBody>
      <CardFooter>
      <div className='flex flex-wrap'>
          <Chip color="default" size="sm" className='me-1'>{githubData.language}</Chip>
          <Chip color="primary" size="sm" className='me-1'><StarFill className="inline-block" /> {githubData.stargazers_count}</Chip>
          <Chip color="secondary" size="sm" className='me-1'><BinocularsFill className="inline-block" /> {githubData.watchers_count}</Chip>
          <Chip color="success" size="sm" className='me-1'>Forks: {githubData.forks_count}</Chip>
          {githubData.license && <Chip color="warning" size="sm" className='me-1'>License: {githubData.license.name}</Chip>}
          <Chip color="danger" size="sm" className='me-1'>Issues: {githubData.open_issues_count}</Chip>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SidebarGitHub;
