import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, ParallaxCTA, QuoteParallax, GoldRule, SectionLabel, SectionHeading, Blockquote, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import heroZenImg            from '../assets/hero_zen.jpg?format=webp'
import artBlakeJacobsImg     from '../assets/art_blake_jacobs_ladder.jpg?format=webp'
import artSplendorSolisImg   from '../assets/art_splendor_solis_resurrection.jpg?format=webp'
import esotericPeacockImg   from '../assets/esoteric_peacock.jpg?format=webp'
import artKhunrathRebisImg  from '../assets/art_khunrath_rebis.jpg?format=webp'

const PRACTICES = [
  {
    id: 'meditation',
    label: '01 · Meditation',
    title: 'The Stillness Within',
    body: [
      'Meditation is the cornerstone of Gnostic practice. It is not simply relaxation, nor the mere quieting of surface thoughts. It is the systematic development of consciousness: the progressive stilling of the inner machinery until the deep silence of the Being becomes accessible.',
      'In the Gnostic tradition, meditation unfolds through four stages: relaxation (releasing physical and psychological tension), concentration (fixing the attention on a single point), meditation proper (allowing the concentrated mind to penetrate into the nature of things), and samadhi (the state of union in which the meditator, the act of meditation, and the object of meditation become one).',
      'With regular practice, even brief meditations begin to produce tangible results: greater presence, clarity, equanimity, and moments of genuine insight into the nature of the self.',
    ],
    practices: [
      'Daily sitting practice: 15 to 30 minutes minimum',
      'Concentration on a candle flame, a mantra, or an inner image',
      'Body relaxation as the foundation of all deeper practice',
      'The retrospective meditation, reviewing the day in reverse at night',
      'Meditation on the psychological defects uncovered through self-observation',
    ],
  },
  {
    id: 'self-observation',
    label: '02 · Self-Observation',
    title: 'The Witness Within',
    body: [
      'Self-observation is the foundational practice of the Gnostic path, and the most immediately accessible. It requires no special equipment, no particular place, and no prior training. It can be practised at any moment of ordinary daily life.',
      'To observe oneself means to divide attention: to be simultaneously aware of what is happening around us and of what is happening within us, our thoughts, our emotions, our physical sensations, our automatic reactions. This divided attention is the seed of genuine consciousness.',
      'Most of us live in a state of what the traditions call "sleep," wholly absorbed in our circumstances, identified with our mental chatter and emotional reactions, with no awareness of the observer within. Self-observation is the first step out of this state.',
    ],
    practices: [
      'Continuous self-remembering throughout the day',
      'Observing thoughts without identifying with them',
      'Watching emotional reactions arise and pass without being swept away',
      'Noticing automatic behaviours and mechanical patterns',
      'The evening review, impartially reviewing the day\'s inner states',
    ],
  },
  {
    id: 'dream-yoga',
    label: '03 · Dream Yoga',
    title: 'Consciousness in the Inner Worlds',
    body: [
      'The Gnostic tradition teaches that what we call sleep is not a loss of consciousness, but a shift of awareness into subtler planes of existence. The astral body, the vehicle of consciousness that interpenetrates the physical, continues to function during sleep, navigating inner worlds that are as real and structured as the physical world, if governed by different laws.',
      'Dream yoga, the cultivation of lucid awareness in sleep, is among the most ancient practices of the world\'s esoteric traditions. In the Tibetan Vajrayana tradition it is called Milam; in the Gnostic tradition it is developed through specific mantras, exercises, and techniques that induce lucid dreaming and conscious out-of-body experience.',
      'The purpose of this practice is not merely to have interesting dreams. It is to awaken consciousness in a realm where it can encounter higher aspects of the self, receive genuine teaching and guidance, and explore the inner structure of the cosmos directly.',
    ],
    practices: [
      'Evening mantras to induce conscious dreaming',
      'Keeping a detailed dream journal to develop dream recall and awareness',
      'The retrospection technique, reviewing the day in reverse before sleep',
      'The technique of conscious awakening, carrying waking awareness into the dream state',
      'Analysis of dream symbolism in light of Gnostic cosmology',
    ],
  },
  {
    id: 'mantras',
    label: '04 · Mantras',
    title: 'The Science of Sound',
    body: [
      'The word mantra comes from Sanskrit: man (mind) and tra (instrument or tool). A mantra is a sound, a syllable, word, or phrase, that when correctly pronounced produces specific effects in the energy of the practitioner. This is not superstition but a precise science.',
      'The Gnostic tradition teaches that the universe was created through sound: the primordial Word, the Logos, that brings form out of formlessness. Every letter of every sacred alphabet is a vibration; every sacred name is a key to specific forces within the cosmos and within the human organism.',
      'Mantric practice works directly with the subtle energies of the human organism. Different mantras work on different centres and different bodies, awakening the chakras, elevating the vital force, harmonising the emotional body, and opening the higher faculties of consciousness.',
    ],
    practices: [
      'The vowels: I-E-O-U-A, the fundamental toning practice for all five vowels',
      'Egyptian and Sanskrit seed syllables for specific chakra activation',
      'Mantras for conscious dreaming and astral projection',
      'Healing mantras for the vital force and physical health',
      'The practice of sacred names drawn from Egyptian, Hebrew, and Sanskrit traditions',
    ],
  },
  {
    id: 'alchemy',
    label: '05 · Inner Alchemy',
    title: 'Transmutation of Energy',
    body: [
      'The alchemists devoted their lives to the transmutation of base metals into gold. The outer work was symbolic; the real laboratory was the human organism, and the real gold was awakened consciousness. Inner alchemy, the transmutation of the creative energies of the human being into the higher forces of soul development, is the most exalted and demanding practice of the Gnostic path.',
      'All living beings are powered by a creative force, called chi in Chinese medicine, prana in Indian tradition, the Holy Spirit in Christian mysticism, and the Philosophical Mercury in alchemy. This force, when directed downward through mechanical desire and reaction, becomes the fuel of the ego. When transmuted and directed upward, it becomes the nourishment of the awakening soul.',
      'The Gnostic tradition provides a complete science of this transmutation: the specific practices, understandings, and inner work required to redirect the most powerful energies of the human organism toward their highest possible purpose.',
    ],
    practices: [
      'Understanding the role of sexual energy in spiritual development',
      'Pranayama and specific breathing practices for energy transmutation',
      'The inner fire: awakening and directing the Kundalini energy',
      'The sacred relationship as a vehicle for alchemical transformation',
      'The practice of chastity as conscious redirection of creative force',
    ],
  },
  {
    id: 'daily',
    label: '06 · Daily Practice',
    title: 'The Path Is Lived, Not Studied',
    body: [
      'The Gnostic teaching is ultimately a practical path, one that must be lived and embodied in every moment of ordinary life. No amount of study or understanding can substitute for the direct practice of self-observation, meditation, and inner work.',
      'A structured daily practice is essential. Even thirty minutes of dedicated inner work each day, meditation in the morning, retrospection at night, self-observation throughout the day, creates a cumulative transformation that no occasional retreat or peak experience can achieve.',
      'The teaching is also clear that this work should not create withdrawal from life. Gnosis is not a monastic path. It is the "Fourth Way": the path of the householder, the worker, the person engaged in ordinary life, who uses every circumstance of daily existence as material for inner development.',
    ],
    practices: [
      'Regular daily meditation: concentrated inner work',
      'Self-observation throughout the working day',
      'Consistent self-remembering throughout the day',
      'Evening retrospection, reviewing the day in reverse, impartially',
      'A nightly mantra practice for conscious sleep and inner-world work',
    ],
  },
]

const BASE = 'https://gnosistasmania.com.au'

export default function PracticesPage() {
  usePageMeta(
    'Gnostic Practices — Meditation, Dream Yoga & Inner Alchemy | Gnosis Tasmania',
    'Gnostic practices taught in Tasmania: meditation, self-observation, dream yoga, mantras, and inner alchemy. Practical tools for genuine inner transformation.',
    '/practices'
  )

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Gnostic Practices — Meditation, Dream Yoga & Inner Alchemy',
    'description': 'Gnostic practices taught in Hobart and Launceston, Tasmania: meditation, self-observation, dream yoga, mantras, and inner alchemy. Practical tools for genuine inner transformation in the tradition of Samael Aun Weor.',
    'url': `${BASE}/practices`,
    'inLanguage': 'en-AU',
    'numberOfItems': 5,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Meditation',
        'description': 'The systematic development of consciousness through relaxation, concentration, meditation, and samadhi. The cornerstone of all Gnostic inner work.' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Self-Observation',
        'description': 'Dividing attention to be simultaneously aware of what is happening around us and within us — the foundational practice of the Gnostic path.' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Dream Yoga',
        'description': 'Cultivating conscious awareness in sleep through mantras and retrospection; developing lucid dreaming and conscious out-of-body experience.' },
      { '@type': 'ListItem', 'position': 4, 'name': 'Mantras',
        'description': 'Sacred sounds from Egyptian, Sanskrit, and Hebrew traditions that work directly with the subtle energies of the human organism for awakening and healing.' },
      { '@type': 'ListItem', 'position': 5, 'name': 'Inner Alchemy',
        'description': 'The transmutation of creative energies for the development of consciousness and the dissolution of the psychological ego in the Gnostic-Hermetic tradition.' },
    ],
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
        src={heroZenImg}
        alt="Serene meditation garden, a place of inner stillness"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Meditation · Self-Observation · Dream Yoga · Mantras · Inner Alchemy</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Practices
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Practical methods for direct inner transformation, tools that have been tested and refined across thousands of years of human spiritual development.
          </p>
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Why Practice?</SectionLabel>
          <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6">Theory Without Practice Is Dead</h2>
          <GoldRule className="mb-8" />
          <p className="text-[#4a3a26] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Understanding the Gnostic teachings intellectually is a beginning, not an end. The knowledge must be lived, practised, and verified through direct experience to become transformative. A map is not the territory.
          </p>
          <p className="text-[#4a3a26] leading-relaxed max-w-3xl mx-auto">
            The practices of the Gnostic path are practical tools, many of which can be applied immediately, in the midst of ordinary daily life. They work because they are based on a precise understanding of how consciousness, energy, and the inner life actually function.
          </p>
        </div>
      </section>

      {/* ── Practice Sections ─────────────────────────────────────────────────── */}
      {PRACTICES.map(({ id, label, title, body, practices }, idx) => (
        <Fragment key={id}>
          <section
            id={id}
            className={`py-20 px-4 fade-section ${idx % 2 === 0 ? 'bg-[#faf6ef]' : 'bg-white'}`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-14 items-start">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-xs text-[#c9a96e] font-semibold uppercase tracking-widest mb-2">{label}</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12] mb-6 leading-snug">{title}</h2>
                  {body.map((para, i) => (
                    <p key={i} className="text-[#4a3a26] leading-relaxed mb-5">{para}</p>
                  ))}
                </div>
                <div className={`space-y-3 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-widest mb-4">Key Practices</p>
                  {practices.map(p => (
                    <div key={p} className={`flex items-start gap-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} border border-[#e8d5b0] rounded-sm p-4`}>
                      <CheckIcon />
                      <p className="text-sm text-[#4a3a26] leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {id === 'dream-yoga' && (
            <QuoteParallax
              src={artBlakeJacobsImg}
              alt="Jacob's Ladder by William Blake - angels ascending between heaven and earth"
              position="center 20%"
              quote="Let him who seeks continue seeking until he finds. When he finds, he will become troubled. When he becomes troubled, he will be astonished, and he will rule over the All."
              cite="Gospel of Thomas, Saying 2"
            />
          )}
          {id === 'alchemy' && (
            <QuoteParallax
              src={artKhunrathRebisImg}
              alt="The Rebis, Heinrich Khunrath - the alchemical androgyne representing the union of solar and lunar principles, the inner marriage at the heart of Gnostic alchemy"
              quote="When one has an ego it is very clumsy, but when one disintegrates the ego, the essence becomes free; and such free essence gives one intelligence."
              cite="Samael Aun Weor"
            />
          )}
        </Fragment>
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <ParallaxCTA
        src={esotericPeacockImg}
        alt="The peacock of alchemy - the cauda pavonis, symbol of the stage of inner transformation in which consciousness begins to awaken"
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Begin the Work</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-6">
            Come and Learn in Practice
          </h2>
          <p className="text-[#c8b89a] text-lg leading-relaxed mb-8">
            All of these practices are taught in our classes, not merely described, but demonstrated and guided. Come and experience them for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Our Courses
            </Link>
            <Link
              to="/contact"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </ParallaxCTA>

      <Footer />
    </div>
  )
}
