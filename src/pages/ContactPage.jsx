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

function TasmaniaMap() {
  return (
    <svg
      viewBox="0 0 280 310"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      aria-label="Map of Tasmania showing Gnosis class locations in Hobart, Eastern Shore, and Launceston"
    >
      {/* Ocean */}
      <rect width="280" height="310" fill="#d4c4a8" />

      {/* Subtle cartographic grid */}
      <line x1="0" y1="103" x2="280" y2="103" stroke="#b89e7a" strokeWidth="0.4" />
      <line x1="0" y1="206" x2="280" y2="206" stroke="#b89e7a" strokeWidth="0.4" />
      <line x1="93"  y1="0"  x2="93"  y2="310" stroke="#b89e7a" strokeWidth="0.4" />
      <line x1="186" y1="0"  x2="186" y2="310" stroke="#b89e7a" strokeWidth="0.4" />

      {/* Tasmania mainland */}
      <path
        d="M35,54 L58,36 L92,26 L132,30 L165,26 L200,30 L235,36 L265,46
           L268,78 L265,112 L263,148 L258,180 L250,210 L244,235
           L240,254 L248,264 L236,272
           L218,290 L194,300 L168,302 L144,296 L118,282
           L95,264 L72,242 L54,214 L42,185 L36,155 L32,122 L32,88 Z"
        fill="#f0e4cc"
        stroke="#c9a96e"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Ocean labels */}
      <text x="140" y="15"  textAnchor="middle" fontSize="7" fill="#8a6f3f" fontFamily="Georgia, serif" fontStyle="italic" letterSpacing="1.2">BASS STRAIT</text>
      <text x="140" y="307" textAnchor="middle" fontSize="7" fill="#8a6f3f" fontFamily="Georgia, serif" fontStyle="italic" letterSpacing="1.2">SOUTHERN OCEAN</text>

      {/* Compass rose */}
      <text x="252" y="14" textAnchor="middle" fontSize="9" fill="#8a6f3f" fontFamily="Georgia, serif" fontWeight="bold">N</text>
      <line x1="252" y1="16" x2="252" y2="27" stroke="#8a6f3f" strokeWidth="1" />
      <path d="M252,16 L249,23 L252,20 L255,23 Z" fill="#8a6f3f" />

      {/* ── Launceston ──────────────────────────────────────────────── */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Launceston+Tasmania+Australia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Launceston, Tasmania on Google Maps"
      >
        <g style={{ cursor: 'pointer' }}>
          <circle cx="193" cy="84" r="11" fill="#c9a96e" fillOpacity="0.15" />
          <circle cx="193" cy="84" r="4.5" fill="#c9a96e" />
          <line x1="193" y1="73" x2="193" y2="79" stroke="#c9a96e" strokeWidth="0.8" opacity="0.5" />
          <text x="193" y="70" textAnchor="middle" fontSize="10" fill="#2a1e12" fontFamily="Georgia, serif" fontWeight="500">Launceston</text>
        </g>
      </a>

      {/* ── Hobart ──────────────────────────────────────────────────── */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Hobart+Tasmania+Australia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Hobart, Tasmania on Google Maps"
      >
        <g style={{ cursor: 'pointer' }}>
          <circle cx="198" cy="226" r="11" fill="#c9a96e" fillOpacity="0.15" />
          <circle cx="198" cy="226" r="4.5" fill="#c9a96e" />
          <line x1="192" y1="233" x2="185" y2="241" stroke="#c9a96e" strokeWidth="0.8" opacity="0.5" />
          <text x="183" y="247" textAnchor="middle" fontSize="10" fill="#2a1e12" fontFamily="Georgia, serif" fontWeight="500">Hobart</text>
        </g>
      </a>

      {/* ── Hobart Eastern Shore ────────────────────────────────────── */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Rosny+Park+Tasmania+Australia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Hobart Eastern Shore, Tasmania on Google Maps"
      >
        <g style={{ cursor: 'pointer' }}>
          <circle cx="212" cy="217" r="11" fill="#c9a96e" fillOpacity="0.15" />
          <circle cx="212" cy="217" r="4.5" fill="#c9a96e" />
          <line x1="218" y1="212" x2="228" y2="203" stroke="#c9a96e" strokeWidth="0.8" opacity="0.5" />
          <text x="230" y="201" textAnchor="start" fontSize="9" fill="#2a1e12" fontFamily="Georgia, serif" fontWeight="500">Eastern</text>
          <text x="230" y="212" textAnchor="start" fontSize="9" fill="#2a1e12" fontFamily="Georgia, serif" fontWeight="500">Shore</text>
        </g>
      </a>
    </svg>
  )
}

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
            <p className="text-xs text-[#9e8a6e] tracking-wide">Select a marker to open in Google Maps</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm border border-[#e8d5b0] rounded-sm overflow-hidden shadow-sm">
              <TasmaniaMap />
            </div>
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
