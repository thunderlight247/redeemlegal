import { createClient } from 'next-sanity'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import type { PortableTextBlock } from 'sanity'

export { type SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-15',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SanityImageAsset {
  _id: string
  url: string
}

export interface SanityImage {
  asset?: SanityImageAsset
  hotspot?: { x: number; y: number }
  crop?: object
}

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  category: string
  author?: string
  publishedAt: string
  mainImage?: SanityImage
  excerpt?: string
  body?: PortableTextBlock[]
}

export async function getArticles(): Promise<Article[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return []
  }
  try {
    return await client.fetch(
      `*[_type == "article"] | order(publishedAt desc){
        _id,
        title,
        slug,
        category,
        author,
        publishedAt,
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        excerpt
      }`
    )
  } catch (err) {
    console.error('Error fetching articles from Sanity:', err)
    return []
  }
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return []
  }
  try {
    return await client.fetch(
      `*[_type == "article"] | order(publishedAt desc)[0...$limit]{
        _id,
        title,
        slug,
        category,
        author,
        publishedAt,
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        excerpt
      }`,
      { limit }
    )
  } catch (err) {
    console.error('Error fetching featured articles from Sanity:', err)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null
  }
  try {
    return await client.fetch(
      `*[_type == "article" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        category,
        author,
        publishedAt,
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        excerpt,
        body
      }`,
      { slug }
    )
  } catch (err) {
    console.error(`Error fetching article "${slug}" from Sanity:`, err)
    return null
  }
}