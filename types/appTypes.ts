export interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  featuredImage: {
    url: string;
  };
  techStacksCollection: {
    items: { slug: string; name: string; }[];
  };
  projectTags: string;
}
