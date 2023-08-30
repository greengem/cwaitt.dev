import React from 'react';
import Container from 'react-bootstrap/Container';
import './Hero.css';

function AppHero() {
  return (
    <section className='hero'>
      <div className="hero-overlay"></div> {/* Overlay for darkened effect */}
      <div className="hero-content">
        <Container>
          <h1>Hi, I'm Chris Waitt</h1>
          <h2>Frontend Developer / Designer</h2>
        </Container>
      </div>
    </section>
  );
}

export default AppHero;
