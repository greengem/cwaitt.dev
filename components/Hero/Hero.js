import React from 'react';
import Link from 'next/link';
import {Button, ButtonGroup} from "@nextui-org/react";

function AppHero() {
  return (
    <section className='hero-container'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
            <div className='container'>
              <h1 className='hero-content'>Hello, I&apos;m Chris Waitt</h1>
              <h2 className='mb-2 mt-0 text-4xl font-medium leading-tight'>Turning Ideas into Stunning Web Interfaces</h2>
              <p className='mb-4'>Front-End Developer | UI/UX Enthusiast</p>
              <Link href="/projects"><Button color='danger'>View My Work</Button></Link>
            </div>
        </div>
    </section>
  );
}

export default AppHero;

