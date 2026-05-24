import { useParams, Link, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { getArticleBySlug, ARTICLES } from '../data/articles.js'
import { BASE } from '../constants.js'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  // 404 for unknown slugs
  if (!article) return <Navigate to="/articles" replace />

  return <ArticleContent article={article} />
}

// Separate component so hooks run after the null-guard above
function ArticleContent({ article }) {
  const {
    slug, title, metaTitle, metaDescription,
    image, imageAlt, imagePosition, imageCredit,
    date,
    intro, sections, keyPoints, relatedSlugs, siteLinks,
  } = article

  const canonicalPath = `/articles/${slug}`

  usePageMeta(metaTitle, metaDescription, canonicalPath)

  // Article JSON-LD schema
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: `${BASE}${image}`,
    author: {
      '@type': 'Organization',
      name: 'Gnosis Tasmania',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gnosis Tasmania',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/favicon-512x512.png` },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}${canonicalPath}` },
    inLanguage: 'en-AU',
  })

  const relatedArticles = relatedSlugs
    .map(s => ARTICLES.find(a => a.slug === s))
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={image}
        alt={imageAlt}
        heightClass="h-[55vh] min-h-[380px]"
        position={imagePosition}
        overlay="bg-gradient-to-b from-[#1c1409]/70 via-[#1c1409]/55 to-[#1c1409]/85"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-[11px] text-[#c9a96e] font-medium uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-[#e8d5b0] transition-colors">Home</Link>
            <span aria-hidden="true">·</span>
            <Link to="/articles" className="hover:text-[#e8d5b0] transition-colors">Articles</Link>
          </nav>

          <h1 className="font-display text-3xl sm:text-5xl font-light text-[#f8f1e3] mb-5 leading-tight">
            {title}
          </h1>
          <GoldRule className="mb-5" />
        </div>
      </HeroParallax>

      {/* ── Article body ──────────────────────────────────────────────────────── */}
      <article
        className="py-16 px-4 bg-white"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content={title} />

        <div className="max-w-3xl mx-auto">

          {/* Lead paragraph */}
          <p className="text-lg text-[#4a3a26] leading-relaxed mb-10 font-light border-l-2 border-[#c9a96e] pl-5">
            {intro}
          </p>

          {/* Content sections */}
          {sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}

          {/* Internal site navigation links */}
          {siteLinks?.length > 0 && (
            <aside className="mt-10 border border-[#e8d5b0] rounded-sm p-6 bg-white" aria-label="Explore further on this site">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c9a96e]" aria-hidden="true" />
                <h2 className="font-display text-base font-medium text-[#2a1e12] tracking-wide">Explore Further</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-xs font-semibold text-[#c9a96e] hover:text-[#b8963e] border border-[#e8d5b0] hover:border-[#c9a96e] px-3 py-1.5 rounded-sm transition-colors tracking-wide uppercase"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </aside>
          )}

          {/* Key takeaways */}
          {keyPoints?.length > 0 && (
            <aside className="mt-8 bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-8" aria-label="Key takeaways">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#c9a96e]" aria-hidden="true" />
                <h2 className="font-display text-lg font-medium text-[#2a1e12]">Key Takeaways</h2>
              </div>
              <ul className="space-y-3">
                {keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4a3a26] leading-relaxed">
                    <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">◦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Image credit */}
          {imageCredit && (
            <p className="mt-8 text-xs text-[#a89a80] leading-relaxed">
              Image credit: {imageCredit}
            </p>
          )}
        </div>
      </article>

      {/* ── Related articles ─────────────────────────────────────────────────────
           No fade-section: thumbnail images must not be hidden by opacity inheritance.
           The section appears immediately; hover states are handled at the card level. */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-[#faf6ef]" aria-label="Related articles">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-[#c9a96e]" aria-hidden="true" />
              <h2 className="font-display text-2xl font-light text-[#2a1e12]">Continue Reading</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedArticles.map(a => (
                <Link
                  key={a.slug}
                  to={`/articles/${a.slug}`}
                  className="bg-white border border-[#e8d5b0] rounded-sm overflow-hidden group hover:border-[#c9a96e] transition-colors block"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: a.imagePosition || 'center center' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-medium text-[#2a1e12] leading-snug group-hover:text-[#c9a96e] transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-light text-[#f8f1e3] mb-4">Take the Next Step</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            Reading opens the door. The living teaching unfolds in practice, in community, and in the inner work of day-to-day life. We meet weekly in Hobart, Eastern Shore, and Launceston. All are welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Our Courses
            </Link>
            <Link
              to="/contact"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Section({ section }) {
  const { heading, paragraphs, quote, list } = section
  return (
    <section className="mb-12">
      <h2 className="font-display text-2xl font-light text-[#2a1e12] mb-5 pb-3 border-b border-[#e8d5b0]">
        {heading}
      </h2>

      {paragraphs.map((para, i) => (
        <p key={i} className="text-[#4a3a26] leading-relaxed mb-4 text-base">
          {para}
        </p>
      ))}

      {list && (
        <ul className="space-y-2 my-5 pl-2">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#4a3a26] leading-relaxed">
              <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">◦</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {quote && (
        <blockquote className="my-8 border-l-4 border-[#c9a96e] pl-6 py-1">
          <p className="font-display text-xl font-light text-[#2a1e12] italic leading-relaxed mb-2">
            "{quote.text}"
          </p>
          <cite className="text-xs text-[#c9a96e] not-italic font-semibold tracking-wide">
            {quote.author}
          </cite>
        </blockquote>
      )}
    </section>
  )
}
