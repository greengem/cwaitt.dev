import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Github, StarFill, BinocularsFill, ClockHistory, Link45deg } from 'react-bootstrap-icons';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function SidebarGitHub() {
  const [githubData, setGithubData] = useState(null);
  const [latestCommit, setLatestCommit] = useState(null); // State to store latest commit info

  const { id } = useParams();

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await client.getEntry(id);
        const githubLink = response.fields.gitHubLink;

        fetchGithubData(githubLink);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    async function fetchGithubData(apiUrl) {
      try {
        const githubResponse = await fetch(apiUrl);
        const githubRepoData = await githubResponse.json();
        setGithubData(githubRepoData);

        // Fetch latest commit information
        const commitsUrl = githubRepoData.commits_url.replace('{/sha}', '');
        const commitsResponse = await fetch(commitsUrl);
        const commitsData = await commitsResponse.json();
        const latestCommitInfo = commitsData[0]; // Assuming the first commit is the latest
        setLatestCommit(latestCommitInfo);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    }

    fetchProject();
  }, [id]);

  return (
    <>
      {githubData && latestCommit && (
        <Card className="mb-4">
          <Card.Header>Code</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="github-title">
                <Github className="me-1" /> {githubData.name}
              </div>
            </Card.Title>
            <p className='mb-0'>{githubData.description}</p>

            {latestCommit.commit && (
              <p><small className='text-muted'>
                Latest commit {latestCommit.commit.committer.date}: {latestCommit.commit.message}. <a href={latestCommit.html_url} target='_blank' rel="noopener noreferrer">View</a>
              </small></p>
            )}

            <div className="d-grid gap-2">
              <Button
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github /> View on GitHub
              </Button>
              <Button
                href="/projectdemos/DRG-DD-API"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Live Demo (Unavailable)
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <span className="badge bg-primary me-2">{githubData.language}</span>
            <span className="badge bg-warning me-2">
              <StarFill /> {githubData.stargazers_count}
            </span>
            <span className="badge bg-info me-2">
              <BinocularsFill /> {githubData.watchers_count}
            </span>
            <span className="badge bg-success me-2">
              Forks: {githubData.forks_count}
            </span>
            {githubData.license && (
              <span className="badge bg-secondary me-2">
                License: {githubData.license.name}
              </span>
            )}
            <span className="badge bg-danger">
              Open Issues: {githubData.open_issues_count}
            </span>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}

export default SidebarGitHub;
