import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import React from 'react';
import AppNavbar from '../components/Navbar/Navbar';
import AppFooter from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppNavbar />
        <Component {...pageProps} />
      <AppFooter />
    </>
  );
}

export default MyApp;
