import { fetchProjectsByTechStack, fetchAllTechStacks } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function TechStackPage({ tech, projects }) {
  return (
    <div>
      <h1>Projects using {tech}</h1>
      <div>
        {projects.map(project => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>
    </div>
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
