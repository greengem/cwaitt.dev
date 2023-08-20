import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; // Import the Navbar component from React Bootstrap
import Nav from 'react-bootstrap/Nav'; // Import the Nav component from React Bootstrap
import Container from 'react-bootstrap/Container'; // Import the Container component from React Bootstrap
/*import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';*/

function AppNavbar() {
  return (
    // Create a responsive navigation bar with a dark background
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Display your brand logo or name */}
        <Navbar.Brand href="/">Site Title</Navbar.Brand>
        
        {/* Toggle button for collapsing the navigation menu on smaller screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Collapsible navigation menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {/* Navigation links */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/chriswaitt/" target='_blank' rel='noopener noreferrer'>Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/greengem" target='_blank' rel='noopener noreferrer'>Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;