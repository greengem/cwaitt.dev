import React from 'react';

function ShortenedDescription({ description, maxLength }) {
  const truncatedDescription = description.length > maxLength
    ? `${description.slice(0, maxLength)}...`
    : description;

  return <p>{truncatedDescription}</p>;
}

export default ShortenedDescription;
