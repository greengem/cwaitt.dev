import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as contentful from 'contentful';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BadgeComponent from './BadgeComponent';
import ShortenedDescription from './ShortenedDescription';

import './App.css';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await client.getEntries({
          content_type: 'project',
        });
        setProjects(response.items);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Portfolio</h2>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        {projects.map((project) => (
          <Col key={project.sys.id}>
            <Card className="h-100">
              <Link to={`/projects/${project.sys.id}`}>
                <div className="card-img-container">
                  {project.fields.thumbnailImage ? (
                    <Card.Img
                      variant="top"
                      src={project.fields.thumbnailImage.fields.file.url}
                      alt={project.fields.projectTitle}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src="https://placehold.co/600x400"
                      alt="Placeholder"
                    />
                  )}
                </div>
              </Link>
              <Card.Body>
                <Card.Title>{project.fields.projectTitle}</Card.Title>
                <Card.Text>
                  <ShortenedDescription
                    description={
                      project.fields.description.content[0].content[0].value
                    }
                    maxLength={150}
                  />
                </Card.Text>
                <div>
                  {project.fields.techStack.map((tech, index) => (
                    <BadgeComponent key={index} tech={tech} />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
