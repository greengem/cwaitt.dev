import { fetchProjects } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import Container from 'react-bootstrap/Container';

export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <Container className='mt-5'>
        <h1 className='section-h1'>My Projects</h1>
        <div className='g-4 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {projects.map(project => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </div>
      </Container>
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