import { notFound } from 'next/navigation'
import { getProjectsByTechStack, getAllTechStacks } from '../../../lib/api';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';

export const dynamicParams = true;

export async function generateStaticParams() {
  const allTechStacks = await getAllTechStacks(false);
  return allTechStacks.map((project) => ({ slug: project.slug }));
}

async function getTechStackData(slug: string) {
  return await getProjectsByTechStack(slug, false);
}

export default async function TechStackSlugPage({ params }) {
  const projects = await getTechStackData(params.slug);
  if (!projects || projects.length === 0) {
    return notFound();
  }
  return (
    <section id="projects" className="pt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto mb-20">
          <h1 className="custom-heading from-[#FF705B] to-[#FFB457]">
            Projects using {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
          </h1>

          <div className="pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  projectTitle={project.projectTitle}
                  shortDescription={project.shortDescription}
                  featuredImageUrl={project.featuredImage.url}
                  techStacks={project.techStacksCollection.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
