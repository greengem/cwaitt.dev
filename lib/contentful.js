// External dependencies
import { createClient } from 'contentful';

const getClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const fetchProjects = async () => {
  const client = getClient();
  const entries = await client.getEntries({ content_type: 'project' });
  return entries.items;
};

export const fetchAllProjectSlugs = async () => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: 'project',
    select: 'fields.slug'
  });
  return entries.items.map(item => item.fields.slug);
};

export const fetchProjectBySlug = async (slug) => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug
  });
  return entries.items[0];
};

export const fetchLatestProjects = async (limit = 1) => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
    limit: limit
  });
  return limit === 1 ? entries.items[0] : entries.items;
};

export const fetchAllTechStacks = async () => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: 'techStack',
  });
  return entries.items.map(item => ({
    name: item.fields.name,
    description: item.fields.description,
    externalLink: item.fields.externalLink,
    slug: item.fields.slug,
    logo: {
      url: item.fields.logo.fields.file.url,
      description: item.fields.logo.fields.description || "Tech Stack Logo"
    }
  }));
};

export const fetchAllTechStackSlugs = async () => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: 'techStack',
    select: 'fields.slug'
  });
  return entries.items.map(item => item.fields.slug);
};

export const fetchProjectsByTechStack = async (slug) => {
  const client = getClient();
  const techStackEntry = await client.getEntries({
    content_type: 'techStack',
    'fields.slug': slug,
    limit: 1
  });
  
  if (!techStackEntry.items.length) return { techName: null, projects: [] };

  const techStackName = techStackEntry.items[0].fields.name;
  const techStackId = techStackEntry.items[0].sys.id;
  
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.techStacks.sys.id[in]': techStackId,
  });

  return { techName: techStackName, projects: entries.items };
};
