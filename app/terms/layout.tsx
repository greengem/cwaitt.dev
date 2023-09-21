import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Waitt - Terms of Service',
  description: 'Review the terms and conditions for using Chris Waitt\'s frontend developer portfolio. Understand the guidelines and policies that govern interactions and usage of the site\'s content and resources.',
}

export default function TechStacksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
