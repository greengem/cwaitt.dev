// Import necessary components and libraries from external modules
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Github, StarFill, BinocularsFill } from 'react-bootstrap-icons';

// Create a Contentful client using environment variables
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Function to format a date string
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Define the SidebarGitHub component
function SidebarGitHub() {
  // State variables to store GitHub and commit information
  const [githubData, setGithubData] = useState(null); // GitHub repository data
  const [latestCommit, setLatestCommit] = useState(null); // Latest commit info
  const [projectHasDemo, setProjectHasDemo] = useState(false); // Initialize with a default value

  // Extract the "id" parameter from the URL using React Router's useParams()
  const { id } = useParams();

  // useEffect is used to perform side effects in function components
  useEffect(() => {
    // Fetch project data from Contentful based on the extracted "id"
    async function fetchProject() {
      try {
        const response = await client.getEntry(id);
        const githubLink = response.fields.gitHubLink;
        const hasDemo = response.fields.hasDemo;

        // Set the projectHasDemo state based on the value from Contentful
        setProjectHasDemo(hasDemo);

        // Fetch GitHub repository data using the provided GitHub link
        fetchGithubData(githubLink);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    // Fetch GitHub repository data from the provided API URL
    async function fetchGithubData(apiUrl) {
      try {
        const githubResponse = await fetch(apiUrl);
        const githubRepoData = await githubResponse.json();
        setGithubData(githubRepoData);

        // Fetch information about the latest commit
        const commitsUrl = githubRepoData.commits_url.replace('{/sha}', '');
        const commitsResponse = await fetch(commitsUrl);
        const commitsData = await commitsResponse.json();
        const latestCommitInfo = commitsData[0]; // Assuming the first commit is the latest
        setLatestCommit(latestCommitInfo);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    }

    // Call the fetchProject function when the "id" parameter changes
    fetchProject();
  }, [id]);

  // JSX code to render the component's UI
  return (
    <>
      {githubData && latestCommit && (
        <Card className="mb-4">
          {/* Card Header */}
          <Card.Header>Code</Card.Header>
          <Card.Body>
            <Card.Title>
              {/* Display GitHub repository name with GitHub icon */}
              <div className="github-title">
                <Github className="me-1" /> {githubData.name}
              </div>
            </Card.Title>
            {/* Display GitHub repository description */}
            <p className='mb-0'>{githubData.description}</p>

{/* Display information about the latest commit */}
{latestCommit.commit && (
  <p>
    <small className='text-muted'>
    Latest commit {formatDate(latestCommit.commit.committer.date)}:{' '}
      {latestCommit.commit.message.length > 100 // Adjust the desired length
        ? `${latestCommit.commit.message.substring(0, 100)}...`
        : latestCommit.commit.message
      }.{' '}
      <a href={latestCommit.html_url} target='_blank' rel="noopener noreferrer">
        View
      </a>
    </small>
  </p>
)}


            {/* Buttons to view the repository on GitHub and a live demo (if available) */}
            <div className="d-grid gap-2">
              <Button
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github /> View on GitHub
              </Button>
              {/* Conditionally render Live Demo button */}
              {projectHasDemo && (
                <Button
                  href={`/demos/${githubData.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </Card.Body>
          {/* Card Footer */}
          <Card.Footer>
            {/* Display various badges for repository statistics */}
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
            {/* Display license badge if a license is specified */}
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

// Export the SidebarGitHub component as the default export
export default SidebarGitHub;
