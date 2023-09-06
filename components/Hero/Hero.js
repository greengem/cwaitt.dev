import React from 'react';
import Link from 'next/link';

import styles from './Hero.module.css'

function AppHero() {
  return (
    <section className={styles['hero-container']}>
        <div className={styles['hero-overlay']}></div>
        <div className={styles['hero-content']}>
            <div className='container'>
                <h1 className={styles['hero-content-h1']}>Hello, I'm Chris Waitt</h1>
                <h2>Turning Ideas into Stunning Web Interfaces</h2>
                <p>Front-End Developer | UI/UX Enthusiast</p>
                <Link href="/projects" className='btn btn-dark'>View My Work</Link>
            </div>
        </div>
    </section>
  );
}

export default AppHero;