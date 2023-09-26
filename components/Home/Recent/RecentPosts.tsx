import ProjectCard from '@/components/ProjectCard/ProjectCard';

type Project = {
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
  };

type RecentPostsProps = {
  twoProjects: Project[];
};

const RecentPosts: React.FC<RecentPostsProps> = ({ twoProjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
      {twoProjects.map((project: Project, index: number) => (
        <ProjectCard
          key={index}
          slug={project.slug}
          projectTitle={project.projectTitle}
          shortDescription={project.shortDescription}
          featuredImageUrl={project.featuredImage.url}
          techStacks={project.techStacksCollection.items}
          projectTags={project.projectTags}
        />
      ))}
    </div>
  );
};

export default RecentPosts;
