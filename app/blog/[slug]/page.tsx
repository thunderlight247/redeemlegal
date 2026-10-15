import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/sanity'
import PageHero from '@/components/PageHero'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main>
      <PageHero title={article.title} eyebrow={article.category} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-sm text-slate-500 mb-8">
          Published on{' '}
          {new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="prose lg:prose-lg text-slate-800">
          {article.body && <PortableText value={article.body} />}
        </div>
      </article>
    </main>
  )
}