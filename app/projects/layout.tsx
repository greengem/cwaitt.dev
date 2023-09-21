import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Waitt - Featured Projects Showcase',
  description: 'Browse through a curated collection of my frontend development projects. Each piece is a testament to my dedication to crafting user-centric, responsive, and innovative web solutions.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
