import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as contentful from 'contentful';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BadgeComponent from './BadgeComponent';
import * as THREE from 'three';
import './App.css';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Projects() {
  console.log("Projects component rendering...");
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


  useEffect(() => {
    console.log("Setting up animation...");
    const setupAnimation = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const animationContainer = document.getElementById('animation-container');
      animationContainer.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        animationContainer.removeChild(renderer.domElement); // Remove canvas from the container
        renderer.dispose();
      };
    };

    setupAnimation();
  }, []);


  return (
    <Container className="mt-5">
      <div id="animation-container"></div>
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
                      src="https://picsum.photos/600/400"
                      alt="Placeholder"
                    />
                  )}
                </div>
              </Link>
              <Card.Body>
                <Card.Title>{project.fields.projectTitle}</Card.Title>
                <Card.Text>
                  {project.fields.shortDescription}
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
