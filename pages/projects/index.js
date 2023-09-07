import { fetchProjects } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <div className='container'>
        <h1>My Projects</h1>
        <div className='g-4 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {projects.map(project => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
