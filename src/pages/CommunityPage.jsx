import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, SectionHeading, Blockquote, CheckIcon } from '../components/ui.jsx'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { BASE } from '../constants.js'
import artBouguereauImg  from '../assets/art_bouguereau_angels.jpg?format=webp'
import artCranachImg     from '../assets/art_cranach_garden_eden.jpg?format=webp'
import ProtectedEmail from '../components/ProtectedEmail.jsx'

const LOCATIONS = [
  {
    city: 'Hobart',
    description: 'Our Hobart centre serves the greater Hobart area, offering weekly classes.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosishobart@gmail.com',
  },
  {
    city: 'Hobart (Eastern Shore)',
    description: 'Our Eastern Shore centre brings weekly Gnostic classes to the eastern suburbs of Hobart.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.hobarteast@gmail.com',
  },
  {
    city: 'Launceston',
    description: 'The Launceston group meets weekly, bringing Gnostic teachings to the heart of northern Tasmania.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.launceston@gmail.com',
  },
]

export default function CommunityPage() {  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'url': `${BASE}/community`,
    'name': 'Gnosis Tasmania Community: Hobart and Launceston',
    'description': 'Gnosis Tasmania is a local study group in Hobart and Launceston, Tasmania, part of the worldwide Gnostic Society Samael Aun Weor network. Donation-based classes, retreats, and inner-work community.',
    'inLanguage': 'en-AU',
    'about': {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      'name': 'Gnosis Tasmania',
      'memberOf': [
        {
          '@type': 'Organization',
          'name': 'Gnosis Australia',
          'url': 'https://gnosisaustralia.org.au',
        },
        {
          '@type': 'Organization',
          'name': 'Gnostic Society Samael Aun Weor',
        },
      ],
    },
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={artBouguereauImg}
        alt="Song of the Angels by William-Adolphe Bouguereau - a vision of divine harmony"
        overlay="bg-gradient-to-b from-[#1c1409]/60 via-[#1c1409]/45 to-[#1c1409]/75"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Hobart · Eastern Shore · Launceston</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Our Community
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A living circle of sincere aspirants - open, welcoming, and grounded in practical inner work.
          </p>
        </div>
      </HeroParallax>

      {/* ── Mission ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-6">
            Companions on the Path
          </h2>
          <GoldRule className="mb-8" />
          <p className="text-[#4a3a26] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Gnosis Tasmania is a small, sincere community of people across Tasmania who have come together around the Gnostic teachings - a universal body of practical wisdom that has been preserved in every major civilisation throughout human history.
          </p>
          <p className="text-[#4a3a26] leading-relaxed mb-6 max-w-3xl mx-auto">
            We are affiliated with the worldwide network of Gnostic study groups that teach in the tradition of Samael Aun Weor, whose synthesis unveils the perennial wisdom drawn from Egyptian, Greek, Jewish, Christian, Buddhist, and Hindu traditions - as well as the inner alchemical tradition of the medieval masters.
          </p>
        </div>
      </section>

      {/* ── Gnostic Society ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Gnostic Society Samael Aun Weor</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-6">
              Tradition and Revelation
            </h2>
            <GoldRule className="mb-8" />
            <div className="flex justify-center mb-8">
              <img
                src="/gssaw_logo.png"
                alt="Gnostic Society Samael Aun Weor emblem"
                className="h-36 sm:h-44 w-auto object-contain"
              />
            </div>
            <p className="text-[#4a3a26] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              The Gnostic Society Samael Aun Weor teaches that Gnosis rests on two inseparable pillars: Tradition and Revelation. Neither is sufficient alone. Together, they constitute a living path of inner transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-[#e8d5b0] rounded-sm p-8">
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Tradition</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-4">
                The Tradition is the unbroken transmission of wisdom that has flowed through the initiatory schools of every authentic civilisation - from ancient Egypt and Greece through the early Gnostic and Hermetic lineages, the Kabbalistic tradition, the Rosicrucian brotherhoods, and the great spiritual teachers of the modern era.
              </p>
              <p className="text-sm text-[#6b5535] leading-relaxed">
                Samael Aun Weor (1917-1977) synthesised this Tradition in more than seventy books, drawing together the esoteric knowledge of Egypt, Greece, Christianity, Judaism, Buddhism, Hinduism, and the Western alchemical lineage into a single coherent and practical system - accessible to any sincere aspirant.
              </p>
            </div>
            <div className="bg-white border border-[#e8d5b0] rounded-sm p-8">
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Revelation</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-4">
                Revelation is not doctrine received from outside, but the direct inner experience that genuine practice makes possible. The Gnostic Society teaches that every aspirant must personally verify the teachings through their own consciousness - not through faith or belief, but through direct experience of inner realities.
              </p>
              <p className="text-sm text-[#6b5535] leading-relaxed">
                "I do not follow anyone, therefore no one should follow me." Samael Aun Weor was unambiguous: the purpose of the Tradition is to make Revelation possible for each individual. The outer teaching points always toward inner experience - never toward dependence on authority or personality.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#e8d5b0] rounded-sm p-8 text-center">
            <p className="text-[#4a3a26] leading-relaxed max-w-2xl mx-auto mb-4">
              The Gnostic Society operates through affiliated study groups across more than twenty countries, sharing a common body of teaching while remaining locally rooted. Gnosis Tasmania is part of this worldwide network, connected to sister organisations across Australia and beyond.
            </p>
            <a
              href="/gnostic-centres"
              className="inline-block text-sm text-[#c9a96e] hover:text-[#b8963e] transition-colors font-medium"
            >
              Visit Gnosis Australia →
            </a>
          </div>
        </div>
      </section>

      {/* ── Blockquote ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto">
          <Blockquote cite="Samael Aun Weor">
            "The Gnostic Movement is made up of all those who sincerely want to know themselves, to discover what they truly are inside - beyond masks, beyond conditioning, beyond the superficial personality."
          </Blockquote>
        </div>
      </section>

      {/* ── Locations ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Where We Meet"
            title="Three Locations Across Tasmania"
            subtitle="All classes are held in welcoming, accessible venues. Contact us for the current schedule and address."
          />
          {/* Three equal columns — one per location */}
          <div className="grid sm:grid-cols-3 gap-8">
            {LOCATIONS.map(({ city, description, schedule, contact }) => (
              <div key={city} className="bg-[#faf6ef] rounded-sm border border-[#e8d5b0] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#c9a96e]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-medium text-[#2a1e12]">{city}</h3>
                </div>
                <p className="text-sm text-[#4a3a26] leading-relaxed mb-4">{description}</p>
                <p className="text-xs text-[#8a6f3f] font-medium mb-3">{schedule}</p>
                <ProtectedEmail
                  email={contact}
                  className="text-xs text-[#c9a96e] hover:text-[#b8963e] transition-colors font-medium"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Banner ──────────────────────────────────────────────────────── */}
      <QuoteParallax
        src={artCranachImg}
        alt="Garden of Eden by Lucas Cranach the Elder - paradise, the inner state the Gnostic path seeks to recover"
        position="center 40%"
        quote="If the individual does not internally change, then the world will never change either."
        cite="Samael Aun Weor, The Revolution of the Dialectic"
      />

      {/* ── Why Join ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Why Join Us</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                What You'll Discover
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-6">
                Whether you are entirely new to spiritual enquiry or have been exploring for years, you will find something of genuine value in our community. What we offer is not a new belief system, but a set of practical tools for discovering what is already within you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>A structured approach for sincere enquiry, beginning with our <a href="/introduction-to-gnosis" className="text-[#c9a96e] hover:underline">Introduction to Gnosis course</a></span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>Practical <a href="/meditation-classes" className="text-[#c9a96e] hover:underline">meditation and self-observation techniques</a> taught weekly</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>Study of the world's great esoteric and mystical traditions through our <a href="/core-teachings" className="text-[#c9a96e] hover:underline">core Gnostic teachings</a></span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>The company of others genuinely committed to inner work</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>Access to a rich body of written teachings and recommended books</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#4a3a26]">
                  <CheckIcon />
                  <span>A community that supports you without demanding conformity</span>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-white border border-[#e8d5b0] rounded-sm p-6">
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">Classes are donation-based</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">
                  We believe that genuine wisdom should never be withheld for financial reasons. All our classes are offered on a voluntary donation basis - give what you can, when you can. No one is ever turned away.
                </p>
              </div>
              <div className="bg-white border border-[#e8d5b0] rounded-sm p-6">
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">No prior experience needed</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">
                  Our introductory course begins from first principles. You need no background in spirituality, philosophy, or meditation. Simply come with an open mind and a genuine desire to understand yourself more deeply.
                </p>
              </div>
              <div className="bg-white border border-[#e8d5b0] rounded-sm p-6">
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">Online options available</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">
                  Can't attend in person? Contact us about online participation options. The teachings are available wherever you are in Tasmania - or the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Retreats ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Deeper Immersion</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-6">
              Spiritual Retreats
            </h2>
            <GoldRule className="mb-8" />
            <p className="text-[#4a3a26] text-lg leading-relaxed max-w-3xl mx-auto">
              For those who have walked the path for some time, retreats offer an opportunity for deepened immersion in the inner work, with periods of sustained practice, guided study, and genuine community, set apart from the demands of ordinary life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">A Global Tradition</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-4">
                Retreats are held by Gnostic centres in every state of Australia and across the worldwide network of affiliated groups. Each retreat is an occasion for the broader community to gather, deepen their practice, and renew their commitment to the inner path.
              </p>
              <p className="text-[#4a3a26] leading-relaxed">
                Attendance is by invitation, extended to students who have demonstrated sincere and sustained engagement with the teachings through regular class attendance and genuine inner work. Retreats are not a beginning. They are a deepening for those already on the path.
              </p>
            </div>
            <div>
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">The Value of Retreat</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                The tradition of spiritual retreat is as old as the mystery schools themselves. Extended periods of sustained inner work, uninterrupted by the ordinary distractions of daily life, produce a quality of transformation that cannot be replicated through weekly classes alone.
              </p>
              <p className="text-[#4a3a26] leading-relaxed">
                In stillness and community, the practitioner discovers depths of their own psychology that remain hidden in the noise of everyday existence. This is not escape from the world. It is a return to oneself.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Sustained Meditation',
                body: 'Extended sessions of guided and independent meditation, morning, afternoon, and evening, allow the practitioner to go beyond the threshold of ordinary concentration into genuine stillness.',
              },
              {
                title: 'Concentrated Study',
                body: 'Deep engagement with the teachings in a focused setting, uninterrupted by daily obligations. Lectures, study groups, and guided discussion illuminate aspects of the path that weekly classes can only touch upon.',
              },
              {
                title: 'Psychological Work',
                body: 'Retreat provides the conditions for intensive self-observation: extended time to watch the inner machinery in motion, to comprehend patterns that ordinarily pass unnoticed, and to work on them in depth.',
              },
              {
                title: 'Dream Yoga Practice',
                body: 'Evenings dedicated to mantra practice and conscious sleep work, in community with others engaged in the same effort. This environment significantly supports the development of lucid awareness in the inner worlds.',
              },
              {
                title: 'Community and Brotherhood',
                body: 'The bond formed between sincere practitioners working together in retreat is unlike that formed in any other setting. Shared effort in the inner work creates a depth of understanding and trust that sustains the path for years.',
              },
              {
                title: 'Renewal of Purpose',
                body: 'A retreat offers the practitioner the chance to step back from the pace of ordinary life, reassess their inner work, and return to their daily practice with renewed clarity, commitment, and understanding of where they stand on the path.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-6">
                <div className="w-6 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{title}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#2a1e12] rounded-sm p-8 text-center">
            <p className="text-[#c8b89a] leading-relaxed max-w-2xl mx-auto">
              Retreat invitations are extended to students who have been attending classes regularly and are actively engaged in the inner work. If you are already a student with us and wish to know more, speak with your instructor or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Come and Meet Us</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            The best way to learn if Gnosis is right for you is to attend one of our public lectures, held periodically throughout the year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Get in Touch
            </a>
            <a
              href="/courses"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Courses & Classes
            </a>
            <a
              href="/what-is-gnosis"
              className="border border-[#c9a96e]/50 text-[#c8b89a] hover:bg-[#c9a96e]/10 font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              What is Gnosis?
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
