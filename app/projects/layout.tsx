import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Waitt - Featured Projects Showcase',
  description: 'Browse through a curated collection of my full stack development projects. Each piece is a testament to my dedication to crafting user-centric, responsive, and innovative web solutions.',
  openGraph: {
    
    title: 'Chris Waitt - Featured Projects Showcase',
    description: 'Browse through a curated collection of my full stack development projects. Each piece is a testament to my dedication to crafting user-centric, responsive, and innovative web solutions.',
    url: '/projects/',
    siteName: 'Chris Waitt - full stack Developer Portfolio',
    images: [
      {
        url: 'https://cwaitt.dev/myimage.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_Gb',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Waitt - Featured Projects Showcase',
    description: 'Browse through a curated collection of my full stack development projects. Each piece is a testament to my dedication to crafting user-centric, responsive, and innovative web solutions.',
    creator: '@cwaitt_dev',
    images: 'https://cwaitt.dev/myimage.jpg',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
