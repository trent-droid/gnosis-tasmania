import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel, SectionHeading } from '../components/ui.jsx'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { BASE } from '../constants.js'
import heroImg from '../assets/hero_school_athens.jpg?format=webp'
import ProtectedEmail from '../components/ProtectedEmail.jsx'

// ─── Data: Australian centres ────────────────────────────────────────────────

const AU_STATES = [
  {
    state: 'New South Wales', abbr: 'NSW',
    centres: [
      { city: 'Blue Mountains', email: 'australiangnosis@gmail.com' },
      { city: 'Byron Bay', email: 'gnosisbyron@gmail.com' },
      { city: 'Lismore', website: 'http://lismoregnosis.blogspot.com.au', email: 'lismoregnosis@gmail.com' },
      { city: 'Newcastle', website: 'https://www.newcastlegnosis.org', email: 'newcastlegnosis@gmail.com' },
      { city: 'Sydney', website: 'https://www.gnosissydney.com', email: 'gnosissydney@gmail.com' },
      { city: 'Sydney -Western', email: 'selfknowledge2010@hotmail.com' },
      { city: 'Sydney -South Western', email: 'swsgnosis@gmail.com' },
    ],
  },
  {
    state: 'Queensland', abbr: 'QLD',
    centres: [
      { city: 'Gold Coast', website: 'https://www.gnosisgoldcoast.com.au', email: 'gnosisgc@gmail.com' },
      { city: 'Sunshine Coast', website: 'https://www.sunshinecoastgnosis.org', email: 'ben@sunshinecoastgnosis.org' },
    ],
  },
  {
    state: 'South Australia', abbr: 'SA',
    centres: [
      { city: 'Adelaide', website: 'https://adelaide.gnosticsociety.org.au', email: 'gnosisadelaide@gmail.com' },
      { city: 'Adelaide -Para Hills', email: 'gnosisparahills@gmail.com' },
    ],
  },
  {
    state: 'Tasmania', abbr: 'TAS',
    highlight: true,
    centres: [
      { city: 'Hobart', website: 'https://gnosistasmania.com.au', email: 'gnosishobart@gmail.com', note: 'You are here' },
      { city: 'Hobart (Eastern Shore)', website: 'https://gnosistasmania.com.au', email: 'gnosis.hobarteast@gmail.com', note: 'You are here' },
      { city: 'Launceston', email: 'gnoss.launceston@gmail.com', note: 'You are here' },
    ],
  },
  {
    state: 'Victoria', abbr: 'VIC',
    centres: [
      { city: 'Melbourne', website: 'https://www.melbournegnosis.com', email: 'info@melbournegnosis.com' },
      { city: 'Melbourne -Chadstone', email: 'australiangnostic@gmail.com' },
      { city: 'Melbourne -Heathmont', website: 'https://www.melbournegnosis.com', email: 'heathmontgnosis@outlook.com' },
      { city: 'Melbourne -Mornington', website: 'https://www.melbournegnosis.com', email: 'gnosismtmartha@gmail.com' },
    ],
  },
  {
    state: 'Western Australia', abbr: 'WA',
    centres: [
      { city: 'Mandurah', website: 'https://www.gnosismandurah.com', email: 'gnosismandurah@inbox.com' },
      { city: 'Perth -Balga', email: 'holygrailseeker@me.com' },
      { city: 'Perth -Como', email: 'gnosisaustralia@optusnet.com.au' },
      { city: 'Perth -Darch' },
      { city: 'Perth -Fremantle', website: 'https://www.gnosisperth.com', email: 'freognosis@gnosisperth.com' },
      { city: 'Perth -Scarborough', email: 'gnosisforever@gmail.com' },
    ],
  },
  {
    state: 'Australian Capital Territory', abbr: 'ACT',
    centres: [
      { city: 'Canberra', website: 'https://gnosiscanberra.org', email: 'gnosiscanberra@gmail.com' },
    ],
  },
]

const NZ_CENTRES = [
  { city: 'Auckland (Albany)', website: 'https://gnosisnz.org', email: 'insightgnosis@gmail.com' },
  { city: 'Auckland (City)', website: 'https://newzealandgnosis.co.nz', email: 'AucklandGnosis@gmail.com' },
]

// ─── Data: International centres ─────────────────────────────────────────────

const INTERNATIONAL = [
  {
    region: 'Africa',
    entries: [
      { country: 'South Africa', detail: 'Johannesburg (Olivedale)', website: 'https://www.gnosissouthafrica.com', email: 'info@gnosissouthafrica.com' },
    ],
  },
  {
    region: 'Asia & Pacific',
    entries: [
      { country: 'Cambodia', detail: 'Phnom Penh', email: 'gnosticclasses@gmail.com' },
      { country: 'Japan', detail: 'Yokohama', website: 'https://gnosticsociety.jp' },
    ],
  },
  {
    region: 'Europe',
    entries: [
      { country: 'Germany', detail: 'Pforzheim', website: 'https://studienkreis-gnosis.org', email: 'studienkreis.gnosis@gmail.com' },
      { country: 'Italy', detail: 'Bari · Bologna · Florence · Genoa · Naples · Padua · Palermo · Rome · Turin' },
      { country: 'Spain', detail: '23 centres: Barcelona, Madrid, Bilbao, Valencia and more' },
      { country: 'UK & Ireland', detail: 'Bristol · Dublin · Edinburgh · Glasgow · London · Nottingham' },
    ],
  },
  {
    region: 'North America',
    entries: [
      { country: 'Canada', detail: 'Vancouver, BC', website: 'https://gnosisbc.com' },
      { country: 'Mexico', detail: '18 centres nationwide' },
      { country: 'Puerto Rico', detail: 'Bayamón' },
      { country: 'United States', detail: '23+ centres: Albany, Austin, Portland, Seattle, San Diego and more' },
    ],
  },
  {
    region: 'Central & South America',
    entries: [
      { country: 'Argentina', detail: 'Buenos Aires region: Cañuelas, La Plata, Quilmes' },
      { country: 'Brazil', detail: 'Belo Horizonte · Balneário Camboriú · Campinas' },
      { country: 'Colombia', detail: 'Bogotá · Medellín · Rionegro' },
      { country: 'Costa Rica', detail: 'Alajuela · Liberia · San José' },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function CentreRow({ city, website, email, note }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-3 border-b border-[#ede3d0] last:border-0">
      <div>
        <p className="text-sm font-medium text-[#2a1e12]">{city}</p>
        {note && (
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#c9a96e] mt-0.5">
            {note}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 sm:text-right">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer"
            className="text-[11px] text-[#8a6f3f] hover:text-[#c9a96e] transition-colors underline underline-offset-2">
            Website
          </a>
        )}
        {email && (
          <ProtectedEmail
            email={email}
            className="text-[11px] text-[#8a6f3f] hover:text-[#c9a96e] transition-colors"
          />
        )}
      </div>
    </div>
  )
}

function StateCard({ state, abbr, centres, highlight }) {
  return (
    <div className={`rounded-sm border overflow-hidden ${
      highlight
        ? 'border-[#c9a96e] shadow-md'
        : 'border-[#e8d5b0] bg-white'
    }`}>
      <div className={`flex items-baseline gap-3 px-5 py-3 border-b ${
        highlight
          ? 'bg-[#c9a96e]/10 border-[#c9a96e]'
          : 'bg-[#faf6ef] border-[#e8d5b0]'
      }`}>
        <h3 className="font-display text-base font-medium text-[#2a1e12]">{state}</h3>
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#8a6f3f]">{abbr}</span>
        {highlight && (
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider bg-[#c9a96e] text-[#1c1409] px-2 py-0.5 rounded-sm">
            Our home
          </span>
        )}
      </div>
      <div className={`px-5 py-1 ${highlight ? 'bg-[#fdf8ef]' : 'bg-white'}`}>
        {centres.map(c => <CentreRow key={c.city} {...c} />)}
      </div>
    </div>
  )
}

function IntlRegionCard({ region, entries }) {
  return (
    <div className="rounded-sm border border-[#e8d5b0] bg-white overflow-hidden fade-section">
      <div className="px-5 py-3 bg-[#faf6ef] border-b border-[#e8d5b0]">
        <h3 className="font-display text-base font-medium text-[#2a1e12]">{region}</h3>
      </div>
      <ul className="px-5 py-3 space-y-3">
        {entries.map(({ country, detail, website, email }) => (
          <li key={country}>
            <p className="text-sm font-semibold text-[#3a2f1f]">{country}</p>
            <p className="text-xs text-[#6b5535] mt-0.5 leading-relaxed">{detail}</p>
            <div className="flex flex-wrap gap-3 mt-1">
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-[#8a6f3f] hover:text-[#c9a96e] transition-colors underline underline-offset-2">
                  Visit website →
                </a>
              )}
              {email && (
                <ProtectedEmail
                  email={email}
                  className="text-[11px] text-[#8a6f3f] hover:text-[#c9a96e] transition-colors"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CentresPage() {  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Gnostic Centres Worldwide',
    'url': `${BASE}/gnostic-centres`,
    'description': 'A global directory of Gnostic study centres affiliated with the teachings of Samael Aun Weor, including every Australian centre and international centres across five continents.',
    'inLanguage': 'en-AU',
  })

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#3a2f1f]">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <HeroParallax
        src={heroImg}
        alt="The School of Athens by Raphael, depicting philosophers of every tradition gathered in one place"
        overlay="bg-gradient-to-b from-[#1c1409]/70 via-[#1c1409]/50 to-[#1c1409]/80"
        position="center 35%"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">
            A Living Global Tradition
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Gnostic Centres Worldwide
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A worldwide community of sincere aspirants, sharing the ancient science of Gnosis across every continent.
          </p>
        </div>
      </HeroParallax>

      <main>

        {/* ── Quick navigation ──────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#e8d5b0] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center text-xs font-medium">
            <a href="#australia" className="px-4 py-1.5 bg-[#faf6ef] border border-[#e8d5b0] rounded-sm text-[#4a3a26] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
              Australia
            </a>
            <a href="#new-zealand" className="px-4 py-1.5 bg-[#faf6ef] border border-[#e8d5b0] rounded-sm text-[#4a3a26] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
              New Zealand
            </a>
            <a href="#international" className="px-4 py-1.5 bg-[#faf6ef] border border-[#e8d5b0] rounded-sm text-[#4a3a26] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
              International
            </a>
            <a href="/contact" className="px-4 py-1.5 bg-[#c9a96e] text-[#1c1409] rounded-sm hover:bg-[#e0bf80] transition-colors">
              Contact Gnosis Tasmania
            </a>
          </div>
        </section>

        {/* ── Australia ─────────────────────────────────────────────────────── */}
        <section id="australia" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-14">
              <SectionLabel>Australia</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                Gnostic Centres in Australia
              </h2>
              <p className="text-base text-[#4a3a26] max-w-2xl mx-auto leading-relaxed mb-5">
                Centres across every state and territory, all part of the Australian Gnostic Association,
                offering weekly meditation and study classes free of charge.
              </p>
              <GoldRule />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {AU_STATES.map(s => <StateCard key={s.abbr} {...s} />)}
            </div>

            <p className="text-xs text-[#8a6f3f] text-center mt-8 italic">
              Contact individual centres to confirm current venue and schedule.
            </p>
          </div>
        </section>

        {/* ── New Zealand ───────────────────────────────────────────────────── */}
        <section id="new-zealand" className="py-16 px-4 bg-white border-y border-[#e8d5b0]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Oceania</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#2a1e12] mb-4">
                New Zealand
              </h2>
              <GoldRule />
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-[#e8d5b0] bg-[#faf6ef] overflow-hidden">
              <div className="px-5 py-3 border-b border-[#e8d5b0] bg-white">
                <h3 className="font-display text-base font-medium text-[#2a1e12]">New Zealand</h3>
              </div>
              <div className="px-5 py-1">
                {NZ_CENTRES.map(c => <CentreRow key={c.city} {...c} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── International ─────────────────────────────────────────────────── */}
        <section id="international" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-14">
              <SectionLabel>Around the World</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2a1e12] mb-5">
                International Centres
              </h2>
              <p className="text-base text-[#4a3a26] max-w-2xl mx-auto leading-relaxed mb-5">
                The Gnostic tradition spans five continents. The centres below are affiliated with the
                teachings of Samael Aun Weor and the worldwide Gnostic Society.
              </p>
              <GoldRule />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INTERNATIONAL.map(r => <IntlRegionCard key={r.region} {...r} />)}
            </div>

            <p className="text-xs text-[#8a6f3f] text-center mt-8 italic">
              International centre data sourced from{' '}
              <a href="https://gnosistr.com/centros-gnosticos-gnostic-centers-asociaciones-gnosticas/"
                target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#c9a96e] transition-colors">
                gnosistr.com
              </a>
              . For the most current contact details, use the centre's own website.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-[#2a1e12] text-center fade-section">
          <div className="max-w-2xl mx-auto">
            <SectionLabel>Begin in Tasmania</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#f8f1e3] mb-4">
              Join us in Hobart or Launceston
            </h2>
            <GoldRule className="mb-6" />
            <p className="text-[#c8b89a] text-base leading-relaxed mb-8">
              Our weekly classes are open to all. No experience necessary, no fees charged.
              We would love to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="bg-[#c9a96e] text-[#1c1409] px-8 py-3 rounded-sm text-sm font-semibold hover:bg-[#e0bf80] transition-colors tracking-wide">
                Get in Touch
              </a>
              <a href="/meditation-classes"
                className="border border-[#c9a96e]/70 text-[#e8d5b0] px-8 py-3 rounded-sm text-sm font-medium hover:bg-white/10 hover:border-[#c9a96e] transition-colors tracking-wide">
                View Meditation Classes
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
