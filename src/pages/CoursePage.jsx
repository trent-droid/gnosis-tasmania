import { Fragment } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { GoldRule, QuoteParallax, ParallaxImage } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { BASE } from '../constants.js'

import heroAngkorImg             from '../assets/hero_angkor.jpg?format=webp'
import artTreeOfLifeImg          from '../assets/art_tree_of_life.png?format=webp'
import artFluddNaturaImg         from '../assets/art_fludd_natura.jpg?format=webp'
import artKhunrathSyzygyImg      from '../assets/art_khunrath_syzygy.jpg?format=webp'
import artKhunrathKabbalismImg   from '../assets/art_khunrath_kabbalism.jpg?format=webp'
import artFluddSummumImg         from '../assets/art_fludd_summum.jpg?format=webp'
import esotericFlammarionColorizedImg from '../assets/esoteric_flammarion_colorized.jpg?format=webp'

/* ─── Course data ──────────────────────────────────────────────────────────── */

const PARTS = [
  {
    number: 'I',
    title: 'Foundations',
    description: 'The nature of Gnosis, the human constitution, and the foundational principles of inner work.',
    art: {
      src: artTreeOfLifeImg,
      alt: 'The Kabbalistic Tree of Life, depicting the ten Sephiroth and the structure of divine creation, illustrating the foundations of Gnostic cosmology.',
      position: 'center center',
      quote: 'The lips of wisdom are closed, except to the ears of Understanding.',
      cite: 'The Kybalion, The Three Initiates',
    },
    modules: [
      {
        number: '01', title: 'Introduction to Gnosis',
        points: ['Gnosis: the knowledge that saves us from ignorance', 'The objective of Gnosis', 'Knowledge through experience, not belief', 'The 4 Pillars: Science, Philosophy, Art and Religion'],
      },
      {
        number: '02', title: 'The Four Ways',
        points: ['The Fakir: order and discipline in life and esoteric work', 'The Monk: devotion, prayer, developing the faculties of the heart', 'The Yogi: esoteric study and practice, self-knowledge', 'The 4th Way: the straight and narrow path to enlightenment'],
      },
      {
        number: '03', title: 'The Two Lines of Life',
        points: ['Level of Being', 'The marvellous ladder of the Being', 'The horizontal and vertical of life', 'Raising our level of Being', 'The intersection of the two lines as "the now"'],
      },
      {
        number: '04', title: 'Need and Greed',
        points: ['Money and ambition', 'Physical needs versus psychological needs', 'Greed as excess and contentment as balance', 'The mechanism of sensation and satisfaction'],
      },
      {
        number: '05', title: 'Consciousness, Personality and the Ego',
        points: ['Knowledge of the main aspects of our psychological constitution', 'The essence - our true nature as consciousness', 'The false personality - conditioning of time and space', 'The pluralised "I" - the many egos as psychological conditionings'],
      },
      {
        number: '06', title: 'The Human Machine & the Pluralised "I"',
        points: ['5 centres - intellectual, emotional, motor, instinctive and sexual', 'Functions and characteristics of each centre', 'Wise use of the energies of the centres', 'The balance of the centres'],
      },
    ],
  },
  {
    number: 'II',
    title: 'The Mind',
    description: 'The three brains, the nature of mind at every level, the awakening of consciousness, and the art of true listening.',
    art: {
      src: artFluddNaturaImg,
      alt: "Robert Fludd's Integrae Naturae Speculum, a cosmic diagram showing the great chain of being, connecting the human mind to the universal mind through levels of creation.",
      position: 'center 25%',
      quote: 'When the mind is in a passive and receptive state, absolutely still and in silence, the Essence is liberated from the mind, and ecstasy arrives.',
      cite: 'Samael Aun Weor, The Revolution of the Dialectic',
    },
    modules: [
      {
        number: '07', title: 'The Three Brains & How to Solve Problems',
        points: ['What is a problem?', 'Types of problems', 'How to dissolve problems', 'Balance of the three brains'],
      },
      {
        number: '08', title: 'The Three Minds',
        points: ['The Sensorial Mind: the mind of the 5 senses, the material mind', 'Intermediate Mind: the mind of belief', 'Interior Mind: the vehicle of the Being, objective knowledge and intuition', 'Conscious faith as opposed to belief'],
      },
      {
        number: '09', title: 'The Universal Mind',
        points: ['Origin of the cosmic/universal mind', 'Link between the human mind and the universal mind', 'Imagination and will', 'Mental epidemics and mental hygiene'],
      },
      {
        number: '10', title: 'The Spatial Sense & The Fourth Dimension',
        points: ['Intimate remembrance of oneself', 'The fourth dimension or time', 'The six fundamental dimensions', 'Life-span and the Jinn state'],
      },
      {
        number: '11', title: 'The Awakening of Consciousness',
        points: ['What is consciousness?', 'The 4 states of consciousness', 'Why our consciousness is asleep', 'Techniques and practices for the awakening of consciousness'],
      },
      {
        number: '12', title: 'Learning How to Listen',
        points: ["Who are we listening to?", "Buddha's bowl", 'Attention - where is our attention?', 'Listening with the consciousness'],
      },
    ],
  },
  {
    number: 'III',
    title: 'Time & Destiny',
    description: 'The laws of karma and dharma, the mysteries of life and death, evolution, and the great cycles of existence.',
    art: {
      src: artKhunrathSyzygyImg,
      alt: "Heinrich Khunrath's alchemical syzygy, depicting the conjunction of opposites illustrating the cosmic law of polarity that governs all cycles of birth, death, and return.",
      position: 'center 30%',
      quote: 'Karma is not a punishment but a teaching. Every cause has its effect; every action returns to its source. The wise man acts knowing this law, and in so doing, transcends it.',
      cite: 'Samael Aun Weor',
    },
    modules: [
      {
        number: '13', title: 'Return, Recurrence and Reincarnation',
        points: ['Law of the Return of All Things - origin of natural cycles', 'Law of Recurrence - the repetition of all things, karma and spirals', 'Law of Reincarnation - conscious descent to fulfil a mission for humanity', 'Keys to liberate oneself from recurrences'],
      },
      {
        number: '14', title: 'The Laws of Karma and Dharma',
        points: ['Karma as the law of cause and effect', 'Different types of karma', 'Karma is negotiable - justice and mercy', 'Dharma as cosmic capital and merits'],
      },
      {
        number: '15', title: 'The Mysteries of Life and Death, Part 1',
        points: ['Birth and Death as inseparable twins', 'Death by thirds', 'Destiny, trio of life, death and judgement', 'Death as supreme advisor for life', 'Dying consciously as objective'],
      },
      {
        number: '16', title: 'The Mysteries of Life and Death, Part 2',
        points: ['The rays of life and death', 'What continues on after physical death', 'Angels of life and death', 'Recapitulation, trial and judgement'],
      },
      {
        number: '17', title: 'Evolution, Involution & Revolution',
        points: ['The two axes of nature: evolution and involution', 'The Wheel of Samsara: four kingdoms', 'Transmigration of the soul', 'Liberation from the Wheel of Samsara'],
      },
      {
        number: '18', title: 'The Seven Rounds and Seven Races',
        points: ['The creation of man and the world', 'The authentic history of our humanity and our race', 'Seven Great Races of the planet', 'Seven subraces of each great race'],
      },
    ],
  },
  {
    number: 'IV',
    title: 'Cosmology',
    description: 'The origin of the ego, lunar and cosmic influences, universal sound, and the Kabbalistic Tree of Life.',
    art: {
      src: artKhunrathKabbalismImg,
      alt: "Heinrich Khunrath's kabbalistic diagram of the divine names and spheres of the Tree of Life, illustrating the Kabbalistic cosmology at the heart of Gnostic teaching.",
      position: 'center 15%',
      quote: 'The ALL is MIND; the Universe is Mental. He who grasps this truth hath attained to wisdom in all things.',
      cite: 'The Kybalion, The Principle of Mentalism',
    },
    modules: [
      {
        number: '19', title: 'The Origin of the Ego',
        points: ['The Lemurian race - separation of the sexes', 'Introduction of the Kundabuffer organ', 'Rebellion of the angels - the fall of man', 'Removal of the Kundabuffer organ and its consequences'],
      },
      {
        number: '20', title: 'The Lunar Influence',
        points: ['Theories regarding the origin of the Moon', 'Grandmother Moon, Mother Earth', 'The whole Earth experiences the Lunar Influence', 'Lunar phases and their influence'],
      },
      {
        number: '21', title: 'The Hidden Face of our Psychological Moon',
        points: ['The visible and invisible sides of our psychology', 'Criticism and self-criticism', 'The sense of psychological self-observation', 'Learning to use others as a mirror for observation'],
      },
      {
        number: '22', title: 'Universal Sound',
        points: ['The creative power of the Logos', 'Energy, matter, vibration, movement and sound', 'Key note and vibratory affinity', 'Mantras'],
      },
      {
        number: '23', title: 'The Seven Cosmoses',
        points: ['Absolute Abstract Space', 'The Ray of Creation', 'The Laws of Three and Seven', 'Our place in creation'],
      },
      {
        number: '24', title: 'The Tree of Life',
        points: ['Introduction to the Kabbalah', 'The 10 Sephiroth and the 4 worlds', 'Logoic, Ethical and Magical triangles', 'The Tree of Life and the Tree of Knowledge'],
      },
    ],
  },
  {
    number: 'V',
    title: 'The Human Being',
    description: 'The existential bodies of the Being, the solar human, psychic development, and the transmutation of vital energies.',
    art: {
      src: artFluddSummumImg,
      alt: "Robert Fludd's Summum Bonum, depicting the divine rose at the summit of all being, representing the highest spiritual attainment: the solar human who has developed all existential bodies.",
      position: 'center center',
      quote: 'The human being has the possibility of developing consciousness and of attaining a state of complete awakening. This is the meaning and purpose of existence.',
      cite: 'Samael Aun Weor',
    },
    modules: [
      {
        number: '25', title: 'The Study of the Solar Human',
        points: ['Existential bodies of the Being', 'Function of each body', 'The Inner Master in the Causal body', 'Four types of Hanasmussen'],
      },
      {
        number: '26', title: 'The Seven Types of Human Beings',
        points: ['Mechanical and conscious humanity', 'Instinctive, emotional and intellectual human being', 'The fourth type of human being and the Psychological Moon', 'The development of the conscious solar human being'],
      },
      {
        number: '27', title: 'Psychic Development',
        points: ['Sensations and impressions', 'Concepts and reality', 'Words, language and imagination', 'Psychic development - the chakras'],
      },
      {
        number: '28', title: 'Transformation of Impressions',
        points: ['What are impressions?', 'Importance of the need to transform impressions', 'The consciousness as the transformer of impressions', 'Transform impressions, transform your life'],
      },
      {
        number: '29', title: 'Prana, Tattwas and Pranayama',
        points: ['Law of Universal Vibration - the Vital Foundation', 'Prana, Tattwas, chakras, four elements and hormones', 'Properties of the Tattvas and the elementals of nature', 'Pranayama exercise'],
      },
      {
        number: '30', title: '"Sexual Hydrogen" SI-12',
        points: ['Fundamental Hydrogens - table of transformation', 'Transformation of food, air and thought into sexual energy', 'Transmutation of sexual energy into SI-12', 'Further transformations into higher, subtler hydrogens'],
      },
    ],
  },
  {
    number: 'VI',
    title: 'Esoteric Practices',
    description: 'Astral travel, the Aquarian Age, ritual work with the five elements, and the path of esoteric initiation.',
    art: {
      src: esotericFlammarionColorizedImg,
      alt: 'The Flammarion engraving, depicting a pilgrim kneeling at the edge of the firmament, gazing into the celestial mysteries beyond the visible world.',
      position: 'center 40%',
      quote: 'Cease not to seek day and night, and do not withdraw until ye find the mysteries of the Light, which will purify you and make you into pure light.',
      cite: 'Pistis Sophia, Chapter 100',
    },
    modules: [
      {
        number: '31', title: 'Astral Travel',
        points: ['The world of dreams and the astral body', 'Direct esoteric experience in the Astral world', 'Supra-dimensions and infra-dimensions', 'Discipline and techniques for Astral travel'],
      },
      {
        number: '32', title: 'The Age of Aquarius',
        points: ['The Dionysian wave and its two poles', 'The Zodiac and the Sidereal path', 'The Four Ages - Gold, Silver, Bronze and Iron', 'The characteristics of the Aquarian Age'],
      },
      {
        number: '33', title: 'The Pancatattwa Ritual',
        points: ['The Five Elements', 'The nourishing quality of each element', 'Importance of the five elements as nourishment for the Inner Being', 'Practical Alchemy - authentic White Tantra'],
      },
      {
        number: '34', title: 'The Initiatic Path',
        points: ['What is Esoteric Initiation?', 'Initiations of the minor and major path', 'Role of sexuality in the process of Initiation', 'Liberation of the Soul'],
      },
    ],
  },
]

/* ─── Small components ─────────────────────────────────────────────────────── */

function ModuleCard({ number, title, points }) {
  return (
    <article className="relative bg-[#f8f1e3] rounded-sm p-5 flex flex-col border border-[#d4c4a8] overflow-hidden h-full">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a96e]" aria-hidden="true" />
      <span className="font-display text-4xl font-light text-[#c9a96e] mb-2 mt-0.5 leading-none" aria-hidden="true">
        {number}
      </span>
      <h3 className="font-display text-base font-semibold text-[#2a1e12] mb-3 leading-snug">{title}</h3>
      <ul className="space-y-1.5 flex-1">
        {points.map(point => (
          <li key={point} className="flex items-start gap-2 text-xs text-[#4a3a26] leading-relaxed">
            <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">•</span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function CoursePage() {
  const pageMeta = usePageMeta(
    'Introduction to Gnosis: 34-Session Course | Gnosis Tasmania',
    'Introduction to Gnosis: a 34-session course covering consciousness, Kabbalah, meditation, karma, and inner alchemy. Weekly classes in Hobart and Launceston, Tasmania.',
    '/introduction-to-gnosis'
  )
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Introduction to Gnosis',
    'description': 'A 34-topic foundational course covering the complete body of Gnostic teaching: consciousness, psychology, cosmology, Kabbalah, meditation and esoteric practice. Classes in Hobart and Launceston, Tasmania.',
    'provider': {
      '@type': 'EducationalOrganization',
      'name': 'Gnosis Tasmania',
      'url': BASE,
    },
    'url': `${BASE}/introduction-to-gnosis`,
    'courseMode': 'in-person',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'AUD',
      'description': 'Donation-based: attend freely, give what you can',
    },
    'hasCourseInstance': [
      {
        '@type': 'CourseInstance',
        'courseMode': 'in-person',
        'location': { '@type': 'Place', 'name': 'Hobart', 'address': { '@type': 'PostalAddress', 'addressLocality': 'Hobart', 'addressRegion': 'Tasmania', 'addressCountry': 'AU' } },
        'courseSchedule': { '@type': 'Schedule', 'repeatFrequency': 'P1W' },
      },
      {
        '@type': 'CourseInstance',
        'courseMode': 'in-person',
        'location': { '@type': 'Place', 'name': 'Hobart (Eastern Shore)', 'address': { '@type': 'PostalAddress', 'addressLocality': 'Hobart', 'addressRegion': 'Tasmania', 'addressCountry': 'AU' } },
        'courseSchedule': { '@type': 'Schedule', 'repeatFrequency': 'P1W' },
      },
      {
        '@type': 'CourseInstance',
        'courseMode': 'in-person',
        'location': { '@type': 'Place', 'name': 'Launceston', 'address': { '@type': 'PostalAddress', 'addressLocality': 'Launceston', 'addressRegion': 'Tasmania', 'addressCountry': 'AU' } },
        'courseSchedule': { '@type': 'Schedule', 'repeatFrequency': 'P1W' },
      },
    ],
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      {pageMeta}
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header className="relative flex flex-col items-center justify-center text-center px-4 pt-16 min-h-[55vh] overflow-hidden" aria-label="Course hero">
          <div className="absolute inset-0" aria-hidden="true">
            <ParallaxImage
              src={heroAngkorImg}
              position="center 30%"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1409]/70 via-[#1c1409]/50 to-[#1c1409]/75" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto py-16">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c8b89a] hover:text-[#c9a96e] transition-colors mb-8 tracking-wide uppercase"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gnosis Tasmania
            </a>
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-3">
              Beginner Series · Open to All
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#f8f1e3] tracking-wide mb-5 leading-tight drop-shadow-lg">
              Introduction to Gnosis
            </h1>
            <p className="font-display text-xl sm:text-2xl text-[#e8d5b0] font-light italic mb-6 leading-relaxed drop-shadow">
              Psychological &amp; Esoteric Topics Based upon the Gnostic Teachings
            </p>
            <p className="text-sm text-[#c8b89a] max-w-xl mx-auto leading-relaxed">
              Our curriculum explores a wide range of esoteric, psychological and mystical subjects
              drawn from the complete teachings of Samael Aun Weor.
            </p>
          </div>
        </header>

        {/* ── Course overview stats ─────────────────────────────────────────── */}
        <section className="bg-[#1c1409] py-10 px-4 fade-section" aria-label="Course overview">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: '34', label: 'Topics Covered' },
                { value: '6',  label: 'Thematic Parts' },
                { value: 'Open', label: 'To All, Always' },
                { value: 'All', label: 'Levels Welcome' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="font-display text-3xl sm:text-4xl font-light text-[#c9a96e]">{value}</span>
                  <span className="text-xs text-[#9e8a6e] uppercase tracking-widest font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro text ────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-[#faf6ef] fade-section" aria-label="Course introduction">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-3 block">
              About this course
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12] mb-5">
              Discover the Depths of Gnostic Wisdom
            </h2>
            <GoldRule className="mb-7" />
            <p className="text-base leading-relaxed text-[#3a2f1f] mb-4">
              The Introduction to Gnosis course covers the full breadth of Samael Aun Weor's practical teachings
              from the fundamental nature of consciousness and the human psychological machine, through to cosmology,
              the Kabbalah, esoteric practices, and the path of initiation.
            </p>
            <p className="text-base leading-relaxed text-[#3a2f1f]">
              Classes are held regularly in <strong>Hobart and Launceston</strong> on a donation basis.
              No prior experience is required. Only sincere interest and a willingness to look inward.
            </p>
          </div>
        </section>

        {/* ── The 6 Parts ───────────────────────────────────────────────────── */}
        {PARTS.map((part, partIdx) => (
          <Fragment key={part.number}>
            <QuoteParallax
              src={part.art.src}
              alt={part.art.alt}
              position={part.art.position}
              quote={part.art.quote}
              cite={part.art.cite}
            />
            <section
              className={`py-16 px-4 fade-section ${partIdx % 2 === 0 ? 'bg-[#faf6ef]' : 'bg-white'}`}
              aria-labelledby={`part-${part.number}-heading`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-2 block">
                    Part {part.number}
                  </span>
                  <h2
                    id={`part-${part.number}-heading`}
                    className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12] mb-3"
                  >
                    {part.title}
                  </h2>
                  <p className="text-sm text-[#4a3a26] max-w-2xl mx-auto mb-5 leading-relaxed">
                    {part.description}
                  </p>
                  <GoldRule />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {part.modules.map(mod => (
                    <ModuleCard key={mod.number} {...mod} />
                  ))}
                </div>
              </div>
            </section>
          </Fragment>
        ))}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#1c1409] fade-section" aria-label="Join a class">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-14 max-w-xs mx-auto" aria-hidden="true" />
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-3">
              Hobart &amp; Launceston · Donation-Based
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-5 leading-tight">
              Begin Your Path
            </h2>
            <GoldRule className="mb-7" />
            <p className="text-sm text-[#c8b89a] mb-8 leading-relaxed">
              We welcome sincere aspirants of every background. Reach out to register your interest
              or ask any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#e0bf80] transition-colors duration-200 tracking-wide shadow-lg"
              >
                Register Your Interest
              </a>
              <a
                href="/"
                className="border border-[#c9a96e]/70 text-[#e8d5b0] px-8 py-3 rounded-sm text-sm font-medium hover:bg-white/10 hover:border-[#c9a96e] transition-colors duration-200 tracking-wide"
              >
                Return to Home
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
