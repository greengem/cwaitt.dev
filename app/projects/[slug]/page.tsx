import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import NextLink from 'next/link';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
import { UilArrowLeft } from '@iconscout/react-unicons';
import {
  getAllProjects,
  getProjectAndMoreProjects,
  getLatestProject,
  convertToApiUrl,
  fetchGithubData,
  fetchLatestCommitDetails,
} from '../../../lib/api';
import AppSidebar from '../../../components/Sidebar/Sidebar';
import {RichTextRenderer} from '../../../lib/markdown';

export const dynamicParams = true;

export async function generateStaticParams() {
  const allProjects = await getAllProjects(false);
  return allProjects.map((project) => ({ slug: project.slug }));
}

async function getProjectData(params: { slug: string }) {
  const { isEnabled } = draftMode();
  return await getProjectAndMoreProjects(params.slug, isEnabled);
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  
  const { project, moreProjects } = await getProjectData(params);
  
  if (!project) {
    return notFound();
  }

  const githubApiUrl = convertToApiUrl(project.gitHubLink);

  const [ githubData, latestCommitDetails, latestProject ] = await Promise.all([
    fetchGithubData(githubApiUrl),
    fetchLatestCommitDetails(githubApiUrl),
    getLatestProject(isEnabled)
  ]);

  if (!project) {
    return notFound();
  }

  return (
    <section id="project">
      <div className="max-w-screen-xl mx-auto mt-10 min-h-screen mb-20">
        <div className='container'>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="col-span-2">
            <article>
              <header>
                <h1 className="custom-heading from-[#FF1CF7] to-[#b249f8]">
                  {project.projectTitle}
                </h1>
              </header>
              <section className="mb-4">
                <RichTextRenderer description={project.description} />
                <Divider className="my-10" />
                <div className="flex flex-wrap gap-2">
                  {project.techStacksCollection.items.map((techStack) => (
                    <Chip
                      key={techStack.slug}
                      variant="bordered"
                      color="danger"
                      className="mr-1"
                    >
                      <Link color='danger' as={NextLink} href={`/tech-stack/${techStack.slug}`}>{techStack.name}</Link>
                    </Chip>
                  ))}
                </div>
                <Link
                  color="danger"
                  href="/projects"
                  as={NextLink}
                  className="mt-10"
                >
                  <UilArrowLeft className="mr-2" />
                  Back to Projects
                </Link>
              </section>
            </article>
          </div>
          <div className="col-span-1">
            <AppSidebar 
              githubData={githubData} 
              demoUrl={project.demoUrl} 
              latestCommit={latestCommitDetails.message}
              latestCommitUrl={latestCommitDetails.url}
              latestProject={latestProject} 
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
