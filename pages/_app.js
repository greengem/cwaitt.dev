import {NextUIProvider} from '@nextui-org/react'

// Internal dependencies
import '@/styles/globals.scss'; // Global styles for the application
import React from 'react'; // React library (could be removed if using latest versions of Next.js since React import isn't mandatory)
import AppNavbar from '../components/Navbar/Navbar'; // Navbar component
import AppFooter from '../components/Footer/Footer'; // Footer component

/**
 * Custom App component that wraps around all other pages. 
 * Use this component to keep layout or state consistent between pages.
 * 
 * @param {React.ElementType} Component - The main component (page) to render.
 * @param {Object} pageProps - The props for the page.
 * 
 * @returns JSX.Element
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <AppNavbar /> {/* Site-wide navigation bar */}
          <Component {...pageProps} /> {/* The main content of the page */}
        <AppFooter /> {/* Site-wide footer */}
      </NextUIProvider>
    </>
  );
}

export default MyApp;
