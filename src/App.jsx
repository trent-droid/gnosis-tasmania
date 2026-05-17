import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { GoldRule, SectionLabel, CheckIcon, Blockquote } from './components/ui.jsx'
import { usePageMeta } from './hooks/usePageMeta.js'

import fourThreeTwoOneImg           from './assets/esoteric_four_three_two_one.jpg'
import fourThreeTwoOneImgWebp       from './assets/esoteric_four_three_two_one.jpg?format=webp'
import fourThreeTwoOneImgSrcset     from './assets/esoteric_four_three_two_one.jpg?w=384;640&format=webp&as=srcset'
import heroCreationAdamImg          from './assets/hero_creation_adam.jpg'
import heroCreationAdamImgWebp      from './assets/hero_creation_adam.jpg?format=webp'
import heroCreationAdamImgSrcset    from './assets/hero_creation_adam.jpg?w=640;1280;1920&format=webp&as=srcset'
import heroSchoolAthensImg          from './assets/hero_school_athens.jpg'
import heroSchoolAthensImgWebp      from './assets/hero_school_athens.jpg?format=webp'
import heroSchoolAthensImgSrcset    from './assets/hero_school_athens.jpg?w=640;1280;1920&format=webp&as=srcset'
import heroMysticLambImg            from './assets/hero_mystic_lamb.jpg'
import heroMysticLambImgWebp        from './assets/hero_mystic_lamb.jpg?format=webp'
import heroMysticLambImgSrcset      from './assets/hero_mystic_lamb.jpg?w=640;1280;1920&format=webp&as=srcset'
import heroPrimaveraImg             from './assets/hero_primavera.jpg'
import heroPrimaveraImgWebp         from './assets/hero_primavera.jpg?format=webp'
import heroPrimaveraImgSrcset       from './assets/hero_primavera.jpg?w=640;1280;1920&format=webp&as=srcset'
import esotericSunMoonImg           from './assets/esoteric_sun_moon.jpg'
import esotericSunMoonImgWebp       from './assets/esoteric_sun_moon.jpg?format=webp'
import esotericSunMoonImgSrcset     from './assets/esoteric_sun_moon.jpg?w=640;1024&format=webp&as=srcset'
import artBouguereauImg             from './assets/art_bouguereau_angels.jpg?format=webp'

const HERO_IMAGES = [
  { id: 'creation-adam', src: heroCreationAdamImg, srcWebp: heroCreationAdamImgWebp, srcsetWebp: heroCreationAdamImgSrcset, objectPosition: 'center center',
    overlay: 'bg-gradient-to-b from-black/65 via-black/40 to-black/70',
    credit: 'Creation of Adam, Michelangelo, Sistine Chapel (1512). Public domain.' },
  { id: 'school-athens', src: heroSchoolAthensImg, srcWebp: heroSchoolAthensImgWebp, srcsetWebp: heroSchoolAthensImgSrcset, objectPosition: 'center 35%',
    overlay: 'bg-gradient-to-b from-black/60 via-black/35 to-black/65',
    credit: 'The School of Athens, Raphael, Vatican (1511). Public domain.' },
  { id: 'mystic-lamb',   src: heroMysticLambImg,   srcWebp: heroMysticLambImgWebp,   srcsetWebp: heroMysticLambImgSrcset,   objectPosition: 'center 55%',
    overlay: 'bg-gradient-to-b from-black/55 via-black/30 to-black/60',
    credit: 'Adoration of the Mystic Lamb, Jan & Hubert van Eyck, Ghent Altarpiece (c.1432). Public domain.' },
  { id: 'primavera',     src: heroPrimaveraImg,    srcWebp: heroPrimaveraImgWebp,    srcsetWebp: heroPrimaveraImgSrcset,    objectPosition: 'center 30%',
    overlay: 'bg-gradient-to-b from-black/70 via-black/45 to-black/65',
    credit: 'La Primavera, Sandro Botticelli, Uffizi Gallery (c.1482). Public domain.' },
]

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 20 Q12 10 20 10 Q28 10 36 20 Q28 30 20 30 Q12 30 4 20Z" strokeOpacity="0.4" />
        <circle cx="20" cy="20" r="7" strokeOpacity="0.7" />
        <circle cx="20" cy="20" r="3" fill="#c9a96e" stroke="none" />
        <line x1="20" y1="3" x2="20" y2="7" strokeOpacity="0.5" strokeLinecap="round" />
        <line x1="20" y1="33" x2="20" y2="37" strokeOpacity="0.5" strokeLinecap="round" />
        <line x1="3" y1="20" x2="7" y2="20" strokeOpacity="0.5" strokeLinecap="round" />
        <line x1="33" y1="20" x2="37" y2="20" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Self-Knowledge',
    body: 'Gnosis begins with the ancient imperative: Know Thyself. Through honest self-observation, we discover the psychological structures that keep us bound - and begin the work of genuine liberation.',
    link: '/what-is-gnosis',
    linkLabel: 'What is Gnosis?',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <path d="M20 8 C20 8 14 16 14 22 C14 27 17 31 20 32 C23 31 26 27 26 22 C26 16 20 8 20 8Z" strokeOpacity="0.8" />
        <path d="M20 14 C20 14 17 19 17 22 C17 25 18.5 27 20 28 C21.5 27 23 25 23 22 C23 19 20 14 20 14Z" fill="#c9a96e" fillOpacity="0.2" strokeOpacity="0.5" />
        <path d="M12 21 C8 17 8 25 12 27 C14 28 16 27 17 25" strokeOpacity="0.5" />
        <path d="M28 21 C32 17 32 25 28 27 C26 28 24 27 23 25" strokeOpacity="0.5" />
        <line x1="10" y1="35" x2="30" y2="35" strokeOpacity="0.35" strokeLinecap="round" />
      </svg>
    ),
    title: 'Inner Practices',
    body: 'Meditation, self-observation, dream yoga, and mantra - practical techniques drawn from perennial wisdom traditions and adapted for modern daily life. Experience, not theory.',
    link: '/practices',
    linkLabel: 'Explore Practices',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="14" r="4" strokeOpacity="0.6" />
        <path d="M5 36 Q5 26 12 24 Q19 26 19 36" strokeOpacity="0.45" />
        <circle cx="20" cy="11" r="4.5" strokeOpacity="0.9" />
        <path d="M12.5 36 Q12.5 24 20 22 Q27.5 24 27.5 36" strokeOpacity="0.7" />
        <circle cx="28" cy="14" r="4" strokeOpacity="0.6" />
        <path d="M21 36 Q21 26 28 24 Q35 26 35 36" strokeOpacity="0.45" />
      </svg>
    ),
    title: 'Community',
    body: 'A welcoming community of sincere seekers meeting weekly across Hobart and Launceston. No experience required. All classes are donation-based.',
    link: '/community',
    linkLabel: 'Our Community',
  },
]

export default function App() {
  usePageMeta(
    'Gnosis Tasmania — Gnostic Classes & Meditation in Hobart & Launceston',
    'Donation-based Gnostic classes in Hobart and Launceston, Tasmania. Meditation, self-knowledge, and the Three Factors of the Revolution of Consciousness.',
    '/'
  )

  const [currentBg, setCurrentBg] = useState(0)
  const [paused,    setPaused]    = useState(false)
  const [mounted,   setMounted]   = useState(() => new Set([0]))

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrentBg(i => (i + 1) % HERO_IMAGES.length), 8000)
    return () => clearInterval(t)
  }, [paused])

  useEffect(() => {
    const next = (currentBg + 1) % HERO_IMAGES.length
    setMounted(prev => prev.has(next) ? prev : new Set([...prev, next]))
  }, [currentBg])

  const goTo = useCallback(i => { setCurrentBg(i); setPaused(true) }, [])

  return (
    <div className="min-h-screen bg-white text-[#3a2f1f]">
      <Nav />

      <main id="top">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute inset-0" aria-hidden="true">
            {HERO_IMAGES.map((img, i) => mounted.has(i) && (
              <picture key={img.id} className="absolute inset-0 w-full h-full"
                style={{ opacity: i === currentBg ? 1 : 0, transition: 'opacity 2s ease-in-out', willChange: 'opacity' }}
              >
                <source srcSet={img.srcsetWebp} sizes="100vw" type="image/webp" />
                <img src={img.src} alt=""
                  fetchpriority={i === 0 ? 'high' : 'low'}
                  decoding={i === 0 ? 'sync' : 'async'}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: img.objectPosition }}
                />
              </picture>
            ))}
            {HERO_IMAGES.map((img, i) => mounted.has(i) && (
              <div key={`ov-${img.id}`}
                className={`absolute inset-0 ${img.overlay}`}
                style={{ opacity: i === currentBg ? 1 : 0, transition: 'opacity 2s ease-in-out' }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">
              Hobart · Launceston
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-[#f8f1e3] tracking-wide mb-5 leading-tight drop-shadow-lg">
              Know Thyself
            </h1>
            <p className="font-display text-xl sm:text-2xl text-[#e8d5b0] font-light italic mb-6 leading-relaxed drop-shadow max-w-2xl mx-auto">
              "Gnosis is lived upon facts, withers away in abstractions, and is difficult to find even in the noblest of thoughts."
            </p>
            <p className="text-sm text-[#c8b89a] mb-10 max-w-xl mx-auto leading-relaxed drop-shadow">
              Practical classes in meditation, self-knowledge, and perennial wisdom,
              drawing from every authentic spiritual tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#e0bf80] transition-colors duration-200 tracking-wide shadow-lg">
                Join a Class
              </Link>
              <Link to="/what-is-gnosis" className="border border-[#c9a96e]/70 text-[#e8d5b0] px-8 py-3 rounded-sm text-sm font-medium hover:bg-white/10 hover:border-[#c9a96e] transition-colors duration-200 tracking-wide backdrop-blur-sm">
                What is Gnosis?
              </Link>
            </div>
          </div>

          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5"
            role="group" aria-label="Background image navigation">
            {HERO_IMAGES.map((img, i) => (
              <button key={img.id} onClick={() => goTo(i)}
                aria-label={`Background ${i + 1} of ${HERO_IMAGES.length}`}
                aria-current={i === currentBg ? 'true' : undefined}
                className="h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
                style={{ width: i === currentBg ? '2rem' : '0.5rem', backgroundColor: i === currentBg ? '#c9a96e' : 'rgba(255,255,255,0.45)' }}
              />
            ))}
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center z-10 text-[10px] text-white/35 px-4">
            {HERO_IMAGES[currentBg].credit}
          </p>
        </header>

        {/* ── Three feature cards ──────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#1c1409] fade-section" aria-label="Key offerings">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Universal · Practical · Experiential</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">
                Discover Universal Gnosis
              </h2>
              <GoldRule />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {FEATURES.map(({ icon, title, body, link, linkLabel }) => (
                <div key={title} className="relative bg-[#2a1e12] rounded-sm p-8 border border-[#3a2f1f] hover:border-[#c9a96e]/40 transition-colors flex flex-col overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#c9a96e]/50 to-transparent" aria-hidden="true" />
                  <div className="mb-4" aria-hidden="true">{icon}</div>
                  <h3 className="font-display text-xl font-medium text-[#f8f1e3] mb-3">{title}</h3>
                  <p className="text-sm text-[#9e8a6e] leading-relaxed mb-6 flex-1">{body}</p>
                  <Link to={link} className="text-xs font-semibold text-[#c9a96e] hover:text-[#e0bf80] transition-colors tracking-wide">
                    {linkLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What is Gnosis? teaser ───────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-labelledby="gnosis-home-heading">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <SectionLabel>Ancient wisdom, practical today</SectionLabel>
                <h2 id="gnosis-home-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                  What is Gnosis?
                </h2>
                <GoldRule className="justify-start mb-6" />
                <p className="text-base leading-relaxed text-[#3a2f1f] mb-4">
                  Gnosis (from the Greek γνῶσις) is <strong>direct, experiential knowledge</strong> of oneself and of truth. Not belief, not dogma, not intellectual theory, but lived inner experience. It is the universal thread running through every authentic spiritual tradition: Egyptian Ma'at, the Greek mystery schools, early Christian mysticism, the Kabbalah, Hermeticism, Buddhism, and Sufism.
                </p>
                <p className="text-base leading-relaxed text-[#3a2f1f] mb-8">
                  In our time, Gnostic teachings have been synthesised into a complete, practical system, drawing on the insights of Hermes Trismegistus, the Buddha, the Christ, G.I. Gurdjieff, H.P. Blavatsky, and the 20th-century teacher Samael Aun Weor. The path is the same: <em>turn inward, observe honestly, and transform.</em>
                </p>
                <Link to="/what-is-gnosis" className="inline-block bg-[#c9a96e] text-[#1c1409] px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#b8963e] transition-colors tracking-wide">
                  Explore Gnosis →
                </Link>
              </div>
              <div className="md:col-span-2">
                <figure className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-sm shadow-lg border border-[#c8b89a]">
                    <picture>
                      <source srcSet={esotericSunMoonImgSrcset} sizes="(min-width: 768px) 40vw, 100vw" type="image/webp" />
                      <img src={esotericSunMoonImg}
                        alt="Esoteric illustration of the sun and moon - the two great luminaries representing the inner masculine and feminine principles in the Gnostic tradition."
                        width={2250} height={3158}
                        className="block w-full h-auto" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                  <figcaption className="text-xs text-[#6b5535] italic text-center leading-relaxed">
                    The sun and moon as inner principles. Public domain.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three Factors ────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white fade-section" aria-labelledby="three-factors-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>The path of inner transformation</SectionLabel>
              <h2 id="three-factors-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-4">
                The Three Factors of the Revolution of Consciousness
              </h2>
              <p className="text-base text-[#4a3a26] max-w-2xl mx-auto mb-8">
                Across Gnostic traditions, three universal movements describe the inner journey: the dissolution of what is false, the birth of what is real, and the offering of that reality in service to others.
              </p>
              <GoldRule className="mb-10" />
            </div>

            <div className="flex justify-center mb-14">
              <figure className="flex flex-col items-center gap-3 max-w-sm w-full">
                <div className="overflow-hidden rounded-sm shadow-xl border border-[#c8b89a]">
                  <picture>
                    <source srcSet={fourThreeTwoOneImgSrcset} sizes="(min-width: 640px) 384px, 100vw" type="image/webp" />
                    <img src={fourThreeTwoOneImg}
                      alt="Heinrich Khunrath's engraving 'The Four, the Three, the Two, and the One' - an alchemical symbol of the threefold path of inner transformation."
                      width={1750} height={1780}
                      className="block w-full h-auto" loading="lazy" decoding="async"
                      style={{ filter: 'sepia(15%) contrast(1.08) brightness(0.97)' }}
                    />
                  </picture>
                </div>
                <figcaption className="text-xs text-[#6b5535] italic text-center leading-relaxed">
                  "The Four, the Three, the Two, and the One," Heinrich Khunrath, Amphitheatrum Sapientiae Aeternae (1595). Public domain.
                </figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Psychological Death', sub: 'The dissolution of the ego',
                  body: 'To observe, understand, and dissolve the psychological "I" - the bundle of habits, fears, desires, and conditioning that obscures our true nature. Done through deep self-observation and meditation in daily life.',
                  points: ['Honest self-observation in every moment', 'Meditation on psychological defects', 'Understanding - not suppression'] },
                { title: 'Second Birth', sub: 'The birth of the soul',
                  body: 'As the false self is dissolved, the authentic inner being emerges. The soul is born through the transmutation of creative energies and the cultivation of genuine virtues and inner qualities.',
                  points: ['Transmutation of vital energy', 'Development of genuine virtues', 'Awakening of spiritual faculties'] },
                { title: 'Sacrifice for Humanity', sub: 'Compassionate service',
                  body: 'True spirituality is never private. As we develop inwardly, we are called to serve: sharing openly, teaching, supporting, and contributing to the awakening of humanity without personal gain.',
                  points: ['Sharing knowledge openly with all', 'Service without expectation', 'Living the Bodhisattva ideal'] },
              ].map(({ title, sub, body, points }) => (
                <article key={title} className="relative bg-[#f8f1e3] rounded-sm p-8 flex flex-col border border-[#d4c4a8] overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a96e]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-1">{title}</h3>
                  <p className="text-sm text-[#8a6f3f] font-medium mb-4 italic">{sub}</p>
                  <p className="text-sm leading-relaxed text-[#3a2f1f] mb-5 flex-1">{body}</p>
                  <ul className="space-y-2">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#4a3a26]">
                        <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">•</span>{p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/courses" className="inline-block bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#b8963e] transition-colors duration-200 tracking-wide shadow-sm">
                View All Courses & Classes →
              </Link>
              <Link to="/core-teachings" className="inline-block border border-[#c9a96e] text-[#c9a96e] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#c9a96e] hover:text-[#1c1409] transition-colors tracking-wide">
                Explore Core Teachings →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Divine Mother CTA ─────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 overflow-hidden fade-section" aria-label="Call to action">
          <div
            className="absolute inset-0 bg-cover bg-fixed"
            style={{ backgroundImage: `url(${artBouguereauImg})`, backgroundPosition: 'center 20%' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1409]/95 via-[#1c1409]/80 to-[#1c1409]/60" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionLabel>Begin your journey</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-5 leading-tight">
              The path of self-knowledge
            </h2>
            <GoldRule className="justify-start mb-6" />
            <p className="text-base text-[#c8b89a] mb-8 max-w-xl leading-relaxed">
              Whether you are curious, seeking, or ready to begin, reach out. We welcome sincere seekers of every background. Just honest inner work and genuine community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#e0bf80] transition-colors duration-200 tracking-wide shadow-lg">
                Contact Us
              </Link>
              <Link to="/courses" className="border border-[#c9a96e]/70 text-[#e8d5b0] px-8 py-3 rounded-sm text-sm font-medium hover:bg-white/10 hover:border-[#c9a96e] transition-colors duration-200 tracking-wide">
                View Classes
              </Link>
            </div>
            <p className="text-xs text-[#9e8a6e] mt-6 italic">
              Song of the Angels, William-Adolphe Bouguereau (1881). Public domain.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
