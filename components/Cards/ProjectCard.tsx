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
import { IconStarFilled, IconTools } from '@tabler/icons-react';

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  projectTitle,
  shortDescription,
  featuredImage,
  techStacksCollection,
  projectTags,
  isFeatured,
  workInProgress
}) => {

  const { items: techStacks } = techStacksCollection;

  return (
    <Card 
      className={`py-4 h-full shadow-lg border-1 my-card ${isFeatured ? 'border-secondary' : 'border-transparent'}`} 
      shadow="none"
    >
      <CardHeader className="pb-1 pt-2 px-5 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-secondary flex justify-between w-full">
          {projectTags}
          {isFeatured && <IconStarFilled size={16} />}
          {workInProgress && <IconTools size={16} />}

        </p>
        <h4 className="font-semibold text-large w-full">
          <Link as={NextLink} href={`/projects/${slug}`} className='text-foreground whitespace-nowrap overflow-hidden overflow-ellipsis w-full block'>{projectTitle}</Link>
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-5">
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
      <CardFooter className="px-5 pb-0 flex flex-col items-start">
        <div className='flex gap-1 mb-1'>
          {techStacks.map((stack) => (
            <Chip
              radius='sm'
              size='sm'
              key={stack.slug}
              color="secondary"
              variant="bordered"
            >
              <Link className='text-xs' color='foreground' as={NextLink} href={`/tech-stack/${stack.slug}`}>{stack.name}</Link>
            </Chip>
          ))}
        </div>

      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
