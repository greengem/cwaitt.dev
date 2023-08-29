import React from 'react';
import Container from 'react-bootstrap/Container';
import './Hero.css';
import { Github, Linkedin } from 'react-bootstrap-icons';

function AppHero() {
  return (
    <section className='hero'>
      <Container fluid>
        <div className="overlay"></div> {/* Overlay for darkened effect */}
        <div className="hero-content">
          <Container>
            <h1>Hi, I'm Chris Waitt</h1>
            <h2>Frontend Developer / Designer</h2>
            <h1>
              <span className='me-4'><a href='https://github.com/greengem'><Github /></a></span>
              <span><a href='https://www.linkedin.com/in/chriswaitt/'><Linkedin /></a></span>
            </h1>
          </Container>
        </div>
      </Container>
    </section>
  );
}

export default AppHero;
