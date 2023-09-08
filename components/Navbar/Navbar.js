import Link from 'next/link';
import React from 'react';
import { Gem } from 'react-bootstrap-icons';

function AppNavbar() {
  return (
    <div className="navbar bg-body-tertiary navbar-expand-sm">
        <div className='container'>
            <a class="navbar-brand" href="/"><Gem /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="/tech-stack">Tech</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default AppNavbar;
