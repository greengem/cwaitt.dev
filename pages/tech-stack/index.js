import { fetchAllTechStacks } from '../../lib/contentful';
import { Card, CardHeader, CardBody, CardFooter, Link, Image } from "@nextui-org/react";
import NextLink from "next/link";

export default function TechStackListing({ techStacks }) {
  return (
    <section id='tech-stacks' className='pt-20'>
      <div className='max-w-screen-xl mx-auto'>
    <div className='container mx-auto min-h-screen'>
      <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Tech Stack</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {techStacks.map(tech => (
            <Card key={tech.name} shadow='lg'>
              <CardHeader className="flex gap-3">
                <Image
                  alt={tech.logo.description || "Tech Stack Logo"}
                  height={40}
                  radius="sm"
                  src={tech.logo.url}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{tech.name}</p>
                  <p className="text-small text-default-500">
                    <Link as={NextLink} className='text-gray-500 text-sm' href={tech.externalLink}>
                      {new URL(tech.externalLink).host}
                    </Link>
                  </p>
                </div>
              </CardHeader>

              <CardBody className='pl-3 pt-1 pb-2'>
                <p className='text-sm'>{tech.description}</p>
              </CardBody>

              <CardFooter className='pt-0'>
                
                <Link 
                  color='success'
                  className='text-sm' 
                  href={`/tech-stack/${tech.slug}`} 
                  as={NextLink}
                >My {tech.name} Projects
                </Link>
              </CardFooter>
            </Card>
        ))}
        </div>
        </div>
    </div>
    </section>
  );
}

export async function getStaticProps() {
  const techStacks = await fetchAllTechStacks();

  return {
    props: {
      techStacks,
    },
    revalidate: 60,
  };
}
