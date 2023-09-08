import Link from 'next/link';
import Image from 'next/image'

function SidebarLatestPost({ post }) {
  if (!post) return <p>Loading latest project...</p>;

  return (
    <div className='card'>
      <Link href={`/projects/${post.slug}`}>
        <Image
          src={`https:${post.featuredImage.fields.file.url}?fit=fill&w=828&h=621`}
          width={828}
          height={621}
          alt={`Featured image for ${post.projectTitle}`}
          className='card-img-top'
          />
        </Link>
        <div className='card-body'>
        <h5 className="card-title">Latest Project: {post.projectTitle}</h5>
        <p className="card-text">{post.shortDescription}</p>
          </div>
    </div>
  );
}

export default SidebarLatestPost;