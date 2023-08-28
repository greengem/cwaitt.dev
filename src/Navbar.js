import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

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
    <Navbar className='navbar sticky-top bg-body-tertiary'>
      <Container>
        <Navbar.Brand href="/">Site Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/chriswaitt/" target='_blank' rel='noopener noreferrer'>Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/greengem" target='_blank' rel='noopener noreferrer'>Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SunFill className='me-2' />
        
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
