'use client'
import React from 'react';
import { Image, Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { Book } from 'react-bootstrap-icons';

function AppHomeRecent({ projects }) {
    
  if (!projects || projects.length === 0) {
    return <div>Loading...</div>;
  }
    
  return (
    <section id='recent' className='py-5'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10'>
      <div className='container'>
        <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>My Recent Work</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map(project => (
            <div key={project.sys.id}>
              <Link as={NextLink} href={`/projects/${project.fields.slug}`}>
              <Image 
                width={1136}
                shadow='lg'
                height={639}
                alt={`Image for ${project.fields.projectTitle}`}
                src={`https:${project.fields.featuredImage.fields.file.url}?fit=fill&w=1136&h=639`}
              />
              </Link>
              <Link as={NextLink} href={`/projects/${project.fields.slug}`}>
                <h4 className='text-3xl tracking-tight font-semibold mt-5 mb-2 from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent bg-gradient-to-b'>
                  {project.fields.projectTitle}</h4>
              </Link>
              <p className='tracking-tight mb-6'>{project.fields.shortDescription} <Link className='text-warning' as={NextLink} href={`/projects/${project.fields.slug}`}>Read more..</Link></p>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <Link href='/projects' as={NextLink}>
            <Button size='lg' className='bg-gradient-to-tr from-[#FF705B] to-[#FFB457] text-white shadow-lg'>
              <Book />View My Work
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AppHomeRecent;
