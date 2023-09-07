import { fetchProjectBySlug, fetchAllProjectSlugs } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import AppSidebar from '../../components/Sidebar/Sidebar.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TechStackBadges({ techs }) {
    return techs.map((tech, index) => (
        <span key={index} className={`badge me-1 ${index === 0 ? 'bg-accent' : 'bg-secondary'}`}>
            {tech}
        </span>
    ));
}

function Project({ project }) {
    const { projectTitle, techStack, description, shortDescription } = project.fields;
    //const { createdAt, updatedAt } = project.sys;

    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    const options = {
        renderNode: {
            'embedded-asset-block': (node) => (
                <img src={`https:${node.data.target.fields.file.url}`} alt={node.data.target.fields.title} />
            ),
            'embedded-entry-block': (node) => {
                const { language, code } = node.data.target.fields;
                return (
                    <div className="code-block">
                        <SyntaxHighlighter 
                            language={language} 
                            style={tomorrowNight}
                            showLineNumbers
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                );
            },
        },
    };

    return (
        <Container>
            <Row>
                <Col lg={8}>
                    <article>
                        <header>
                            <h1>{projectTitle}</h1>
    
                            <div className='mb-4'>
                                <TechStackBadges techs={techStack} />
                            </div>
                        </header>
                        <section className='mb-4'>
                            {documentToReactComponents(description, options)}
                        </section>
                    </article>
                </Col>
                <Col lg={4}><AppSidebar /></Col>
            </Row>
        </Container>
    );
}

export async function getStaticPaths() {
    const slugs = await fetchAllProjectSlugs();
    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const project = await fetchProjectBySlug(params.slug);
    return {
        props: {
            project,
        },
        revalidate: 60,
    };
}

export default Project;
