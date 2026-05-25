import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel, SectionHeading } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import esotericFlammarionImg from '../assets/esoteric_flammarion_colorized.jpg?format=webp'
import ProtectedEmail from '../components/ProtectedEmail.jsx'

const LOCATIONS = [
  {
    city: 'Hobart',
    description: 'Our Hobart centre serves the greater Hobart area, offering weekly classes.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosishobart@gmail.com',
  },
  {
    city: 'Hobart (Eastern Shore)',
    description: 'Our Eastern Shore centre brings weekly Gnostic classes to the eastern suburbs of Hobart.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.hobarteast@gmail.com',
  },
  {
    city: 'Launceston',
    description: 'The Launceston group meets weekly, bringing Gnostic teachings to the heart of northern Tasmania.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.launceston@gmail.com',
  },
]

export default function ContactPage() {
  const pageMeta = usePageMeta(
    'Contact | Gnosis Tasmania',
    'Find a weekly Gnostic class in Hobart, Hobart Eastern Shore, or Launceston. Email us or connect on Facebook. All sincere enquiries welcome.',
    '/contact'
  )

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      {pageMeta}
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={esotericFlammarionImg}
        alt="The Flammarion engraving (1888) - a medieval pilgrim kneels at the edge of the world and peers through the firmament into the cosmic machinery beyond"
        position="center 100%"
        heightClass="h-[55vh] min-h-[380px]"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Hobart · Eastern Shore · Launceston</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Get in Touch
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Email us directly or reach us through our Facebook page. We welcome all sincere enquiries and aim to respond within a day or two.
          </p>
        </div>
      </HeroParallax>

      {/* ── Locations ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section" aria-label="Our locations">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Where to Find Us</SectionLabel>
            <h2 className="font-display text-4xl font-light text-[#2a1e12] mb-4">Three Centres in Tasmania</h2>
            <GoldRule className="mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {LOCATIONS.map(({ city, description, schedule, contact }) => (
              <div key={city} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#c9a96e] shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-xl font-medium text-[#2a1e12]">{city}</h3>
                </div>
                <p className="text-sm text-[#4a3a26] leading-relaxed mb-3">{description}</p>
                <p className="text-xs text-[#8a6f3f] font-medium mb-5">{schedule}</p>
                <ProtectedEmail
                  email={contact}
                  className="mt-auto inline-block text-sm font-semibold text-[#c9a96e] hover:text-[#b8963e] transition-colors break-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facebook ──────────────────────────────────────────────────────────── */}
      {/* Simple, single Facebook link — the primary social contact channel */}
      <section className="py-16 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-xl mx-auto text-center">
          <SectionLabel>Follow Us</SectionLabel>
          <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-4">Connect on Facebook</h2>
          <GoldRule className="mx-auto mb-6" />
          <p className="text-[#4a3a26] leading-relaxed mb-8">
            You can also follow us and send us a message through our Facebook page.
          </p>
          <a
            href="https://www.facebook.com/GnosticSocietyAustralia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-[#e8d5b0] hover:border-[#c9a96e] rounded-sm px-8 py-4 transition-colors group"
          >
            <span className="text-[#c9a96e] text-xl font-bold" aria-hidden="true">f</span>
            <div className="text-left">
              <p className="font-semibold text-[#2a1e12] group-hover:text-[#c9a96e] transition-colors text-sm">Gnostic Society Australia</p>
              <p className="text-xs text-[#8a6f3f]">facebook.com/GnosticSocietyAustralia</p>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
