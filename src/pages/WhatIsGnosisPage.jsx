import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, ParallaxCTA, QuoteParallax, GoldRule, SectionLabel, SectionHeading, ArtBanner, Blockquote, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import heroChristImg             from '../assets/hero_christ.jpg?format=webp'
import artVitruvianManImg        from '../assets/art_vitruvian_man.jpg'
import artVitruvianManImgWebp    from '../assets/art_vitruvian_man.jpg?format=webp'
import artVitruvianManImgSrcset  from '../assets/art_vitruvian_man.jpg?w=640;1280&format=webp&as=srcset'
import esotericCosmicRoseImg     from '../assets/esoteric_cosmic_rose.jpg?format=webp'
import samaelAunWeorImg          from '../assets/samael_aun_weor.jpg?format=webp'

const TRADITIONS = [
  {
    label: 'Ancient Egypt',
    body: 'The priests of Egypt preserved the mysteries of Ma\'at: cosmic law, truth, and harmony. The Book of the Dead and the Hermetic texts trace their lineage to this ancient wellspring of inner knowledge.',
  },
  {
    label: 'Greek Philosophy',
    body: '"Know Thyself" was inscribed at Delphi, the very maxim of Gnosis. Pythagoras, Socrates, Plato, and Plotinus each transmitted practical methods for the soul\'s ascent toward the divine.',
  },
  {
    label: 'Early Christianity',
    body: 'The Gospel of Thomas records Jesus teaching: "The Kingdom is inside you and outside you." The Pistis Sophia, the Gospel of Philip, and the Nag Hammadi texts preserve a living mystical tradition within Christianity.',
  },
  {
    label: 'Kabbalah & Hermeticism',
    body: 'The Jewish mystical tradition maps the structure of the cosmos through the Tree of Life. The Hermetic axiom "As above, so below" bridges the divine macrocosm and the human microcosm in a single teaching.',
  },
  {
    label: 'Eastern Wisdom',
    body: 'The Buddha\'s Eightfold Path, the Hindu concept of Self-realisation (Atman = Brahman), and the Sufi path of the heart each describe the same inner path through different cultural and symbolic languages.',
  },
  {
    label: 'Alchemy & Rosicrucianism',
    body: 'Medieval and Renaissance alchemists encoded the science of inner transformation in the symbolic language of gold, mercury, and sulphur. Their laboratories were the human soul; their gold, awakened consciousness.',
  },
]

const PILLARS = [
  {
    title: 'Science',
    body: 'Gnosis is verifiable through direct experience. Like any science, its principles can be tested, practised, and confirmed within your own inner life.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <circle cx="20" cy="20" r="18" strokeOpacity="0.4" />
        <circle cx="20" cy="20" r="11" strokeOpacity="0.7" />
        <circle cx="20" cy="20" r="4" fill="#c9a96e" stroke="none" />
        <line x1="20" y1="2" x2="20" y2="9" strokeOpacity="0.6" />
        <line x1="20" y1="31" x2="20" y2="38" strokeOpacity="0.6" />
        <line x1="2" y1="20" x2="9" y2="20" strokeOpacity="0.6" />
        <line x1="31" y1="20" x2="38" y2="20" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Philosophy',
    body: 'Gnostic philosophy provides a coherent map of the cosmos, the human being, and the purpose of existence, a framework within which inner experience becomes intelligible.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 32 Q8 10 20 8 Q32 10 32 32" strokeOpacity="0.5" />
        <path d="M12 32 Q12 14 20 12 Q28 14 28 32" strokeOpacity="0.7" />
        <line x1="8" y1="32" x2="32" y2="32" />
        <line x1="6" y1="36" x2="34" y2="36" strokeOpacity="0.5" />
        <line x1="20" y1="8" x2="20" y2="4" strokeLinecap="round" />
        <circle cx="20" cy="3" r="1.5" fill="#c9a96e" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Art',
    body: 'The great sacred artworks of every civilisation are vehicles of esoteric transmission, communicating truths too subtle for words alone, awakening dormant faculties of perception.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <polygon points="20,4 23.5,14.5 35,14.5 25.5,21 29,31.5 20,25 11,31.5 14.5,21 5,14.5 16.5,14.5" strokeOpacity="0.5" />
        <polygon points="20,9 22.5,16.5 31,16.5 24.5,21.5 27,29 20,24.5 13,29 15.5,21.5 9,16.5 17.5,16.5" fill="#c9a96e" fillOpacity="0.15" strokeOpacity="0.8" />
      </svg>
    ),
  },
  {
    title: 'Mysticism',
    body: 'At the heart of every genuine religion lies a mystical core: a direct, living contact with the sacred. Gnosis is this living heart, the perennial wisdom common to all authentic traditions.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="20" cy="20" rx="18" ry="9" strokeOpacity="0.5" />
        <ellipse cx="20" cy="20" rx="9" ry="18" strokeOpacity="0.5" />
        <circle cx="20" cy="20" r="5" strokeOpacity="0.8" />
        <circle cx="20" cy="20" r="2" fill="#c9a96e" stroke="none" />
      </svg>
    ),
  },
]

const BASE = 'https://gnosistasmania.com.au'

export default function WhatIsGnosisPage() {
  usePageMeta(
    'What is Gnosis? | Gnosis Tasmania',
    'What is Gnosis? Direct, experiential self-knowledge — the universal wisdom at the heart of every tradition. Practical classes in Hobart and Launceston, Tasmania.',
    '/what-is-gnosis'
  )

  // @graph bundles multiple schemas into one <script> tag.
  // FAQPage enables Google FAQ rich results for high-value queries.
  // Person schema for Samael Aun Weor strengthens E-E-A-T and topic authority.
  useJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        'url': `${BASE}/what-is-gnosis`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is Gnosis?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Gnosis (from the Greek γνῶσις) is direct, experiential knowledge of oneself and of truth — not belief or dogma, but lived inner experience. It is the universal thread running through every authentic spiritual tradition, from ancient Egypt and Greece to the teachings of Buddha, Jesus, and the perennial wisdom masters.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is Gnosis a religion?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Gnosis is not a religion, nor is it opposed to any religion. It is the esoteric heart — the living mystical core — at the centre of every authentic spiritual tradition. Gnostic students may come from any religious background or none. No belief is required, only sincerity and a genuine desire for self-knowledge.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What are the Four Pillars of Gnosis?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The four pillars of Gnosis are: Science (verifiable through direct inner experience), Philosophy (a coherent map of the cosmos and human being), Art (sacred works as vehicles of esoteric transmission), and Mysticism (direct living contact with the sacred at the heart of every authentic tradition).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Who is Samael Aun Weor?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Samael Aun Weor (1917–1977) was a Colombian-born author and teacher who produced more than seventy books synthesising Gnostic, Hermetic, Kabbalistic, Buddhist, and Hindu esoteric traditions into a single comprehensive practical system. His teachings are the foundation of the contemporary Gnostic movement worldwide, including in Australia.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What are the Gnostic classes offered in Tasmania?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Gnosis Tasmania offers weekly Gnostic classes in Hobart and Launceston. Classes cover meditation, self-knowledge, the Three Factors of the Revolution of Consciousness, Kabbalah, dream yoga, and inner alchemy. All classes are donation-based and open to everyone — no prior experience required.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What are the Three Factors of the Revolution of Consciousness?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The Three Factors of the Revolution of Consciousness are: (1) Psychological Death — the dissolution of the ego through self-observation and inner work; (2) Second Birth — the emergence of the soul as the false self is dissolved; and (3) Sacrifice for Humanity — living in compassionate service to others. These three factors are the foundation of the Gnostic path as taught by Samael Aun Weor.',
            },
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': `${BASE}/#samael-aun-weor`,
        'name': 'Samael Aun Weor',
        'birthName': 'Victor Manuel Gomez Rodriguez',
        'birthDate': '1917-03-06',
        'deathDate': '1977-12-24',
        'birthPlace': { '@type': 'Place', 'name': 'Bogotá, Colombia' },
        'nationality': 'Colombian',
        'description': 'Samael Aun Weor (1917–1977) was a Colombian author and teacher who synthesised Gnostic, esoteric, and perennial wisdom traditions into a comprehensive practical system. He wrote more than seventy books on Gnosis, Kabbalah, alchemy, dream yoga, and meditation, founding the worldwide contemporary Gnostic movement.',
        'url': `${BASE}/what-is-gnosis`,
        'sameAs': ['https://en.wikipedia.org/wiki/Samael_Aun_Weor'],
        'knowsAbout': [
          'Gnosis', 'Kabbalah', 'Alchemy', 'Meditation', 'Dream Yoga',
          'Hermeticism', 'Esoteric Philosophy', 'Three Factors of the Revolution of Consciousness',
        ],
      },
    ],
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroChristImg}
        alt="Christ as the light of the world - the divine wisdom at the heart of the Gnostic teaching"
        overlay="bg-gradient-to-b from-[#1c1409]/70 via-[#1c1409]/50 to-[#1c1409]/80"
        heightClass="h-[70vh] min-h-[480px]"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Ancient Wisdom · Living Practice</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#f8f1e3] mb-6 leading-tight">
            What is Gnosis?
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Direct knowledge of the soul: the universal wisdom preserved in every great tradition, available to every sincere seeker.
          </p>
        </div>
      </HeroParallax>

      {/* ── Definition ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>The Meaning</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                Knowledge That Transforms
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                The word <em>Gnosis</em> comes from the ancient Greek γνῶσις, meaning knowledge. But it is not the knowledge of books or beliefs. It is <strong>direct, experiential knowledge</strong> of our own inner nature and of the divine reality that underlies all existence.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                This is not something that can be merely believed or inherited. It must be lived, practised, and verified through personal experience. As the Delphic Oracle proclaimed: <em>Know Thyself.</em> This ancient injunction is the foundation of the Gnostic path.
              </p>
              <p className="text-[#4a3a26] leading-relaxed">
                Gnosis is not a religion, nor is it opposed to any religion. It is the esoteric heart, the living mystical core, at the centre of every authentic spiritual tradition across human history, from ancient Egypt and Greece to the teachings of Buddha, Jesus, and the great sages of every era.
              </p>
            </div>
            <div className="space-y-6">
              <Blockquote cite="Gospel of Thomas, Saying 3">
                "The Kingdom of Heaven is inside you and outside you. When you know yourself, then you will be known."
              </Blockquote>
              <Blockquote cite="Hermes Trismegistus, Corpus Hermeticum">
                "The greatest evil of the soul is ignorance. A soul that has not known its nature has neither beauty, goodness, nor divinity."
              </Blockquote>
              <Blockquote cite="Socrates, as recorded by Plato">
                "The unexamined life is not worth living."
              </Blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="The Four Pillars"
            title="A Complete System of Knowledge"
            subtitle="Gnosis integrates four dimensions of human understanding into a single, unified path."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-sm border border-[#e8d5b0] p-6 text-center flex flex-col items-center">
                <div className="mb-4">{icon}</div>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-3">{title}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Banner ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-px bg-[#c9a96e] mx-auto mb-8" aria-hidden="true" />
          <blockquote>
            <p className="font-display text-2xl sm:text-3xl font-light text-[#2a1e12] italic leading-relaxed mb-6">
              "You will know the truth, and the truth will set you free."
            </p>
            <cite className="text-sm text-[#c9a96e] not-italic font-medium tracking-wide">
              - Gospel of John 8:32
            </cite>
          </blockquote>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto mt-8" aria-hidden="true" />
        </div>
      </section>

      {/* ── Universal Traditions ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Universal Wisdom"
            title="One Truth, Many Expressions"
            subtitle="Every great civilisation has preserved the Gnostic flame in its own language and symbols. The teaching is one; only the costume changes."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRADITIONS.map(({ label, body }) => (
              <div key={label} className="bg-white rounded-sm border border-[#e8d5b0] p-6">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{label}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Gnosis offers ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>What Gnosis Offers</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                A Practical Path of Inner Transformation
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                Unlike purely theoretical philosophy, Gnosis provides concrete methods for inner change. It is a <em>practical</em> path, one that can be walked in the midst of ordinary daily life, without needing to retreat from the world.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Develop genuine self-knowledge through conscious self-observation',
                  'Understand the deeper causes of suffering and how to dissolve them',
                  'Cultivate concentration, mindfulness, and deep states of meditation',
                  'Explore the nature of dreams and develop lucid awareness',
                  'Discover the esoteric meaning of sacred symbols and scriptures',
                  'Connect with a living community of sincere seekers',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4a3a26]">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/practices"
                className="inline-block bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold text-sm px-6 py-3 rounded-sm transition-colors tracking-wide"
              >
                Explore the Practices
              </Link>
            </div>
            <div>
              <ArtBanner
                src={artVitruvianManImg}
                srcWebp={artVitruvianManImgWebp}
                srcsetWebp={artVitruvianManImgSrcset}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Vitruvian Man by Leonardo da Vinci - human proportions inscribed in circle and square"
                caption="Vitruvian Man, Leonardo da Vinci (c. 1490). The correspondence of the human microcosm with the divine macrocosm, a central teaching of Gnosis. Public domain."
                objectPosition="center top"
                heightClass="h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Samael Aun Weor ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>The Modern Synthesis</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                Samael Aun Weor
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                Born Victor Manuel Gomez Rodriguez in Bogota, Colombia in 1917, Samael Aun Weor dedicated his life to the study, practice, and transmission of Gnostic wisdom. Over the course of his life he produced more than seventy books, a body of work widely regarded as one of the most comprehensive modern syntheses of the perennial wisdom tradition.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                Drawing on the Egyptian, Greek, Jewish, Christian, Hindu, Buddhist, and Islamic esoteric traditions, as well as the inner alchemical teaching of the medieval masters, Samael Aun Weor presented the ancient wisdom in a language accessible to the modern seeker. His teaching is neither theoretical nor speculative; it is grounded in verified inner experience and practical application.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                Central to his teaching is the conviction that genuine self-knowledge, the foundation of all authentic spirituality, requires both deep inner honesty and concrete practical work. He taught that the awakening of consciousness is not a distant mystical ideal, but something that can be approached through disciplined daily practice.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-8">
                Samael Aun Weor passed away in Mexico City in 1977. His writings have since been translated into many languages and have inspired Gnostic study groups across every continent. The teachings offered at Gnosis Tasmania are given in this tradition.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-[#e8d5b0] rounded-sm overflow-hidden shadow-lg">
                <div
                  className="h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url(${samaelAunWeorImg})` }}
                  aria-label="Samael Aun Weor"
                  role="img"
                />
                <div className="p-5 bg-[#f8f1e3] border-t border-[#e8d5b0]">
                  <p className="text-xs text-[#6b5535] italic leading-relaxed">
                    Samael Aun Weor (1917-1977). His synthesis of the perennial wisdom traditions is the foundation of the contemporary Gnostic movement as taught worldwide today.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e8d5b0] rounded-sm p-5">
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">Key Works</h3>
                <ul className="space-y-2">
                  {[
                    'The Perfect Matrimony',
                    'The Gnostic Bible: The Pistis Sophia Unveiled',
                    'The Revolution of the Dialectic',
                    'The Three Mountains',
                    'Fundamental Notions of Endocrinology and Criminology',
                  ].map(book => (
                    <li key={book} className="flex items-start gap-2 text-sm text-[#4a3a26]">
                      <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">◦</span>
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
              <Blockquote cite="Samael Aun Weor">
                "Gnosis is lived upon facts, withers away in abstractions, and is difficult to find even in the noblest of thoughts."
              </Blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <ParallaxCTA
        src={esotericCosmicRoseImg}
        alt="The cosmic rose - the flowering of consciousness, a universal symbol of spiritual transformation"
        overlay="bg-[#1c1409]/45"
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Begin the Path</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-6">
            Ready to Explore Gnosis?
          </h2>
          <p className="text-[#c8b89a] text-lg leading-relaxed mb-8">
            No prior background required. Simply bring sincerity and a genuine desire to know yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Courses & Classes
            </Link>
            <Link
              to="/contact"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </ParallaxCTA>

      <Footer />
    </div>
  )
}
