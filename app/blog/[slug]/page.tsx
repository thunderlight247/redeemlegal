import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Phone, ShieldCheck, User } from 'lucide-react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import PageHero from '@/components/PageHero'
import WhatsAppButton from '@/components/WhatsAppButton'
import CommentForm from '@/components/CommentForm'
import { getApprovedComments, getArticleBySlug, urlFor, type SanityImageSource } from '@/lib/sanity'
import { site } from '@/lib/site'

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

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mt-10 mb-4 pb-2 border-b border-line">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-lg font-semibold text-ink mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-gold bg-sand/40 py-4 px-6 italic text-slate-800 rounded-r-lg font-serif">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 text-base md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700 text-base md:text-lg">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value) return null
      const imgUrl = urlFor(value).width(1200).url()
      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-line bg-sand/30">
          <Image
            src={imgUrl}
            alt={value.alt || 'Publication illustration'}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const comments = await getApprovedComments(article._id)

  return (
    <main className="bg-sand/20 min-h-screen">
      <PageHero
        eyebrow={formatCategory(article.category)}
        title={article.title}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
          {article.author && (
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-gold" aria-hidden="true" />
              {article.author}
            </span>
          )}
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gold" aria-hidden="true" />
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </PageHero>

      <div className="wrap py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Publications & Articles
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-10 shadow-sm">
              {article.mainImage && article.mainImage.asset && (
                <div className="relative my-6 h-72 w-full overflow-hidden rounded-lg shadow-md md:h-96">
                  <Image
                    alt={article.title}
                    className="object-cover"
                    fill
                    priority
                    src={article.mainImage.asset.url || urlFor(article.mainImage as SanityImageSource).url()}
                  />
                </div>
              )}

              {article.excerpt && (
                <div className="mb-8 border-b border-line pb-6">
                  <p className="text-lg font-medium leading-relaxed text-slate-800 italic">
                    {article.excerpt}
                  </p>
                </div>
              )}

              <div className="article-body">
                {article.body ? (
                  <PortableText value={article.body} components={portableTextComponents} />
                ) : (
                  <p className="text-muted italic">This publication does not contain body content yet.</p>
                )}
              </div>

              <section
                aria-labelledby="discussion-heading"
                className="mt-12 max-w-4xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-10"
              >
                <div className="border-b border-line pb-5">
                  <p className="eyebrow">Join the conversation</p>
                  <h2 id="discussion-heading" className="mt-2 font-display text-3xl font-semibold text-ink">
                    Discussion
                  </h2>
                </div>

                <div className="divide-y divide-line">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <article key={comment._id} className="py-6 first:pt-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-semibold text-ink">{comment.name}</h3>
                          <time className="text-xs text-muted" dateTime={comment.createdAt}>
                            {new Date(comment.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                          {comment.comment}
                        </p>
                      </article>
                    ))
                  ) : (
                    <p className="py-6 text-sm text-muted">
                      There are no approved comments yet. Start the discussion.
                    </p>
                  )}
                </div>

                <div className="mt-2 border-t border-line pt-7">
                  <h3 className="font-display text-2xl font-semibold text-ink">Leave a comment</h3>
                  <CommentForm articleId={article._id} />
                </div>
              </section>
            </div>
          </article>

          {/* Legal Consultation Sidebar Callout */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand text-gold-deep">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Need Legal Guidance on this Topic?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Redeem assists clients across Ghana and internationally with documentation,
                  Commissioner for Oaths verifications, court filings, and regulatory procedures.
                </p>

                <div className="mt-6 space-y-3">
                  <WhatsAppButton variant="dark" className="w-full justify-center !text-sm">
                    Consult on WhatsApp
                  </WhatsAppButton>
                  <a
                    href={site.phoneHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold-deep"
                  >
                    <Phone className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                    Call {site.phoneDisplay}
                  </a>
                </div>

                <div className="mt-6 border-t border-line pt-4 text-xs text-muted">
                  <p>
                    <strong>Location:</strong> {site.addressShort}
                  </p>
                  <p className="mt-1">
                    <strong>Hours:</strong> {site.hours}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gold/30 bg-ink p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                  Book Publications
                </p>
                <h4 className="font-display text-lg font-semibold text-white mt-1">
                  Redeem Publishing House
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Looking for educational, legal, or religious publications? Explore our printed
                  handbooks and authored volumes.
                </p>
                <Link
                  href="/services#handbook"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light hover:underline"
                >
                  View Publications & Handbooks →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}