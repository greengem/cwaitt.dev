import { fetchProjectsByTechStack, fetchAllTechStackSlugs } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function TechStackPage({ tech, projects }) {
  return (
    <section id='projects'>
      <div className='container mx-auto min-h-screen'>
        <h1 className='section-h1 mb-2 mt-0 text-5xl font-medium leading-tight'>
          Projects using {tech}
        </h1>
        <div className='flex flex-wrap'>
          {projects.map(project => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const { techName, projects } = await fetchProjectsByTechStack(params.tech);

  return {
    props: {
      tech: techName,
      projects,
    },
    revalidate: 60,
  };
}


export async function getStaticPaths() {
  const techStackSlugs = await fetchAllTechStackSlugs();
  const paths = techStackSlugs.map(slug => ({ params: { tech: slug } }));

  return {
    paths,
    fallback: false,
  };
}
