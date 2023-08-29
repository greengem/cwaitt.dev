import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AboutMe.css';
import SpotifyPlaylist from './Spotify/SpotifyPlaylist';
import { SpeakerFill } from 'react-bootstrap-icons';


function AppAboutMe() {
  return (
    <section className='about-me'>
      <Row xs={1} sm={1} md={2} lg={2}>
        <Col className='about-me-photo' ></Col>
        <Col className='about-me-text'>
          <Container>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr />
            <p><SpeakerFill /> What i'm listening to</p>
              <SpotifyPlaylist />
          </Container>
        </Col>
      </Row>

    </section>
  );
}

export default AppAboutMe;
