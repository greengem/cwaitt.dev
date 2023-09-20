import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import NextLink from 'next/link';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
import { ArrowLeft } from 'react-bootstrap-icons';
import { getAllProjects, getProjectAndMoreProjects } from '../../../lib/api';
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

function convertToApiUrl(gitHubUrl: string): string {
  return gitHubUrl.replace('https://github.com/', 'https://api.github.com/repos/');
}

async function fetchGithubData(apiUrl: string) {
  const res = await fetch(apiUrl, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch GitHub data');
  }
  return res.json();
}

async function fetchLatestCommitMessage(apiUrl: string) {
  const res = await fetch(`${apiUrl}/commits`, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch latest commit');
  }
  const commits = await res.json();
  return commits[0].commit.message;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { project, moreProjects } = await getProjectData(params);
  if (!project) {
    return notFound();
  }
  const githubApiUrl = convertToApiUrl(project.gitHubLink);
  const githubData = await fetchGithubData(githubApiUrl);
  const latestCommitMessage = await fetchLatestCommitMessage(githubApiUrl);

  return (
    <section id="project">
      <div className="max-w-screen-xl container mx-auto mt-10 min-h-screen mb-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-4">
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
                  <ArrowLeft className="mr-2" />
                  Back to Projects
                </Link>
              </section>
            </article>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <AppSidebar githubData={githubData} demoUrl={project.demoUrl} latestCommit={latestCommitMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}
