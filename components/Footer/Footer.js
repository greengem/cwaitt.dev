import React from 'react';
import Link from 'next/link';
import { Gem } from 'react-bootstrap-icons';

function AppFooter() {
  return (
    <section id='footer'>
      <footer>
        <div className='container mx-auto'>
          <div className='py-20'>
          <p className='text-center tracking-tight  text-xl'>Made by Chris Waitt</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default AppFooter;
