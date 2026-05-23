// src/pages/FaqPage.jsx
// New page: FAQ at /faq — accordion layout, 9 questions, FAQPage JSON-LD schema
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import heroSchoolAthensImg from '../assets/hero_school_athens.jpg?format=webp'

const BASE = 'https://gnosistasmania.com.au'

const FAQS = [
  {
    q: 'How do I know if I am ready to begin the Gnostic path?',
    a: 'Anyone who comes with genuine sincerity and an honest wish to understand themselves more deeply is ready to begin. The Gnostic path does not demand prior experience, specific beliefs, or a dramatic spiritual awakening before attending a first class. What it asks for is honesty: a willingness to look at yourself clearly, to sit with what you find, and to engage seriously with the practices over time. If you feel drawn to these questions, that feeling itself is a sufficient beginning.',
  },
  {
    q: 'What does a typical class or meeting in Gnosis Tasmania involve?',
    a: 'A typical class runs for approximately ninety minutes and includes a period of guided relaxation and meditation, a presentation or discussion of a Gnostic teaching, and time for questions and open conversation. The atmosphere is calm, unhurried, and informal. New students are welcomed without ceremony; there is no particular way of sitting, speaking, or presenting yourself that is expected. Classes are held weekly in Hobart, Hobart Eastern Shore, and Launceston.',
  },
  {
    q: 'How much time commitment is required for serious practice?',
    a: 'The tradition asks for consistency rather than intensity. A daily meditation practice of fifteen to thirty minutes, combined with self-observation throughout the day and the retrospective meditation before sleep, forms the practical minimum for genuine progress. Weekly attendance at a class deepens both understanding and motivation significantly. The inner work is not separate from daily life; it is lived within it, and every situation in an ordinary day is an opportunity for genuine practice.',
  },
  {
    q: 'Is Gnosis compatible with other spiritual or religious traditions?',
    a: "Yes. The Gnostic tradition does not ask students to abandon their existing spiritual background. It regards the world's authentic traditions as different expressions of the same inner wisdom, and many students come to Gnosis from Christian, Buddhist, Jewish, or other backgrounds and find that the Gnostic teaching deepens rather than displaces their original path. What is asked is sincerity and a genuine willingness to practise, not the adoption of a new religious identity.",
  },
  {
    q: 'Do I need previous experience to join classes?',
    a: 'No previous experience of any kind is required or expected. The Introduction to Gnosis course, available to all new students, is designed to provide a complete foundation in the core teachings and practices from the very beginning. Students come from every background: some have spent years in contemplative traditions; others are encountering these ideas for the first time. Both are equally welcome, and the classes are structured to meet everyone where they actually are.',
  },
  {
    q: 'What is the difference between Gnosis and ordinary meditation?',
    a: 'Meditation in the Gnostic tradition is one element of a comprehensive path, not a standalone technique. Ordinary mindfulness or secular meditation practice typically focuses on stress reduction, mental calm, or present-moment awareness, and these are genuinely valuable. Gnostic meditation goes further: it is practised alongside the specific inner work of ego dissolution, the conscious management of the creative energy, dream yoga, and self-observation in daily life. Together these practices form a complete science whose explicit aim is the awakening of consciousness, not merely its temporary quieting.',
  },
  {
    q: 'How can I prepare for my first class or meeting?',
    a: 'No specific preparation is needed. Come as you are, with genuine curiosity and an open mind. If you have a question you have been carrying, bring it; the atmosphere of a Gnostic class genuinely welcomes sincere inquiry. Comfortable, relaxed clothing is appropriate for the meditation practice that forms part of each class. Arriving a few minutes early to meet the instructor and any students present before the session begins is always a good way to settle in.',
  },
  {
    q: 'Are classes free or is there a cost?',
    a: "All Gnosis Tasmania classes are donation-based. There is no fixed fee and no financial obligation of any kind. Students are invited to contribute what they genuinely can; those who cannot contribute at all are welcomed equally. This approach reflects the tradition's understanding that genuine spiritual teaching should be accessible to all who seek it sincerely, regardless of their material circumstances.",
  },
  {
    q: 'How does the community support new students on the path?',
    a: 'New students enter a small, genuinely welcoming group in which more experienced students are available to answer questions, share their understanding, and offer practical support with the challenges that arise in the early stages of inner work. The weekly class provides a regular, dedicated time and space for this in good company. Students who engage consistently find that the community becomes one of the most valuable supports on the path, making the inner work more sustainable and more revealing than solitary practice alone.',
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState(null)

  usePageMeta(
    'Frequently Asked Questions | Gnosis Tasmania',
    'Answers to common questions about Gnostic classes in Hobart and Launceston: what to expect, time commitment, compatibility with other traditions, costs, and how to get started.',
    '/faq'
  )

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${BASE}/faq`,
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroSchoolAthensImg}
        alt="Raphael, The School of Athens (1511), depicting the philosophers of antiquity gathered in sincere and open inquiry"
        heightClass="h-[45vh] min-h-[320px]"
        position="center center"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Common Questions</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <GoldRule />
        </div>
      </HeroParallax>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4a3a26] text-lg leading-relaxed">
            Whether you are curious about the teachings, uncertain what to expect from a first class, or wondering whether Gnosis is suited to your existing spiritual background, these answers are offered in the spirit of genuine welcome. The Gnostic path is serious in its commitments and open to all who come with sincerity.
          </p>
        </div>
      </section>

      {/* ── Accordion ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#faf6ef]">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <AccordionItem
              key={i}
              q={q}
              a={a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ── More questions ────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Still have a question?</SectionLabel>
          <p className="text-[#4a3a26] leading-relaxed mb-6">
            If your question is not answered here, please reach out directly. We are glad to hear from anyone who is genuinely interested.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#2a1e12] fade-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-light text-[#f8f1e3] mb-4">Ready to Take the Next Step?</h2>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] leading-relaxed mb-8">
            The surest way to understand what the Gnostic teaching offers is to attend a class. All are welcome, all classes are donation-based, and no experience is required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#c9a96e] hover:bg-[#b8963e] text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              Get in Touch
            </Link>
            <Link
              to="/courses"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1c1409] font-semibold px-8 py-3 rounded-sm transition-colors tracking-wide text-sm"
            >
              View Our Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-[#e8d5b0] rounded-sm overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 bg-white hover:bg-[#fdf8ef] transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-medium text-[#2a1e12] leading-snug">{q}</span>
        <span className="text-[#c9a96e] text-xl leading-none shrink-0 mt-0.5 select-none" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 bg-white border-t border-[#e8d5b0]">
          <p className="text-[#4a3a26] leading-relaxed text-base">{a}</p>
        </div>
      )}
    </div>
  )
}
