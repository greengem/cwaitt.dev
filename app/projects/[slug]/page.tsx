import { ProjectProps } from '@/types/appTypes';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Heading from '@/components/Layout/Heading/Heading';
import type { Metadata } from 'next';
import NextImage from "next/image";

import { Divider } from '@nextui-org/divider';
import { Image } from "@nextui-org/image";

import {
  getAllProjects,
  getProjectAndMoreProjects,
  convertToApiUrl,
  fetchGithubData,
  fetchLatestCommitDetails,
} from '@/lib/api';
import { RichTextRenderer } from '@/lib/markdown';

import PageSection from '@/components/Layout/Section/PageSection';
import Container from '@/components/Layout/Container';
import GithubData from '@/components/Project/GithubData/GithubData';
import ProjectCard from '@/components/Cards/ProjectCard';
import ProjectHeader from '@/components/Project/ProjectHeader/ProjectHeader';
import TechStacks from  '@/components/Project/TechStacks/TechStacks';

export const dynamicParams = true;

export async function generateStaticParams() {
  const allProjects = await getAllProjects(false);
  return allProjects.map((project) => ({ slug: project.slug }));
}

async function getProjectData(params: { slug: string }) {
  const { isEnabled } = draftMode();
  return await getProjectAndMoreProjects(params.slug, isEnabled);
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { project } = await getProjectData(params);
  const ogImageUrl = `${project.featuredImage.url}?fit=fill&w=1200&h=630`;

  return {
    title: project.projectTitle,
    description: project.shortDescription,
    openGraph: {
      title: project.projectTitle,
      description: project.shortDescription,
      url: `/projects/${params.slug}`,
      siteName: 'Chris Waitt - Frontend Developer Portfolio',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_GB',
      type: 'article',
      publishedTime: project.date,
      authors: 'Chris Waitt',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.projectTitle,
      description: project.shortDescription,
      creator: '@cwaitt_dev',
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': 'none',
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const { project, moreProjects } = await getProjectData(params);
  
  if (!project) return notFound();

  const githubApiUrl = convertToApiUrl(project.gitHubLink);
  const [githubData, latestCommitDetails] = await Promise.all([
    fetchGithubData(githubApiUrl),
    fetchLatestCommitDetails(githubApiUrl),
  ]);

  return (
    <PageSection id='project'>
      <Container>

        <ProjectHeader project={project} />

        <Image 
          as={NextImage} 
          src={`${project.featuredImage.url}?fit=fill&w=2400&h=1260`}
          width={2400}
          height={1260}
          alt={`Featured image for ${project.projectTitle}`}
          className='mt-5'
        />

        <RichTextRenderer description={project.description} />

        <Divider className="my-10" />

        <GithubData 
          githubData={githubData} 
          demoUrl={project.demoUrl} 
          latestCommit={latestCommitDetails.message}
          latestCommitUrl={latestCommitDetails.url}
        />
        
        <TechStacks techStacks={project.techStacksCollection.items} />

        <Divider className='my-10' />

        <Heading title='Related Projects' />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
        {moreProjects.map((relatedProject: ProjectProps) => (
          <ProjectCard
            key={relatedProject.slug}
            slug={relatedProject.slug}
            projectTitle={relatedProject.projectTitle}
            shortDescription={relatedProject.shortDescription}
            featuredImage={relatedProject.featuredImage}
            techStacksCollection={relatedProject.techStacksCollection}
            projectTags={relatedProject.projectTags}
          />
        ))}
        </div>

      </Container>
    </PageSection>
  );
}
