export interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  demoUrl?: string;
  gitHubLink?: string;
  isFeatured: boolean;
  featuredImage: {
    url: string;
  };
  techStacksCollection: {
    items: { slug: string; name: string; }[];
  };
  projectTags: string;
}
