import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import { Gem } from 'react-bootstrap-icons';

function AppFooter() {
  return (
<Container fluid>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    <p className="col-md-4 mb-0 text-muted">© 2023 Chris Waitt</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <Gem />
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Github</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Linkedin</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Get in touch</a></li>
    </ul>
  </footer>
</Container>
  );
}

export default AppFooter;