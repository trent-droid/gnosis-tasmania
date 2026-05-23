import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, SectionHeading, ArtBanner, Blockquote, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import artKhunrathImg              from '../assets/art_khunrath_rebis.jpg?format=webp'
import artBouguereauVirginImg      from '../assets/art_bouguereau_virgin_child.jpg?format=webp'
import artKircherTreeOfLifeImg        from '../assets/art_kircher_tree_of_life.png'
import artKircherTreeOfLifeImgWebp    from '../assets/art_kircher_tree_of_life.png?format=webp'
import artKircherTreeOfLifeImgSrcset  from '../assets/art_kircher_tree_of_life.png?w=448;896&format=webp&as=srcset'
import artRosariumImg                 from '../assets/art_rosarium_king_queen.jpg'
import artRosariumImgWebp             from '../assets/art_rosarium_king_queen.jpg?format=webp'
import artRosariumImgSrcset           from '../assets/art_rosarium_king_queen.jpg?w=640;1280&format=webp&as=srcset'
import heroCreationImg             from '../assets/hero_creation_adam.jpg?format=webp'

const THREE_FACTORS = [
  {
    number: '01',
    title: 'Death of the Ego',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <line x1="10" y1="5" x2="30" y2="5" />
        <line x1="10" y1="35" x2="30" y2="35" />
        <path d="M10 5 L30 5 L20 20 L30 35 L10 35 L20 20 Z" strokeLinejoin="round" strokeOpacity="0.85" />
        <circle cx="20" cy="20" r="2" fill="#c9a96e" stroke="none" />
      </svg>
    ),
    body: 'The ego, our collection of psychological defects, fears, desires, and conditioned reactions, is the primary obstacle to self-knowledge and genuine spiritual development. Through sustained self-observation and inner work, these psychological patterns can be dissolved one by one, freeing the consciousness from its mechanical chains.',
    detail: 'This is not merely the suppression of impulses. It is a genuine alchemical dissolution: the transmutation of psychological lead into the gold of awakened consciousness. Gnostic practice provides specific, practical methods for this inner work.',
  },
  {
    number: '02',
    title: 'Birth of the Soul',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <circle cx="20" cy="20" r="5" strokeOpacity="0.9" />
        <circle cx="20" cy="20" r="2" fill="#c9a96e" stroke="none" />
        <line x1="20" y1="3" x2="20" y2="13" strokeOpacity="0.9" />
        <line x1="20" y1="27" x2="20" y2="37" strokeOpacity="0.9" />
        <line x1="3" y1="20" x2="13" y2="20" strokeOpacity="0.9" />
        <line x1="27" y1="20" x2="37" y2="20" strokeOpacity="0.9" />
        <line x1="7.1" y1="7.1" x2="14.2" y2="14.2" strokeOpacity="0.5" />
        <line x1="25.8" y1="25.8" x2="32.9" y2="32.9" strokeOpacity="0.5" />
        <line x1="32.9" y1="7.1" x2="25.8" y2="14.2" strokeOpacity="0.5" />
        <line x1="14.2" y1="25.8" x2="7.1" y2="32.9" strokeOpacity="0.5" />
      </svg>
    ),
    body: 'As the ego diminishes, what was always present but hidden begins to emerge: the Being, the Soul, the higher nature that is our true identity. This is not the creation of something new, but the uncovering of what was always there beneath the accumulations of conditioning.',
    detail: 'The birth of the soul corresponds to the gradual awakening of deeper levels of consciousness, from the ordinary waking state through ever more refined and expansive states of perception, culminating in what the traditions call Samadhi, Satori, Enlightenment, or Union with God.',
  },
  {
    number: '03',
    title: 'Sacrifice for Humanity',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
        <path d="M20 34 C20 34 5 23 5 13 C5 8.3 8.8 5 13 5 C16.2 5 19 7.5 20 9 C21 7.5 23.8 5 27 5 C31.2 5 35 8.3 35 13 C35 23 20 34 20 34 Z" strokeOpacity="0.85" />
        <line x1="20" y1="2" x2="20" y2="4" strokeOpacity="0.6" />
        <line x1="26.5" y1="3.3" x2="25.5" y2="5.1" strokeOpacity="0.5" />
        <line x1="13.5" y1="3.3" x2="14.5" y2="5.1" strokeOpacity="0.5" />
        <line x1="32.2" y1="8" x2="30.5" y2="9.3" strokeOpacity="0.5" />
        <line x1="7.8" y1="8" x2="9.5" y2="9.3" strokeOpacity="0.5" />
        <line x1="36" y1="14" x2="33.8" y2="14.5" strokeOpacity="0.4" />
        <line x1="4" y1="14" x2="6.2" y2="14.5" strokeOpacity="0.4" />
      </svg>
    ),
    body: 'The fully realised individual does not withdraw from the world but returns to it as a conscious servant of others. This is the Bodhisattva ideal of Buddhism, the Gnostic Apostle, the Rosicrucian who lives in the world as a physician of souls.',
    detail: 'Genuine self-realisation is not a private achievement but a capacity for service. The light that has been received must be shared. This is the living meaning of the great compassionate figures throughout history: Buddha, Jesus, Socrates, those who gave everything for the awakening of their fellow human beings.',
  },
]

const COSMOLOGY_POINTS = [
  {
    title: 'The Seven Bodies',
    body: 'The human being is not merely a physical organism. According to the Gnostic-Hermetic tradition, we are constituted of seven interpenetrating bodies of increasing subtlety (physical, vital, astral, mental, causal, buddhic, and atmic), each corresponding to a dimension of the cosmos.',
  },
  {
    title: 'The Tree of Life',
    body: 'The Kabbalistic Tree of Life maps the structure of the cosmos from the infinite divine (Ain Soph Aur) through ten Sephiroth, spheres of divine emanation, down to the material world of Malkuth. It is simultaneously a map of the cosmos, the human being, and the soul\'s path of return.',
  },
  {
    title: 'The Law of Three',
    body: 'All of creation operates through three forces: positive, negative, and reconciling. Father, Son, Holy Spirit; Brahma, Vishnu, Shiva; Sulphur, Mercury, Salt. This trinity underlies every process of manifestation and transformation in the cosmos.',
  },
  {
    title: 'Karma and Dharma',
    body: 'Karma, the law of cause and effect, governs the soul\'s path across multiple lives. Every thought, emotion, and action has consequences that must eventually be faced. Dharma is conscious action in alignment with cosmic law: the path that creates liberation rather than further binding.',
  },
  {
    title: 'The Ray of Creation',
    body: 'The cosmos unfolds through a Ray of Creation, an emanation from the Absolute through multiple worlds of decreasing vibration and increasing density, from the solar Absolute down through the galaxies, suns, planetary chains, and finally the mineral, plant, animal, and human kingdoms.',
  },
  {
    title: 'The Many Lives of the Soul',
    body: 'Reincarnation, the transmigration of the soul through many lives, is taught in Egyptian, Greek, Hindu, Buddhist, Kabbalistic, and Gnostic traditions alike. The soul takes on successive physical bodies as part of a long path of experience, purification, and eventual liberation.',
  },
]

const SELF_KNOWLEDGE = [
  'The ordinary human being is largely mechanical, reacting automatically to stimuli rather than choosing consciously.',
  'Within each person is a genuine essence, a spark of consciousness that is our true nature, distinct from the mechanical personality.',
  'Through self-observation, we begin to see the machinery of our psychology with clarity and without judgment.',
  'The faculty of consciousness can be developed, expanded from its ordinary dim state into full, radiant awakening.',
  'The fundamental question of spiritual life is: Who am I? Not as a philosophical puzzle, but as a living inquiry.',
  'All suffering ultimately arises from ignorance of our own true nature; self-knowledge is therefore the foundation of liberation.',
]

const BASE = 'https://gnosistasmania.com.au'

export default function CoreTeachingsPage() {
  usePageMeta(
    'Three Factors of the Revolution of Consciousness | Gnosis Tasmania',
    'The core teachings of Gnosis: the Three Factors of the Revolution of Consciousness, the Tree of Life, Kabbalah, and self-knowledge. Classes in Tasmania.',
    '/core-teachings'
  )

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Three Factors of the Revolution of Consciousness | Gnosis Tasmania',
    'description': 'The core teachings of Gnosis as synthesised by Samael Aun Weor: the Three Factors of the Revolution of Consciousness (Psychological Death, Second Birth, Sacrifice for Humanity), the Tree of Life, and Kabbalah.',
    'url': `${BASE}/core-teachings`,
    'inLanguage': 'en-AU',
    'about': [
      { '@type': 'Thing', 'name': 'Three Factors of the Revolution of Consciousness' },
      { '@type': 'Thing', 'name': 'Psychological Death' },
      { '@type': 'Thing', 'name': 'Second Birth' },
      { '@type': 'Thing', 'name': 'Sacrifice for Humanity' },
      { '@type': 'Thing', 'name': 'Tree of Life' },
      { '@type': 'Thing', 'name': 'Kabbalah' },
      { '@type': 'Thing', 'name': 'Gnosis' },
    ],
    'mentions': {
      '@type': 'Person',
      '@id': `${BASE}/#samael-aun-weor`,
      'name': 'Samael Aun Weor',
    },
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Gnosis Tasmania',
      'url': BASE,
    },
    'provider': {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      'name': 'Gnosis Tasmania',
    },
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroCreationImg}
        alt="Creation of Adam by Michelangelo, the divine spark reaching toward human consciousness"
        overlay="bg-gradient-to-b from-[#1c1409]/60 via-[#1c1409]/45 to-[#1c1409]/80"
        position="center top"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Self-Knowledge · The Three Factors · Cosmology</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Core Teachings
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            The fundamental principles of Gnostic wisdom: a coherent map of the self, the cosmos, and the path of inner transformation.
          </p>
        </div>
      </HeroParallax>

      {/* ── Gnosis: Tradition and Revelation ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>The Foundation</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-6">
              Gnosis: Tradition and Revelation
            </h2>
            <GoldRule className="mb-8" />
            <p className="text-[#4a3a26] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              The word Gnosis comes from the Greek <em>γνῶσις</em> - direct, experiential knowledge of truth. Not belief, not opinion, not the memorisation of doctrine, but lived inner experience: the kind of knowledge that transforms the one who receives it.
            </p>
            <p className="text-[#4a3a26] leading-relaxed max-w-3xl mx-auto">
              In this sense, Gnosis is not the property of any one tradition. It is the living thread that runs through all authentic spiritual civilisations throughout history - the esoteric core that each great religion preserves beneath its outer forms. Whether encountered in the mysteries of ancient Egypt, the philosophy of Greece, the Kabbalah, the mysticism of the early Christians, Sufism, or the inner schools of Buddhism and Hinduism, the essence of Gnosis is always the same: the direct awakening of consciousness to its own true nature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-[#e8d5b0] rounded-sm p-8">
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Tradition</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-4">
                The Tradition is the unbroken chain of transmission through which the perennial wisdom has been preserved and communicated across time. It is not a fixed dogma but a living current - the accumulated knowledge, symbol, and practice of those who have genuinely walked the inner path and passed on what they found.
              </p>
              <p className="text-sm text-[#6b5535] leading-relaxed">
                This Tradition has expressed itself through the initiatory colleges of Egypt and Greece, the early Gnostic schools, the Hermetic and Kabbalistic lineages of the medieval period, the Rosicrucian brotherhoods, and the great synthesisers of the modern era. Beneath the differences of culture and language, a single thread of inner wisdom runs through them all.
              </p>
            </div>
            <div className="bg-white border border-[#e8d5b0] rounded-sm p-8">
              <div className="w-8 h-[2px] bg-[#c9a96e] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">Revelation</h3>
              <p className="text-[#4a3a26] leading-relaxed mb-4">
                Revelation is not doctrine received from outside, but the direct inner experience that genuine practice makes possible. It is the living fire within the Tradition - the actual encounter with truth that occurs when consciousness is genuinely awakened through sustained inner work.
              </p>
              <p className="text-sm text-[#6b5535] leading-relaxed">
                The Tradition provides the map, the methods, and the context. Revelation is the path itself - the personal, immediate experience of the realities the Tradition describes. Without practice, the Tradition becomes mere scholarship. Without the Tradition, personal experience lacks orientation and depth. Together, they constitute the complete Gnostic path.
              </p>
            </div>
          </div>

          <div className="bg-[#2a1e12] rounded-sm p-8 text-center">
            <p className="text-[#c8b89a] text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              The modern synthesis of this perennial wisdom was produced by Samael Aun Weor (1917-1977), whose more than seventy books draw together the esoteric teachings of Egypt, Greece, Christianity, Judaism, Buddhism, Hinduism, and the Western alchemical tradition into a single coherent and practical system - accessible to any sincere aspirant, regardless of background.
            </p>
            <GoldRule className="mb-0" />
          </div>
        </div>
      </section>

      {/* ── Self Knowledge ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>The First Teaching</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                Know Thyself
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                The instruction carved above the entrance to the Oracle at Delphi, <em>Γνῶθι σεαυτόν, Know Thyself</em>, is the master key of all Gnostic teaching. Before anything else can be understood, the aspirant must turn their attention inward and begin the patient, honest work of self-knowledge.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                This is not a simple matter. The ordinary human being knows almost nothing of their own inner life. We believe we know why we feel what we feel, why we do what we do; but in reality, the vast majority of our inner life operates mechanically, below the threshold of conscious awareness.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-8">
                The Gnostic teaching of self-knowledge begins with the recognition of this state, not as a judgment, but as an honest observation. From this recognition, the real work can begin.
              </p>
              <Blockquote cite="Socrates (Plato, Apology)">
                "The greatest wisdom is to know that you know nothing."
              </Blockquote>
            </div>
            <div className="space-y-3">
              {SELF_KNOWLEDGE.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-4">
                  <CheckIcon />
                  <p className="text-sm text-[#4a3a26] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Factors ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="The Central Teaching"
            title="The Three Factors of the Revolution of Consciousness"
            subtitle="The path of inner transformation has always been understood in three stages: death, birth, and sacrifice. These are not sequential steps but three simultaneous and inseparable dimensions of spiritual development."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {THREE_FACTORS.map(({ number, title, icon, body, detail }) => (
              <div key={title} className="bg-white border border-[#e8d5b0] rounded-sm p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-[#c9a96e] font-mono font-bold">{number}</span>
                  {icon}
                </div>
                <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">{title}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed mb-4">{body}</p>
                <div className="border-t border-[#e8d5b0] pt-4">
                  <p className="text-xs text-[#6b5535] leading-relaxed italic">{detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Khunrath Parallax ─────────────────────────────────────────────────── */}
      <QuoteParallax
        src={artKhunrathImg}
        alt="Heinrich Khunrath's alchemical diagram - the oratory and laboratory united"
        quote="If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you."
        cite="Gospel of Thomas, Saying 70"
      />

      {/* ── Cosmology ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Cosmology and Symbolism"
            title="The Architecture of the Universe"
            subtitle="Gnosis provides a complete map of the cosmos, not as an abstract theory, but as a living reality that can be directly explored through the development of consciousness."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {COSMOLOGY_POINTS.map(({ title, body }) => (
              <div key={title} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-6">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{title}</h3>
                <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <figure className="w-full max-w-md overflow-hidden rounded-sm shadow-xl border border-[#c8b89a]">
              <picture>
                <source srcSet={artKircherTreeOfLifeImgSrcset} sizes="(min-width: 768px) 448px, 100vw" type="image/webp" />
                <img
                  src={artKircherTreeOfLifeImg}
                  alt="Kabbalistic Tree of Life by Athanasius Kircher - the ten Sephiroth and the structure of creation"
                  width={1128} height={1668}
                  className="w-full h-auto"
                  loading="lazy" decoding="async"
                />
              </picture>
              <figcaption className="text-xs text-[#6b5535] italic text-center py-2.5 px-4 bg-[#f8f1e3] border-t border-[#c8b89a]">
                Athanasius Kircher, Oedipus Aegyptiacus (1652). The most influential rendering of the Kabbalistic Tree of Life in the Western esoteric tradition, mapping the ten Sephiroth and the structure of divine creation. Public domain.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Rosarium + The Path ────────────────────────────────────────────────── */}
      {/* No fade-section: ArtBanner image is inside. Text column uses fade-content. */}
      <section className="py-20 px-4 bg-[#faf6ef]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <ArtBanner
                src={artRosariumImg}
                srcWebp={artRosariumImgWebp}
                srcsetWebp={artRosariumImgSrcset}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Rosarium Philosophorum, the King and Queen of the alchemical process"
                caption="Rosarium Philosophorum (c. 1550). The King and Queen, the solar and lunar forces within the human being, whose sacred union is the central alchemical mystery. Public domain."
                objectPosition="center top"
                heightClass="h-80 sm:h-[400px]"
              />
            </div>
            <div className="fade-content">
              <SectionLabel>The Path</SectionLabel>
              <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6 leading-snug">
                Inner Alchemy: The Royal Art
              </h2>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                The alchemists described their work in the symbolic language of metals and fire, of kings and queens, of the conjunction of sun and moon. Beneath this rich symbolism lies a practical science of consciousness: the transmutation of the base, mechanical nature of the fallen human being into the gold of the fully awakened soul.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-5">
                This is not metaphor in the diminished sense of the word. It is a real process, worked out in the laboratory of the human body and soul, using the energies and forces with which nature has endowed every human being. The alchemists called it the Royal Art because it is the highest of all arts: the art of self-transformation.
              </p>
              <p className="text-[#4a3a26] leading-relaxed mb-8">
                The Gnostic teaching provides the specific knowledge and practices required for this inner work, not as a belief to be accepted, but as a science to be verified through your own direct experience.
              </p>
              <Link
                to="/practices"
                className="inline-block bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold text-sm px-6 py-3 rounded-sm transition-colors tracking-wide"
              >
                Explore the Practices →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divine Mother Parallax ───────────────────────────────────────────── */}
      <QuoteParallax
        src={artBouguereauVirginImg}
        alt="Virgin and Child by William-Adolphe Bouguereau - an image of the Divine Mother"
        position="center 10%"
        overlay="bg-[#1c1409]/65"
        quote="Love cannot be defined because it is the Divine Mother of the world."
        cite="Samael Aun Weor, The Perfect Matrimony"
      />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Explore These Teachings in Depth</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            Our introductory course covers these teachings systematically over 34 sessions, from the foundations of self-knowledge to the most advanced aspects of inner cosmology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/introduction-to-gnosis"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View the Course Outline
            </Link>
            <Link
              to="/contact"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
