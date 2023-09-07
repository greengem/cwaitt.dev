import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchProjects = async () => {
  const entries = await client.getEntries({
    content_type: 'project'
  });
  return entries.items;
};

export const fetchAllProjectSlugs = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    select: 'fields.slug'
  });
  return entries.items.map(item => item.fields.slug);
};

export const fetchProjectBySlug = async (slug) => {
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug
  });
  return entries.items[0];
};

export const fetchLatestProject = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
    limit: 1
  });

  return entries.items[0];
};
