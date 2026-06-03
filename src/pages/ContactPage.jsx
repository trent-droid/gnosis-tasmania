import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel } from '../components/ui.jsx'
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

const GOOGLE_MAPS_LOCATIONS = [
  {
    city: 'Hobart',
    href: 'https://www.google.com/maps/search/?api=1&query=Hobart+Tasmania+Australia',
  },
  {
    city: 'Hobart (Eastern Shore)',
    href: 'https://www.google.com/maps/search/?api=1&query=Clarence+City+Tasmania+Australia',
  },
  {
    city: 'Launceston',
    href: 'https://www.google.com/maps/search/?api=1&query=Launceston+Tasmania+Australia',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
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

      {/* ── Map ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#faf6ef] fade-section" aria-label="Tasmania class locations map">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Where We Are</SectionLabel>
            <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-4">Find Us in Tasmania</h2>
            <GoldRule className="mx-auto mb-4" />
            <p className="text-xs text-[#9e8a6e] tracking-wide">Select a location to open in Google Maps</p>
          </div>

          <div className="border border-[#e8d5b0] rounded-sm overflow-hidden shadow-sm mb-6 h-[300px] sm:h-[440px]">
            <iframe
              src="https://maps.google.com/maps?q=tasmania+australia&z=8&output=embed&hl=en"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tasmania"
              aria-label="Google Map of Tasmania showing Hobart, Eastern Shore, and Launceston"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {GOOGLE_MAPS_LOCATIONS.map(({ city, href }) => (
              <a
                key={city}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-white border border-[#e8d5b0] hover:border-[#c9a96e] rounded-sm px-5 py-4 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a96e] shrink-0" aria-hidden="true" />
                  <span className="font-medium text-sm text-[#2a1e12] group-hover:text-[#c9a96e] transition-colors">{city}</span>
                </div>
                <svg className="w-4 h-4 text-[#c9a96e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facebook ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white fade-section">
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
