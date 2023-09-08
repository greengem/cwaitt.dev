import Link from 'next/link';
import Image from 'next/image'

function ProjectCard({ project }) {
  return (
    <div className='col col-sm-12 col-md-6'>
      <div className="card h-100">
        <Link href={`/projects/${project.fields.slug}`}>
          {project.fields.featuredImage && (
            <Image
              src={`https:${project.fields.featuredImage.fields.file.url}?fit=fill&w=1268&h=951`}
              className='card-img-top'
              alt={project.fields.featuredImage.fields.description || project.fields.projectTitle}
              width={1268}
              height={951}
            />
          )}
        </Link>
        <div className='card-body'>
          <h5 className="card-title">{project.fields.projectTitle}</h5>
          <p className="card-text">{project.fields.shortDescription}</p>
        </div>
        <div className="card-footer">
          <div className='tech-stack-labels'>
            {project.fields.techStack.map((tech, index) => (
              <span key={index} className={`badge me-1 ${index === 0 ? 'bg-accent' : 'bg-secondary'}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
