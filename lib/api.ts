const TECHSTACK_GRAPHQL_FIELDS = `
  slug
  name
  techDescription
  externalLink
  logo {
    url
  }
`;

const PROJECT_GRAPHQL_FIELDS = `
  slug
  projectTitle
  date
  projectTags
  shortDescription
  featuredImage {
    url
  }
  gitHubLink
  demoUrl
  techStacksCollection {
    items {
      ... on TechStack {
        slug
        name
      }
    }
  }
`;


const PROJECT_DESCRIPTION_FIELD = `
  description {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Contentful');
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    throw error;
  }
}

function extractProject(fetchResponse: any): any {
  return fetchResponse?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.projectCollection?.items;
}

function extractTechStackEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.techStackCollection?.items;
}

export async function getPreviewProjectBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
          ${PROJECT_DESCRIPTION_FIELD}
        }
      }
    }`,
    true
  )
  return extractProject(entry)
}

export async function getAllProjects(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )
  return extractProjectEntries(entries)
}

export async function getAllTechStacks(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      techStackCollection(where: { slug_exists: true }, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${TECHSTACK_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )
  return extractTechStackEntries(entries)
}

export async function getLatestProject(isDraftMode: boolean): Promise<any> {
  const response = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return extractProject(response);
}

export async function getTwoRecentProjects(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }, limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )
  return extractProjectEntries(entries)
}

export async function fetchProjectsByTechStack(techStackSlug: string, isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(
        where: { techStacksCollection_contains: { slug: "${techStackSlug}" } },
        order: date_DESC,
        preview: ${isDraftMode ? 'true' : 'false'}
      ) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )
  return extractProjectEntries(entries);
}


export async function getProjectAndMoreProjects(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
          ${PROJECT_DESCRIPTION_FIELD}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    project: extractProject(entry),
    moreProjects: extractProjectEntries(entries),
  }  
}
