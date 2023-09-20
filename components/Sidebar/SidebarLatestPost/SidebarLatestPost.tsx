import { draftMode } from 'next/headers';
import React from 'react';
import { getLatestProject } from '../../../lib/api';
import { Image } from '@nextui-org/image';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';

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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-danger">Latest Post</p>
        <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full">{projectTitle}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link as={NextLink} href={`/projects/${slug}`}>
          <Image
            shadow="lg"
            src={`${featuredImageUrl}?fit=fill&w=828&h=621`}
            className='object-cover rounded-xl'
            alt={`Featured image for ${projectTitle}`}
            width={828}
            height={621}
          />
        </Link>
        <p className="card-text mt-5 text-sm">{shortDescription}</p>
      </CardBody>
    </Card>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const latestProject = await getLatestProject(isEnabled);

  return (
    <div>
      <Project
        slug={latestProject.slug}
        projectTitle={latestProject.projectTitle}
        shortDescription={latestProject.shortDescription}
        featuredImageUrl={latestProject.featuredImage.url}
      />
    </div>
  );
}
