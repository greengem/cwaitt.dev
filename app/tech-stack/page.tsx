import { draftMode } from 'next/headers';
import { getAllTechStacks } from '@/lib/api';
import PageSection from '@/components/Layout/Section/PageSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import TechCard from '@/components/Cards/TechCard';

export default async function TechStacksPage() {
  const { isEnabled } = draftMode();
  const allTechStacks = await getAllTechStacks(isEnabled);
  return (
    <PageSection id='tech-stack'>
      <Container>
        <Heading title="Tech Stack" />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {allTechStacks?.map((techStack, index) => (
              <TechCard
                key={index}
                slug={techStack.slug}
                name={techStack.name}
                description={techStack.description}
                externalLink={techStack.externalLink}
                logo={techStack.logo}
              />
            ))}
          </div>
      </Container>
    </PageSection>
  );
}
