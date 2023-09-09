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
      <div className='container mx-auto'>
        <h1 className='section-h1'>My Projects</h1>
        <p>Diving deep into the world of technology, I have always been captivated by the vast realm of possibilities that different tools and frameworks have to offer. For me, each project is more than just lines of code – it&apos;s an exploration, a challenge, and most importantly, a learning journey. From the tried-and-true classics to the latest shiny tech, I enjoy getting my hands dirty, always pushing the boundaries of what&apos;s possible.</p>
        <p>Below, you&apos;ll find a curated collection of my endeavors, each with its unique tech flavor. Whether you&apos;re here to explore, get inspired, or just geek out, I hope you find these projects as exciting as I found creating them. Enjoy the journey!</p>

        <div className='flex flex-wrap'>
          {projects.map(project => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </div>
      </div>
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
