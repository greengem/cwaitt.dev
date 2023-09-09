import { fetchProjectsByTechStack, fetchAllTechStackSlugs } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function TechStackPage({ tech, projects }) {
  return (
    <section id='tech' className=' max-w-screen-xl mx-auto'>
      <div className='container mx-auto min-h-screen'>
      <h1 className='custom-heading from-[#FF72E1] to-[#F54C7A]'>
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
