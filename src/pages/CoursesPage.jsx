import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, ParallaxCTA, QuoteParallax, GoldRule, SectionLabel, SectionHeading, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import artHermesTrismegistusImg from '../assets/art_hermes_trismegistus.jpg'
import artBirthVenusImg    from '../assets/art_birth_venus.jpg'
import esotericAdeptVaseImg from '../assets/esoteric_adept_vase.jpg'

const COURSES = [
  {
    title: 'Introduction to Gnosis',
    subtitle: '34-Topic Esoteric Course',
    link: '/introduction-to-gnosis',
    duration: '34 sessions · approx. 9 months',
    level: 'Beginners - no prior experience needed',
    description: 'Our foundational course covers the complete body of Gnostic teaching from first principles. Beginning with the nature of consciousness and self-knowledge, the course moves through psychology, cosmology, meditation, dream yoga, sacred symbolism, and the practical methods of inner transformation.',
    topics: [
      'The nature of Gnosis and its four pillars',
      'Consciousness, personality, and the ego',
      'The three factors of the revolution of consciousness',
      'Meditation and the four states of consciousness',
      'Dream yoga and astral projection',
      'The Tree of Life and Kabbalistic cosmology',
      'Sacred sexuality and inner alchemy',
      'Karma, dharma, and the law of return',
      'The path of the initiate across human history',
      'Practical daily exercises and meditations',
    ],
    highlight: true,
  },
  {
    title: 'Meditation Classes',
    subtitle: 'The Revolution of Meditation',
    link: '/meditation-classes',
    duration: 'Ongoing · weekly sessions',
    level: 'All levels welcome',
    description: 'A dedicated course in the theory and practice of Gnostic meditation. Learn the four stages of meditation practice - relaxation, concentration, meditation, and samadhi - and develop a sustainable daily practice that produces genuine, verifiable results.',
    topics: [
      'The science of relaxation and physical stillness',
      'Concentration - developing one-pointed attention',
      'Meditation proper - penetrating the nature of things',
      'Samadhi - the state of union',
      'Mantras for meditation and inner awakening',
      'Working with the hypnagogic state',
      'Meditation on the psychological defects',
      'The retrospective meditation',
    ],
    highlight: false,
  },
]

const LOCATIONS = [
  {
    city: 'Hobart',
    region: 'Southern Tasmania',
    schedule: [
      'Introduction to Gnosis, weekly',
      'Meditation Class, weekly',
    ],
    note: 'Contact us for current venue details and times.',
  },
  {
    city: 'Launceston',
    region: 'Northern Tasmania',
    schedule: [
      'Introduction to Gnosis, weekly',
      'Meditation Class, weekly',
    ],
    note: 'Contact us for current venue details and times.',
  },
]

export default function CoursesPage() {
  usePageMeta(
    'Courses & Classes | Gnosis Tasmania',
    'Gnostic courses and meditation classes in Hobart and Launceston. Introduction to Gnosis (34 topics) and weekly Meditation Classes. Donation-based, no experience required.',
    '/courses'
  )

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={artHermesTrismegistusImg}
        alt="Hermes Trismegistus mosaic, Siena Cathedral (c. 1480) - the legendary founder of esoteric wisdom handing down the teaching"
        position="center 10%"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Hobart · Launceston</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Courses & Classes
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            No prior experience required. All classes are donation-based.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6">Learning That Transforms</h2>
          <GoldRule className="mb-8" />
          <p className="text-[#4a3a26] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Our classes are designed to be practical, accessible, and immediately applicable to daily life. We do not simply transmit information; we provide a framework for direct inner experience. Every session includes both theoretical study and practical exercises.
          </p>
          <p className="text-[#4a3a26] leading-relaxed max-w-3xl mx-auto">
            All classes are offered on a donation basis. We believe that genuine wisdom should never be withheld for financial reasons. Give what you can, when you can. New students are always warmly welcome.
          </p>
        </div>
      </section>

      {/* ── Course Cards ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Our Courses"
            title="Two Paths into the Teaching"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map(({ title, subtitle, link, duration, level, description, topics, highlight }) => (
              <div
                key={title}
                className={`rounded-sm border p-8 flex flex-col ${
                  highlight
                    ? 'bg-[#2a1e12] border-[#c9a96e]'
                    : 'bg-white border-[#e8d5b0]'
                }`}
              >
                {highlight && (
                  <span className="text-[10px] font-bold text-[#1c1409] bg-[#c9a96e] uppercase tracking-widest px-2.5 py-1 rounded-sm self-start mb-4">
                    Foundation Course
                  </span>
                )}
                <h3 className={`font-display text-3xl font-medium mb-1 ${highlight ? 'text-[#f8f1e3]' : 'text-[#2a1e12]'}`}>
                  {title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${highlight ? 'text-[#c9a96e]' : 'text-[#c9a96e]'}`}>{subtitle}</p>
                <div className="flex gap-4 mb-5">
                  <span className={`text-xs px-2 py-1 rounded-sm border ${highlight ? 'text-[#c8b89a] border-[#5a4a2e]' : 'text-[#6b5535] border-[#e8d5b0]'}`}>
                    {duration}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-sm border ${highlight ? 'text-[#c8b89a] border-[#5a4a2e]' : 'text-[#6b5535] border-[#e8d5b0]'}`}>
                    {level}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${highlight ? 'text-[#c8b89a]' : 'text-[#4a3a26]'}`}>{description}</p>
                <div className="space-y-2 mb-8 flex-1">
                  {topics.map(t => (
                    <div key={t} className="flex items-start gap-2">
                      <span className={`text-[#c9a96e] mt-0.5 shrink-0`} aria-hidden="true">◦</span>
                      <span className={`text-xs leading-relaxed ${highlight ? 'text-[#c8b89a]' : 'text-[#4a3a26]'}`}>{t}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={link}
                  className={`inline-block text-sm font-semibold px-6 py-3 rounded-sm transition-colors tracking-wide text-center ${
                    highlight
                      ? 'bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409]'
                      : 'border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409]'
                  }`}
                >
                  View Course Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location Schedule ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where & When"
            title="Find a Class Near You"
            subtitle="Classes are held weekly across two locations in Tasmania. All are welcome, just turn up."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map(({ city, region, schedule, note }) => (
              <div key={city} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-7">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#c9a96e]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-medium text-[#2a1e12]">{city}</h3>
                </div>
                <p className="text-xs text-[#c9a96e] font-medium mb-5">{region}</p>
                <ul className="space-y-2 mb-5">
                  {schedule.map(s => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[#4a3a26]">
                      <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#8a6f3f] italic">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation Note ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#e8d5b0] rounded-sm p-8 text-center">
            <div className="w-12 h-[2px] bg-[#c9a96e] mx-auto mb-6" aria-hidden="true" />
            <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Classes Are Donation-Based</h3>
            <p className="text-[#4a3a26] leading-relaxed mb-4">
              We do not charge a fixed fee for our classes. All teaching is offered on the basis of voluntary donation. This is in keeping with the tradition that genuine wisdom should never be withheld for financial reasons.
            </p>
            <p className="text-[#4a3a26] leading-relaxed mb-4">
              If you are in a position to give, your generosity directly supports the continuation of these teachings and helps make them available to those who cannot afford to pay. If you cannot give at this time, you are still warmly welcome.
            </p>
            <p className="text-sm text-[#8a6f3f] italic">
              "Freely you have received; freely give." - Matthew 10:8
            </p>
          </div>
        </div>
      </section>

      {/* ── Meditation Parallax ───────────────────────────────────────────────── */}
      <QuoteParallax
        src={esotericAdeptVaseImg}
        alt="The alchemical adept with the vessel of transformation - an image of the inner work of self-knowledge"
        position="center 25%"
        quote="He who knows other men is discerning; he who knows himself is intelligent. He who overcomes others is strong; he who overcomes himself is mighty."
        cite="Lao Tzu, Tao Te Ching, Chapter 33"
      />

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Common Questions"
            title="Before You Come"
          />
          <div className="space-y-5">
            {[
              {
                q: 'Do I need any prior knowledge of Gnosis or spirituality?',
                a: 'Not at all. Our introductory course is designed for complete beginners. The only requirement is a sincere desire to learn and a willingness to engage honestly with the practice.',
              },
              {
                q: 'How long does the introductory course run?',
                a: 'The Introduction to Gnosis course consists of 34 sessions, running weekly. This takes approximately 8-9 months to complete.',
              },
              {
                q: 'What should I bring to my first class?',
                a: 'Just yourself and an open mind. You may wish to bring a notebook for any notes, but this is entirely optional. Dress comfortably; we sometimes include physical relaxation exercises.',
              },
              {
                q: 'Are classes available online?',
                a: 'There are many resources available online, and we encourage their use. That said, the power of working together in a group cannot be understated - a shared energy arises in the room that genuinely supports the inner work in a way that solitary study cannot replicate.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-[#e8d5b0] rounded-sm p-6">
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{q}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <ParallaxCTA
        src={artBirthVenusImg}
        alt="The Birth of Venus by Sandro Botticelli - the divine feminine arising from the waters of creation"
        position="center top"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-6">Ready to Begin?</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg leading-relaxed mb-8">
            Come to your first class with an open mind and a genuine desire to understand yourself more deeply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Contact Us to Enrol
            </Link>
            <Link
              to="/introduction-to-gnosis"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Course Outline
            </Link>
          </div>
        </div>
      </ParallaxCTA>

      <Footer />
    </div>
  )
}
