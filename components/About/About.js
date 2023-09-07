import React from 'react';
import styles from './About.module.css'
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'

function AppAbout() {
  return (
    <section className={styles['about-container']}>
        <Container>
            <h1 className='section-h1'>About</h1>
            <Row>
                <Col lg={6} className='about-left'>
                    <div className={styles['about-photo-container']}>
                        <Image 
                            className={styles['about-photo']} 
                            src='/images/Profile.jpeg'
                            width={1512}
                            height={2016}
                            alt='photo of me' />
                    </div>
                </Col>
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
