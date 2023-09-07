import Link from 'next/link';
import Image from 'next/image'

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
  return (
    <Col>
      <Card className="card h-100">
        <Link href={`/projects/${project.fields.slug}`}>
          {project.fields.featuredImage && (
            <Image
              src={`https:${project.fields.featuredImage.fields.file.url}?fit=fill&w=1268&h=951`}
              className='card-img-top'
              alt={project.fields.featuredImage.fields.description || project.fields.projectTitle}
              width={1268}
              height={951}
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
              <span key={index} className={`badge me-1 ${index === 0 ? 'bg-accent' : 'bg-secondary'}`}>{tech}</span>
            ))}
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ProjectCard;
