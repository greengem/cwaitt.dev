import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import { MoonStarsFill, Gem } from 'react-bootstrap-icons';


function AppNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'enabled';
    setDarkMode(savedDarkMode);
  }, []);

useEffect(() => {
  // Update data-bs-theme attribute on <html> element
  if (darkMode) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('darkMode', 'disabled');
  }
}, [darkMode]);


  return (
    <Navbar className='navbar navbar-expand-lg navbar-light'>
      <Container>
        <Navbar.Brand href="/"><Gem /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/chriswaitt/" target='_blank' rel='noopener noreferrer'>Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/greengem" target='_blank' rel='noopener noreferrer'>Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Check
          type="switch"
          id="darkmode-switch"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <MoonStarsFill />
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
