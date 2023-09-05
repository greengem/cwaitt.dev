import React from 'react';
import Container from 'react-bootstrap/Container';
import './Hero.scss';
import './HeroGlitch.scss';
import Button from 'react-bootstrap/Button';
import HeroWave from '../../Common/Waves/HeroWave';

function AppHero() {
  return (
    <section id='hero' className='hero-container'>
      <HeroWave />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Container>
          <h1 className="hero glitch layers" data-text="Hello, I'm Chris Waitt"><span>Hello, I'm Chris Waitt</span></h1>
          <h2>Turning Ideas into Stunning Web Interfaces</h2>
          <p>Front-End Developer | UI/UX Enthusiast</p>
          <Button variant="dark" href="#portfolio">View My Work</Button>
        </Container>
      </div>
    </section>
  );
}

export default AppHero;
