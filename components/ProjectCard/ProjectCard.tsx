import NextLink from 'next/link';
import NextImage from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  featuredImageUrl: any;
  projectTags: string;
  techStacks: { slug: string; name: string }[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  projectTitle,
  shortDescription,
  featuredImageUrl,
  techStacks,
  projectTags,
}) => {

  return (
    
    <Card className="py-4 h-full" shadow="lg">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{projectTags}</p>
        <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
          {projectTitle}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link as={NextLink} href={`/projects/${slug}`}>
          <Image
            shadow="lg"
            as={NextImage}
            src={`${featuredImageUrl}?fit=fill&w=1136&h=639`}
            className="object-cover rounded-xl"
            width={1136}
            height={639}
            alt={`Image for ${projectTitle}`}
          />
        </Link>
        <p className="card-text mt-5 text-sm">{shortDescription}</p>
      </CardBody>
      <CardFooter className="px-5">
        {techStacks.map((stack) => (
          <Chip
            size='sm'
            key={stack.slug}
            color="default"
            className="mr-2"
          >
            <Link className='text-sm' color='foreground' as={NextLink} href={`/tech-stack/${stack.slug}`}>{stack.name}</Link>
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
