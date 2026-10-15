import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Calendar, User } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { getArticles, urlFor } from '@/lib/sanity'
import WhatsAppButton from '@/components/WhatsAppButton'

export const revalidate = 60

const categoryLabels: Record<string, string> = {
  'corporate-law': 'Corporate & Commercial Law',
  litigation: 'Litigation & Dispute Resolution',
  publications: 'Legal Publications & Journals',
  compliance: 'Regulatory Compliance',
  insights: 'General Legal Insights',
}

function formatCategory(category: string): string {
  return categoryLabels[category] || category || 'Legal Publication'
}

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <main className="bg-sand/30 min-h-screen">
      <PageHero
        eyebrow="Publications & Legal Insights"
        title="Knowledge, Law & Practical Guidance"
      >
        Timely commentary, authoritative articles, and legal publication updates from
        the editorial and legal consultancy team at Redeem.
      </PageHero>

      <section className="wrap py-16 md:py-24">
        {articles.length === 0 ? (
          <div className="mx-auto max-w-xl text-center py-16 px-6 border border-line bg-white rounded-xl shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sand text-gold-deep">
              <BookOpen className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Publications Coming Soon
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our team is currently preparing authoritative articles and educational
              publications on Ghanaian commercial law, court filings, and documentation procedures.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/services" className="btn btn-gold text-xs">
                Explore Legal Services
              </Link>
              <WhatsAppButton variant="dark" className="!py-2 !text-xs">
                Enquire with Counsel
              </WhatsAppButton>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const imageUrl = article.mainImage
                ? urlFor(article.mainImage).width(720).height(480).fit('crop').url()
                : null

              return (
                <article
                  key={article._id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all hover:border-gold hover:shadow-md"
                >
                  {imageUrl ? (
                    <Link
                      href={`/blog/${article.slug.current}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-sand"
                    >
                      <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div className="relative flex aspect-[16/10] items-center justify-center bg-sand/60 border-b border-line">
                      <BookOpen className="h-10 w-10 text-gold-deep/40" aria-hidden="true" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3">
                      <span className="inline-block rounded bg-sand px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-gold-deep">
                        {formatCategory(article.category)}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-gold-deep">
                      <Link href={`/blog/${article.slug.current}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      {article.author && (
                        <span className="inline-flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                          {article.author}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    {article.excerpt && (
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="mt-6 border-t border-line pt-4">
                      <Link
                        href={`/blog/${article.slug.current}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors group-hover:text-ink"
                      >
                        Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}