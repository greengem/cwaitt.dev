import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPreviewProjectBySlug } from '../../../lib/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('Pr3vS3crtX9Z')
  const slug = searchParams.get('slug')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  const project = await getPreviewProjectBySlug(slug)

  if (!project) {
    return new Response('Invalid slug', { status: 401 })
  }

  draftMode().enable()
  redirect(`/projects/${project.slug}`)
}
