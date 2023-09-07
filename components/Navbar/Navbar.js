import Link from 'next/link';
import React from 'react';
import { Gem } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Link href="/" className='navbar-brand'><Gem /></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="/tech-stack">Tech</Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default AppNavbar;
