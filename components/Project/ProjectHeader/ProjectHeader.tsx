import PostHeading from '@/components/Layout/Heading/PostHeading';
import Date from '@/components/Helpers/Date/Date'
import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

interface ProjectHeaderProps {
  project: {
    projectTitle: string;
    date: string;
    sys: { publishedAt: string };
    projectTags: string;
    demoUrl: string;
  };
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => (
  <>
    <PostHeading title={project.projectTitle} />
    <p className="text-sm text-gray-600">
      <span className="mr-1">Posted on:</span>
      <Date dateString={project.date} />
      <span className="mx-1">|</span>
      <span className="ml-1">Last Updated:</span>
      <Date dateString={project.sys.publishedAt} />
      <span className="mx-1">|</span>
      <span className="ml-1">Category: {project.projectTags}</span>
    </p>
    <p className='mb-5'>
      <Link
        as={NextLink}
        isExternal
        href={project.demoUrl}
        className='text-secondary'
      >
        View Live Demo!
      </Link>
    </p>
  </>
);

export default ProjectHeader;
