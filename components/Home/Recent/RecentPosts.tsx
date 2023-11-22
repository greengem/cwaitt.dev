import { ProjectProps } from '@/types/appTypes';
import ProjectCard from '@/components/Cards/ProjectCard';

type RecentPostsProps = {
  twoProjects: ProjectProps[];
};

const RecentPosts: React.FC<RecentPostsProps> = ({ twoProjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
      {twoProjects.map((project: ProjectProps, index: number) => (
        <ProjectCard
          key={index}
          slug={project.slug}
          projectTitle={project.projectTitle}
          shortDescription={project.shortDescription}
          featuredImage={project.featuredImage}
          techStacksCollection={project.techStacksCollection}
          projectTags={project.projectTags}
          isFeatured={project.isFeatured}
        />
      ))}
    </div>
  );
};

export default RecentPosts;
