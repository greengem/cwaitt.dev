// External dependencies
import { createClient } from 'contentful';

// Initializing the Contentful client with space and access token from environment variables
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Fetch all projects from Contentful.
 * 
 * @returns {Array} An array of project entries.
 */
export const fetchProjects = async () => {
  const entries = await client.getEntries({
    content_type: 'project'
  });
  return entries.items;
};

/**
 * Fetch all unique slugs of projects.
 * 
 * @returns {Array} An array of project slugs.
 */
export const fetchAllProjectSlugs = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    select: 'fields.slug'
  });
  return entries.items.map(item => item.fields.slug);
};

/**
 * Fetch a project by its slug.
 * 
 * @param {string} slug - The slug of the project.
 * @returns {Object} The project entry associated with the provided slug.
 */
export const fetchProjectBySlug = async (slug) => {
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug
  });
  return entries.items[0];
};

/**
 * Fetch the latest project based on its creation date.
 * 
 * @returns {Object} The most recently created project entry.
 */
export const fetchLatestProject = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
    limit: 1
  });
  return entries.items[0];
};

/**
 * Fetch all unique tech stacks used across projects.
 * 
 * @returns {Array} An array of unique tech stacks.
 */
export const fetchAllTechStacks = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    select: 'fields.techStack',
  });

  const allTechStacks = entries.items.flatMap(item => item.fields.techStack);
  return [...new Set(allTechStacks)]; // returns unique tech stacks
};

/**
 * Fetch projects associated with a specific tech stack.
 * 
 * @param {string} tech - The tech stack to filter by.
 * @returns {Array} An array of project entries using the specified tech stack.
 */
export const fetchProjectsByTechStack = async (tech) => {
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.techStack[in]': tech,
  });
  return entries.items;
};
