// MeditationCoursePage.jsx
// New dedicated page for the Meditation Course (/meditation-course).
// Covers the seven core topics taught in the course: relaxation, pranayama,
// breathing exercises, the science of meditation, interiorization/concentration,
// self-observation, and the development of higher faculties.

import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, ParallaxCTA, GoldRule, SectionLabel, CheckIcon } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { BASE } from '../constants.js'

import heroZenImg from '../assets/hero_zen.jpg?format=webp'
import artRembrandtPhilosopherImg from '../assets/art_rembrandt_philosopher.jpg?format=webp'

const TOPICS = [
  {
    id: 'relaxation',
    label: '01 · Relaxation',
    title: 'Relaxation of Body and Mind',
    body: [
      'Genuine meditation cannot begin in a tense body or a restless mind. The first and most essential skill the course develops is the capacity for deep, systematic relaxation: not the superficial unwinding of daily fatigue, but the conscious release of chronic physical holding patterns and the habitual psychological tensions that accumulate beneath the surface of ordinary awareness.',
      'Students learn to move through the body deliberately and attentively, releasing tension from the feet upward, working with each muscle group until the physical vehicle becomes genuinely still. This is not passivity but a precise inner act: the voluntary relinquishment of unnecessary effort, which requires more alertness, not less.',
      'Psychological relaxation runs deeper still. Beneath physical tension lie layers of worry, anticipation, and habitual inner commentary that must also be stilled. The course provides specific techniques for releasing these layers, preparing the practitioner for the deeper states that become available only when the body and lower mind are truly at rest.',
    ],
    practices: [
      'Progressive physical relaxation, moving methodically through the body from feet to crown',
      'Releasing facial tension, the jaw, and the muscles around the eyes',
      'Recognising and dissolving psychological anxiety before it becomes physical holding',
      'Short relaxation practices suitable for integration into a busy daily schedule',
      'The relationship between relaxation, alertness, and the depth of subsequent meditation',
    ],
  },
  {
    id: 'rhythmic-breathing',
    label: '02 · Rhythmic Breathing',
    title: 'Rhythmic Breathing and Pranayama',
    body: [
      'Breath is the bridge between the physical body and the subtler vehicles of consciousness. In every genuine contemplative tradition — Yogic, Taoist, Sufi, and Christian hesychast alike — the breath has been understood not merely as a mechanical process of gas exchange, but as the rhythmic expression of the vital force that animates the living organism.',
      'Pranayama is the ancient science of conscious breath regulation. The word comes from Sanskrit: prana (the vital force, the living breath) and ayama (extension, expansion, or control). To practise pranayama is not simply to breathe slowly or deeply but to work directly and intentionally with the energy that underlies the breath.',
      'The course introduces students to the foundational principles of this science: the relationship between the rhythm of the breath and the rhythm of the nervous system, the way in which the breath influences mental activity, and the specific patterns of breathing that prepare consciousness for the deeper states of concentration and inner stillness. These are not breathing exercises in the ordinary sense, but a systematic training of the vital force.',
    ],
    practices: [
      'Understanding prana as the vital force and its relationship to consciousness',
      'The three-phase breath: inhalation (puraka), retention (kumbhaka), exhalation (rechaka)',
      'Counting and rhythm: establishing a stable, measured breathing pattern',
      'The effect of rhythmic breathing on mental activity and emotional states',
      'Pranayama as preparation for concentration and as a practice in its own right',
    ],
  },
  {
    id: 'breathing-exercises',
    label: '03 · Breathing Exercises',
    title: 'Breathing Exercises',
    body: [
      'Building on the foundations of pranayama theory, the course guides students through a structured sequence of practical breathing techniques. Each technique has a specific purpose and produces specific effects: some calm and ground the nervous system, others energise and clarify attention, and others work directly with the subtle energy centres of the organism.',
      'Students learn the complete yogic breath, which restores the full natural capacity of the respiratory system that most adults have lost. Alternate nostril breathing develops balance between the two hemispheres of the brain and between the solar and lunar currents of the vital body. Other practices work with the retention of breath to intensify concentration and deepen inner stillness.',
      'The emphasis throughout is on quality of attention rather than quantity of breath. A few minutes of genuinely conscious, rhythmic breathing produces more inner effect than extended practice conducted mechanically. Students are taught to work with precision and care, observing the immediate effects of each technique on their inner state.',
    ],
    practices: [
      'The complete yogic breath: abdominal, thoracic, and clavicular phases',
      'Alternate nostril breathing (nadi shodhana) for balance and clarity',
      'Square or box breathing for sustained concentration',
      'Breath retention and its use in deepening meditative absorption',
      'The morning and evening breath practices suitable for daily integration',
    ],
  },
  {
    id: 'science-of-meditation',
    label: '04 · The Science of Meditation',
    title: 'The Science of Meditation',
    body: [
      'Meditation is presented in the Gnostic tradition not as a vague spiritual practice or a technique for stress relief, but as a precise inner science with a clearly defined structure, progressive stages, and verifiable results. The course provides a thorough grounding in this understanding, so that students approach their practice with correct intention and realistic expectation.',
      'The four stages of complete meditation — relaxation, concentration, meditation proper, and samadhi — are explained in depth. Each stage has its own nature, its own challenges, and its own fruits. Relaxation removes the gross obstacles. Concentration focuses and collects the mind. Meditation proper allows the concentrated mind to penetrate into the nature of its object. Samadhi is the state of union in which the division between the meditator, the act of meditation, and the object of meditation temporarily dissolves.',
      'Students also learn the classical obstacles to meditation — distraction, dullness, restlessness, and the subtler forms of subtle identification — and the specific antidotes that the tradition provides for each. Understanding why meditation fails is often as valuable as understanding how it should work.',
    ],
    practices: [
      'The four stages: relaxation, concentration, meditation proper, and samadhi',
      'Choosing an object of meditation and working with it consistently',
      'Recognising and working through the five classical obstacles',
      'The difference between genuine meditation and pleasant inner relaxation',
      'Establishing a sustainable daily practice: duration, timing, and environment',
    ],
  },
  {
    id: 'interiorization',
    label: '05 · Interiorization',
    title: 'Interiorization, Concentration, and Silence of the Mind',
    body: [
      'Ordinary consciousness is perpetually outward-moving: drawn toward sensory experience, absorbed in memory and anticipation, pulled by the currents of association and reaction that constitute the surface of the mind. Genuine meditation requires a reversal of this habitual direction of attention — a deliberate withdrawal of consciousness from the periphery toward the centre.',
      'The Gnostic tradition calls this movement interiorization, and it corresponds to the yogic concept of pratyahara: the withdrawal of the senses, the collecting of scattered attention into a single point. This is not suppression of experience but a change in the relationship between the observer and what is observed. The practitioner does not fight the senses but gently withdraws the fuel of attention from them.',
      'One-pointed concentration — the sustained fixing of attention on a single object without wavering — is the direct result of successful interiorization. When concentration deepens sufficiently, the constant internal commentary of the mind begins to quiet. In the spaces between thoughts, a genuine silence opens: not the silence of suppression, but the natural silence of a mind that has momentarily ceased to generate its own noise. This is the doorway to meditation proper.',
    ],
    practices: [
      'Pratyahara: the practice of withdrawing attention from the senses',
      'Concentration on a single point: candle flame, mantra, or inner image',
      'Working with distractions without suppression or identification',
      'The inner witness: learning to observe mental content without being swept away',
      'Recognising the silence between thoughts and learning to extend it',
    ],
  },
  {
    id: 'self-observation',
    label: '06 · Self-Observation',
    title: 'Self-Observation During Practice',
    body: [
      'Self-observation in meditation has a distinct quality from self-observation in daily life. In daily life, the practice focuses on the external stream of reactions, emotions, and behaviours as they unfold in relationship with circumstances. In meditation, the same capacity is directed toward the subtler movements of the mind itself: the arising and dissolution of thoughts, the quality of attention, the presence or absence of genuine inner stillness.',
      'Students learn to maintain a dual awareness during practice: a part of consciousness that remains engaged with the meditation object while another part observes the meditating process itself. This is not division but depth. It is the same awareness functioning at two levels simultaneously, and its cultivation prevents the common error of becoming absorbed in pleasant inner states without genuine development occurring.',
      'The material encountered in meditation — habitual thought patterns, emotional undercurrents, recurring images and associations — is treated not as distraction to be suppressed but as information about the psychological landscape. The course teaches students how to work constructively with what self-observation reveals during practice.',
    ],
    practices: [
      'The dual awareness: maintaining both the meditation object and the observer',
      'Observing thought patterns without engaging or suppressing them',
      'Noting emotional states during practice without being caught in their content',
      'Using the content of distraction as material for self-knowledge',
      'The retrospective review: examining the quality of a meditation session afterward',
    ],
  },
  {
    id: 'higher-faculties',
    label: '07 · Higher Faculties',
    title: 'Development of Imagination, Inspiration, and Intuition',
    body: [
      'The deeper purpose of meditation is not tranquillity alone but the awakening of faculties of knowing that transcend the ordinary intellect. The Gnostic tradition identifies three of these higher faculties — imagination, inspiration, and intuition — as successive stages in the development of a genuinely awakened inner life, and the meditation course provides a systematic introduction to their cultivation.',
      'Creative imagination in the spiritual sense is not fantasy but the capacity of the awakened consciousness to perceive and work with inner realities through image and symbol. It is the faculty by which the spiritual world becomes perceptible to the practitioner, and its development is inseparable from the deepening of meditation. Inspiration is the faculty of genuine inner communication: the ability to receive understanding from higher aspects of the Being in a way that bypasses the limitations of discursive thought. Intuition is the most direct of the three: the immediate, non-inferential knowing of truth without intermediary process.',
      'These are not mystical abstractions but practical capacities that develop through sustained, sincere inner work. The course introduces the theoretical foundation of each faculty and provides specific practices designed to awaken and strengthen them through consistent daily meditation.',
    ],
    practices: [
      'Imaginative meditation: working with inner images, symbols, and sacred scenes',
      'The practice of Jinas: projecting the body of imagination into an inner space',
      'Discerning genuine inspiration from the products of wishful thinking',
      'Developing inner stillness as the ground from which intuition becomes accessible',
      'Integrating the fruits of meditation into daily life and self-knowledge',
    ],
  },
]

export default function MeditationCoursePage() {
  usePageMeta(
    'Meditation Course | Gnosis Tasmania',
    'A structured course in the theory and practice of Gnostic meditation: relaxation, pranayama, concentration, self-observation, and the development of higher inner faculties. For sincere students ready for daily practice.',
    '/meditation-course'
  )

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Meditation Course',
    description: 'A structured course in Gnostic meditation covering relaxation, pranayama, breathing exercises, the science of meditation, interiorization and concentration, self-observation, and the development of imagination, inspiration, and intuition.',
    provider: {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'Gnosis Tasmania',
      url: BASE,
    },
    url: `${BASE}/meditation-course`,
    inLanguage: 'en-AU',
    educationalLevel: 'Intermediate',
    teaches: TOPICS.map(t => t.title),
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroZenImg}
        alt="A serene meditation garden, embodying the stillness that is the goal and foundation of all genuine inner practice"
        position="center 40%"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">
            Relaxation · Pranayama · Concentration · Samadhi
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Meditation Course
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A structured course in the theory and practice of Gnostic meditation, for students ready to develop a genuine and sustained daily inner life.
          </p>
        </div>
      </HeroParallax>

      {/* ── Introduction ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Practical Next Step</SectionLabel>
            <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-6">
              Beyond the Introduction
            </h2>
            <GoldRule className="mb-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 text-[#4a3a26] leading-relaxed">
            <div>
              <p className="mb-5">
                The Meditation Course is designed for students who have completed or are completing the Introduction to Gnosis and are ready to deepen their inner practice in a structured and sustained way. Where the introductory course covers the broad landscape of Gnostic teaching across thirty-four topics, the Meditation Course focuses with precision on a single subject: the systematic development of consciousness through meditation.
              </p>
              <p>
                This is not a course for the casually curious. It is for students who have recognised, through their own early experience, that genuine inner transformation requires regular, daily practice — and who are committed to establishing exactly that. The teaching is serious, the approach methodical, and the fruits available to anyone who applies what is taught with sincerity and consistency.
              </p>
            </div>
            <div>
              <p className="mb-5">
                The course proceeds through seven carefully ordered areas of study and practice. Each builds on the one before it: without genuine relaxation, concentration cannot arise; without concentration, meditation proper is impossible; without meditation proper, the higher faculties of imagination, inspiration, and intuition remain dormant. The sequence is not arbitrary but reflects the actual structure of inner development as the tradition understands it.
              </p>
              <p>
                Classes are held weekly. Students are expected to maintain a personal daily practice between sessions, bringing their observations, questions, and difficulties back to the group. The work is supported by the community of practice, but it is ultimately individual: each student must develop their own inner life through their own sustained effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider image ─────────────────────────────────────────────────────── */}
      <div className="relative h-64 overflow-hidden fade-section">
        <img
          src={artRembrandtPhilosopherImg}
          alt="Philosopher in Meditation by Rembrandt van Rijn — a figure in quiet contemplation before a great arched window, warm amber light streaming into the interior"
          className="w-full h-full object-cover object-[center_20%]"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6 max-w-2xl">
            <p className="font-display text-xl sm:text-2xl font-light text-[#f8f1e3] italic leading-relaxed mb-3">
              "When the mind is still and in silence, the Essence is liberated from its prison. Only then does illumination arrive of itself."
            </p>
            <cite className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest not-italic">
              Samael Aun Weor
            </cite>
          </blockquote>
        </div>
      </div>

      {/* ── Topic Sections ────────────────────────────────────────────────────── */}
      {TOPICS.map(({ id, label, title, body, practices }, idx) => (
        <section
          key={id}
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
                <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-widest mb-4">What You Will Learn</p>
                {practices.map(p => (
                  <div
                    key={p}
                    className={`flex items-start gap-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} border border-[#e8d5b0] rounded-sm p-4`}
                  >
                    <CheckIcon />
                    <p className="text-sm text-[#4a3a26] leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Who This Course Is For ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Who This Course Is For</SectionLabel>
          <h2 className="font-display text-4xl font-light text-[#f8f1e3] mb-6">
            For Sincere Students of Inner Work
          </h2>
          <GoldRule className="mb-8" />
          <p className="text-[#c8b89a] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            The Meditation Course is open to students who have completed or are currently attending the Introduction to Gnosis, and to any sincere aspirant who approaches with genuine intention and a willingness to commit to regular daily practice. No prior meditation experience is required, but a willingness to work seriously is essential.
          </p>
          <p className="text-[#9e8a6e] leading-relaxed max-w-3xl mx-auto mb-10">
            Classes are held weekly. Students are expected to practise daily between sessions — even brief daily practice, done consistently, produces far more genuine development than occasional longer sessions. The teaching will meet you where you are, but the inner work itself must be your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Enquire About Classes
            </Link>
            <Link
              to="/courses"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
