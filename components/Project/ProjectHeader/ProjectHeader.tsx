import PostHeading from '@/components/Layout/Heading/PostHeading';
import Date from '@/components/Helpers/Date/Date'

interface ProjectHeaderProps {
  project: {
    projectTitle: string;
    date: string;
    sys: { publishedAt: string };
    projectTags: string;
  };
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => (
  <>
    <PostHeading title={project.projectTitle} />
    <p className="text-sm text-gray-600 mb-10">
      <span className="mr-1">Posted on:</span>
      <Date dateString={project.date} />
      <span className="mx-1">|</span>
      <span className="ml-1">Last Updated:</span>
      <Date dateString={project.sys.publishedAt} />
      <span className="mx-1">|</span>
      <span className="ml-1">Category: {project.projectTags}</span>
    </p>
  </>
);

export default ProjectHeader;
