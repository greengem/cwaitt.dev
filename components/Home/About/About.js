import React from 'react';
import {Image, Button} from "@nextui-org/react";
import NextImage from "next/image";

import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';
import {Linkedin, Info} from 'react-bootstrap-icons';

function AppAbout() {
  return (
    <section id='about' className="about-container py-20">
      <div className='max-w-screen-xl mx-auto  mb-20 mt-10'>
      <div className='container mx-auto'>
      <h1 className='custom-heading from-[#5EA2EF] to-[#0072F5]'>About</h1>
        <div className=' mx-auto flex flex-col md:flex-row'>
          <div className="w-full md:w-1/2">
            <AppAboutText />
            {/*<AppAboutSpotify />*/}
          </div>
          <div className="w-full md:w-1/2 px-20">
            <Image as={NextImage} className='object-cover h-full w-full' src='https://picsum.photos/600/600' width={600} height={600} alt='photo of me' />
            
          </div>
        </div>
        <div>
                <Button size='lg' className='bg-gradient-to-tr from-[#5EA2EF] to-[#0072F5] text-white'><Linkedin />Linkedin</Button>
            </div>
      </div>
      </div>
    </section>
  );
}

export default AppAbout;

