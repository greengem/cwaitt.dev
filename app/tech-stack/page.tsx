import { draftMode } from 'next/headers';
import { getAllTechStacks } from '../../lib/api';

import NextLink from "next/link";
import NextImage from "next/image";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

interface TechStackProps {
  slug: string;
  name: string;
  description: string;
  externalLink: string;
  logo: any;
}

function TechStackItem({
  slug,
  name,
  description,
  externalLink,
  logo,
}: TechStackProps) {
  return (
    <Card key={name} shadow='lg'>
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
          color='success'
          className='text-sm' 
          href={`/tech-stack/${slug}`} 
          as={NextLink}
        >My {name} Projects
        </Link>
      </CardFooter>
    </Card>
  );
}

export default async function TechStackPage() {
  const { isEnabled } = draftMode();
  const allTechStacks = await getAllTechStacks(isEnabled);
  return (
    <section id='tech-stacks' className='pt-20'>
      <div className='max-w-screen-xl mx-auto lg:px-10'>
        <div className='container mx-auto min-h-screen'>
          <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Tech Stack</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {allTechStacks?.map((techStack, index) => (
              <TechStackItem
                key={index}
                slug={techStack.slug}
                name={techStack.name}
                description={techStack.description}
                externalLink={techStack.externalLink}
                logo={techStack.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
