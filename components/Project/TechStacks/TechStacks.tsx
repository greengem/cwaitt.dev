import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';

interface TechStackProps {
  techStacks: {
    slug: string;
    name: string;
  }[];
}

const TechStack: React.FC<TechStackProps> = ({ techStacks }) => (
  <div>
    <h4 className='text-xl mb-2 font-semibold inline mr-3'>Tech Stack:</h4>
    {techStacks.map((techStack) => (
      <Chip key={techStack.slug} variant="bordered" color="danger" className="mr-1" radius='sm' size='sm'>
        <Link color='danger' as={NextLink} href={`/tech-stack/${techStack.slug}`}>
          {techStack.name}
        </Link>
      </Chip>
    ))}
  </div>
);

export default TechStack;
