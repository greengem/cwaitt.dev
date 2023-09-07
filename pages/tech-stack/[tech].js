import { fetchProjectsByTechStack, fetchAllTechStacks } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Container from 'react-bootstrap/Container';

export default function TechStackPage({ tech, projects }) {
  return (
    <section id='projects'>
      <Container className='mt-5'>
      <h1 className='section-h1'>Projects using {tech}</h1>
      <div className='g-4 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1'>
        {projects.map(project => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>
      </Container>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const projects = await fetchProjectsByTechStack(params.tech);

  return {
    props: {
      tech: params.tech,
      projects,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const techStacks = await fetchAllTechStacks();
  const paths = techStacks.map(tech => ({ params: { tech } }));

  return {
    paths,
    fallback: false,
  };
}
