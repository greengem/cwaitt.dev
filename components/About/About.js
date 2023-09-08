// External dependencies
import React from 'react';
import Image from 'next/image';

// Internal dependencies
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

function AppAbout() {
  return (
    <section className='about-container'>
        <div className='container'>
            <h1 className='section-h1'>About</h1>
            
            <div className='row'>
                <div className='about-left col col-lg-6'>
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
                <div className='about-right col col-lg-6'>
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
