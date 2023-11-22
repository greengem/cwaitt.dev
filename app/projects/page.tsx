import { draftMode } from 'next/headers';
import { getAllProjects } from '@/lib/api';
import PageSection from '@/components/Layout/Section/PageSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import ProjectCard from '@/components/Cards/ProjectCard';
import { ProjectProps } from '@/types/appTypes';

export default async function ProjectsPage() {
  const { isEnabled } = draftMode();
  const allProjects: ProjectProps[] = await getAllProjects(isEnabled);

  return (
    <PageSection id='projects'>
      <Container>
        <Heading title="My Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                projectTitle={project.projectTitle}
                shortDescription={project.shortDescription}
                featuredImage={project.featuredImage}
                techStacksCollection={project.techStacksCollection}
                projectTags={project.projectTags}
                isFeatured={project.isFeatured}
              />
            ))}
          </div>
        </Container>
    </PageSection>
  );
}
