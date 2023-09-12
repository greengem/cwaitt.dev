import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import Image from 'next/image';
import NextLink from "next/link";

import {Chip, Link, Divider} from "@nextui-org/react";

import { ArrowLeft } from 'react-bootstrap-icons';

import { fetchProjectBySlug, fetchAllProjectSlugs, fetchLatestProjects } from '../../lib/contentful';
import AppSidebar from '../../components/Sidebar/Sidebar.js';


/**
 * Component for rendering tech stack badges.
 * 
 * @param {Array} techs - List of tech stacks used in the project.
 * @returns JSX.Element
 */
function TechStackBadges({ techStackEntries }) {
    return techStackEntries.map((techEntry, index) => (
        <Chip 
            variant="dot"
            key={index} 
            size='md'
            color={index === 0 ? "danger" : "default"} 
            className="me-1"
        >
            {techEntry.fields.name}
        </Chip>
    ));
}
/**
 * Main Project component to display details of a specific project.
 * 
 * @param {Object} project - Contains details of the project.
 * @param {Object} latestPost - Contains details of the latest blog post.
 * @returns JSX.Element
 */
function Project({ project, latestPost }) {
    const { projectTitle, techStacks, description, gitHubLink, demoUrl } = project.fields;

    const options = {
        renderNode: {
            'embedded-asset-block': (node) => (
                <Image 
                    src={`https:${node.data.target.fields.file.url}?fit=fill&w=1712&h=1284`} 
                    alt={node.data.target.fields.title}
                    height={1284}
                    width={1712}
                    className='my-6'
                />
            ),
            'embedded-entry-block': (node) => {
                const { language, code } = node.data.target.fields;
                return (
                    <div className="code-block p-4 bg-gray-800 text-white my-6 rounded">
                        <SyntaxHighlighter 
                            language={language} 
                            style={dark}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                );
            },
            'paragraph': (node, children) => (
                <p className='text-base my-4'>{children}</p>
            ),
            'heading-1': (node, children) => (
                <h1 className='text-4xl font-bold my-8'>{children}</h1>
            ),
            'heading-2': (node, children) => (
                <h2 className='text-3xl font-semibold my-6'>{children}</h2>
            ),
            'heading-3': (node, children) => (
                <h3 className='text-2xl font-semibold my-5'>{children}</h3>
            ),
            'heading-4': (node, children) => (
                <h4 className='text-xl font-medium my-4'>{children}</h4>
            ),
            'unordered-list': (node, children) => (
                <ul className='pl-5 my-4'>{children}</ul>
            ),
            'ordered-list': (node, children) => (
                <ol className='pl-5 my-4'>{children}</ol>
            ),
            'list-item': (node, children) => (
                <li className='my-2'>{children}</li>
            ),
            'blockquote': (node, children) => (
                <blockquote className='pl-4 border-l-4 border-gray-400 italic my-6'>{children}</blockquote>
            )
        },
    };
    

    return (
        <section id='project'>
            <div className='max-w-screen-xl container mx-auto mt-10 min-h-screen mb-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-2/3 p-4'>
                        <article>
                            <header>
                                <h1 className='custom-heading from-[#FF1CF7] to-[#b249f8]'>{projectTitle}</h1>
                            </header>
                            <section className='mb-4'>
                                {documentToReactComponents(description, options)}
                                <Divider className='my-10' />
                                <div><TechStackBadges techStackEntries={techStacks} /></div>
                                <Link color='danger' href='/projects' as={NextLink} className='mt-10'><ArrowLeft className='mr-2' />Back to Projects</Link>
                            </section>
                        </article>
                    </div>
                    <div className='w-full md:w-1/3 p-4'><AppSidebar gitHubLink={gitHubLink} demoUrl={demoUrl} latestPost={latestPost} /></div>
                </div>
            </div>
        </section>
    );
}

// Function to generate static paths for all projects.
export async function getStaticPaths() {
    const slugs = await fetchAllProjectSlugs();
    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    };
}

// Function to fetch data for a specific project and provide it as props.
export async function getStaticProps({ params }) {
    const project = await fetchProjectBySlug(params.slug);
    const latestPost = await fetchLatestProjects();

    return {
        props: {
            project,
            latestPost: latestPost.fields
        },
        revalidate: 60,
    };
}

export default Project;
