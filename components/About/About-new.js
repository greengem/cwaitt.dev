// External dependencies
import React from 'react';
//import {Image} from "@nextui-org/react";
import Image from "next/image";

// Internal dependencies
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

function AppAboutNew() {
  return (
<section className="about-container flex flex-col md:flex-row">
  <div className="about-image w-full md:w-1/2">

    <Image 

                        className='object-cover h-full w-full'
                        src='/images/Profile-sq.jpeg'
                        width={1327}
                        height={1327}
                        alt='photo of me' />
  </div>
  <div className="about-text w-full md:w-1/2 p-6">
  <h1 className='tracking-tight inline font-semibold text-6xl md:text-7xl lg:text-8xl'><span className='from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b'>About</span></h1>
    <AppAboutText />
                    <AppAboutSpotify />
  </div>
</section>

  );
}

export default AppAboutNew;

