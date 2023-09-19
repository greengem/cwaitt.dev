import { getAllTechStacks, getProjectsByTechStack } from '../../../lib/api';

function TechStackProjectsPage({ techName, projects }) {
  return (
    <section id='tech' className='pt-20'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='container mx-auto min-h-screen'>
          <h1 className='custom-heading from-[#FF72E1] to-[#F54C7A]'>
            Projects using {techName}
          </h1>
          <ul className="list-disc pl-5">
            {projects.map(project => (
              <li key={project.slug}>
                <strong>{project.projectTitle}</strong>
                <p>{project.shortDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Assuming you will write the getProjectsByTechStack function to get the list of projects
export async function fetchData(techSlug) {
  const projects = await getProjectsByTechStack(techSlug);
  const allTechStacks = await getAllTechStacks(false); // replace false with appropriate draft mode flag if needed
  const techStack = allTechStacks.find(tech => tech.slug === techSlug);
  
  return {
    techName: techStack ? techStack.name : "Unknown Tech",
    projects,
  };
}

export default TechStackProjectsPage;
