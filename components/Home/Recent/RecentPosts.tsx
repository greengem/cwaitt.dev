"use client";
import { ProjectProps } from '@/types/appTypes';
import ProjectCard from '@/components/Cards/ProjectCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type RecentPostsProps = {
  twoProjects: ProjectProps[];
};

const RecentPosts: React.FC<RecentPostsProps> = ({ twoProjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
      {twoProjects.map((project: ProjectProps, index: number) => (
        <AnimationOnScroll key={project.slug} animateIn="animate__zoomIn" className='h-full' animateOnce>
          <ProjectCard
            key={index}
            slug={project.slug}
            projectTitle={project.projectTitle}
            shortDescription={project.shortDescription}
            featuredImage={project.featuredImage}
            techStacksCollection={project.techStacksCollection}
            projectTags={project.projectTags}
            isFeatured={project.isFeatured}
            workInProgress={project.workInProgress}
          />
        </AnimationOnScroll>
      ))}
    </div>
  );
};

export default RecentPosts;
