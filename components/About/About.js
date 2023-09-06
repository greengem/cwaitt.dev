import React from 'react';
import styles from './About.module.css'
import AppAboutText from './AboutText.js';
import AppAboutSpotify from './AboutSpotify.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppAbout() {
  return (
    <section className={styles['about-container']}>
        <Container>
            <h1>About</h1>
            <Row>
                <Col lg={6} className='about-left'>
                    <div className={styles['about-photo-container']}>
                        <img className={styles['about-photo']} src='https://picsum.photos/1080/820' />
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
