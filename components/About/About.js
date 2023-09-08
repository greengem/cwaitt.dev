// External dependencies
import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Internal dependencies
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

function AppAbout() {
  return (
    <section className='about-container'>
        <Container>
            {/* Heading */}
            <h1 className='section-h1'>About</h1>
            
            <Row>
                {/* Profile Image */}
                <Col lg={6} className='about-left'>
                    <div className='about-photo-container'>
                        <Image 
                            className='about-photo'
                            src='/images/Profile.jpeg'
                            width={1512}
                            height={2016}
                            alt='photo of me' />
                    </div>
                </Col>
                
                {/* About Text and Spotify Integration */}
                <Col lg={6} className='about-right'>
                    <div className='container'>
                        <AppAboutText />
                        <AppAboutSpotify />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default AppAbout;
