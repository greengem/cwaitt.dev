// External dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Internal dependencies
import { fetchProjectsByTechStack, fetchAllTechStacks } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

/**
 * Page Component that displays all projects using a specific technology or tech stack.
 * 
 * @param {String} tech - The specific technology or tech stack's name.
 * @param {Array} projects - List of projects that use the specified tech.
 * @returns JSX.Element
 */
export default function TechStackPage({ tech, projects }) {
  return (
    <section id='projects'>
      <Container className='mt-5'>
        <h1 className='section-h1'>Projects using {tech}</h1>
        <Row lg={2} md={2} sm={1} className='g-4'>
          {projects.map(project => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

/**
 * Fetches data for projects using the specific tech and provides it as props to the component.
 * 
 * @param {Object} params - Parameters passed to the page, includes the specific tech's name.
 * @returns {Object} - Contains the props for the component.
 */
export async function getStaticProps({ params }) {
  const projects = await fetchProjectsByTechStack(params.tech);

  return {
    props: {
      tech: params.tech,
      projects,
    },
    revalidate: 60,  // Revalidate the data every 60 seconds.
  };
}

/**
 * Generates static paths for all available technologies or tech stacks.
 * 
 * @returns {Object} - Contains an array of paths to be statically generated.
 */
export async function getStaticPaths() {
  const techStacks = await fetchAllTechStacks();
  const paths = techStacks.map(tech => ({ params: { tech } }));

  return {
    paths,
    fallback: false,  // If a tech stack is not available, it'll show a 404 page.
  };
}
