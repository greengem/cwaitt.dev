// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BadgeComponent from './BadgeComponent';
import AppSidebar from './Sidebar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Spinner from 'react-bootstrap/Spinner';

// Create a Contentful client
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Define the main component
function ProjectDetail() {
  // Extract the "id" parameter from the URL
  const { id } = useParams();

  // Define state variables
  const [project, setProject] = useState(null);
  const [postDate, setPostDate] = useState(null);
  const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

  // Fetch the project data using the Contentful client
  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await client.getEntry(id);
        setProject(response);

        // Extract post date and last updated date from the JSON response
        const postDate = response.sys.createdAt; // Assuming post date is the creation date of the entry
        const lastUpdatedDate = response.sys.updatedAt; // Last updated date

        setPostDate(postDate);
        setLastUpdatedDate(lastUpdatedDate);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    fetchProject();
  }, [id]);

  // If project data is not yet loaded, show a loading message
  if (!project) {
    return (
      <div className='page-loading'>
      <Spinner 
        animation="grow" 
        role="status"
        variant='primary'

      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
      )
    ;
  }

  // Define custom React components for rendering rich text
  const Bold = ({ children }) => <strong>{children}</strong>;
  const Text = ({ children }) => <p>{children}</p>;
  const Asset = ({ data }) => {
    const { title, description, file } = data.target.fields;
    const imageUrl = file.url;
    const alt = title || description || '';
    return <img src={imageUrl} alt={alt} />;
  };

  // Specify rendering options for rich text
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => <Asset data={node.data} />,
      // Add rendering for your new codeBlock content type
      'embedded-entry-block': (node) => {
        const { language, code } = node.data.target.fields;
        return (
          <div className="code-block">
            <SyntaxHighlighter 
            language={language} 
            style={docco}
            showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      },
    },
  };

  // Render rich text description using the documentToReactComponents function
  const renderedDescription = documentToReactComponents(
    project.fields.description,
    options
  );

  // Return the JSX structure of the component
  return (
    <Container className="mt-5">
      <Row>
      <Col lg={8}>
          <article>
            <header>
              <figure>
                {project.fields.featuredImage ? (
                  <img
                    src={project.fields.featuredImage.fields.file.url}
                    alt={project.fields.projectTitle}
                  />
                ) : (
                  <img
                    src="https://placehold.co/1080x400"
                    alt="Placeholder"
                  />
                )}
              </figure>
              <h1>{project.fields.projectTitle}</h1>
              <div className="text-muted fst-italic post-date">
                {/* Display the post date and last updated date */}
                <p className='mb-0'>
                  {lastUpdatedDate && <small>Last updated on {new Date(lastUpdatedDate).toLocaleDateString()} | </small>}
                  {postDate && <small>Posted on {new Date(postDate).toLocaleDateString()}</small>}
                </p>
              </div>
              <div className='mb-4'>
                {/* Display badges for the project's tech stack */}
                {project.fields.techStack.map((tech, index) => (
                  <BadgeComponent key={index} tech={tech} />
                ))}
              </div>
            </header>
            <section className="mb-4">
              {/* Render the rich text description */}
              {renderedDescription}
            </section>
          </article>
        </Col>
        <Col lg={4}>
          {/* Display the sidebar component */}
          <AppSidebar />
        </Col>
      </Row>
    </Container>
  );
}

// Export the component as the default export
export default ProjectDetail;