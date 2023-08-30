import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AboutMe.css';
import SpotifyPlaylist from './Spotify/SpotifyPlaylist';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AppAboutMe() {
  return (
    <section className='about-me'>
      <Row xs={1} sm={1} md={2} lg={2}>
        {/* Column for photo */}
        <Col className='about-me-photo'></Col>
        {/* Column for text */}
        <Col className='about-me-text'>
          <Container>
            {/* Animated header */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <h1>About</h1>
            </AnimationOnScroll>

            {/* Introduction */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>Hey there! I'm <strong>Chris</strong>, a passionate <strong>web dev</strong> with a deep love for all things tech. I thrive on turning innovative ideas into reality and creating solutions that make a meaningful impact. 🚀</p>
            </AnimationOnScroll>

            {/* Background */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>My journey into the world of development began when I was running a record label and faced the challenge of building a digital presence without the budget to hire a developer. It was a classic case of necessity being the mother of invention. With a determination to overcome this obstacle, I embarked on a self-learning journey. 🛤️</p>
            </AnimationOnScroll>

            {/* Learning HTML/CSS */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>I started by teaching myself the basics of <strong>HTML</strong> and <strong>CSS</strong>, piecing together my first websites. The thrill of creating something functional from scratch ignited a passion for coding that I hadn't anticipated. The more I dived into web development, the more I realized how fun and exciting it was. It quickly became clear that this was what I wanted to spend my time doing. 💻</p>
            </AnimationOnScroll>

            {/* Exploring PHP */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>As my ambitions grew, so did my skills. I delved into using <strong>PHP</strong> for includes and custom functions, which opened up new doors for dynamic content. Each new concept I mastered fueled my enthusiasm to push further. ⚙️</p>
            </AnimationOnScroll>

            {/* Unleashing JavaScript */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>After getting acquainted with content management systems (<strong>CMS</strong>), I discovered the unbelievable power of <strong>JavaScript</strong>. Its ability to bring websites to life and create interactive experiences was a game-changer. JavaScript made me realize that the only restrictions on what I could do would be my own creativity. ✨</p>
            </AnimationOnScroll>

            {/* Specialization */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>I specialize in <strong>frontend development</strong>, <strong>responsive design</strong>, <strong>web accessibility</strong>, and <strong>problem-solving</strong>, where I combine my technical skills with creative problem-solving to build robust and user-friendly applications. Whether it's crafting elegant frontend interfaces, ensuring seamless responsiveness, adhering to accessibility standards, or architecting scalable backend systems, I'm up for the challenge. 🎨</p>
            </AnimationOnScroll>

            {/* Coding Philosophy */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>I believe that great software is not just lines of code; it's a harmonious blend of innovation, usability, and reliability. I'm dedicated to writing clean, maintainable code that not only meets functional requirements but also sets the foundation for future growth. 🔧</p>
            </AnimationOnScroll>

            {/* Continuous Learning */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>In the world of technology, learning never stops. I'm a firm believer in staying up-to-date with the latest trends and tools in the industry. You'll often find me diving into new frameworks, attending tech meetups, and exploring online courses. 📚</p>
            </AnimationOnScroll>

            {/* Interests */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>When I'm not immersed in code, you'll find me <em>cycling along the picturesque London canals, enjoying aquatic activities (though definitely not swimming in the canals), diving into creative music composition, and indulging in PC gaming</em>. These diverse interests contribute to my well-rounded perspective and help me approach challenges from refreshingly different angles. 🚴‍♂️🎶🎮</p>
            </AnimationOnScroll>

            {/* Closing Statement */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
              <p>I'm always excited to collaborate, share ideas, and contribute to exciting projects. Whether you're a fellow developer, a potential client, or just someone passionate about technology, I'd love to connect! 🤝</p>
            </AnimationOnScroll>

            {/* Spotify Playlist */}
            <AnimationOnScroll animateOnce={true} delay={1500} animateIn="animate__fadeInLeftBig">
              <SpotifyPlaylist />
            </AnimationOnScroll>
          </Container>
        </Col>
      </Row>
    </section>
  );
}

export default AppAboutMe;
