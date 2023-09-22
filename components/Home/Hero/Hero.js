'use client'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { IconBrandGithub } from '@tabler/icons-react';

export default function AppHero() {
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `Hello,^1000 I'm <span class="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">Chris Waitt</span>`
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      contentType: 'html',
      onComplete: (self) => {
        if (self.cursor) {
          self.cursor.style.animation = 'none';
          self.cursor.style.opacity = 0;
        }
      }
    };

    if (elRef.current) {
      const typed = new Typed(elRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id='hero' className='hero-container'>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <div className='container text-center mb-5'>
          <h1 className='tracking-tight font-semibold text-6xl md:text-7xl lg:text-8xl mb-5'>
            <span ref={elRef}></span>
          </h1>
          <h2 className='tracking-tight font-semibold text-2xl md:text-3xl mb-1'>Turning Ideas into Stunning Web Interfaces</h2>
          <p className='text-lg md:text-xl tracking-tight mb-6'>Front-End Developer | UI/UX Enthusiast</p>
          <div className='flex justify-center items-center gap-x-2'>
            <Link as={NextLink} href="/projects">
              <Button size="lg" className='bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8]  text-white shadow-lg'>
                View My Work
              </Button>
            </Link>
            <Link as={NextLink} href="https://github.com/greengem" isExternal>
              <Button color='default' size="lg" variant="bordered">
                <IconBrandGithub />Github
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
