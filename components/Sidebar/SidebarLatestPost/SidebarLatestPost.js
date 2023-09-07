import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SidebarLatestPost({ post }) {
  if (!post) return <p>Loading latest project...</p>;

  return (
    <Card>
      <Card.Header>Latest Project</Card.Header>
      
      <Link href={`/projects/${post.slug}`}>
          <Card.Img src={`https:${post.featuredImage.fields.file.url}`} alt={`Featured image for ${post.projectTitle}`} variant='top' />
        </Link>
        <Card.Body>
          <Card.Title>{post.projectTitle}</Card.Title>
          <Card.Text>{post.shortDescription}</Card.Text>
          </Card.Body>
    </Card>
  );
}

export default SidebarLatestPost;
