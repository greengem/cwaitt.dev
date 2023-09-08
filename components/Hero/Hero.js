import React from 'react';
import Link from 'next/link';

function AppHero() {
  return (
    <section className='hero-container'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
            <div className='container'>
              <h1 className='hero-content'>Hello, I&apos;m Chris Waitt</h1>
              <h2>Turning Ideas into Stunning Web Interfaces</h2>
              <p>Front-End Developer | UI/UX Enthusiast</p>
              <Link href="/projects" className='btn btn-dark'>View My Work</Link>
            </div>
        </div>
    </section>
  );
}

export default AppHero;