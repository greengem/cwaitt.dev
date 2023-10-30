import "@/styles/globals.scss";
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import AppNavbar from "../components/Navbar/Navbar";
import AppFooter from "../components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export function generateViewport() {
  return {
    themeColor: '#000000',
  };
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cwaitt.dev'),
  title: 'Chris Waitt - Frontend Developer Portfolio',
  description: 'A showcase of my frontend development projects and expertise.',
  openGraph: {
    title: 'Chris Waitt - Frontend Developer Portfolio',
    description: 'A showcase of my frontend development projects and expertise.',
    url: 'https://cwaitt.dev/',
    siteName: 'Chris Waitt - Frontend Developer Portfolio',
    images: [
      {
        url: 'myimage.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_Gb',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Waitt - Frontend Developer Portfolio',
    description: 'A showcase of my frontend development projects and expertise.',
    creator: '@cwaitt_dev',
    images: 'image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'none',
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AppNavbar />
              {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
