import NextLink from 'next/link';
import NextImage from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface TechStackProps {
    slug: string;
    name: string;
    description: string;
    externalLink: string;
    logo: any;
  }
  
  function TechCard({
    slug,
    name,
    description,
    externalLink,
    logo,
  }: TechStackProps) {
    return (
      <Card key={name} shadow='none' className='shadow-lg'>
        <CardHeader className="flex gap-3">
          <Image
            as={NextImage}
            alt={`${name} logo`}
            height={40}
            radius="sm"
            src={logo.url}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{name}</p>
            <p className="text-small text-default-500">
              <Link as={NextLink} className='text-gray-500 text-sm' href={externalLink}>
                {new URL(externalLink).host}
              </Link>
            </p>
          </div>
        </CardHeader>
        <CardBody className='pl-3 pt-1 pb-2'>
          <p className='text-sm'>{description}</p>
        </CardBody>
        <CardFooter className='pt-0'>
          <Link 
            color='secondary'
            className='text-sm' 
            href={`/tech-stack/${slug}`} 
            as={NextLink}
          >My {name} Projects
          </Link>
        </CardFooter>
      </Card>
    );
  }
  export default TechCard;