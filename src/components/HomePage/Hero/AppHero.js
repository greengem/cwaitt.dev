import React from 'react';
import Container from 'react-bootstrap/Container';
import './Hero.css';
import './HeroGlitch.css';

function AppHero() {
  return (
    <section className='hero-container'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Container>
          <h1 className="hero glitch layers" data-text="Hi, I'm Chris Waitt"><span>Hi, I'm Chris Waitt</span></h1>
          <h2>Architecting Futuristic Web Experiences</h2>
        </Container>
      </div>
    </section>
  );
}

export default AppHero;
