import React from 'react';
import {Image, Button} from "@nextui-org/react";

function AppHomeRecent() {
    return (
        <section id='recent' className='py-20'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
                <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>Recent Work</h1>
                <div className='flex'>
    <div className='m-4'>
        <div className='mb-10'>
            <Image 
                isBlurred
                width={1920} 
                height={1080}
                alt="NextUI hero Image" 
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" 
            />
        </div>
        <h4 className='text-xl font-semibold'>Project</h4>
        <p className='tracking-tight mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button size='lg' className='bg-gradient-to-tr from-[#FF705B] to-[#FFB457]  text-white shadow-lg'>More Info</Button>
    </div>
    <div className='m-4'>
        <div className='mb-10'>
            <Image 
                isBlurred
                width={1920} 
                height={1080}
                alt="NextUI hero Image" 
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" 
            />
        </div>
        <h4 className='text-xl font-semibold'>Project</h4>
        <p className='tracking-tight mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button size='lg' className='bg-gradient-to-tr from-[#FF705B] to-[#FFB457]  text-white shadow-lg'>More Info</Button>
    </div>
</div>

            </div>
        </section>

  );
}

export default AppHomeRecent;

