import { draftMode } from 'next/headers'
//import Image from 'next/image';
import NextLink from "next/link";
//import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { ArrowLeft } from 'react-bootstrap-icons';
import { DescriptionRenderer } from '../../../lib/markdown'
import { getAllProjects, getProjectAndMoreProjects } from '../../../lib/api';
import AppSidebar from '../../../components/Sidebar/Sidebar.js';

export async function generateStaticParams() {
    const allProjects = await getAllProjects(false)
  
    return allProjects.map((project) => ({
      slug: project.slug,
    }))
  }


  export default async function ProjectPage({
    params,
  }: {
    params: { slug: string }
  }) {
    const { isEnabled } = draftMode()
    const { project, moreProjects } = await getProjectAndMoreProjects(params.slug, isEnabled)
    return (
        <section id='project'>
            <div className='max-w-screen-xl container mx-auto mt-10 min-h-screen mb-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-2/3 p-4'>
                        <article>
                            <header>
                                <h1 className='custom-heading from-[#FF1CF7] to-[#b249f8]'>
                                    {project.projectTitle}
                                </h1>
                            </header>
                            <section className='mb-4'>
                                <DescriptionRenderer description={project.description} />

                                <Divider className='my-10' />
                                <Link color='danger' href='/projects' as={NextLink} className='mt-10'>
                                    <ArrowLeft className='mr-2' />Back to Projects
                                </Link>
                            </section>
                        </article>
                    </div>
                    <div className='w-full md:w-1/3 p-4'><AppSidebar /></div>
                </div>
            </div>
        </section>
    )
  }