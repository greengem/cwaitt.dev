// External dependencies
import React from 'react';
import Image from 'next/image';

// Internal dependencies
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

function AppAbout() {
  return (
    <section className='about-container'>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold mt-0 mb-4'>About</h1>
            
            <div className='flex flex-wrap'>
                <div className='about-left relative flex-grow max-w-full flex-1 px-4 lg:w-1/2 pr-4 pl-4'>
                    <div className='about-photo-container'>
                        <Image 
                            className='about-photo'
                            src='/images/Profile.jpeg'
                            width={1512}
                            height={2016}
                            alt='photo of me' />
                    </div>
                </div>
                
                {/* About Text and Spotify Integration */}
                <div className='about-right relative flex-grow max-w-full flex-1 px-4 lg:w-1/2 pr-4 pl-4'>
                    <div className='container'>
                        <AppAboutText />
                        <AppAboutSpotify />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AppAbout;
