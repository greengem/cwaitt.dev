import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as contentful from 'contentful';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import BadgeComponent from '../../Common/BadgeComponent/BadgeComponent';

import './Projects.css';

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
    <section className='section-portfolio'>
    <Container className="mt-5">
      <h1>Portfolio</h1>
      <Row xs={1} sm={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.sys.id}>
            <Card className="h-100 custom-card">
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
              <Card.ImgOverlay>
                <Card.Title>
                <Link to={`/projects/${project.sys.id}`}>
                  {project.fields.projectTitle}
                  </Link>
                  </Card.Title>
                <Card.Text>
                  {/*{project.fields.shortDescription}
                  </Card.Text>*/}
                  <div className='tech-stack-labels'>
                  {project.fields.techStack.map((tech, index) => (
                    <BadgeComponent key={index} tech={tech} />
                  ))}
                  </div>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default Projects;