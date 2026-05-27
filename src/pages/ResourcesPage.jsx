import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, SectionHeading, Blockquote } from '../components/ui.jsx'
import artFluddNaturaImg  from '../assets/art_fludd_natura.jpg?format=webp'
import heroMysticLambImg  from '../assets/hero_mystic_lamb.jpg?format=webp'

const SAMAEL_BOOKS = [
  {
    title: 'The Perfect Matrimony',
    year: '1950',
    description: 'Samael\'s most celebrated work. A profound study of the sacred relationship between man and woman as the primary vehicle for alchemical transmutation and spiritual liberation. Essential reading for every sincere student.',
  },
  {
    title: 'The Revolution of the Dialectic',
    year: '1983',
    description: 'The definitive Gnostic teaching on psychological self-transformation: the nature of the ego, the methods of its dissolution, the development of the Being, and the emergence of genuine consciousness through sustained inner work.',
  },
  {
    title: 'Tarot and Kabbalah',
    year: '1978',
    description: 'A comprehensive guide to the Kabbalistic Tree of Life and the twenty-two Major Arcana, revealing the esoteric correspondences between the Sephiroth, the paths, and the inner structure of the cosmos and the human soul.',
  },
  {
    title: 'The Pistis Sophia Unveiled',
    year: '1983',
    description: 'A verse-by-verse commentary on the Pistis Sophia, one of the most important surviving Gnostic scriptures, revealing the profound esoteric teaching hidden within this ancient dialogue between Christ and his disciples.',
  },
  {
    title: 'The Major Mysteries',
    year: '1956',
    description: 'A comprehensive treatment of the esoteric path of initiation: the structure of the inner path, the nature of its stages, and the practical work required at each threshold. One of his most widely studied foundational texts.',
  },
  {
    title: 'The Three Mountains',
    year: '1998',
    description: 'Samael\'s autobiographical account of his own complete initiatic journey — a vivid and precise description of the inner experiences, trials, and realisations of the path of liberation as he himself lived it.',
  },
  {
    title: 'Introduction to Gnosis',
    year: '1964',
    description: 'A structured and accessible introduction to the full breadth of the Gnostic teaching, written as a systematic course for new students. Covers the key doctrines, practices, and cosmological teachings from the ground up.',
  },
  {
    title: 'The Mystery of the Golden Blossom',
    year: '1976',
    description: 'A deep study of Kundalini, the sacred fire of the spine, and its relationship to the alchemical transmutation of the creative energy. Draws on Hindu, Taoist, and Hermetic sources to illuminate the inner science of awakening.',
  },
  {
    title: 'The Esoteric Treatise of Hermetic Astrology',
    year: '1972',
    description: 'Astrology studied not as a system of prediction but as a living map of cosmic forces and their influence upon the soul\'s journey through successive incarnations. A unique synthesis of esoteric science and practical cosmology.',
  },
]

const REFERENCED_TEXTS = [
  {
    title: 'The Bhagavad Gita',
    origin: 'Hindu scripture, c. 400-200 BCE',
    description: 'The sacred dialogue between Arjuna and Krishna, extensively cited by Samael for its teachings on consciousness, karma, the nature of the soul, and the path of liberation through selfless action and inner renunciation.',
  },
  {
    title: 'The Popol Vuh',
    origin: 'Mayan scripture, pre-colonial',
    description: 'The great Mayan Book of the Dawn of Life, frequently referenced in Samael\'s cosmological writings. Its creation mythology, the trials of the Hero Twins, and the cyclical destruction of human races are interpreted as initiatic allegory throughout his work.',
  },
  {
    title: 'The Tibetan Book of the Dead',
    origin: 'Padmasambhava, 8th century CE',
    description: 'The Bardo Thodol — Tibetan wisdom on the nature of consciousness at death and in the inner worlds — is a consistent reference in Samael\'s teachings on the astral body, dream yoga, and the soul\'s experience between incarnations.',
  },
  {
    title: 'The Zohar',
    origin: 'Moses de León, c. 1280 CE',
    description: 'The foundational text of the Kabbalistic tradition. Samael drew extensively from the Zohar throughout his teachings on the Tree of Life, the nature of the divine, and the soul\'s path through the ten Sephiroth.',
  },
  {
    title: 'The Pistis Sophia',
    origin: 'Anonymous, c. 3rd-4th century CE',
    description: 'The Gnostic scripture in which the risen Christ reveals the mysteries of the divine worlds to his disciples. Samael devoted an entire volume of commentary to it — his most scholarly and detailed exegetical work.',
  },
  {
    title: 'The Gospel of Thomas',
    origin: 'Nag Hammadi Library, c. 50-140 CE',
    description: '114 sayings attributed to the living Jesus, discovered at Nag Hammadi in 1945. "The Kingdom is inside you and it is outside you." Cited throughout Samael\'s work as a pure transmission of the esoteric Christian teaching.',
  },
  {
    title: 'The Corpus Hermeticum',
    origin: 'Hermes Trismegistus, c. 100-300 CE',
    description: 'The foundational dialogues of the Western Hermetic tradition, from which Samael drew the core teaching of correspondence: "As above, so below; as within, so without." Foundational to his entire cosmological framework.',
  },
  {
    title: 'The Emerald Tablet',
    origin: 'Attributed to Hermes Trismegistus',
    description: 'Thirteen cryptic verses encoding the entire science of inner alchemy in symbolic language. Samael returned to this text repeatedly as the most concise statement of the alchemical law at the heart of Gnostic practice.',
  },
  {
    title: 'The Secret Doctrine',
    origin: 'Helena P. Blavatsky, 1888',
    description: 'Blavatsky\'s monumental synthesis of Eastern and Western esotericism, extensively cited in Samael\'s cosmological writings for its treatment of the seven root races, the rounds of cosmic evolution, and the ancient wisdom tradition.',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroMysticLambImg}
        alt="Adoration of the Mystic Lamb by Jan van Eyck, a treasury of sacred art and wisdom"
        heightClass="h-[60vh] min-h-[400px]"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Books · Sacred Scriptures · Referenced Texts</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Resources
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A curated library of essential texts for those who wish to explore Gnostic wisdom in greater depth.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4a3a26] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            The following resources have been carefully selected as reliable starting points for serious study. No list can substitute for direct practice; but a good book at the right moment can illuminate the path ahead considerably.
          </p>
          <p className="text-sm text-[#4a3a26] max-w-3xl mx-auto">
            For accessible introductions to the core teachings themselves, explore our{' '}
            <a href="/articles" className="text-[#c9a96e] hover:text-[#b8963e] underline underline-offset-2 transition-colors">Gnostic articles</a>
            {' '}or visit the{' '}
            <a href="/core-teachings" className="text-[#c9a96e] hover:text-[#b8963e] underline underline-offset-2 transition-colors">Core Teachings</a>
            {' '}page.
          </p>
        </div>
      </section>

      {/* ── Samael Aun Weor ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Contemporary Gnosis"
            title="Works of Samael Aun Weor"
            subtitle="Samael Aun Weor's synthesis of the perennial wisdom spans more than seventy books. These nine are among the most widely read and foundational for serious students."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMAEL_BOOKS.map(({ title, year, description }) => (
              <div key={title} className="bg-white border border-[#e8d5b0] rounded-sm p-6 flex flex-col">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-1 leading-snug">{title}</h3>
                <p className="text-xs text-[#c9a96e] font-medium mb-3">Samael Aun Weor · {year}</p>
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

      {/* ── Referenced Texts ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Source Texts"
            title="Texts He Referenced"
            subtitle="Samael Aun Weor drew from an extraordinarily wide range of sacred scriptures, Gnostic writings, Hermetic texts, and modern esoteric works. These are among the most frequently cited throughout his body of work."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERENCED_TEXTS.map(({ title, origin, description }) => (
              <div key={title} className="bg-white border border-[#e8d5b0] rounded-sm p-6 flex flex-col">
                <div className="w-8 h-[2px] bg-[#c9a96e] mb-4" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-1 leading-snug">{title}</h3>
                <p className="text-xs text-[#c9a96e] font-medium mb-3">{origin}</p>
                <p className="text-sm text-[#4a3a26] leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blockquote ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto">
          <Blockquote cite="Samael Aun Weor">
            "The Gnostic who does not read, meditates; the Gnostic who reads, also meditates. All study must lead to meditation, and all meditation must lead to experience."
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
            <a
              href="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Our Courses
            </a>
            <a
              href="/contact"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
