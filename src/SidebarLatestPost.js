import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'o21ic9w5xv91',
  accessToken: 'dXgnguRv2RxbbXF5ZvPRIwfaG8WIWATY0zdryVqjy5k',
});

function SidebarLatestPost() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    async function fetchLatestPost() {
      try {
        const response = await client.getEntries({
          content_type: 'project', // Use your content type ID here
          order: '-sys.createdAt',
          limit: 1,
        });

        if (response.items.length > 0) {
          const latestPostData = response.items[0].fields;
          setLatestPost({
            title: latestPostData.projectTitle,
            shortDescription: latestPostData.shortDescription,
            thumbnailImage: latestPostData.thumbnailImage?.fields.file.url, // Check if thumbnailImage exists
            link: `/projects/${response.items[0].sys.id}`,
          });
        }
      } catch (error) {
        console.error('Error fetching latest post:', error);
      }
    }

    fetchLatestPost();
  }, []);

  return (
    <Card>
      {latestPost?.thumbnailImage ? (
        <Card.Img variant="top" src={latestPost.thumbnailImage} />
      ) : (
        <Card.Img variant="top" src="https://placehold.co/900x400" /> // Placeholder image
      )}
      <Card.Body>
        {latestPost && (
          <>
            <Card.Title>Latest Project: {latestPost.title}</Card.Title>
            <Card.Text>{latestPost.shortDescription}</Card.Text>
            <Button href={latestPost.link}>View Project</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default SidebarLatestPost;
