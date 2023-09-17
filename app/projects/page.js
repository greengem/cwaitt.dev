import { fetchProjects } from '../../lib/contentful';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default async function Projects() {
  const projectsData = await fetchProjectsData();

  return (
    <section id='projects' className=' pt-20'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='container mx-auto mb-20'>
          <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>My Projects</h1>
          <div className='pb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
              {projectsData.map(project => (
                <ProjectCard project={project} key={project.sys.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function fetchProjectsData() {
  const res = await fetchProjects();
  if (!res) {
    throw new Error('Failed to fetch projects');
  }
  return res;
}
