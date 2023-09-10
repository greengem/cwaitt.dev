import React from 'react';
import NextLink from "next/link";
import {Button, Link} from "@nextui-org/react";
import {Github} from 'react-bootstrap-icons';

function AppHero() {
  return (
<section id='hero' className='hero-container'>
    <div className='hero-overlay'></div>
    <div className='hero-content'>
        <div className='container text-center mb-5'>
            <h1 className='tracking-tight font-semibold text-6xl md:text-7xl lg:text-8xl mb-5'>Hello, I&apos;m <span className='from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b'>Chris Waitt</span></h1>
            <h2 className='tracking-tight font-semibold text-2xl md:text-3xl mb-1'>Turning Ideas into Stunning Web Interfaces</h2>
            <p className='text-lg md:text-xl tracking-tight mb-6'>Front-End Developer | UI/UX Enthusiast</p>
            <div>
                <Link as={NextLink} href="/projects"><Button color='danger' size="lg" className='mx-1'>View My Work</Button></Link>
                <Link as={NextLink} href="https://github.com/greengem" isExternal><Button color='default' size="lg" className='mx-1' variant="bordered"><Github />Github</Button></Link>
            </div>
        </div>
    </div>
</section>

  );
}

export default AppHero;

