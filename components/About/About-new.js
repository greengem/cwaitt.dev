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
    <h1 className="text-2xl mb-4">About Me</h1>
    <AppAboutText />
                    <AppAboutSpotify />
  </div>
</section>

  );
}

export default AppAboutNew;

