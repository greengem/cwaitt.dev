export interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  demoUrl?: string;
  gitHubLink?: string;
  featuredImage: {
    url: string;
  };
  techStacksCollection: {
    items: { slug: string; name: string; }[];
  };
  projectTags: string;
}
