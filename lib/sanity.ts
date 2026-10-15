import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import type { PortableTextBlock } from 'sanity'
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-15',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  category: string
  publishedAt: string
  mainImage?: SanityImageSource
  excerpt?: string
  body?: PortableTextBlock[]
}

export async function getArticles(): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc){
      _id,
      title,
      slug,
      category,
      publishedAt,
      mainImage,
      excerpt
    }`
  )
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      category,
      publishedAt,
      mainImage,
      excerpt,
      body
    }`,
    { slug }
  )
}