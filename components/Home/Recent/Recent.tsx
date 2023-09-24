import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import ProjectCard from '@/components/ProjectCard/ProjectCard';

export default function RecentWork({ twoProjects }) {
  return(
    <HomeSection id='recent'>
      <Container>
        <h1 className="custom-heading from-[#FF705B] to-[#FFB457]">My Recent Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {twoProjects.map((project, index) => (
            <ProjectCard
              key={index}
              slug={project.slug}
              projectTitle={project.projectTitle}
              shortDescription={project.shortDescription}
              featuredImageUrl={project.featuredImage.url}
              techStacks={project.techStacksCollection.items}
              projectTags={project.projectTags}
            />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/projects" as={NextLink}>
            <Button size="lg" className="bg-gradient-to-tr from-[#FF705B] to-[#FFB457] text-white shadow-lg">View My Work</Button>
          </Link>
        </div>
      </Container>
    </HomeSection>
  )
}