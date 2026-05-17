import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, QuoteParallax, GoldRule, SectionLabel, SectionHeading, ArtBanner, Blockquote } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import heroEgyptianImg            from '../assets/hero_egyptian.jpg?format=webp'
import artFluddNaturaImg          from '../assets/art_fludd_natura.jpg?format=webp'
import artDurerImg                from '../assets/art_durer_melencolia.jpg?format=webp'
import artVitruvianManImg         from '../assets/art_vitruvian_man.jpg'
import artVitruvianManImgWebp     from '../assets/art_vitruvian_man.jpg?format=webp'
import heroSchoolAthensImg        from '../assets/hero_school_athens.jpg?format=webp'
import artHermesTrismegistusImg   from '../assets/art_hermes_trismegistus.jpg?format=webp'

const TIMELINE = [
  {
    era: 'Ancient Egypt',
    period: 'c. 3100 BCE - 30 BCE',
    color: '#c9a96e',
    content: [
      {
        heading: 'The Mystery Schools',
        body: 'The earliest recorded transmission of Gnostic wisdom flows from ancient Egypt. The Mystery Schools of Memphis and Thebes preserved a complete science of the soul: understanding of the human constitution, the nature of consciousness, and the path of spiritual liberation. The Egyptian Book of the Dead is not a funerary text in the ordinary sense, but an initiatic manual for navigating the inner worlds.',
      },
      {
        heading: 'Ma\'at: Cosmic Law',
        body: 'Central to Egyptian wisdom was the concept of Ma\'at: truth, justice, balance, and cosmic order. The feather of Ma\'at weighing against the heart of the deceased is a symbolic representation of the soul\'s ultimate accountability to universal law, a teaching that echoes in every subsequent esoteric tradition.',
      },
      {
        heading: 'Hermes Trismegistus',
        body: 'The Egyptians venerated Thoth as the divine scribe and lord of wisdom. When the Greeks encountered this tradition, they identified Thoth with Hermes and called him Trismegistus, meaning "thrice greatest." The body of Hermetic literature attributed to this figure became one of the foundational pillars of Western esotericism.',
      },
    ],
  },
  {
    era: 'Ancient Greece & the Mysteries',
    period: 'c. 600 BCE - 200 CE',
    color: '#a88a5c',
    content: [
      {
        heading: 'The Orphic and Pythagorean Schools',
        body: 'Orphism taught the transmigration of the soul and the need for purification across many lives. Pythagoras, who had studied in Egypt and the East, returned to Greece with a complete system of number, music, and cosmic harmony: the outward form of an inner science of consciousness.',
      },
      {
        heading: 'Plato and the Platonic Tradition',
        body: 'Plato\'s dialogues preserve, in philosophical form, the core teachings of the Mystery Schools. The Allegory of the Cave, the Phaedo\'s discussion of the soul, and the Symposium\'s ladder of Eros are each initiatic texts in their own right. Later, Plotinus, Porphyry, and Iamblichus synthesised this tradition into a comprehensive metaphysical system describing the soul\'s ascent from matter, through soul, to pure intellect, and to the One.',
      },
      {
        heading: 'The Eleusinian Mysteries',
        body: 'For more than a thousand years, thousands of Greeks made the pilgrimage to Eleusis to undergo the Greater Mysteries, an initiatic experience described as a direct encounter with death and resurrection. Cicero wrote that "among the many excellent and divine things that Athens contributed to human life, none was more excellent than the Mysteries."',
      },
    ],
  },
  {
    era: 'Early Christian Gnosis',
    period: 'c. 50 - 400 CE',
    color: '#8a7050',
    content: [
      {
        heading: 'The Gnostic Movements',
        body: 'In the first centuries CE, a rich variety of Gnostic movements flourished alongside orthodox Christianity. The Valentinians, Sethians, Basilideans, and many others preserved a mystical reading of the Christian narrative, one in which Christ\'s teaching was primarily a transmission of self-knowledge and inner liberation, not a system of external belief.',
      },
      {
        heading: 'The Nag Hammadi Library',
        body: 'Discovered in 1945, the Nag Hammadi codices restored to the world a library of Gnostic texts that had been buried in Egypt around 390 CE. Among them, the Gospel of Thomas, which records the hidden sayings of Jesus, opens: "These are the secret words which the living Jesus spoke... Whoever finds the interpretation of these words shall not taste death."',
      },
      {
        heading: 'Suppression and Survival',
        body: 'As Christianity consolidated into an institutional church, the Gnostic movements were suppressed and their texts burned. Yet the flame of inner wisdom never died entirely. It survived through the Manicheans, the Cathars of medieval southern France, and the stream of Hermetic and alchemical philosophy that ran continuously beneath the surface of Western culture.',
      },
    ],
  },
  {
    era: 'Medieval & Islamic Mysticism',
    period: 'c. 700 - 1400 CE',
    color: '#7a6040',
    content: [
      {
        heading: 'Kabbalah and the Tree of Life',
        body: 'The Jewish mystical tradition of Kabbalah reached its great flowering in medieval Spain and southern France. The Zohar, composed in 13th-century Castile, presented a vast symbolic map of the divine: the Tree of Life with its ten Sephiroth, the four worlds of manifestation, and the soul\'s journey through and beyond them.',
      },
      {
        heading: 'Sufism: the Mystical Heart of Islam',
        body: 'Sufism is the esoteric dimension of Islam: the path of the heart, of direct union with the divine. Masters such as Rumi, Ibn Arabi, and Al-Hallaj (who proclaimed "Ana\'l-Haqq," meaning "I am the Truth") transmitted a living knowledge of the divine that runs in a direct line from the same perennial source as the Gnostic traditions of the West.',
      },
      {
        heading: 'Alchemy',
        body: 'Medieval alchemy was the great Hermetic science of transformation, nominally concerned with base metals and gold, but actually encoding in symbolic language a complete science of inner transformation. The lead to be transmuted was the gross, mechanical nature of the human being; the gold was awakened, liberated consciousness.',
      },
    ],
  },
  {
    era: 'Renaissance & Rosicrucianism',
    period: 'c. 1400 - 1700 CE',
    color: '#c9a96e',
    content: [
      {
        heading: 'The Hermetic Renaissance',
        body: 'The rediscovery of the Greek Hermetic texts by Cosimo de\' Medici in 1460 sparked an explosion of esoteric philosophy in Renaissance Italy. Marsilio Ficino, Giovanni Pico della Mirandola, and Giordano Bruno all drew on this ancient wellspring. The great Renaissance artworks, including Botticelli\'s Primavera, Raphael\'s School of Athens, and Leonardo\'s geometrical studies, are saturated with esoteric symbolism.',
      },
      {
        heading: 'The Rosicrucian Manifestos',
        body: 'In the early 17th century, a series of anonymous manifestos announced the existence of a secret brotherhood of Rosicrucian adepts, possessors of a universal knowledge that they intended to share for the transformation of European civilisation. The texts, the Fama Fraternitatis (1614), the Confessio (1615), and the Chemical Wedding of Christian Rosenkreuz (1616), sparked a Europe-wide awakening of interest in esotericism.',
      },
      {
        heading: 'Paracelsus, Boehme, and Fludd',
        body: 'Paracelsus revolutionised medicine by insisting on the union of the spiritual and physical. Jacob Boehme received direct mystical visions of the divine nature. Robert Fludd created encyclopaedic mappings of the cosmos and the human being in terms of musical harmony and the macrocosm-microcosm correspondence, vivid illustrations of the Hermetic tradition at its height.',
      },
    ],
  },
  {
    era: 'Modern Transmission',
    period: 'c. 1800 - present',
    color: '#a88a5c',
    content: [
      {
        heading: 'Helena Blavatsky and Theosophy',
        body: 'Helena Petrovna Blavatsky (1831-1891) founded the Theosophical Society and published The Secret Doctrine, a magisterial synthesis of Eastern and Western esotericism that reintroduced the ancient teachings to a modern, Western audience. Theosophy became the primary gateway through which millions in the late 19th and 20th centuries encountered the idea of spiritual evolution, karma, and the many lives of the soul.',
      },
      {
        heading: 'G.I. Gurdjieff',
        body: 'George Ivanovitch Gurdjieff (1866-1949) spent decades in the East collecting fragments of an ancient teaching, which he transmitted to a circle of Western students as the "Fourth Way." His central insight, that ordinary human beings are essentially mechanical and asleep to their own inner life, and his practical methods of self-observation and transformation are among the most important transmissions of esoteric knowledge in the 20th century.',
      },
      {
        heading: 'Samael Aun Weor',
        body: 'Samael Aun Weor (1917-1977) undertook a definitive synthesis of the perennial wisdom, uniting the Kabbalistic, Hermetic, Rosicrucian, Gnostic, Buddhist, and Hindu streams into a single coherent body of practical teaching. His prolific writings and direct transmission to students around the world became the foundation of the contemporary Gnostic movement as it is taught globally today.',
      },
    ],
  },
]

export default function HistoryPage() {
  usePageMeta(
    'History of Gnosis — Egypt to Samael Aun Weor | Gnosis Tasmania',
    'The history of Gnostic wisdom: from ancient Egypt and Greece through Kabbalah, Sufism, and the Renaissance, to Samael Aun Weor\'s modern synthesis. Taught in Tasmania.',
    '/history'
  )

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroEgyptianImg}
        alt="Ancient Egyptian temple carvings depicting sacred wisdom"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Egypt · Greece · Christianity · Islam · Renaissance · Modern</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            History of Gnosis
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            One unbroken thread of inner wisdom, woven through every great civilisation from the dawn of recorded history to the present day.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Perennial Wisdom</SectionLabel>
          <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6">A Living Transmission</h2>
          <GoldRule className="mb-8" />
          <p className="text-[#4a3a26] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            The philosopher Aldous Huxley called it the <em>Philosophia Perennis</em>, the Perennial Philosophy: the recognition that beneath the extraordinary diversity of human religious and spiritual expression, there is a single, universal wisdom teaching that has appeared again and again in every time and place.
          </p>
          <p className="text-[#4a3a26] leading-relaxed max-w-3xl mx-auto">
            This is not merely a philosophical claim. It is verifiable in the remarkable parallelism of content found between traditions that could not possibly have influenced one another: Egyptian, Greek, Jewish, Christian, Islamic, Hindu, Buddhist, and indigenous traditions all converging on the same fundamental truths about the nature of the self, the cosmos, and the path of inner liberation.
          </p>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────────── */}
      {TIMELINE.map(({ era, period, content }, eraIdx) => (
        <Fragment key={era}>
          <section className={`py-20 px-4 fade-section ${eraIdx % 2 === 0 ? 'bg-[#faf6ef]' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-[#c9a96e]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#c9a96e] font-semibold uppercase tracking-widest">{period}</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12]">{era}</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.map(({ heading, body }) => (
                  <div key={heading} className={`${eraIdx % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} border border-[#e8d5b0] rounded-sm p-6`}>
                    <h3 className="font-display text-lg font-medium text-[#2a1e12] mb-3">{heading}</h3>
                    <p className="text-sm text-[#4a3a26] leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {eraIdx === 0 && (
            <QuoteParallax
              src={artHermesTrismegistusImg}
              alt="Hermes Trismegistus, Siena Cathedral mosaic - the great sage of the ancient world"
              position="center 20%"
              quote="That which is above is like to that which is below, and that which is below is like to that which is above, to accomplish the miracle of unity."
              cite="Hermes Trismegistus, The Emerald Tablet"
            />
          )}
          {eraIdx === 1 && (
            <QuoteParallax
              src={heroSchoolAthensImg}
              alt="School of Athens by Raphael - the great philosophers of antiquity gathered in dialogue"
              position="center 30%"
              quote="It is only after long partnership in a common life devoted to this very thing that a light is kindled from a leaping flame, and thereafter feeds itself."
              cite="Plato, Seventh Letter"
            />
          )}
          {eraIdx === 3 && (
            <QuoteParallax
              src={artFluddNaturaImg}
              alt="Robert Fludd's cosmic diagram - the harmony of the spheres"
              position="center top"
              quote="The sleep of the body becomes the sobriety of the soul, and the closing of the eyes, true vision."
              cite="Corpus Hermeticum, Poimandres (trans. G.R.S. Mead)"
            />
          )}
          {eraIdx === 4 && (
            <QuoteParallax
              src={artDurerImg}
              alt="Melencolia I by Albrecht Dürer - the brooding genius of Renaissance esotericism"
              quote="I do not follow anyone, therefore no one should follow me."
              cite="Samael Aun Weor"
            />
          )}
        </Fragment>
      ))}

      {/* ── Vitruvian Man Quote ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ArtBanner
              src={artVitruvianManImg}
              srcWebp={artVitruvianManImgWebp}
              alt="Vitruvian Man by Leonardo da Vinci"
              caption="Vitruvian Man, Leonardo da Vinci (c. 1490). The human being as microcosm of the divine cosmos: the central teaching of the Hermetic tradition. Public domain."
              objectPosition="center top"
              heightClass="h-[400px]"
            />
          </div>
          <div>
            <SectionLabel>The Unbroken Thread</SectionLabel>
            <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-6 leading-snug">
              The Flame Never Goes Out
            </h2>
            <p className="text-[#4a3a26] leading-relaxed mb-5">
              Throughout history, this body of knowledge has survived persecution, suppression, and the destruction of entire civilisations. The knowledge that was burned in Alexandria lived on in the hands of monks and alchemists. The Gnostic texts buried at Nag Hammadi waited fifteen centuries for the moment of their rediscovery.
            </p>
            <p className="text-[#4a3a26] leading-relaxed mb-8">
              Today, the complete synthesis of this wisdom is available to anyone who seeks it. The teachings that were once reserved for initiates of the mystery schools can now be studied openly - though the inner work they require remains as demanding and as transformative as it has always been.
            </p>
            <Blockquote cite="Gospel of Philip">
              "Truth did not come into the world naked, but it came in types and images. The world will not receive truth in any other way."
            </Blockquote>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-4">Discover the Living Teaching</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            The history of Gnosis is fascinating; but the teaching is ultimately a living practice, not a historical curiosity. Come and experience it for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Explore Our Courses
            </Link>
            <Link
              to="/core-teachings"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Core Teachings
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
