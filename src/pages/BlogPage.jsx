import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, ArtBanner, Blockquote } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'

import heroCreationImg         from '../assets/hero_creation_adam.jpg'
import heroCreationImgWebp     from '../assets/hero_creation_adam.jpg?format=webp'
import heroZenImg              from '../assets/hero_zen.jpg'
import heroZenImgWebp          from '../assets/hero_zen.jpg?format=webp'
import heroSchoolAthensImg     from '../assets/hero_school_athens.jpg'
import heroSchoolAthensImgWebp from '../assets/hero_school_athens.jpg?format=webp'
import artBlakeJacobsImg       from '../assets/art_blake_jacobs_ladder.jpg?format=webp'
import artKhunrathImg          from '../assets/art_khunrath_rebis.jpg'
import artKhunrathImgWebp      from '../assets/art_khunrath_rebis.jpg?format=webp'
import artCranachImg           from '../assets/art_cranach_garden_eden.jpg?format=webp'

const BASE = 'https://gnosistasmania.com.au'

const ARTICLES = [
  {
    id: 'self-observation',
    date: 'March 2025',
    dateISO: '2025-03-01',
    label: 'Practice',
    title: 'Daily Self-Observation: A Practical Guide',
    excerpt: 'The most fundamental practice of the Gnostic path is also its most accessible. Self-observation requires no special equipment, no particular place, and no prior training, only a willingness to look honestly at what is actually happening within.',
    img: { src: heroCreationImg, srcWebp: heroCreationImgWebp, alt: 'Creation of Adam by Michelangelo', pos: 'center top' },
    content: [
      {
        heading: 'What Self-Observation Actually Means',
        body: 'Self-observation is frequently misunderstood. It is not analysis, not judgement, not narrative commentary on our inner life. It is simply the act of being present to what is actually happening within us, in this moment, right now.',
      },
      {
        heading: 'Divided Attention',
        body: 'The key to genuine self-observation is what the tradition calls "divided attention": being simultaneously aware of what is happening around us and of what is happening within. Ordinary consciousness is almost entirely extroverted, absorbed in external circumstances. Divided attention begins to reverse this, creating a genuine interior witness.',
      },
      {
        heading: 'Starting Simply',
        body: 'Begin with something concrete: your hands. As you go about your next activity, notice where your hands are, how they feel, what tension they hold. This is not complicated; it is the beginning of genuine self-observation. From here, the practice naturally extends to posture, breath, the emotional tone of the moment, and eventually to the subtler movements of thought and desire.',
      },
      {
        heading: 'The Most Important Moment',
        body: 'The most valuable moment for self-observation is immediately before and after an emotional reaction. When anger, fear, irritation, or desire arises, the temptation is to be completely absorbed in the experience, carried away by the wave. The practice is to observe the wave from the shore. Not to suppress it; not to indulge it. Simply to see it, clearly and impartially, as something that is happening in us rather than something we are.',
      },
      {
        heading: 'Making It a Daily Practice',
        body: 'Self-observation is most powerful when it becomes continuous, a background awareness that runs beneath our ordinary activities rather than a special exercise set apart from daily life. Set small reminders throughout your day, a bell on your phone, a coloured dot on your desk, to bring you back to the practice whenever you have drifted into mechanical absorption.',
      },
    ],
  },
  {
    id: 'meditation',
    date: 'February 2025',
    dateISO: '2025-02-01',
    label: 'Meditation',
    title: 'Meditation for Busy Lives',
    excerpt: 'One of the most common objections to beginning a meditation practice is time. "I don\'t have time to meditate" is a statement that, on examination, usually reveals itself as a statement about priorities rather than hours.',
    img: { src: heroZenImg, srcWebp: heroZenImgWebp, alt: 'A place of stillness and peace for meditation', pos: 'center center' },
    content: [
      {
        heading: 'The Time Objection',
        body: 'The tradition is clear: even ten minutes of genuine, focused meditation is worth more than an hour of unfocused sitting. The issue is never the quantity of time but the quality of attention. And the capacity for quality attention grows, over time, with practice.',
      },
      {
        heading: 'Start with Five Minutes',
        body: 'If you genuinely cannot find thirty minutes, find five. Five minutes of genuine presence, of sincere effort to still the inner noise and rest in simple awareness, is a beginning. The consistent practitioner who sits every morning for five minutes will, over months, develop a depth of inner quiet that many who sit for an hour without structure never achieve.',
      },
      {
        heading: 'The Moments Between',
        body: 'Beyond formal sitting, the Gnostic tradition places great emphasis on the inner work that happens between periods of meditation, in the car, in the queue, between meetings. Every moment of genuine self-recollection, of returning from mechanical absorption to present awareness, is a meditation. Cultivate these moments as carefully as any formal practice.',
      },
      {
        heading: 'The Body as Anchor',
        body: 'When the mind is active and the day is full, the body is the most reliable anchor for present-moment awareness. The feeling of the feet on the floor, the weight of the hands in the lap, the movement of breath: these are always available, always present, and always accessible, no matter how busy life becomes. Learn to use them.',
      },
      {
        heading: 'Evening Retrospection',
        body: 'Perhaps the most powerful and time-efficient practice for the busy person is the evening retrospection, reviewing the events of the day in reverse order, from the present moment back to the morning, impartially and without narrative, simply observing what occurred. Five to ten minutes of this practice before sleep is both a powerful form of self-knowledge and an effective preparation for conscious inner-world work during the night.',
      },
    ],
  },
  {
    id: 'universal-gnosis',
    date: 'January 2025',
    dateISO: '2025-01-01',
    label: 'Wisdom Traditions',
    title: 'Universal Gnosis: Wisdom Across the Traditions',
    excerpt: 'One of the most striking features of the Gnostic tradition is its insistence that the wisdom it transmits is not the property of any single culture, religion, or historical period, but is universal, perennial, and hidden within the heart of every authentic spiritual tradition.',
    img: { src: heroSchoolAthensImg, srcWebp: heroSchoolAthensImgWebp, alt: 'School of Athens by Raphael, philosophers of many traditions gathered in dialogue', pos: 'center 30%' },
    content: [
      {
        heading: 'The One in Many',
        body: 'Consider the following: the Egyptian Ma\'at, the Greek Logos, the Hindu Dharma, the Buddhist Dhamma, the Kabbalistic Torah, and the Chinese Tao are all names for the same underlying principle, cosmic law, the order and harmony that underlies all of creation. This is not coincidence. It is evidence of a shared perception of the same reality, expressed in the cultural and symbolic vocabulary of each civilisation.',
      },
      {
        heading: 'The Inner Path',
        body: 'Every major tradition preserves, within its exoteric religious forms, an inner path of direct experience, a mystical core accessible to those who seek it sincerely. Christian mysticism, Sufi mysticism, Jewish Kabbalah, Hindu Vedanta, Buddhist meditation: each describes the same inner path in its own language, the dissolution of the false self, the discovery of the Being, and the union of the individual soul with the divine source.',
      },
      {
        heading: 'The Great Figures',
        body: 'Hermes Trismegistus, Moses, Pythagoras, Socrates, the Buddha, Jesus, Rumi, Jacob Boehme, Paracelsus, Blavatsky, Gurdjieff, Samael Aun Weor: each of these figures was, in some sense, transmitting the same living flame. The outer forms differed enormously; the inner content was one. This is the meaning of the Philosophia Perennis, the Perennial Philosophy: one truth, many expressions.',
      },
      {
        heading: 'Gnosis as Synthesis',
        body: 'The contemporary Gnostic teaching synthesises these streams, not by flattening their differences, but by revealing the common depth beneath their diversity. The Tree of Life is recognisably related to the Buddhist description of the planes of existence; the Hermetic "as above, so below" resonates in the Hindu correspondence of Atman and Brahman; the Christian resurrection is understood as an inner alchemical process that every human being must undergo.',
      },
      {
        heading: 'Practical Universality',
        body: 'This universality has a practical consequence: the practices of the Gnostic path can be enriched by immersion in any authentic tradition. A practitioner who is also a sincere Christian, Buddhist, or practitioner of Kabbalah is not in conflict with the Gnostic teaching; they are drinking from the same source. The Gnostic tradition is, ultimately, the tradition of universal human wisdom.',
      },
    ],
  },
  {
    id: 'three-factors',
    date: 'December 2024',
    dateISO: '2024-12-01',
    label: 'Core Teachings',
    title: 'Understanding the Three Factors',
    excerpt: 'The "Three Factors of the Revolution of Consciousness" is perhaps the most central teaching in the contemporary Gnostic tradition, a synthesis of what every authentic path has understood to be the essential movement of genuine spiritual development.',
    img: { src: artKhunrathImg, srcWebp: artKhunrathImgWebp, alt: 'Heinrich Khunrath alchemical diagram, the oratory and laboratory', pos: 'center center' },
    content: [
      {
        heading: 'Why Three?',
        body: 'The number three is fundamental to all esoteric teaching. The Christian Trinity: Father, Son, Holy Spirit. The Hindu Trimurti: Brahma, Vishnu, Shiva. The alchemical triad: Sulphur, Mercury, Salt. The Kabbalistic three pillars of the Tree of Life. Three is the number of dynamic, creative manifestation, the resolution of polarity into a new, higher unity.',
      },
      {
        heading: 'Death: The Dissolution of the Ego',
        body: 'The first factor is the "death" of the ego, the gradual dissolution of the psychological conditionings, fears, desires, and reactive patterns that constitute the false self. This is not a metaphor. The Gnostic tradition teaches specific, practical methods for working directly with these psychological elements, observing them without identification, understanding them without justification, and working with the inner forces that can genuinely dissolve them.',
      },
      {
        heading: 'Birth: The Emergence of the Soul',
        body: 'The second factor is the "birth" of the inner being, what the traditions variously call the Soul, the Higher Self, the Christ within, Buddha nature, or the Atman. As the ego dissolves, what was always there beneath it, the genuine, unconditioned consciousness, gradually comes to light. This is not the creation of something new but the recovery of what was always real.',
      },
      {
        heading: 'Sacrifice: Service to Others',
        body: 'The third factor is sacrifice, the conscious giving of oneself in service to others. This is the antidote to spiritual materialism: the tendency to use the spiritual path for personal gain, comfort, or status. The Bodhisattva vow of Mahayana Buddhism, the Christian command to love one\'s neighbour as oneself, the Gnostic ideal of the apostle; these all express the same understanding: that the inner light that has been kindled cannot be hoarded; it must be shared.',
      },
      {
        heading: 'The Three Together',
        body: 'The three factors are not sequential stages but three simultaneous and inseparable dimensions of genuine spiritual development. We cannot wait until the ego is dissolved before beginning to serve. We cannot serve others effectively without working on ourselves. We cannot truly work on ourselves without some orientation toward service. The three are a single movement, a single path, a single life, lived fully and consciously in every dimension.',
      },
    ],
  },
]

export default function BlogPage() {
  usePageMeta(
    'Gnostic Teaching Articles: Meditation, Self-Knowledge & Inner Wisdom | Gnosis Tasmania',
    'Practical articles on Gnostic meditation, self-observation, the Three Factors of the Revolution of Consciousness, and the universal wisdom traditions. Written for sincere seekers in Tasmania and worldwide.',
    '/blog'
  )

  // BlogPosting collection schema — improves Google search appearance for each article
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Gnosis Tasmania Blog: Gnostic Teaching Articles',
    'description': 'Practical articles on Gnostic meditation, self-observation, and the universal wisdom traditions.',
    'url': `${BASE}/blog`,
    'inLanguage': 'en-AU',
    'publisher': {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      'name': 'Gnosis Tasmania',
      'url': BASE,
      'logo': {
        '@type': 'ImageObject',
        'url': `${BASE}/favicon-512x512.png`,
      },
    },
    'hasPart': ARTICLES.map(a => ({
      '@type': 'BlogPosting',
      'headline': a.title,
      'description': a.excerpt,
      'datePublished': a.dateISO,
      'dateModified': a.dateISO,
      'url': `${BASE}/blog#${a.id}`,
      'mainEntityOfPage': `${BASE}/blog#${a.id}`,
      'inLanguage': 'en-AU',
      'articleSection': a.label,
      'keywords': `Gnosis, ${a.label}, Samael Aun Weor, meditation Tasmania, self-knowledge`,
      'author': {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        'name': 'Gnosis Tasmania',
        'url': BASE,
      },
      'publisher': {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        'name': 'Gnosis Tasmania',
        'url': BASE,
        'logo': {
          '@type': 'ImageObject',
          'url': `${BASE}/favicon-512x512.png`,
        },
      },
    })),
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={artBlakeJacobsImg}
        alt="Jacob's Ladder by William Blake, angels ascending in the light"
        heightClass="h-[55vh] min-h-[380px]"
        position="center top"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Reflections · Teachings · Practice</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Blog
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Practical reflections on Gnostic teaching, meditation, self-observation, and the universal wisdom traditions.
          </p>
        </div>
      </HeroParallax>

      {/* ── Articles ──────────────────────────────────────────────────────────── */}
      {ARTICLES.map(({ id, date, dateISO, label, title, excerpt, img, content }, idx) => (
        <article
          key={id}
          id={id}
          aria-labelledby={`article-${id}-heading`}
          className={`py-20 px-4 fade-section ${idx % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Article header */}
            <header>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-[#1c1409] bg-[#c9a96e] uppercase tracking-widest px-2.5 py-1 rounded-sm">{label}</span>
                <time dateTime={dateISO} className="text-xs text-[#8a6f3f]">{date}</time>
              </div>
              <h2 id={`article-${id}-heading`} className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12] mb-5 leading-snug max-w-3xl">
                {title}
              </h2>
              <p className="text-[#4a3a26] text-lg leading-relaxed mb-8 max-w-3xl italic">{excerpt}</p>
            </header>

            {/* Artwork */}
            <div className="mb-10">
              <ArtBanner
                src={img.src}
                srcWebp={img.srcWebp}
                alt={img.alt}
                objectPosition={img.pos}
                heightClass="h-56 sm:h-72"
              />
            </div>

            {/* Content sections */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {content.map(({ heading, body }) => (
                <div key={heading} className={`${idx % 2 === 0 ? 'bg-[#faf6ef]' : 'bg-white'} border border-[#e8d5b0] rounded-sm p-6`}>
                  <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{heading}</h3>
                  <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className={`h-[1px] ${idx < ARTICLES.length - 1 ? 'bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mt-10' : ''}`} aria-hidden="true" />
          </div>
        </article>
      ))}

      {/* ── Cranach Parallax ──────────────────────────────────────────────────── */}
      <QuoteParallax
        src={artCranachImg}
        alt="Garden of Eden by Lucas Cranach the Elder - the paradise of conscious wholeness"
        position="center 40%"
        quote="Whosoever awakens the consciousness stops dreaming. Whosoever awakens the consciousness becomes a competent investigator of the superior worlds."
        cite="Samael Aun Weor, Dream Yoga"
      />

      {/* ── Closing quote ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#faf6ef] fade-section" aria-label="Closing reflection">
        <div className="max-w-3xl mx-auto">
          <Blockquote cite="Samael Aun Weor">
            "We must become serious. The spiritual path is not a hobby. The awakening of consciousness is the most important work a human being can undertake."
          </Blockquote>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section" aria-label="Call to action">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Study in Community</SectionLabel>
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Come and Study in Community</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            These articles are a taste of the teaching. The full depth of Gnostic wisdom is best explored in community, in the shared work of a sincere study group meeting weekly in Hobart, Hobart Eastern Shore, and Launceston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Our Courses
            </Link>
            <Link
              to="/practices"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Explore Practices
            </Link>
            <Link
              to="/contact"
              className="border border-[#c9a96e]/60 text-[#c8b89a] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
