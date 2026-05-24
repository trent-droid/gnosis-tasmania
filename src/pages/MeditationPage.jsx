// Introductory SAW attribution reductions (2026-05-24):
//   hero cite:       restored to "Samael Aun Weor" (2026-05-24)
//   opening quote 1: "Samael Aun Weor, The Revolution of the Dialectic" → "The Revolution of the Dialectic"
//   opening quote 2: "Samael Aun Weor, The Revolution of the Dialectic" → "The Revolution of the Dialectic"
//   opening quote 3: "Samael Aun Weor, The Revolution of the Dialectic" → "The Revolution of the Dialectic"
// Body-section cite attributions (lines 402-899) are unchanged.

import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel, QuoteParallax } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'

import heroMeditationImg from '../assets/art_rembrandt_philosopher.jpg?format=webp'
import zenBannerImg from '../assets/hero_zen.jpg?format=webp'
import artMonaLisaImg              from '../assets/art_mona_lisa.jpg'
import artMonaLisaImgSrcset        from '../assets/art_mona_lisa.jpg?w=640;1024&format=webp&as=srcset'

export default function MeditationPage() {
  usePageMeta(
    'Meditation Classes in Hobart & Launceston | Gnosis Tasmania',
    'Gnostic meditation classes in Hobart and Launceston. Learn the practical science of relaxation, concentration, meditation, and samadhi. Weekly, donation-based.',
    '/meditation-classes'
  )
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'The Revolution of Meditation',
    'description': 'Weekly practical Gnostic meditation classes: the science of inner stillness and the liberation of consciousness. Classes in Hobart and Launceston, Tasmania.',
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
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        {/* No fade-section on any image in this file. */}
        <HeroParallax
          src={heroMeditationImg}
          alt="Philosopher in Meditation by Rembrandt van Rijn, 1632. A figure seated in contemplative stillness before a great arched window, warm amber light streaming into the interior, a winding staircase rising in the background."
          position="center bottom"
          heightClass="h-[65vh] min-h-[500px]"
          overlay="bg-gradient-to-b from-[#1c1409]/60 via-[#1c1409]/40 to-[#1c1409]/70"
        >
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">
              Ongoing · Weekly · Donation-Based
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#f8f1e3] tracking-wide mb-5 leading-tight drop-shadow-lg">
              The Revolution<br className="hidden sm:block" /> of Meditation
            </h1>
            <GoldRule className="mb-6" />
            <blockquote className="max-w-2xl mx-auto">
              <p className="font-display text-xl sm:text-2xl text-[#e8d5b0] font-light italic leading-relaxed drop-shadow mb-3">
                "When the mind is still and in silence, the Essence is liberated from its prison.
                Only then does illumination arrive of itself."
              </p>
              <cite className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest not-italic">
                Samael Aun Weor
              </cite>
            </blockquote>
          </div>
        </HeroParallax>
        <p className="text-[10px] text-[#6b5535] italic text-right px-4 py-1.5 bg-[#f8f1e3] border-b border-[#e8d5b0]">
          Philosopher in Meditation, Rembrandt van Rijn (1632). Louvre, Paris. Public domain.
        </p>

        {/* ── Opening quote ────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-label="Opening teaching">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>The Revolution of the Dialectic</SectionLabel>
              <GoldRule />
            </div>

            <div className="relative mb-12">
              <span className="absolute -top-6 -left-2 font-display text-8xl text-[#c9a96e]/20 leading-none select-none" aria-hidden="true">"</span>
              <blockquote className="border-l-[3px] border-[#c9a96e] pl-8 py-4">
                <p className="font-display text-2xl sm:text-3xl text-[#2a1e12] italic leading-relaxed font-light">
                  The technique of Meditation permits us to arrive at the heights of illumination
                  and the revolution of the dialectic.
                </p>
                <cite className="text-sm text-[#c9a96e] not-italic mt-3 block font-medium">
                  The Revolution of the Dialectic
                </cite>
              </blockquote>
            </div>

            <blockquote className="border-l-[3px] border-[#c9a96e] pl-8 py-2 space-y-5 text-base leading-relaxed text-[#3a2f1f]">
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
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                The Revolution of the Dialectic
              </cite>
            </blockquote>

            <div className="mt-10 rounded-sm bg-white border border-[#d4c4a8] px-8 py-6 shadow-sm">
              <p className="font-display text-lg sm:text-xl text-[#2a1e12] italic leading-relaxed mb-3">
                "Take everything from each moment because each moment is a child of Gnosis;
                each moment is absolute, alive and significant. Momentariness is a special
                characteristic of the Gnostics. We love the philosophy of momentariness."
              </p>
              <p className="text-sm text-[#4a3a26] leading-relaxed mb-4">
                Master Ummom said to his disciples: <em>"If you walk, walk; if you sit, sit; but do not vacillate."</em>
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic font-medium block border-t border-[#e8d5b0] pt-4">
                The Revolution of the Dialectic
              </cite>
            </div>
          </div>
        </section>

        {/* ── The Five Phases of Gnostic Meditation ────────────────────────── */}
        <section className="py-20 px-4 bg-white fade-section" aria-labelledby="phases-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>The five phases of Gnostic meditation</SectionLabel>
              <h2 id="phases-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                The Five Phases of Gnostic Meditation
              </h2>
              <GoldRule />
            </div>

            <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm mb-10">
              <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                "Yoga is the cessation of the fluctuations of consciousness."
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                Patanjali, Yoga Sutras I.2
              </cite>
            </blockquote>

            <div className="space-y-5 text-base leading-relaxed text-[#4a3a26] mb-10">
              <p>
                Gnostic teaching grounds its approach to meditation in the classical framework of
                Patanjali's Yoga Sutras, specifically in the four inner limbs of yogic practice:
                Pratyahara, Dharana, Dhyana, and Samadhi. To these it adds the essential
                preliminary of physical relaxation, giving the student a complete five-phase
                system that proceeds in a precise and verifiable order.
              </p>
              <p>
                The five phases are not arbitrary stages invented for instructional convenience. They
                describe what actually happens in the mind when the conditions for genuine meditation
                are met. Each phase depends upon the one before it. Attempting to jump from physical
                relaxation directly into concentration, without passing through the essential and
                often demanding work of Pratyahara, is one of the most common errors of beginning
                practitioners and the reason many students feel they are unable to meditate.
              </p>
              <p>
                What follows is a detailed account of each phase, together with practical guidance
                on how to work with it. Students are encouraged to approach each phase not as
                abstract theory but as a description of experiences they will directly encounter
                and recognise in their own sittings.
              </p>
            </div>

            <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm mb-12">
              <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                "Attain complete emptiness; hold fast to stillness."
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                Lao Tzu, Tao Te Ching, Chapter 16
              </cite>
            </blockquote>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">

              <article className="bg-[#faf6ef] rounded-sm p-8 border border-[#e8d5b0] flex flex-col">
                <span className="font-display text-4xl font-light text-[#c9a96e]/50 mb-3 block leading-none" aria-hidden="true">01</span>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-4">Relaxation</h3>
                <p className="text-sm leading-relaxed text-[#3a2f1f] mb-5">
                  Physical preparation is the foundation of everything that follows. With the body
                  settled and the spine upright, the student consciously releases tension from every
                  part of the organism. This is not sleep or drowsiness. It is alert, conscious
                  restfulness: the body genuinely at peace so that it ceases to create interference
                  in the mind. A tense body produces a tense mind. Without this foundation, the
                  deeper phases remain inaccessible.
                </p>
                <div className="border-t border-[#d4c4a8] pt-5 mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c9a96e] mb-3">How to practise</h4>
                  <p className="text-xs leading-relaxed text-[#4a3a26]">
                    Begin at the feet. Consciously release every tension in the toes, the soles,
                    the ankles. Move upward through the calves, knees, and thighs. Soften the
                    abdomen and lower back. Allow the chest to breathe naturally without forcing.
                    Let the shoulders drop. Release the arms and hands and uncurl the fingers.
                    Soften the neck and throat, relax the jaw, release the muscles around the eyes
                    and the scalp. Allow the whole organism to settle and grow quiet. Beginners
                    should expect this phase to take ten to fifteen minutes. With sustained
                    practice, it deepens and quickens considerably.
                  </p>
                </div>
              </article>

              <article className="bg-[#faf6ef] rounded-sm p-8 border border-[#e8d5b0] flex flex-col">
                <span className="font-display text-4xl font-light text-[#c9a96e]/50 mb-3 block leading-none" aria-hidden="true">02</span>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-4">Pratyahara (Withdrawal)</h3>
                <p className="text-sm leading-relaxed text-[#3a2f1f] mb-4">
                  As the body settles, the mind erupts. Memories, desires, worries, emotional
                  reactions, and sensory impressions arise uninvited in rapid succession. Pratyahara
                  is the systematic withdrawal of attention from these mental visitors. The student
                  does not fight them. Fighting creates conflict, and conflict destroys stillness.
                  Instead, each thought is observed, its two poles are examined, and it is allowed
                  to dissolve without being fed with reaction. This phase can be prolonged and
                  demanding. It cannot be bypassed.
                </p>
                <blockquote className="mt-1 mb-4 border-l-2 border-[#c9a96e]/50 pl-4 py-2">
                  <p className="font-display text-sm text-[#2a1e12] italic leading-relaxed mb-1">
                    "The mind is the great slayer of the Real. Let the Disciple slay the slayer."
                  </p>
                  <cite className="text-xs text-[#c9a96e] not-italic font-medium">
                    H.P. Blavatsky, The Voice of the Silence
                  </cite>
                </blockquote>
                <div className="border-t border-[#d4c4a8] pt-5 mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c9a96e] mb-3">How to practise</h4>
                  <p className="text-xs leading-relaxed text-[#4a3a26]">
                    When a thought appears, do not push it away. Turn your attention fully toward it.
                    Examine both of its poles: every thought has a positive and a negative aspect,
                    two faces of the same coin. Through this examination, a synthesis becomes
                    available and the thought can be released without leaving a residue. Example: a
                    resentment arises. Examine it fully, including its opposite. The synthesis: this
                    reaction belongs to a habitual ego state within me, not to my true awareness.
                    It can be released. The stream of thoughts eventually exhausts itself. Beginners
                    should expect this phase to occupy the first twenty to thirty minutes of a
                    sitting. Do not be discouraged by this.
                  </p>
                </div>
              </article>

              <article className="bg-[#faf6ef] rounded-sm p-8 border border-[#e8d5b0] flex flex-col">
                <span className="font-display text-4xl font-light text-[#c9a96e]/50 mb-3 block leading-none" aria-hidden="true">03</span>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-4">Dharana (Concentration)</h3>
                <p className="text-sm leading-relaxed text-[#3a2f1f] mb-5">
                  When the initial flood of mental visitors has subsided, the practitioner gathers
                  attention and holds it on a single chosen point. This is Dharana. Concentration
                  is not forced effort or strain. It is the patient, gentle return of awareness to
                  the chosen object each time the mind wanders. Over time, this creates a unified
                  field of inner attention. That unified field is the necessary door to the
                  next phase.
                </p>
                <div className="border-t border-[#d4c4a8] pt-5 mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c9a96e] mb-3">How to practise</h4>
                  <p className="text-xs leading-relaxed text-[#4a3a26]">
                    Choose your concentration object before the sitting begins. Options include: a
                    sacred syllable or mantra held mentally without voicing, such as OM or HAMSA;
                    a simple geometric form such as a golden point of light or an equilateral
                    triangle; the sensation of the breath at a fixed point; or an inner image
                    connected to the work of self-knowledge. When the mind wanders, note that it
                    has wandered and return, without irritation and without self-criticism. This
                    act of return is not a failure. The return is the practice. Each deliberate
                    return strengthens the faculty of sustained attention.
                  </p>
                </div>
              </article>

              <article className="bg-[#faf6ef] rounded-sm p-8 border border-[#e8d5b0] flex flex-col">
                <span className="font-display text-4xl font-light text-[#c9a96e]/50 mb-3 block leading-none" aria-hidden="true">04</span>
                <h3 className="font-display text-xl font-medium text-[#2a1e12] mb-4">Dhyana (Meditation Proper)</h3>
                <p className="text-sm leading-relaxed text-[#3a2f1f] mb-5">
                  When concentration has become sufficiently stable, Dhyana, or meditation proper,
                  begins of itself. The concentrated mind is allowed to penetrate into the inner
                  nature of the object of contemplation. This is not thinking about the subject
                  but resting within it in a state of open, receptive attention. Here the student
                  moves beyond ordinary analytical thought into a quality of comprehension that
                  the thinking mind alone cannot reach.
                </p>
                <div className="border-t border-[#d4c4a8] pt-5 mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c9a96e] mb-3">How to practise</h4>
                  <p className="text-xs leading-relaxed text-[#4a3a26]">
                    Dhyana cannot be forced. When the effort of Dharana has created a stable field
                    of attention, there is a natural shift: the effort dissolves and a state of
                    effortless attentiveness takes its place. The object of concentration seems to
                    open, as though revealing an inner dimension. Do not grasp at this. Do not
                    attempt to hold it or analyse it. Genuine insights about the nature of the ego
                    and of one's own psychological patterns often arise here. Observe them with the
                    same impartiality practised in Pratyahara. The distinction between thinking
                    about something and truly being with it becomes vivid and unmistakable.
                  </p>
                </div>
              </article>

            </div>

            <div className="relative bg-[#2a1e12] rounded-sm p-8 sm:p-10 border border-[#c9a96e]/30 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c9a96e]" aria-hidden="true" />
              <span className="font-display text-4xl font-light text-[#c9a96e]/40 mb-3 block leading-none" aria-hidden="true">05</span>
              <h3 className="font-display text-2xl font-medium text-[#f8f1e3] mb-6">Samadhi (Ecstasy and Union)</h3>
              <div className="grid sm:grid-cols-2 gap-8 mb-6">
                <p className="text-sm leading-relaxed text-[#c8b89a]">
                  Samadhi is not a state that can be produced by technique alone. It arrives as a
                  gift when the conditions created by the preceding four phases are sufficiently
                  refined and sustained. In this state, the meditator, the act of meditation, and
                  the object of contemplation dissolve into one another. The Essence, freed from
                  its bottle, experiences directly that which is beyond the mind. The separate
                  sense of self is temporarily absent, and what remains is pure awareness.
                </p>
                <p className="text-sm leading-relaxed text-[#c8b89a]">
                  This is the state the mystics of every genuine tradition have described under
                  different names: fana in Sufism, satori in Zen, union with God in Christian
                  mysticism. The Gnostic teaching is unambiguous that this state is not reserved for
                  a spiritual elite. It is the birthright of every sincere practitioner willing
                  to do the inner work that makes it possible. It begins to become accessible
                  through sustained and faithful daily practice.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#a89070] border-t border-[#3a2f1f] pt-6">
                Gnostic teaching holds that Samadhi comes in degrees. The first experiences may be
                brief: a few seconds of genuine stillness in which the habitual noise of the mind
                is completely absent and a quality of pure, luminous awareness is present. These
                early moments are unmistakable to anyone who has experienced them. They serve as
                confirmation that the path is real and the practice is working. They are not the
                destination. They are the first glimpse of what the whole journey is moving toward.
              </p>
            </div>

          </div>
        </section>

        {/* ── Quote parallax ────────────────────────────────────────────────────── */}
        <QuoteParallax
          src={zenBannerImg}
          alt="A serene, contemplative zen scene of misty mountains and still water, evoking the atmosphere of deep meditation."
          position="center 40%"
          quote="Silence is a source of great strength."
          cite="Lao Tzu"
        />

        {/* ── The Essence & Ecstasy ─────────────────────────────────────────── */}
        {/* No fade-section: Mona Lisa image is inside. Heading and text column use
            fade-content individually so the image container never fades. */}
        <section className="py-20 px-4 bg-white" aria-labelledby="essence-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 fade-content">
              <SectionLabel>The mystical fruit of stillness</SectionLabel>
              <h2 id="essence-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                The Essence and Ecstasy
              </h2>
              <GoldRule />
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-[#3a2f1f] fade-content">
                    <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-2 space-y-4">
                  <p>
                    The stillness and silence of the mind has a single objective: to liberate the Essence
                    from the mind, so that when fused with the Monad or Inner Self, it can experience
                    that which we call the truth.
                  </p>
                  <p>
                    During ecstasy and in the absence of the "I," the Essence can live freely, experiencing
                    the truth within the World of the Mist of Fire. When the mind is in a passive and
                    receptive state, absolutely still and in silence, the Essence or Buddhata is liberated
                    from the mind, and ecstasy arrives.
                  </p>
                  <cite className="text-sm text-[#c9a96e] not-italic mt-1 block font-medium">
                    Samael Aun Weor, The Revolution of the Dialectic
                  </cite>
                </blockquote>

                <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm">
                  <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                    "The Essence is always bottled up in the battle of the opposites, but when the
                    battling ends and the silence is absolute, then the bottle is broken into pieces
                    and the Essence remains free."
                  </p>
                  <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                    Samael Aun Weor, The Revolution of the Dialectic
                  </cite>
                </blockquote>

                <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-2 space-y-4">
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
                  <cite className="text-sm text-[#c9a96e] not-italic mt-1 block font-medium">
                    Samael Aun Weor, The Revolution of the Dialectic
                  </cite>
                </blockquote>
              </div>

              <div className="md:col-span-2">
                <figure className="flex flex-col items-center gap-3">
                  <div className="overflow-hidden rounded-sm shadow-lg border border-[#c8b89a] w-full">
                    <picture>
                      <source srcSet={artMonaLisaImgSrcset} sizes="(min-width: 768px) 40vw, 100vw" type="image/webp" />
                      <img
                        src={artMonaLisaImg}
                        alt="Mona Lisa by Leonardo da Vinci, the serene inward gaze of one who has turned attention within, an image of the contemplative quality cultivated through Gnostic meditation."
                        width={2000} height={2981}
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

            <blockquote className="border-l-[3px] border-[#c9a96e] pl-8 py-2 space-y-5 text-base leading-relaxed text-[#3a2f1f] mb-10">
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
                We must nullify the projector through{' '}
                <Link
                  to="/articles/self-observation-watching-your-mind"
                  className="text-[#c9a96e] hover:text-[#a07040] underline underline-offset-2 transition-colors font-medium"
                >
                  self-observation
                </Link>
                {' '}and comprehension.
                Examine each image, each memory, and each thought that comes to the mind.
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                Samael Aun Weor, The Revolution of the Dialectic
              </cite>
            </blockquote>

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
              <p className="text-xs text-[#6b5535] leading-relaxed italic border-t border-[#e8d5b0] pt-4 mt-2 mb-4">
                Example: the memory of a beloved face assaults us. Is she beautiful? Let us think that beauty
                is the opposite of ugliness, that if in youth she is beautiful, in old age she will be transformed.
                The synthesis: it is not worthwhile to dwell upon her; she is an illusion, a flower that will
                inevitably wither.
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic font-medium block border-t border-[#e8d5b0] pt-4">
                Samael Aun Weor, The Revolution of the Dialectic
              </cite>
            </div>

            <blockquote className="border-l-[3px] border-[#c9a96e] pl-8 py-2 space-y-5 text-base leading-relaxed text-[#3a2f1f]">
              <p>
                In India, this self-observation and study of our psyche is called <strong>pratyahara</strong>.
              </p>
              <p>
                Bird-like thoughts should pass through the space of our own mind in a successive parade,
                but without leaving any trace behind. The infinite procession of thoughts projected by
                the "I" is exhausted in the end, and then the mind remains still and in silence.
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                Samael Aun Weor, The Revolution of the Dialectic
              </cite>
            </blockquote>

            <blockquote className="mt-10 border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-white rounded-r-sm">
              <p className="font-display text-[#2a1e12] italic text-xl leading-relaxed">
                "Only when the projector, in other words the 'I', is completely absent, will the silence
                which is not a product of the mind then befall. This silence is inexhaustible; it is not
                of time, and it is immeasurable. It is only then, when THAT which is, arrives."
              </p>
              <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                Samael Aun Weor, The Revolution of the Dialectic
              </cite>
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
              the most central part of the mind, the Buddhata, the Essence, the Consciousness, the one
              that produces the ecstasy.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                {
                  number: 'I',
                  title: 'Profound Reflection',
                  body: 'To turn the attention inward with depth and sincerity. Not the surface-level thinking of the intellectual mind, but the deep, penetrating awareness that illuminates the psychological interior. This awareness observes, examines, and comprehends without judgement.',
                },
                {
                  number: 'II',
                  title: 'Tremendous Serenity',
                  body: 'The quality of inner stillness that does not suppress or force, but simply allows. A serene, receptive quietude in which the battle of the opposites ceases, the Essence is freed from its bottle, and that which is beyond the "I" can finally arrive.',
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
              Remember that the central part of the mind is that which is called the Buddhata, the Essence,
              the Consciousness. When the Buddhata awakens, we remain illuminated. The entire work of
              Gnostic Meditation is inseparable from the broader path of inner transformation described
              in our article on{' '}
              <Link
                to="/articles/three-factors-of-conscious-awakening"
                className="text-[#c9a96e] hover:text-[#a07040] underline underline-offset-2 transition-colors font-medium"
              >
                the Three Factors of Conscious Awakening
              </Link>.
            </p>
          </div>
        </section>

        {/* ── Building Your Daily Practice ─────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white fade-section" aria-labelledby="time-heading">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>For the serious student</SectionLabel>
              <h2 id="time-heading" className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                Building Your Daily Practice
              </h2>
              <GoldRule />
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[#3a2f1f]">
              <p>
                For a student genuinely committed to the development of consciousness, not merely
                seeking relaxation or a few pleasant minutes of quiet, <strong>a minimum of thirty
                minutes per sitting is the realistic starting point.</strong> For serious students,
                one hour per day is the natural foundation on which sustained progress is built. This
                applies whether the practice is divided into a morning session and an evening session,
                or concentrated into a single daily sitting.
              </p>
              <p>
                This does not mean that shorter sittings have no value. Even fifteen minutes of genuine
                inner work, meaning real relaxation, real concentration, and real self-observation, is
                far better than an hour of mechanical sitting in which the mind has simply been left to
                wander. Quality always precedes quantity. But as the practice deepens and the student
                begins to recognise what genuine stillness actually feels like, the natural impulse
                becomes to sit longer, not shorter.
              </p>

              <div className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-7 my-4">
                <p className="text-base leading-relaxed text-[#3a2f1f]">
                  Gnostic teaching is clear that meditation, self-observation, and retrospection are not
                  three separate practices but three dimensions of a single daily commitment. The student
                  who brings genuine quality of attention to all three, practised daily and with sincerity,
                  creates the inner conditions in which real transformation becomes possible. The specific
                  duration of each sitting is a matter for the individual student to discover through
                  experience, and, where available, through the guidance of their instructor.
                </p>
              </div>

              <h3 className="font-display text-2xl font-light text-[#2a1e12] pt-4">A Morning and Evening Framework</h3>
              <p>
                Gnostic teaching recommends establishing a consistent daily rhythm. The morning period,
                before the demands of the day have accumulated, is well suited to the sitting practice.
                The evening period provides a natural anchor for the retrospection exercise. Between
                these two periods, self-observation is practised continuously throughout the ordinary
                activities of the day.
              </p>
              <p>
                A workable framework for a sincere practitioner looks something like this. In the
                morning: thirty to sixty minutes of meditation, beginning with complete physical
                relaxation and moving through Pratyahara toward sustained concentration. Mantric
                practice can be incorporated into any sitting according to the student's stage of
                study and individual instruction. During the day: self-observation maintained
                through ordinary work, conversation, and activity, watching thoughts, emotions, and
                mechanical reactions without identifying with them. In the evening: the retrospection
                exercise described below.
              </p>
              <p>
                This is not an extreme or monastic schedule. Gnostic teaching is clear that this is the path of the ordinary person living an ordinary life. What it requires
                is not the abandonment of worldly responsibilities but the organisation of time and
                attention around what genuinely matters.
              </p>

              <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm">
                <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                  "Remember yourself always and everywhere."
                </p>
                <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                  G.I. Gurdjieff
                </cite>
              </blockquote>

              <p>
                This instruction from Gurdjieff, simple in its statement and immense in its implications,
                is the bridge between formal sitting practice and the practice of the day. To remember
                oneself is to divide attention: to be simultaneously aware of what is happening in the
                external environment and of what is happening within one's own inner state. Most people
                live almost entirely in the first kind of awareness. Self-remembering, cultivated
                gradually and with patience, develops the second.
              </p>

              <h3 className="font-display text-2xl font-light text-[#2a1e12] pt-4">The Retrospection Exercise</h3>
              <p>
                The retrospection exercise is one of the most valuable practical tools in the Gnostic
                student's daily work, and one of the most consistently underestimated. It is simple
                in description and genuinely revealing in practice.
              </p>
              <p>
                In the evening, before sleep, sit or lie quietly and review the events of the day in
                reverse chronological order. Begin from the present moment and move backward: what
                happened just before you sat down to review? Before that? Continue backward through
                the afternoon, the midday, the morning, to the moment of waking. Do not rush. Do not
                judge or condemn yourself for what you observe. Simply watch.
              </p>
              <p>
                Pay particular attention to the moments of mechanical reaction: the frustration that
                arose automatically in a difficult conversation, the anxiety that gripped you before
                a task, the distraction that swept you away from what you intended to do. These are
                not failures of character. They are the visible workings of the habitual ego states
                that Gnostic psychology calls the "I's." The retrospection is how we learn to
                recognise them, understand them, and gradually loosen their grip on our behaviour.
              </p>
              <p>
                Used consistently over weeks and months, the retrospection exercise develops the same
                impartial, witnessing quality of attention that the formal sitting cultivates in silence.
                It creates continuity between the formal practice and the life of the day.
              </p>

              <h3 className="font-display text-2xl font-light text-[#2a1e12] pt-4">Working with the Transition to Sleep</h3>
              <p>
                Gnostic teaching places great importance on the state of consciousness at the moment
                of falling asleep. The hypnagogic threshold, the brief passage between waking and
                sleep, is understood in Gnostic psychology as a doorway between the physical and inner
                dimensions of existence. What the consciousness holds at this moment matters.
              </p>
              <p>
                The practice is simple. As you lie down to sleep, hold a sacred syllable or mantra
                gently in mental awareness. FARAON is one traditional Gnostic mantra associated with
                this practice. Repeat it silently and steadily, without force, as a quiet inner sound.
                Allow the body to fall asleep naturally while maintaining the awareness of the mantra.
                The part of the consciousness that holds the mantra does not need to follow the body
                into unconsciousness. With patience and sustained practice over many months, this
                awareness can carry forward across the sleep threshold, opening the possibility of
                conscious inner experience during sleep.
              </p>
              <p>
                This practice is not about forcing unusual experiences. It is about building the
                continuity of awareness that is, in Gnostic understanding, one of the central aims
                of the whole inner work.
              </p>

              <h3 className="font-display text-2xl font-light text-[#2a1e12] pt-4">On the Dry Periods</h3>
              <p>
                Every serious practitioner encounters periods when the inner work feels mechanical,
                unrewarding, and distant. These are not failures. In Gnostic understanding, they are
                precisely the moments when the work has the most value. The student who continues to sit,
                to observe, and to apply the techniques during dry periods is building something far more
                durable than the student who practises only when inspired or when inner states are pleasant.
              </p>
              <p>
                P.D. Ouspensky, writing from within a tradition closely related to Gnostic psychology,
                observed something that every sincere meditator will recognise:
              </p>

              <blockquote className="border-l-[3px] border-[#c9a96e] pl-6 py-3 bg-[#faf6ef] rounded-r-sm">
                <p className="font-display text-[#2a1e12] italic text-lg leading-relaxed">
                  "Without self-knowledge, without understanding the working and functions of his machine,
                  man cannot be free, he cannot govern himself and will always remain a slave."
                </p>
                <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">
                  P.D. Ouspensky, In Search of the Miraculous
                </cite>
              </blockquote>

              <p>
                Dry periods in meditation practice are often the moments when genuine self-knowledge
                begins. The student who was previously carried along by the novelty and enthusiasm of
                beginning now encounters the actual machinery of the mind in its ordinary, unadorned
                state. This encounter, honestly faced, is itself a form of inner work.
              </p>
              <p>
                When a sitting feels empty or flat, ask: what is actually happening in the mind right
                now? What is the quality of attention? Is there boredom, restlessness, or resistance?
                These states are not obstacles to self-knowledge. They are its subject matter. Turn
                the attention toward the dry feeling itself with the same care and impartiality you
                would bring to any other state. This is the practice.
              </p>

              <h3 className="font-display text-2xl font-light text-[#2a1e12] pt-4">Tracking Progress</h3>
              <p>
                Inner progress is not measured in peak experiences. Samadhi, visions, and states of
                expanded awareness are not reliable indicators of genuine development, because the
                psychological ego is capable of imitating them. The real measure of progress is the
                quality of ordinary daily life: a greater capacity for patience, reduced mechanical
                reaction, more genuine presence with other people, and a quieter relationship with
                one's own mind.
              </p>
              <p>
                If, after several months of consistent practice, a student notices that they are
                slightly less identified with their emotional reactions, that moments of genuine inner
                quiet arise more easily, and that their relationships carry a little more patience and
                awareness, the work is proceeding as it should. These quiet, undramatic shifts are the
                true currency of inner development.
              </p>
              <p>
                Do not be discouraged if this seems demanding. Begin where you are, and return to the
                practice faithfully over time. Even fifteen to twenty minutes of genuine daily practice,
                maintained without interruption for several months, builds the foundation upon which
                deeper work becomes possible. The path begins wherever you are, at whatever hour you can
                consistently protect from distraction. What matters most is that you begin, and that
                you return, day after day, with patience and sincerity.
              </p>

              <div className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-6 mt-4">
                <h3 className="font-display text-base font-semibold text-[#2a1e12] mb-4">Related Articles</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      to="/articles/self-observation-watching-your-mind"
                      className="text-sm text-[#c9a96e] hover:text-[#a07040] font-medium transition-colors"
                    >
                      Self-Observation: Watching Your Own Mind
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/three-factors-of-conscious-awakening"
                      className="text-sm text-[#c9a96e] hover:text-[#a07040] font-medium transition-colors"
                    >
                      The Three Factors of Conscious Awakening
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/meditation-practices-for-inner-peace"
                      className="text-sm text-[#c9a96e] hover:text-[#a07040] font-medium transition-colors"
                    >
                      Meditation Practices for Inner Peace
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles"
                      className="text-sm text-[#c9a96e] hover:text-[#a07040] font-medium transition-colors"
                    >
                      Browse all articles
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
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
                What matters is the quality of the inner state, not the form.
              </p>
            </div>

            <div className="space-y-4 mb-14">
              {[
                {
                  step: '01',
                  heading: 'Posture',
                  text: 'Sit comfortably with the spine upright, either on a chair or cross-legged on the floor. Let the body be at ease without being limp.',
                },
                {
                  step: '02',
                  heading: 'Close the Eyes',
                  text: 'It is advisable to practice with the eyes closed to avoid the distractions of the exterior world. Allow the external world to recede.',
                },
                {
                  step: '03',
                  heading: 'Relax Completely',
                  text: 'Relax the body carefully, avoiding any tension in the muscles. A tense body is a tense mind. Let each part of the body soften and release, moving from the feet upward.',
                },
                {
                  step: '04',
                  heading: 'Observe Without Fighting',
                  text: 'When thoughts, memories, or images arise, do not combat them. Observe them instead. Examine their two poles. Allow them to exhaust themselves without feeding them with reaction.',
                },
                {
                  step: '05',
                  heading: 'Allow the Silence',
                  text: 'Do not force silence. Profound reflection and tremendous serenity, these two principles patiently applied, lead the mind to its natural and authentic stillness.',
                },
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
                Samael Aun Weor, <em className="text-[#9e8a6e] font-normal">The Revolution of the Dialectic</em>
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
                to="/articles"
                className="border border-[#c9a96e]/60 text-[#4a3a26] px-8 py-3 rounded-sm text-sm font-medium hover:bg-[#f0e6d0] hover:border-[#c9a96e] transition-colors duration-200 tracking-wide"
              >
                Explore Our Articles
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
