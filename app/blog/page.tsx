import Link from 'next/link'
import { getArticles } from '@/lib/sanity'
import PageHero from '@/components/PageHero'

export const revalidate = 60 // Revalidate every minute

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <main>
      <PageHero
        eyebrow="Legal Publications"
        title="Legal Publications & Insights"
      >
        Stay updated with our latest legal updates, commercial guidance, and publication articles.
      </PageHero>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article._id} className="border rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                  {article.category}
                </span>
                <h2 className="text-xl font-bold mt-2 text-slate-900">
                  <Link href={`/blog/${article.slug.current}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {article.excerpt && (
                  <p className="text-slate-600 mt-3 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${article.slug.current}`}
                  className="text-sm font-semibold text-slate-900 hover:text-amber-700"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}