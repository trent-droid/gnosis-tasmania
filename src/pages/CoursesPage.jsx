import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, ParallaxCTA, QuoteParallax, GoldRule, SectionLabel, SectionHeading, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import artHermesTrismegistusImg from '../assets/art_hermes_trismegistus.jpg?format=webp'
import artBirthVenusImg    from '../assets/art_birth_venus.jpg?format=webp'
import esotericAdeptVaseImg from '../assets/esoteric_adept_vase.jpg?format=webp'

// Shared EmailJS config — same credentials used by ContactPage
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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
    city: 'Hobart (Eastern Shore)',
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
  // Waiting list form state
  const [wlData, setWlData]     = useState({ name: '', email: '', location: '' })
  const [wlStatus, setWlStatus] = useState('idle') // idle | sending | success | error

  function handleWlChange(e) {
    const { name, value } = e.target
    setWlData(prev => ({ ...prev, [name]: value }))
  }

  async function handleWlSubmit(e) {
    e.preventDefault()
    setWlStatus('sending')
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setWlStatus('error')
      return
    }
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:       wlData.name,
          from_email:      wlData.email,
          interest:        'Introduction to Gnosis — Waiting List',
          how_heard:       'Not specified',
          message:         `Preferred location: ${wlData.location || 'Any'}\n\nThis person has joined the Introduction to Gnosis waiting list.`,
          recaptcha_token: 'not available',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setWlStatus('success')
    } catch (err) {
      console.error('[EmailJS] Waiting list send failed:', err)
      setWlStatus('error')
    }
  }

  usePageMeta(
    'Gnostic Courses in Hobart, Eastern Shore & Launceston | Gnosis Tasmania',
    'Gnostic courses in Hobart, Hobart Eastern Shore, and Launceston: Introduction to Gnosis (34 sessions) and weekly Meditation Classes. No experience needed. Donation-based.',
    '/courses'
  )
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Do I need any prior knowledge of Gnosis or spirituality?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Not at all. Our introductory course is designed for complete beginners. The only requirement is a sincere desire to learn and a willingness to engage honestly with the practice.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How long does the Introduction to Gnosis course run?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Introduction to Gnosis course consists of 34 sessions, running weekly. This takes approximately 8 to 9 months to complete.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What should I bring to my first Gnosis class?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Just yourself and an open mind. You may wish to bring a notebook, but this is entirely optional. Dress comfortably as we sometimes include physical relaxation exercises.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Are Gnosis classes available online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Many resources are available online and we encourage their use. However, working together in a group creates a shared energy that genuinely supports the inner work in a way that solitary study cannot replicate.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How much do the Gnosis classes cost?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All classes are offered on a voluntary donation basis. There is no fixed fee. Give what you can, when you can. No one is ever turned away for financial reasons.',
        },
      },
    ],
  })

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
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Hobart · Eastern Shore · Launceston</p>
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
            Our classes are designed to be practical, accessible, and immediately applicable to daily life. We do not simply transmit information; we provide a framework for direct inner experience. Every session includes both theoretical study and practical exercises, and students are expected to engage with the material honestly and apply it in their own lives between sessions.
          </p>
          <p className="text-[#6b5535] leading-relaxed max-w-3xl mx-auto">
            The Gnostic path is a serious undertaking that asks genuine commitment over an extended period. These classes are for those who come with a sincere desire to understand themselves and to work honestly on what they discover. All classes are offered on a donation basis: give what you can, when you can.
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

      {/* ── Waiting List ──────────────────────────────────────────────────────── */}
      {/* Intro course runs periodically when there are enough students */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-10">
            <SectionLabel className="text-center">Introduction to Gnosis</SectionLabel>
            <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-4 text-center">
              Join the Waiting List
            </h2>
            <GoldRule className="mb-6" />
            <p className="text-[#4a3a26] leading-relaxed mb-3 text-center">
              Our introductory course runs periodically, when there are enough students ready to begin together. If you are interested in the next intake, add your name below and we will contact you when a course is forming in your area.
            </p>
            <p className="text-[#6b5535] text-sm leading-relaxed mb-8 text-center">
              This course is for those with a genuine desire to study and apply the teachings — not as a passive intellectual exercise, but as a sustained, practical commitment to inner work. If that is where you are, you are warmly welcome.
            </p>

            {wlStatus === 'success' ? (
              <div className="text-center py-4">
                <div className="text-[#c9a96e] text-3xl mb-4" aria-hidden="true">✦</div>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-2">You're on the list</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">
                  Thank you. We will be in touch when a new course is forming near you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWlSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wl-name" className="block text-xs font-semibold text-[#6b5535] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="wl-name" name="name" type="text" required
                      value={wlData.name} onChange={handleWlChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white border border-[#e8d5b0] rounded-sm px-4 py-3 text-sm text-[#3a2f1f] placeholder:text-[#a89a80] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="wl-email" className="block text-xs font-semibold text-[#6b5535] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="wl-email" name="email" type="email" required
                      value={wlData.email} onChange={handleWlChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-[#e8d5b0] rounded-sm px-4 py-3 text-sm text-[#3a2f1f] placeholder:text-[#a89a80] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="wl-location" className="block text-xs font-semibold text-[#6b5535] uppercase tracking-wider mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="wl-location" name="location"
                    value={wlData.location} onChange={handleWlChange}
                    className="w-full bg-white border border-[#e8d5b0] rounded-sm px-4 py-3 text-sm text-[#3a2f1f] focus:outline-none focus:border-[#c9a96e] transition-colors"
                  >
                    <option value="">Any location</option>
                    <option value="Hobart">Hobart</option>
                    <option value="Hobart (Eastern Shore)">Hobart (Eastern Shore)</option>
                    <option value="Launceston">Launceston</option>
                  </select>
                </div>
                {wlStatus === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
                    Something went wrong. Please try again or email us at{' '}
                    <a href="mailto:gnosishobart@gmail.com" className="underline">gnosishobart@gmail.com</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={wlStatus === 'sending'}
                  className="w-full bg-[#c9a96e] hover:bg-[#b8963e] disabled:opacity-60 disabled:cursor-not-allowed text-[#1c1409] font-semibold py-3 rounded-sm transition-colors tracking-wide text-sm"
                >
                  {wlStatus === 'sending' ? 'Sending…' : 'Join the Waiting List →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Location Schedule ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where & When"
            title="Find a Class Near You"
            subtitle="Classes are held weekly across three locations in Tasmania. Contact us for current times and venue details."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#e8d5b0] rounded-sm p-8 text-center">
            <div className="w-12 h-[2px] bg-[#c9a96e] mx-auto mb-6" aria-hidden="true" />
            <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Classes Are Donation-Based</h3>
            <p className="text-[#4a3a26] leading-relaxed mb-4">
              We do not charge a fixed fee for our classes. All teaching is offered on the basis of voluntary donation. Genuine wisdom should never be withheld for financial reasons.
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
