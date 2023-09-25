import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Waitt - Tech Stack Overview: Frontend Technologies',
  description: 'Discover the technologies that empower my frontend projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
  openGraph: {
    title: 'Chris Waitt - Tech Stack Overview: Frontend Technologies',
    description: 'Discover the technologies that empower my frontend projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
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
    title: 'Chris Waitt - Tech Stack Overview: Frontend Technologies',
    description: 'Discover the technologies that empower my frontend projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
    creator: '@cwaitt_dev',
    images: 'image.jpg',
  },
}

export default function TechStacksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
