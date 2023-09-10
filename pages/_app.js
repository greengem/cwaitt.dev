import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

// Internal dependencies
import '@/styles/globals.scss'; // Global styles for the application
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
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <AppNavbar />
        <Component {...pageProps} /> {/* The main content of the page */}
        <AppFooter /> {/* Site-wide footer */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default MyApp;
