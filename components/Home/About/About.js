import React from 'react';
import {Image} from "@nextui-org/react";
import NextImage from "next/image";

import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

function AppAbout() {
  return (
    <section id='about' className="about-container py-20 mb-20 mt-10 max-w-screen-xl mx-auto">
      <div className='container mx-auto'>
      <h1 className='custom-heading from-[#5EA2EF] to-[#0072F5]'>About</h1>
      <div className=' mx-auto flex flex-col md:flex-row'>
        <div className="w-full md:w-1/2">
          <AppAboutText />
          {/*<AppAboutSpotify />*/}
        </div>
        <div className="w-full md:w-1/2 px-20">
          <Image as={NextImage} className='object-cover h-full w-full' src='/images/Profile-sq.jpeg' width={1327} height={1327} alt='photo of me' />
        </div>
      </div>
      </div>
    </section>
  );
}

export default AppAbout;

