import { Providers } from "./providers";
import '../styles/globals.css';
import AppNavbar from '../components/Navbar/Navbar';
import AppFooter from '../components/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AppNavbar />
            <main>
              {children}
            </main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
