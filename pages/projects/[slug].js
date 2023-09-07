// External dependencies
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Internal dependencies
import { fetchProjectBySlug, fetchAllProjectSlugs, fetchLatestProject } from '../../lib/contentful';
import AppSidebar from '../../components/Sidebar/Sidebar.js';

/**
 * Component for rendering tech stack badges.
 * 
 * @param {Array} techs - List of tech stacks used in the project.
 * @returns JSX.Element
 */
function TechStackBadges({ techs }) {
    return techs.map((tech, index) => (
        <span key={index} className={`badge me-1 ${index === 0 ? 'bg-accent' : 'bg-secondary'}`}>
            {tech}
        </span>
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
    const { projectTitle, techStack, description, gitHubLink, demoUrl } = project.fields;

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
        <Container className='mt-5'>
            <Row>
                <Col lg={8}>
                    <article>
                        <header>
                            <h1 className='section-h1'>{projectTitle}</h1>
                            <div className='mb-4'>
                                <TechStackBadges techs={techStack} />
                            </div>
                        </header>
                        <section className='mb-4'>
                            {documentToReactComponents(description, options)}
                        </section>
                    </article>
                </Col>
                <Col lg={4}><AppSidebar gitHubLink={gitHubLink} demoUrl={demoUrl} latestPost={latestPost} /></Col>
            </Row>
        </Container>
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
