import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as contentful from 'contentful';
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
          <h1>Projects</h1>
        </AnimationOnScroll>
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
          {projects.map((project) => (
            <Col key={project.sys.id}>
              <Card className="h-100 custom-card">
                <Link to={`/projects/${project.sys.id}`}>
                  {project.fields.thumbnailImage ? (
                    <Card.Img
                      variant="top"
                      src={`${project.fields.thumbnailImage.fields.file.url}?fit=fill&w=600&h=400`}
                      alt={project.fields.projectTitle}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src="https://placehold.co/600x400"
                      alt="Placeholder"
                    />
                  )}
                </Link>
                <Card.Body>
                  <Card.Title>{project.fields.projectTitle}</Card.Title>
                  <Card.Text>{project.fields.shortDescription}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className='tech-stack-labels'>
                    {project.fields.techStack.map((tech, index) => (
                      <BadgeComponent key={index} tech={tech} />
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
