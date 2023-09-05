import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as contentful from 'contentful';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
//import Badge from 'react-bootstrap/Badge';
//import BadgeComponent from '../../Common/BadgeComponent/BadgeComponent';
import './Projects.scss';

import ProjectsWave from '../../Common/Waves/ProjectsWave';
import FooterWave from '../../Common/Waves/FooterWave';

// Create a Contentful client
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Projects() {
  // State to hold the fetched projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from Contentful when the component mounts
    async function fetchProjects() {
      try {
        const response = await client.getEntries({
          content_type: 'project',
          order: '-sys.createdAt', // Sort by creation date
        });
        setProjects(response.items);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id='portfolio' className='section-portfolio'>
      <ProjectsWave />
      <Container>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
          <h1>Projects</h1>
        </AnimationOnScroll>
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
          {projects.map((project, index) => (
            <Col key={project.sys.id}>
              <AnimationOnScroll
                animateOnce={true}
                animateIn={"animate__fadeInRightBig"}
                delay={index % 2 === 0 ? "0" : "500"}
              >
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
                        <span key={index} className={`badge ${index === 0 ? 'bg-accent' : 'bg-secondary'}`}>{tech}</span>
                      ))}
                    </div>
                  </Card.Footer>
                </Card>
              </AnimationOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterWave />
    </section>
  );
}

export default Projects;
