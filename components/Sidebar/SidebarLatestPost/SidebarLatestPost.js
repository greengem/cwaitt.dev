import Link from 'next/link';
import Image from 'next/image'
import Card from 'react-bootstrap/Card';

function SidebarLatestPost({ post }) {
  if (!post) return <p>Loading latest project...</p>;

  return (
    <Card>
      <Link href={`/projects/${post.slug}`}>
        <Image
          src={`https:${post.featuredImage.fields.file.url}?fit=fill&w=828&h=621`}
          width={828}
          height={621}
          alt={`Featured image for ${post.projectTitle}`}
          className='card-img-top'
          />
        </Link>
        <Card.Body>
          <Card.Title>Latest Project: {post.projectTitle}</Card.Title>
          <Card.Text>{post.shortDescription}</Card.Text>
          </Card.Body>
    </Card>
  );
}

export default SidebarLatestPost;