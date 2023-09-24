import { draftMode } from 'next/headers';
import { getAllProjects } from '../../lib/api';
import PageSection from '../../components/Layout/Section/PageSection'
import Container from '../../components/Layout/Container'
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default async function Page() {
  const { isEnabled } = draftMode();
  const allProjects = await getAllProjects(isEnabled);
  
  return (
    <PageSection id='projects'>
      <Container>
          <h1 className="custom-heading from-[#FF705B] to-[#FFB457]">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  projectTitle={project.projectTitle}
                  shortDescription={project.shortDescription}
                  featuredImageUrl={project.featuredImage.url}
                  techStacks={project.techStacksCollection.items}
                  projectTags={project.projectTags}
              />
              ))}
            </div>
        </Container>
    </PageSection>
  );
}
