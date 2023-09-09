// External dependencies
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import {Chip} from "@nextui-org/react";

// Internal dependencies
import { fetchProjectBySlug, fetchAllProjectSlugs, fetchLatestProject } from '../../lib/contentful';
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
            key={index} 
            size='sm'
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

    // Options for rendering embedded assets from Contentful rich-text fields.
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => (
                <Image 
                    src={`https:${node.data.target.fields.file.url}?fit=fill&w=1712&h=1284`} 
                    alt={node.data.target.fields.title}
                    height={1284}
                    width={1712}
                    className='blog-image-embed'
                />
            ),
            'embedded-entry-block': (node) => {
                const { language, code } = node.data.target.fields;
                return (
                    <div className="code-block">
                        <SyntaxHighlighter 
                            language={language} 
                            style={dark}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                );
            },
        },
    };

    return (
        <div className='container mx-auto mt-10 min-h-screen'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-2/3 p-4'>
                    <article>
                        <header>
                            <h1 className='section-h1 mb-2 mt-0 text-5xl font-medium leading-tight'>{projectTitle}</h1>
                            <div className='mb-4'>
                            <TechStackBadges techStackEntries={techStacks} />
                            </div>
                        </header>
                        <section className='mb-4'>
                            {documentToReactComponents(description, options)}
                        </section>
                    </article>
                </div>
                <div className='w-full md:w-1/3 p-4'><AppSidebar gitHubLink={gitHubLink} demoUrl={demoUrl} latestPost={latestPost} /></div>
            </div>
        </div>
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
    const latestPost = await fetchLatestProject();

    return {
        props: {
            project,
            latestPost: latestPost.fields
        },
        revalidate: 60,
    };
}

export default Project;
