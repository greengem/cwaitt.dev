import { draftMode } from 'next/headers';
import React from 'react';
import { getTwoRecentProjects } from '../../../lib/api';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import { Book } from 'react-bootstrap-icons';

interface ProjectProps {
  slug: string;
  projectTitle: string;
  shortDescription: string;
  featuredImageUrl: any;
}

function Project({
  slug,
  projectTitle,
  shortDescription,
  featuredImageUrl,
}: ProjectProps) {
  return (
    <div>
      <Link as={NextLink} href={`/projects/${slug}`}>
        <Image
          width={1136}
          shadow="lg"
          height={639}
          src={`${featuredImageUrl}?fit=fill&w=1136&h=639`}
        />
      </Link>
      <Link as={NextLink} href={`/projects/${slug}`}>
        <h4 className="text-3xl tracking-tight font-semibold mt-5 mb-2 from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent bg-gradient-to-b">
          {projectTitle}
        </h4>
      </Link>
      <p className="tracking-tight mb-6">
        {shortDescription}{' '}
        <Link className="text-warning" as={NextLink} href={`/projects/${slug}`}>
          Read more..
        </Link>
      </p>
    </div>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const twoProjects = await getTwoRecentProjects(isEnabled);

  return (
    <section id="recent" className="py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10">
        <div className="container">
          <h1 className="custom-heading from-[#FF705B] to-[#FFB457]">My Recent Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {twoProjects.map((project, index) => (
              <Project
                key={index}
                slug={project.slug}
                projectTitle={project.projectTitle}
                shortDescription={project.shortDescription}
                featuredImageUrl={project.featuredImage.url}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" as={NextLink}>
              <Button
                size="lg"
                className="bg-gradient-to-tr from-[#FF705B] to-[#FFB457] text-white shadow-lg"
              >
                <Book />View My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
