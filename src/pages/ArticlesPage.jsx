import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { ARTICLES } from '../data/articles.js'
import heroSchoolAthensImg from '../assets/hero_school_athens.jpg?format=webp'

export default function ArticlesPage() {
  usePageMeta(
    'Gnostic Articles & Teachings | Gnosis Tasmania',
    'Explore our library of Gnostic articles covering inner awakening, meditation, self-observation, the ego, astral exploration, and more. Based on the teachings of Samael Aun Weor.',
    '/articles'
  )

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroSchoolAthensImg}
        alt="Raphael's School of Athens, depicting the great thinkers of antiquity gathered in open philosophical exchange"
        heightClass="h-[55vh] min-h-[380px]"
        position="center center"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Teachings · Practices · Wisdom</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Articles
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A growing library of articles on Gnostic wisdom: practical, accessible, and grounded in the living tradition.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-[#4a3a26] text-lg leading-relaxed">
            The following articles are drawn from the Gnostic teachings of Samael Aun Weor and the perennial wisdom tradition, written for sincere aspirants at every stage of the path. Whether you are entirely new to Gnosis or deepening an existing practice, you are welcome here.
          </p>
          {/* Lead qualifier: signals that the path involves real inner work */}
          <p className="text-[#6b5535] text-base leading-relaxed">
            The Gnostic path is a demanding one. These articles are written for those who come with a genuine desire to understand and apply the teachings in their own lives, not merely to read about them. Sustained inner work, honest self-observation, and consistent practice over time are what the path asks of those who would take it seriously.
          </p>
        </div>
      </section>

      {/* ── Article Grid ─────────────────────────────────────────────────────────
           No fade-section: images inside sections inherit opacity 0→1 from the
           parent transition, making thumbnails appear to load slowly. Image grids
           should be immediately visible; text-only sections below keep fade-section. */}
      <section className="py-16 px-4 bg-[#faf6ef]" aria-label="Article list">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Study in Community</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            Reading is a beginning. The deeper teaching unfolds in practice, in meditation, and in the company of fellow aspirants. Join us in Hobart, Eastern Shore, or Launceston.
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

function ArticleCard({ article }) {
  const { slug, title, excerpt, image, imageAlt, imagePosition, date, readTime } = article

  const formattedDate = new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <article className="bg-white border border-[#e8d5b0] rounded-sm overflow-hidden flex flex-col group hover:border-[#c9a96e] transition-colors">
      {/* Thumbnail */}
      <Link to={`/articles/${slug}`} className="block overflow-hidden h-44 shrink-0" tabIndex={-1} aria-hidden="true">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition || 'center center' }}
          loading="lazy"
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <time dateTime={date} className="text-[10px] text-[#a89a80] font-medium uppercase tracking-wider">
            {formattedDate}
          </time>
          <span className="text-[#e8d5b0]" aria-hidden="true">·</span>
          <span className="text-[10px] text-[#a89a80] font-medium uppercase tracking-wider">{readTime}</span>
        </div>

        <h2 className="font-display text-lg font-medium text-[#2a1e12] leading-snug mb-3 group-hover:text-[#c9a96e] transition-colors">
          <Link to={`/articles/${slug}`}>{title}</Link>
        </h2>

        <p className="text-sm text-[#4a3a26] leading-relaxed flex-1 mb-4">{excerpt}</p>

        <Link
          to={`/articles/${slug}`}
          className="text-xs font-semibold text-[#c9a96e] hover:text-[#b8963e] transition-colors tracking-wide uppercase mt-auto"
          aria-label={`Read article: ${title}`}
        >
          Read Article →
        </Link>
      </div>
    </article>
  )
}
