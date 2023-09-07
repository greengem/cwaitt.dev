import React from 'react';
import Link from 'next/link';
import { Gem } from 'react-bootstrap-icons';

function AppFooter() {
  return (
    <section id='footer'>
        <div className='container'>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <p className="col-md-4 mb-0">© 2023 Chris Waitt</p>
            <Link 
              href="/" 
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <Gem />
            </Link>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><Link href="/" className="nav-link px-2">Home</Link></li>
              <li className="nav-item"><Link href="/" className="nav-link px-2">Github</Link></li>
              <li className="nav-item"><Link href="/" className="nav-link px-2">Linkedin</Link></li>
              <li className="nav-item"><Link href="/" className="nav-link px-2">Get in touch</Link></li>
            </ul>
          </footer>
        </div>
    </section>
  );
}

export default AppFooter;
