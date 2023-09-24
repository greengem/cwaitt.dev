import "@/styles/globals.scss";
import type { Metadata } from 'next'
import { Providers } from "./providers";
import AppNavbar from "../components/Navbar/Navbar";
import AppFooter from "../components/Footer/Footer";
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

export const metadata: Metadata = {
  title: 'Chris Waitt - Frontend Developer Portfolio',
  description: 'Discover the creative world of Chris Waitt, a proficient frontend developer. Dive into a portfolio that highlights modern, responsive, and user-centric web designs and projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <ContentfulLivePreviewProvider
  locale="set-your-locale-here" // Required: allows you to set the locale once and have it reused throughout the preview.
  enableInspectorMode={true} // Optional: allows you to toggle inspector mode which is on by default.
  enableLiveUpdates={true} // Optional: allows you to toggle live updates which are on by default.
  debugMode={true} // Optional: allows you to toggle debug mode which is off by default.
>
          <AppNavbar />
              {children}
          <AppFooter />
          </ContentfulLivePreviewProvider>
        </Providers>
      </body>
    </html>
  );
}
