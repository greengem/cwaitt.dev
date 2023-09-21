import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Waitt - Tech Stack Overview: Frontend Technologies',
  description: 'Discover the technologies that empower my frontend projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
}

export default function TechStacksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
