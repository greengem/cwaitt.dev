//Contentful GraphQL Schema
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
      entries {
        block {
          ... on CodeBlock {
            sys {
              id
            }
            code
            language
          }
        }
      }
    }
  }
`

//Contentful Client

async function fetchGraphQL(query: string, preview = false, variables?: any): Promise<any> {
  try {
    const fetchOptions: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
      cache: 'force-cache', //use force-cache or no-store for SSR
      next: { tags: ['posts'] }, // on demand revalidation
    };

    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      fetchOptions
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


//Contentful API Calls

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

export async function getTwoRecentProjects(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }, order: date_DESC, limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
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

export async function getProjectsByTechStack(slug: string, isDraftMode: boolean): Promise<any[]> {
  const query = `
  query ProjectsByTechStack($techStackSlug: String!) {
    projectCollection(where: {
      techStacks:{
        slug: $techStackSlug
      }
    }) {
      items {
        slug
        projectTitle
        featuredImage {
          url
        }
        shortDescription
        projectTags
        techStacksCollection {
          items {
            name
            slug
          }
        }
      }
    }
  }
`;

  const response = await fetchGraphQL(query, isDraftMode, { techStackSlug: slug });
  return response?.data?.projectCollection?.items || [];
}

//Github API Calls

export function convertToApiUrl(gitHubUrl: string): string {
  return gitHubUrl.replace('https://github.com/', 'https://api.github.com/repos/');
}

export async function fetchGithubData(apiUrl: string) {
  const res = await fetch(apiUrl, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch GitHub data');
  }
  return res.json();
}

export async function fetchLatestCommitDetails(apiUrl: string, maxLength: number = 150) {
  const res = await fetch(`${apiUrl}/commits`, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch latest commit');
  }
  const commits = await res.json();
  const commitMessage = commits[0].commit.message;
  const truncatedMessage = commitMessage.length > maxLength 
    ? commitMessage.slice(0, maxLength) + '...'
    : commitMessage;
  const commitUrl = commits[0].html_url;

  return {
    message: truncatedMessage,
    url: commitUrl
  };
}
