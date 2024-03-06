import PostHeading from '@/components/Layout/Heading/PostHeading';
import Date from '@/components/Helpers/Date/Date'
import NextLink from 'next/link';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
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
    <p className="text-sm text-gray-600 mb-3">
      <span className="mr-1">Posted on:</span>
      <Date dateString={project.date} />
      <span className="mx-1">|</span>
      <span className="ml-1">Last Updated:</span>
      <Date dateString={project.sys.publishedAt} />
      <span className="mx-1">|</span>
      <span className="ml-1">Category: {project.projectTags}</span>
    </p>
    {project.demoUrl && (
        <Button
          as={Link}
          href={project.demoUrl}
          color='secondary'
          className='mb-3'
          size='lg'
        >
          View Live Demo!
        </Button>
    )}

  </>
);

export default ProjectHeader;
