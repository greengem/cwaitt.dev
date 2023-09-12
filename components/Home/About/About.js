import React from 'react';
import {Image, Button} from "@nextui-org/react";
import NextImage from "next/image";
import {Link} from "@nextui-org/react";
import NextLink from "next/link";

import AppAboutText from './AboutText.js';
import {Linkedin, Info} from 'react-bootstrap-icons';

function AppAbout() {
  return (
    <section id='about' className="about-container py-20">
      <div className='max-w-screen-xl mx-auto  mb-20 mt-10'>
        <div className='container mx-auto'>
          <h1 className='custom-heading from-[#5EA2EF] to-[#0072F5]'>Behind the Code</h1>
            <AppAboutText />
            <div className='flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20'>
            <div className='w-full md:w-1/2'>
                    <Image 
                        width={1136}
                  height={639}
                        alt="NextUI hero Image" 
                        src="https://picsum.photos/id/62/1136/639" 
                    />
            </div>

            <div className='w-full md:w-1/2'>
                    <Image 
                        width={1136}
                  height={639}
                        alt="NextUI hero Image" 
                        src="https://picsum.photos/id/2/1136/639" 
                    />
            </div>
        </div>



            </div>
          </div>
    </section>
  );
}

export default AppAbout;

