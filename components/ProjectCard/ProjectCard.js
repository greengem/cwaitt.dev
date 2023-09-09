import Link from 'next/link';
import NextImage from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

function ProjectCard({ project }) {
    return (
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3 xxl:w-1/3 relative max-w-full px-4">
            <Card className="py-4 mb-7">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{project.fields.projectTags.join(', ')}</p>
                    <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
                        {project.fields.projectTitle}
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Link href={`/projects/${project.fields.slug}`}>
                        {project.fields.featuredImage && (
                            <Image
                                as={NextImage}
                                src={`https:${project.fields.featuredImage.fields.file.url}?fit=fill&w=1268&h=951`}
                                className='object-cover rounded-xl'
                                alt={project.fields.featuredImage.fields.description || project.fields.projectTitle}
                                width={1268}
                                height={951}
                            />
                        )}
                    </Link>
                    <p className="card-text mt-5 text-sm">{project.fields.shortDescription}</p>
                </CardBody>
                <CardFooter className='px-5'>
                    <div className="flex flex-wrap">
                        {project.fields.techStacks.map((techEntry, index) => (
                            <Link href='#' key={index}>
                                <Chip
                                    variant="dot"
                                    size="sm"
                                    color={index === 0 ? "danger" : "secondary"}
                                    className="me-1"
                                >
                                    {techEntry.fields.name}
                                </Chip>
                            </Link>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ProjectCard;
