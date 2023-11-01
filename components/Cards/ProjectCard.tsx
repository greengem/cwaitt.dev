import { ProjectProps } from '@/types/appTypes';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  projectTitle,
  shortDescription,
  featuredImage,
  techStacksCollection,
  projectTags,
}) => {

  const { items: techStacks } = techStacksCollection;

  return (
    <Card className="py-4 h-full shadow-lg" shadow="none">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-secondary">{projectTags}</p>
        <h4 className="font-semibold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full block">
            {projectTitle}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link as={NextLink} href={`/projects/${slug}`}>
          <Image
            src={`${featuredImage.url}?fit=fill&w=1096&h=616`}
            className="object-cover rounded-xl shadow-lg"
            width={1096}
            height={616}
            alt={`Image for ${projectTitle}`}
          />
        </Link>
        <p className="card-text mt-5 text-sm">{shortDescription}</p>
      </CardBody>
      <CardFooter className="px-5">
        {techStacks.map((stack) => (
          <Chip
            radius='sm'
            size='sm'
            key={stack.slug}
            color="secondary"
            className="mr-2"
            variant="bordered"
          >
            <Link className='text-xs' color='foreground' as={NextLink} href={`/tech-stack/${stack.slug}`}>{stack.name}</Link>
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
