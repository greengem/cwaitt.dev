import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AboutMe.scss';
import SpotifyPlaylist from './Spotify/SpotifyPlaylist';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from 'react-bootstrap/Image';


function AppAboutMe() {
  return (
    <section id='about' className='about-me'>
      <Container>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <h1>About</h1>
            </AnimationOnScroll>
      <Row>
        <Col lg={6} className='about-me-left'>
          <div className='about-me-photo'>
            <Image src='https://placehold.co/1080x720'  rounded />
          </div>
        </Col>
        <Col lg={6} className='about-me-text'>
          <Container>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
              <p>Hey, I'm <strong>Chris</strong>—an <em>enthusiastic</em> web developer with a flair for transforming tech dreams into reality. 🚀 My journey started during my record label days when I faced the digital dilemma without a developer budget. In true <em>necessity-breeds-ingenuity</em> fashion, I charted a DIY path into <strong>HTML</strong>, <strong>CSS</strong>, and beyond. 💻</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
              <p>From piecing together my first websites to unlocking the wizardry of <strong>JavaScript</strong>, I realized coding was my unexpected jam. These days, I'm all about <em>frontend finesse</em>, <em>responsive design</em>, and <strong>web accessibility</strong>. Whether I'm crafting slick interfaces, dancing with standards, or engineering scalable backends, it's a blend of <em>technical chops</em> and <em>creative panache</em>. 🎨 Beyond coding, you might find me <strong>cruising London's canals</strong>, <em>composing tunes</em> that hit the right notes, or squeezing in some <strong>PC gaming</strong>. If you're up for geeking out or plotting exciting tech escapades, let's connect! 🤝</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
              <h4>What i'm listening to:</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
              <SpotifyPlaylist />
            </AnimationOnScroll>
          </Container>
        </Col>
      </Row>
      </Container>

    </section>
  );
}

export default AppAboutMe;
