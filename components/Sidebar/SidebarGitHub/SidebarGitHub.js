import { useState, useEffect } from 'react';
import { Github, StarFill, BinocularsFill } from 'react-bootstrap-icons';
import {Card, CardHeader, CardBody, CardFooter, Chip, Button, Code} from "@nextui-org/react";
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

  function truncateText(text, length = 150) {
    if (text.length <= length) {
        return text;
    }
    return text.slice(0, length) + '...';
  }

  if (!githubData || !latestCommit) return null;

  return (
    <Card className='mb-4 py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p><Github height='32' width='32' className="me-2 inline-block" /> <Code size='lg'>{githubData.name}</Code></p>
      </CardHeader>
      <CardBody>
        <p className='my-4'>
          <code className='text-sm'>
            <span className='text-danger'>Latest commit: </span>
            <span>{truncateText(latestCommit.commit.message)}</span>
          </code>
        </p>
        <div className='flex space-x-4'>
            <Link href={gitHubLink} target='_blank' rel='noopener noreferrer' className='flex-1'>
                <Button className='w-full' color='danger'><Github /> View on GitHub</Button>
            </Link>
            {demoUrl && (
                <Link href={demoUrl} target='_blank' rel='noopener noreferrer' className='flex-1'>
                    <Button className='w-full' color='secondary'>View Demo</Button>
                </Link>
            )}
          </div>
      </CardBody>
      <CardFooter>
      <div className='flex flex-wrap'>
          <Chip radius="sm" color="default" className='mx-1'>{githubData.language}</Chip>
          <Chip radius="sm" color="warning" className='mx-1'>
              <StarFill className="inline-block" /> {githubData.stargazers_count}
          </Chip>
          <Chip radius="sm" color="primary" className='mx-1'>
              <BinocularsFill className="inline-block" /> {githubData.watchers_count}
          </Chip>
          <Chip radius="sm" color="success" className='mx-1'>Forks: {githubData.forks_count}</Chip>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SidebarGitHub;
