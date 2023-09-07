import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchLatestProject } from '../../../lib/contentful';

function SidebarLatestPost() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    async function fetchLatestPostData() {
      try {
        const data = await fetchLatestProject();
        setLatestPost(data.fields);  // Assuming you'd want to work directly with the fields object
      } catch (error) {
        console.error('Error fetching latest post:', error);
      }
    }

    fetchLatestPostData();
  }, []);

  if (!latestPost) return <p>Loading latest project...</p>;

  return (
    <div>
      <h3>Latest Project</h3>
      <Link href={`/projects/${latestPost.slug}`}>
        <a>
          <img src={`https:${latestPost.featuredImage.fields.file.url}`} alt={`Featured image for ${latestPost.projectTitle}`} />
          <h4>{latestPost.projectTitle}</h4>
          <p>{latestPost.shortDescription}</p>
        </a>
      </Link>
    </div>
  );
}

export default SidebarLatestPost;
