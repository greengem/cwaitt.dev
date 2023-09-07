// External dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Internal dependencies
import { fetchProjects } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

/**
 * Projects Page Component
 * 
 * This component displays a list of projects fetched from Contentful. 
 * Each project is rendered using the ProjectCard component.
 *
 * @param {Object[]} projects - Array of project data.
 * @returns JSX.Element
 */
export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <Container className='mt-5'>
        <h1 className='section-h1'>My Projects</h1>
        <p>Diving deep into the world of technology, I have always been captivated by the vast realm of possibilities that different tools and frameworks have to offer. For me, each project is more than just lines of code – it's an exploration, a challenge, and most importantly, a learning journey. From the tried-and-true classics to the latest shiny tech, I enjoy getting my hands dirty, always pushing the boundaries of what's possible.</p>
        <p>Below, you'll find a curated collection of my endeavors, each with its unique tech flavor. Whether you're here to explore, get inspired, or just geek out, I hope you find these projects as exciting as I found creating them. Enjoy the journey!</p>
        <Row lg={2} md={2} sm={1} className='g-4'>
          {projects.map(project => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

/**
 * Fetches projects from Contentful at build time.
 * 
 * The `revalidate` property ensures that if a new request comes to the 
 * server after the page has been pre-rendered, Next.js will attempt 
 * to re-generate the page while keeping the old page until the new page 
 * is ready.
 * 
 * @returns {Object} Object containing fetched projects.
 */
export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
