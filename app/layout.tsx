import "@/styles/globals.scss";
import type { Metadata } from 'next'
import { Providers } from "./providers";
import AppNavbar from "../components/Navbar/Navbar";
import AppFooter from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: 'Chris Waitt - Frontend Developer Portfolio',
  description: 'Discover the creative world of Chris Waitt, a proficient frontend developer. Dive into a portfolio that highlights modern, responsive, and user-centric web designs and projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AppNavbar />
              {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
