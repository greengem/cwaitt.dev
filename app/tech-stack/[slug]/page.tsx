import type { Metadata} from 'next'
import { notFound } from 'next/navigation'
import { getProjectsByTechStack, getAllTechStacks } from '@/lib/api';
import PageSection from '@/components/Layout/Section/PageSection'
import Container from '@/components/Layout/Container'
import ProjectCard from '@/components/Cards/ProjectCard';
import { ProjectProps } from '@/types/appTypes';

export const dynamicParams = true;

export async function generateStaticParams() {
  const allTechStacks = await getAllTechStacks(false);
  return allTechStacks.map((project) => ({ slug: project.slug }));
}

async function getTechStackData(slug: string) {
  return await getProjectsByTechStack(slug, false);
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const projects = await getTechStackData(params.slug);
  if (!projects || projects.length === 0) {
    return {};
  }

  const techStackName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  const ogImageUrl = `${projects[0].featuredImage.url}?fit=fill&w=1200&h=630`;

  return {
    title: `My Projects using ${techStackName}`,
    description: `Browse projects developed using ${techStackName}.`,
    openGraph: {
      title: `Projects using ${techStackName}`,
      description: `Browse projects developed using ${techStackName}.`,
      url: `/tech-stack/${params.slug}`,
      siteName: 'Chris Waitt - Frontend Developer Portfolio',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_GB',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Projects using ${techStackName}`,
      description: `Browse projects developed using ${techStackName}.`,
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


export default async function TechStackSlugPage({ params }) {
  const projects = await getTechStackData(params.slug);
  if (!projects || projects.length === 0) {
    return notFound();
  }

  return (
    <PageSection id='projects-by-tech'>
      <Container>
          <h1 className="custom-heading from-[#FF1CF7] to-[#b249f8]">
            Projects using {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
          </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  projectTitle={project.projectTitle}
                  shortDescription={project.shortDescription}
                  featuredImage={project.featuredImage}
                  techStacksCollection={project.techStacksCollection}
                  projectTags={project.projectTags}
                />
              ))}
            </div>
      </Container>
    </PageSection>
  );
}
