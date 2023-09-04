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
      <div class="custom-shape-divider-top-1693844900">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      <Container>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
        <h1>About</h1>
        </AnimationOnScroll>
      <Row>
        <Col lg={6} className='about-me-left'>
          <div className='about-me-photo'>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
            <Image src='https://picsum.photos/1080/720'  rounded />
          </AnimationOnScroll>
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
