import { fetchAllTechStacks } from '../../lib/contentful';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";


export default function TechStackListing({ techStacks }) {
  return (
    <section id='tech-stacks' className=' max-w-screen-xl mx-auto pt-20'>
    <div className='container mx-auto min-h-screen'>
      <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>Tech Stack</h1>
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
                    <Link href={tech.externalLink}>
                      {new URL(tech.externalLink).host}
                    </Link>
                  </p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                <p className='text-sm'>{tech.description}</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                
                <Link href={`/tech-stack/${tech.slug}`}><Button color='danger' size='sm'>My {tech.name} Projects</Button></Link>
              </CardFooter>
            </Card>
          </div>
        ))}
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
