import React from 'react';
import {Image, Button, Link} from "@nextui-org/react";
import NextLink from "next/link";
import {Book} from 'react-bootstrap-icons';

function AppHomeRecent() {
    return (
<section id='recent' className='py-20'>
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10'>
        <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>My Recent Work</h1>
        
        <div className='flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20'>
            <div className='w-full md:w-1/2'>
                <div>
                    <Image 
                        isBlurred
                        width={1920} 
                        height={1080}
                        alt="NextUI hero Image" 
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" 
                    />
                </div>
                <h4 className='text-xl font-semibold mt-10 mb-2'>Project</h4>
                <p className='tracking-tight mb-6'>Lorem ipsum ...</p>
            </div>

            <div className='w-full md:w-1/2'>
                <div>
                    <Image 
                        isBlurred
                        width={1920} 
                        height={1080}
                        alt="NextUI hero Image" 
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" 
                    />
                </div>
                <h4 className='text-xl font-semibold mt-10 mb-2'>Project</h4>
                <p className='tracking-tight mb-6'>Lorem ipsum ...</p>
            </div>
        </div>

        <div className=' mt-10'>
            <Link href='/projects' as={NextLink}>
                <Button size='lg' className='bg-gradient-to-tr from-[#FF705B] to-[#FFB457]  text-white shadow-lg'>
                    <Book />View My Work
                </Button>
            </Link>
        </div>
    </div>
</section>


  );
}

export default AppHomeRecent;

