import { fetchAllTechStacks } from '../../lib/contentful';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import NextLink from "next/link";

export default function TechStackListing({ techStacks }) {
  return (
    <section id='tech-stacks' className='pt-20'>
      <div className='max-w-screen-xl mx-auto'>
    <div className='container mx-auto min-h-screen'>
      <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Tech Stack</h1>
        <div className='flex flex-wrap'>
        {techStacks.map(tech => (
          <div key={tech.name} className='w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/3 relative max-w-full p-4'>
            <Card>
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
                    <Link className='text-gray-500 text-sm' href={tech.externalLink}>
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
          </div>
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
