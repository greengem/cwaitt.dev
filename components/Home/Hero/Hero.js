'use client'
import React, { useEffect, useRef } from 'react';
import NextLink from "next/link";
import { Button, Link } from "@nextui-org/react";
import { UilGithub } from '@iconscout/react-unicons'
import Typed from 'typed.js';

export default function AppHero() {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Hello,^1000 I&apos;m <span class="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">Chris Waitt</span>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      startDelay: 0, // No delay before typing starts
      contentType: 'html', 
      showCursor: true, 
      onComplete: (self) => {
        if (self.cursor) {
          self.cursor.style.animation = 'none'; 
          self.cursor.style.opacity = 0;       
        }
      }
    };
  
    const typed = new Typed(typeRef.current, options);
  
    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <section id='hero' className='hero-container'>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <div className='container text-center mb-5'>
          <h1 className='tracking-tight font-semibold text-6xl md:text-7xl lg:text-8xl mb-5'>
            <span ref={typeRef}></span>
          </h1>
          <h2 className='tracking-tight font-semibold text-2xl md:text-3xl mb-1'>Turning Ideas into Stunning Web Interfaces</h2>
          <p className='text-lg md:text-xl tracking-tight mb-6'>Front-End Developer | UI/UX Enthusiast</p>
          <div>
            <Link as={NextLink} href="/projects"><Button size="lg" className='mx-1 bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8]  text-white shadow-lg'>View My Work</Button></Link>
            <Link as={NextLink} href="https://github.com/greengem" isExternal><Button color='default' size="lg" className='mx-1' variant="bordered"><UilGithub />Github</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
