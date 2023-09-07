import { fetchAllTechStacks } from '../../lib/contentful';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function TechStackListing({ techStacks }) {
  return (
    <Container className='mt-5'>
      <h1 className='section-h1'>Tech Stack</h1>
        <Row>
        {techStacks.map(tech => (
          <Col key={tech} lg={3} className='g-4'>
          <Card>
            <Card.Body>
              <Card.Title>
              {tech}
            </Card.Title>
            <Link href={`/tech-stack/${tech}`} className='btn btn-primary'>View Posts</Link>
            </Card.Body>
          </Card>
          </Col>
        ))}
</Row>
    </Container>
  );
}

export async function getStaticProps() {
  const techStacks = await fetchAllTechStacks();

  return {
    props: {
      techStacks,
    },
    revalidate: 60,
  };
}
