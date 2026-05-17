import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { GoldRule, SectionLabel } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'

import heroPrimaveraImg          from '../assets/hero_primavera.jpg?format=webp'
import esotericLaboratoryImg     from '../assets/esoteric_laboratory.jpg'
import esotericLaboratoryImgWebp from '../assets/esoteric_laboratory.jpg?format=webp'
import artMonaLisaImg            from '../assets/art_mona_lisa.jpg'
import artMonaLisaImgWebp        from '../assets/art_mona_lisa.jpg?format=webp'

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function MeditationPage() {
  usePageMeta(
    'Meditation Classes in Hobart & Launceston | Gnosis Tasmania',
    'Gnostic meditation classes in Hobart and Launceston. Learn relaxation, concentration, meditation, and samadhi — taught in the tradition of Samael Aun Weor. Weekly, donation-based.',
    '/meditation-classes'
  )
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'The Revolution of Meditation',
    'description': 'Weekly practical meditation classes in the Gnostic tradition — the science of inner stillness and the liberation of consciousness. Classes in Hobart and Launceston, Tasmania.',
    'provider': {
      '@type': 'EducationalOrganization',
      'name': 'Gnosis Tasmania',
      'url': 'https://gnosistasmania.com.au',
    },
    'url': 'https://gnosistasmania.com.au/meditation-classes',
    'courseMode': 'in-person',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'AUD',
      'description': 'Donation-based — attend freely, give what you can',
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
        'location': { '@type': 'Place', 'name': 'Launceston', 'address': { '@type': 'PostalAddress', 'addressLocality': 'Launceston', 'addressRegion': 'Tasmania', 'addressCountry': 'AU' } },
        'courseSchedule': { '@type': 'Schedule', 'repeatFrequency': 'P1W' },
      },
    ],
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />
      <main>

        {/* ── Hero - La Primavera ───────────────────────────────────────────── */}
        <header className="relative flex flex-col items-center justify-center text-center px-4 pt-16 min-h-[60vh] overflow-hidden" aria-label="Page hero">
          <div className="absolute inset-0" aria-hidden="true">
            <div
              className="absolute inset-0 bg-cover bg-fixed"
              style={{ backgroundImage: `url(${heroPrimaveraImg})`, backgroundPosition: 'center 25%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1409]/65 via-[#1c1409]/45 to-[#1c1409]/75" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto py-16">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c8b89a] hover:text-[#c9a96e] transition-colors mb-8 tracking-wide uppercase"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gnosis Tasmania
            </Link>
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-3">
              Ongoing · Weekly · Donation-Based
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#f8f1e3] tracking-wide mb-5 leading-tight drop-shadow-lg">
              The Revolution<br className="hidden sm:block" /> of Meditation
            </h1>
            <p className="font-display text-xl sm:text-2xl text-[#e8d5b0] font-light italic leading-relaxed drop-shadow">
              A Gnostic approach to inner stillness and awakening
            </p>
          </div>

          <p className="absolute bottom-5 left-0 right-0 text-center z-10 text-[10px] text-white/35 px-4">
            La Primavera, Sandro Botticelli, Uffizi Gallery, Florence (c. 1482). Public domain.
          </p>
        </header>

        {/* ── Opening quote ────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-label="Opening teaching">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Samael Aun Weor · The Revolution of the Dialectic</SectionLabel>
              <GoldRule />
            </div>

            <div className="relative mb-12">
              <span className="absolute -top-6 -left-2 font-display text-8xl text-[#c9a96e]/20 leading-none select-none" aria-hidden="true">"</span>
              <blockquote className="border-l-[3px] border-[#c9a96e] pl-8 py-4">
                <p className="font-display text-2xl sm:text-3xl text-[#2a1e12] italic leading-relaxed font-light">
                  The technique of Meditation permits us to arrive at the heights of illumination
                  and the revolution of the dialectic.
                </p>
              </blockquote>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-[#3a2f1f]">
              <p>
                We must distinguish between a mind that is still and a mind that is stilled by force.
                When the mind is stilled by force, it is really not still. It is gagged by violence,
                and in the deeper levels of understanding there exists an entire tempest.
              </p>
              <p>
                When the mind is violently silenced, it is really not in silence.
                Deep within, it clamours, it shouts, it is in despair.
              </p>
              <p>
                It is necessary to put an end to the modifications of the thinking system during
                Meditation. When the thinking system remains under our control,{' '}
                <strong>illumination comes to us spontaneously.</strong>
              </p>
              <p>
                Mental control permits us to destroy the shackles created by the mind. To achieve
                the stillness and silence of the mind, it is necessary to know how to live from
                instant to instant, to know how to take advantage of each moment, to not live
                the moment in doses.
              </p>
            </div>

            <div className="mt-10 rounded-sm bg-white border border-[#d4c4a8] px-8 py-6 shadow-sm">
              <p className="font-display text-lg sm:text-xl text-[#2a1e12] italic leading-relaxed mb-3">
                "Take everything from each moment because each moment is a child of Gnosis;
                each moment is absolute, alive and significant. Momentariness is a special
                characteristic of the Gnostics. We love the philosophy of momentariness."
              </p>
              <p className="text-sm text-[#4a3a26] leading-relaxed">
                Master Ummom said to his disciples: <em>"If you walk, walk; if you sit, sit; but do not vacillate."</em>
              </p>
            </div>
          </div>
        </section>

        {/* ── Art banner: Bouguereau - Song of the Angels ──────────────────── */}
        <figure className="overflow-hidden shadow-xl border-y border-[#c8b89a]" aria-label="Artwork">
          <picture>
            <source srcSet={esotericLaboratoryImgWebp} type="image/webp" />
            <img
              src={esotericLaboratoryImg}
              alt="An alchemical laboratory from an esoteric manuscript - the inner laboratory where the work of consciousness transformation is performed."
              className="w-full h-72 sm:h-96 object-cover"
              style={{ objectPosition: 'center 30%' }}
              loading="lazy" decoding="async"
            />
          </picture>
          <figcaption className="text-xs text-[#6b5535] italic text-center py-2.5 px-4 bg-[#f8f1e3] border-t border-[#c8b89a]">
            The alchemical laboratory, from an esoteric manuscript. The inner work of transformation. Public domain.
          </figcaption>
        </figure>

        {/* ── The Essence & Ecstasy ─────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white fade-section" aria-labelledby="essence-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>The mystical fruit of stillness</SectionLabel>
              <h2 id="essence-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                The Essence and Ecstasy
              </h2>
              <GoldRule />
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-[#3a2f1f]">
                <p>
                  The stillness and silence of the mind has a single objective: to liberate the Essence
                  from the mind, so that when fused with the Monad or Inner Self, it can experience
                  that which we call the truth.
                </p>
                <p>
                  During ecstasy and in the absence of the "I," the Essence can live freely, experiencing
                  the truth within the World of the Mist of Fire. When the mind is in a passive and
                  receptive state - absolutely still and in silence - the Essence or Buddhata is liberated
                  from the mind, and ecstasy arrives.
                </p>

                <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm">
                  <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                    "The Essence is always bottled up in the battle of the opposites, but when the
                    battling ends and the silence is absolute, then the bottle is broken into pieces
                    and the Essence remains free."
                  </p>
                  <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">- Samael Aun Weor</cite>
                </blockquote>

                <p>
                  The most elevated form of thinking is non-thinking. When one achieves the stillness
                  and silence of the mind, the "I" with all its passions, appetites, fears, and
                  affections becomes absent. It is only in the absence of the "I," in the absence of
                  the mind, that the Buddhata can awaken to unite with the Inner Self and take us to ecstasy.
                </p>
                <p>
                  To commence with the study of the technique of Meditation is to enter into the antechamber
                  of the divine peace that surpasses all knowledge.
                </p>
              </div>

              <div className="md:col-span-2">
                <figure className="flex flex-col items-center gap-3">
                  <div className="overflow-hidden rounded-sm shadow-lg border border-[#c8b89a] w-full">
                    <picture>
                      <source srcSet={artMonaLisaImgWebp} type="image/webp" />
                      <img
                        src={artMonaLisaImg}
                        alt="Mona Lisa by Leonardo da Vinci - the serene, inward gaze of one who has turned attention within, an image of the contemplative quality cultivated through Gnostic meditation."
                        className="block w-full h-auto"
                        loading="lazy" decoding="async"
                      />
                    </picture>
                  </div>
                  <figcaption className="text-xs text-[#6b5535] italic text-center leading-relaxed">
                    Mona Lisa, Leonardo da Vinci (c. 1503-1519). Louvre, Paris. Public domain.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Method ───────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#f8f1e3] fade-section" aria-labelledby="method-heading">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>The practical technique</SectionLabel>
              <h2 id="method-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                Working with Mental Visitors
              </h2>
              <GoldRule />
            </div>

            <div className="space-y-5 text-base leading-relaxed text-[#3a2f1f] mb-10">
              <p>
                When we practice Meditation, our mind is assaulted by many memories, desires, passions,
                and preoccupations. We must avoid the conflict between attention and distraction.
              </p>
              <p>
                A conflict exists between attention and distraction when we combat those assailants of
                the mind. The "I" is the projector of such mental assailants. Where there is conflict,
                stillness and silence cannot exist.
              </p>
              <p>
                We must nullify the projector through <strong>self-observation and comprehension</strong>.
                Examine each image, each memory, and each thought that comes to the mind.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-[#d4c4a8] p-8 mb-10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a96e]" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-[#2a1e12] mb-4">The Teaching on Polarity</h3>
              <p className="text-sm text-[#3a2f1f] leading-relaxed mb-4">
                Remember that every thought has two poles: positive and negative, two aspects of the
                same thing. The dining room and the washroom, tall and short, pleasant and unpleasant;
                always two poles of the same thing.
              </p>
              <p className="text-sm text-[#3a2f1f] leading-relaxed mb-4">
                Examine the two poles of each mental form that comes to the mind.{' '}
                <em>Only through the study of these polarities can one arrive at a synthesis.</em>{' '}
                Every mental form can be eliminated through its synthesis.
              </p>
              <p className="text-xs text-[#6b5535] leading-relaxed italic border-t border-[#e8d5b0] pt-4 mt-2">
                Example: the memory of a beloved face assaults us. Is she beautiful? Let us think that beauty
                is the opposite of ugliness - that if in youth she is beautiful, in old age she will be transformed.
                The synthesis: it is not worthwhile to dwell upon her; she is an illusion, a flower that will
                inevitably wither.
              </p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-[#3a2f1f]">
              <p>
                In India, this self-observation and study of our psyche is called <strong>pratyahara</strong>.
              </p>
              <p>
                Bird-like thoughts should pass through the space of our own mind in a successive parade,
                but without leaving any trace behind. The infinite procession of thoughts projected by
                the "I" is exhausted in the end, and then the mind remains still and in silence.
              </p>
            </div>

            <blockquote className="mt-10 border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-white rounded-r-sm">
              <p className="font-display text-[#2a1e12] italic text-xl leading-relaxed">
                "Only when the projector - in other words, the 'I' - is completely absent, will the silence
                which is not a product of the mind then befall. This silence is inexhaustible; it is not
                of time, and it is immeasurable. It is only then, when THAT which is, arrives."
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">- Samael Aun Weor</cite>
            </blockquote>
          </div>
        </section>

        {/* ── The Two Principles ───────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-labelledby="principles-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>The whole technique in summary</SectionLabel>
              <h2 id="principles-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                The Foundational Principles
              </h2>
              <GoldRule />
            </div>

            <p className="text-base text-center text-[#4a3a26] max-w-2xl mx-auto mb-12 leading-relaxed">
              The whole technique of Meditation is summarised in two principles. Together, they put to work
              the most central part of the mind - the Buddhata, the Essence, the Consciousness - the one
              that produces the ecstasy.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                {
                  number: 'I',
                  title: 'Profound Reflection',
                  body: 'To turn the attention inward with depth and sincerity. Not the surface-level thinking of the intellectual mind, but the deep, penetrating awareness that illuminates the psychological interior - observing, examining, comprehending without judgement.',
                },
                {
                  number: 'II',
                  title: 'Tremendous Serenity',
                  body: 'The quality of inner stillness that does not suppress or force - but allows. A serene, receptive quietude in which the battle of the opposites ceases, the Essence is freed from its bottle, and that which is beyond the "I" can finally arrive.',
                },
              ].map(({ number, title, body }) => (
                <article key={title} className="relative bg-white rounded-sm p-8 border border-[#d4c4a8] overflow-hidden shadow-sm">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a96e]" aria-hidden="true" />
                  <span className="font-display text-5xl font-light text-[#c9a96e] mb-3 mt-1 block leading-none" aria-hidden="true">
                    {number}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-4">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#3a2f1f]">{body}</p>
                </article>
              ))}
            </div>

            <p className="text-base text-center text-[#4a3a26] max-w-2xl mx-auto leading-relaxed">
              Remember that the central part of the mind is that which is called the Buddhata - the Essence,
              the Consciousness. When the Buddhata awakens, we remain illuminated. The entire work of
              Gnostic Meditation is the awakening of this inner light.
            </p>
          </div>
        </section>

        {/* ── Practical Guidance ───────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#1c1409] fade-section" aria-labelledby="practice-heading">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-16 max-w-xs mx-auto" aria-hidden="true" />
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Begin today</SectionLabel>
              <h2 id="practice-heading" className="font-display text-4xl sm:text-5xl font-light text-[#f8f1e3] mb-5">
                Practical Guidance
              </h2>
              <GoldRule className="mb-6" />
              <p className="text-sm text-[#c8b89a] max-w-xl mx-auto leading-relaxed">
                The Gnostic student may practice Meditation seated in the Western or Oriental style.
                What matters is the quality of the inner state - not the form.
              </p>
            </div>

            <div className="space-y-4 mb-14">
              {[
                { step: '01', heading: 'Posture', text: 'Sit comfortably, spine upright - on a chair or cross-legged on the floor. Let the body be at ease without being limp.' },
                { step: '02', heading: 'Close the Eyes', text: 'It is advisable to practice with the eyes closed to avoid the distractions of the exterior world. Allow the external world to recede.' },
                { step: '03', heading: 'Relax Completely', text: 'Relax the body carefully, avoiding any tension in the muscles. A tense body is a tense mind. Let each part of the body soften and release.' },
                { step: '04', heading: 'Observe Without Fighting', text: 'When thoughts, memories or images arise, do not combat them - observe them. Examine their two poles. Allow them to exhaust themselves without feeding them with reaction.' },
                { step: '05', heading: 'Allow the Silence', text: 'Do not force silence. Profound reflection and tremendous serenity - these two principles, patiently applied, lead the mind to its natural and authentic stillness.' },
              ].map(({ step, heading, text }) => (
                <div key={step} className="flex gap-5 items-start">
                  <span className="font-display text-2xl font-light text-[#c9a96e] shrink-0 w-10 text-right leading-tight mt-0.5" aria-hidden="true">
                    {step}
                  </span>
                  <div className="border-l border-[#3a2f1f] pl-5 py-1 flex-1">
                    <h3 className="font-display text-base font-semibold text-[#f8f1e3] mb-1">{heading}</h3>
                    <p className="text-sm text-[#c8b89a] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#3a2f1f] rounded-sm p-8 bg-[#120e05]">
              <p className="font-display text-lg sm:text-xl text-[#e8d5b0] italic leading-relaxed mb-4">
                "The Buddhata is the best that we have within and awakens with profound inner Meditation.
                Indeed, the Buddhata is the only element that the wretched intellectual animal possesses
                in order to arrive at the experience of that which we call the truth."
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic font-medium block">
                - Samael Aun Weor, <em className="text-[#9e8a6e] font-normal">The Revolution of the Dialectic</em>
              </cite>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-label="Join our classes">
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Hobart &amp; Launceston · Donation-Based · Weekly</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
              Learn with Us in Tasmania
            </h2>
            <GoldRule className="mb-7" />
            <p className="text-base text-[#4a3a26] mb-8 leading-relaxed max-w-lg mx-auto">
              Our weekly meditation classes welcome complete beginners and experienced practitioners alike.
              We teach the practical Gnostic techniques described here.
              All classes are donation-based.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#e0bf80] transition-colors duration-200 tracking-wide shadow-lg"
              >
                Register Your Interest
              </Link>
              <Link
                to="/"
                className="border border-[#c9a96e]/60 text-[#4a3a26] px-8 py-3 rounded-sm text-sm font-medium hover:bg-[#f0e6d0] hover:border-[#c9a96e] transition-colors duration-200 tracking-wide"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
