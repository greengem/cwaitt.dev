import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import { Gem } from 'react-bootstrap-icons';

function AppFooter() {
  return (
    <section id='footer'>
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p className="col-md-4 mb-0">© 2023 Chris Waitt</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <Gem />
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2">Github</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2">Linkedin</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2">Get in touch</a></li>
          </ul>
        </footer>
      </Container>
    </section>
  );
}

export default AppFooter;