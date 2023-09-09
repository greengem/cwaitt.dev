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
      <AppNavbar /> {/* Site-wide navigation bar */}
        <Component {...pageProps} /> {/* The main content of the page */}
      <AppFooter /> {/* Site-wide footer */}
    </>
  );
}

export default MyApp;
