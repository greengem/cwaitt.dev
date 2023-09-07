import Link from 'next/link';
import React from 'react';

function AppNavbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
        <div className='container'>
            <Link href="/" className='navbar-brand'>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="/tech-stack/">Tech Stacks</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default AppNavbar;
