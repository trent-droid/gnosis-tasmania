import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, SectionHeading, Blockquote } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import artFluddNaturaImg  from '../assets/art_fludd_natura.jpg?format=webp'
import heroMysticLambImg  from '../assets/hero_mystic_lamb.jpg?format=webp'

const SAMAEL_BOOKS = [
  {
    title: 'The Perfect Matrimony',
    subtitle: 'Samael Aun Weor',
    description: 'A profound study of the sacred relationship between man and woman as the vehicle for spiritual transformation and alchemical transmutation. One of the most important Gnostic texts of the 20th century.',
  },
  {
    title: 'Fundamental Notions of Endocrinology and Criminology',
    subtitle: 'Samael Aun Weor',
    description: 'A unique integration of Western medical science with esoteric physiology, exploring the relationship between the endocrine glands, consciousness, and the vital forces of the human organism.',
  },
  {
    title: 'The Gnostic Bible: The Pistis Sophia Unveiled',
    subtitle: 'Samael Aun Weor',
    description: 'A verse-by-verse commentary on the Pistis Sophia, one of the most important early Gnostic texts, revealing the deeper esoteric meaning hidden within this ancient dialogue between Jesus and his disciples.',
  },
  {
    title: 'The Revolution of the Dialectic',
    subtitle: 'Samael Aun Weor',
    description: 'A comprehensive treatment of the psychology of self-transformation: the nature of the ego, the methods of its dissolution, and the emergence of the Being through conscious inner work.',
  },
  {
    title: 'The Three Mountains',
    subtitle: 'Samael Aun Weor',
    description: 'Samael Aun Weor\'s autobiographical account of his own initiatic path, a vivid description of the inner experiences, trials, and realisations of the path of liberation as he lived it.',
  },
  {
    title: 'The Esoteric Treatise of Hermetic Astrology',
    subtitle: 'Samael Aun Weor',
    description: 'A comprehensive study of astrology from an esoteric perspective, not as a system of prediction, but as a map of cosmic forces and their influence on the soul\'s path through successive lives.',
  },
]

const CLASSIC_TEXTS = [
  {
    title: 'The Gospel of Thomas',
    subtitle: 'Nag Hammadi Library, c. 50-140 CE',
    description: 'The collection of 114 sayings attributed to Jesus, discovered at Nag Hammadi in 1945. "The Kingdom is inside you and outside you." An essential Gnostic text, entirely free of narrative and doctrine; pure teaching.',
  },
  {
    title: 'The Corpus Hermeticum',
    subtitle: 'Attributed to Hermes Trismegistus, c. 100-300 CE',
    description: 'The foundational texts of the Western Hermetic tradition, dialogues between Hermes Trismegistus and his disciples on the nature of God, the cosmos, and the soul. "As above, so below." Available in many modern translations.',
  },
  {
    title: 'The Emerald Tablet',
    subtitle: 'Attributed to Hermes Trismegistus',
    description: 'Perhaps the single most influential document in the history of Western esotericism: thirteen cryptic verses that encode the fundamental law of correspondence and the entire science of inner alchemy in symbolic language.',
  },
  {
    title: 'The Zohar',
    subtitle: 'Moses de León, c. 1280 CE',
    description: 'The masterwork of the Kabbalistic tradition, a vast mystical commentary on the Torah that maps the structure of divine creation and the soul\'s relationship to God through the ten Sephiroth of the Tree of Life.',
  },
  {
    title: 'The Pistis Sophia',
    subtitle: 'Anonymous, c. 3rd-4th century CE',
    description: 'An extended Gnostic text recording dialogues between the risen Christ and his disciples, including Mary Magdalene, on the nature of the divine world, the soul, and the path of liberation. One of the most important surviving Gnostic scriptures.',
  },
  {
    title: 'The Cloud of Unknowing',
    subtitle: 'Anonymous, c. 1375 CE',
    description: 'A masterpiece of Christian mysticism, offering instructions from an unknown English contemplative to a young student on the practice of contemplative prayer and the direct experience of divine union.',
  },
]

const MODERN_BOOKS = [
  {
    title: 'The Secret Doctrine',
    subtitle: 'Helena P. Blavatsky (1888)',
    description: 'Blavatsky\'s monumental synthesis of Eastern and Western esotericism, two volumes covering the evolution of the cosmos and the evolution of humanity from an occult perspective. The primary modern transmission of the ancient wisdom.',
  },
  {
    title: 'In Search of the Miraculous',
    subtitle: 'P.D. Ouspensky (1949)',
    description: 'The most accessible account of Gurdjieff\'s teaching, Ouspensky\'s record of his years of study with Gurdjieff, presenting the Fourth Way system in clear, precise language. An essential modern text.',
  },
  {
    title: 'The Perennial Philosophy',
    subtitle: 'Aldous Huxley (1945)',
    description: 'A landmark anthology and commentary demonstrating the shared core of mystical wisdom across all traditions: "the metaphysic that recognises a divine Reality substantial to the world of things and lives and minds."',
  },
  {
    title: 'The Gospel of Philip',
    subtitle: 'Nag Hammadi Library (transl. various)',
    description: 'One of the most poetic and profound of the Nag Hammadi texts, a series of reflections on sacrament, light, and the nature of the bridal chamber as the highest mystery of the Gnostic tradition.',
  },
]

const ONLINE_RESOURCES = [
  {
    label: 'Gnosis Australia',
    href: 'https://gnosisaustralia.org.au',
    description: 'The Australian Gnostic Association - study groups, events, and resources across Australia, closely affiliated with our own work in Tasmania.',
  },
  {
    label: 'Sacred-Texts.com: Gnosis',
    href: 'https://www.sacred-texts.com/gno/',
    description: 'An online library of Gnostic and Hermetic texts, including primary sources such as the Nag Hammadi library, Hermetic texts, and early Gnostic writings.',
  },
]

export default function ResourcesPage() {
  const pageMeta = usePageMeta(
    'Gnostic Books & Resources | Gnosis Tasmania',
    'Recommended Gnostic books and resources: Samael Aun Weor, the Nag Hammadi Library, the Corpus Hermeticum, the Zohar, and more. For aspirants in Tasmania and worldwide.',
    '/resources'
  )

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      {pageMeta}
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroMysticLambImg}
        alt="Adoration of the Mystic Lamb by Jan van Eyck, a treasury of sacred art and wisdom"
        heightClass="h-[60vh] min-h-[400px]"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Books · Texts · Online Resources</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Resources
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A curated library of essential texts and resources for those who wish to explore Gnostic wisdom in greater depth.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4a3a26] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            The following resources have been carefully selected as reliable, high-quality introductions to the various aspects of Gnostic and Hermetic wisdom. No list can substitute for personal study and direct practice; but a good book at the right moment can illuminate the path ahead.
          </p>
          <p className="text-sm text-[#8a6f3f]">
            Many of these texts are available online. Where possible, we have indicated where they can be found.
          </p>
        </div>
      </section>

      {/* ── Samael Aun Weor ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Contemporary Gnosis"
            title="Works of Samael Aun Weor"
            subtitle="Samael Aun Weor's synthesis of the perennial wisdom spans more than seventy books. The following are recommended as starting points."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMAEL_BOOKS.map(({ title, subtitle, description }) => (
              <div key={title} className="bg-white border border-[#e8d5b0] rounded-sm p-6 flex flex-col">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-1 leading-snug">{title}</h3>
                <p className="text-xs text-[#c9a96e] font-medium mb-3">{subtitle}</p>
                <p className="text-sm text-[#4a3a26] leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fludd Parallax ────────────────────────────────────────────────────── */}
      <QuoteParallax
        src={artFluddNaturaImg}
        alt="Robert Fludd's diagram of Nature as the intermediary between God and creation"
        position="center top"
        quote="As above, so below; as within, so without."
        cite="Hermes Trismegistus, The Emerald Tablet"
      />

      {/* ── Classic Texts ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Primary Sources"
            title="Classic Gnostic & Hermetic Texts"
            subtitle="The foundational texts of the Gnostic and Hermetic traditions, many now available online."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSIC_TEXTS.map(({ title, subtitle, description }) => (
              <div key={title} className="bg-white border border-[#e8d5b0] rounded-sm p-6 flex flex-col">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-1 leading-snug">{title}</h3>
                <p className="text-xs text-[#c9a96e] font-medium mb-3">{subtitle}</p>
                <p className="text-sm text-[#4a3a26] leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Books ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Modern Scholarship"
            title="Recommended Modern Works"
            subtitle="Accessible modern books that illuminate the Gnostic and esoteric traditions for a contemporary reader."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {MODERN_BOOKS.map(({ title, subtitle, description }) => (
              <div key={title} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-6">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-1">{title}</h3>
                <p className="text-xs text-[#c9a96e] font-medium mb-3">{subtitle}</p>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Online Resources ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Online"
            title="Further Study Online"
            subtitle="High-quality online resources for the study of the Gnostic and esoteric traditions."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {ONLINE_RESOURCES.map(({ label, href, description }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#e8d5b0] rounded-sm p-6 group hover:border-[#c9a96e] transition-colors block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-[#c9a96e]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-medium text-[#2a1e12] group-hover:text-[#c9a96e] transition-colors">{label}</h3>
                  <span className="ml-auto text-[#c9a96e] text-sm" aria-hidden="true">↗</span>
                </div>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blockquote ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto">
          <Blockquote cite="Helena P. Blavatsky, The Secret Doctrine">
            "There is no Religion higher than Truth."
          </Blockquote>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Study in Community</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            Books are a wonderful beginning; but the Gnostic teaching is best studied in community, with guidance and the mutual support of fellow aspirants. Come and join us.
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
