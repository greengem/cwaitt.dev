import "@/styles/globals.scss";
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import AppNavbar from "../components/Navbar/Navbar";
import AppFooter from "../components/Footer/Footer";
import "animate.css/animate.min.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export function generateViewport() {
  return {
    themeColor: '#18181b',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'no'
  };
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cwaitt.dev'),
  title: 'Chris Waitt - Full Stack Developer Portfolio',
  description: 'A showcase of my full stack development projects and expertise.',
  openGraph: {
    title: 'Chris Waitt - Full Stack Developer Portfolio',
    description: 'A showcase of my full stack development projects and expertise.',
    url: 'https://cwaitt.dev/',
    siteName: 'Chris Waitt - Full Stack Developer Portfolio',
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
    title: 'Chris Waitt - Full Stack Developer Portfolio',
    description: 'A showcase of my full stack development projects and expertise.',
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
        <Providers>
          <Toaster />
          <AppNavbar />
              {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
