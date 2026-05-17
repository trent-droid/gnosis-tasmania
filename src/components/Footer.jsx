import { Link } from 'react-router-dom'
import gssawLogoImg from '../assets/gssaw_logo.png'

const PAGES = [
  { to: '/',                       label: 'Home' },
  { to: '/what-is-gnosis',         label: 'What is Gnosis?' },
  { to: '/core-teachings',         label: 'Core Teachings' },
  { to: '/practices',              label: 'Practices' },
  { to: '/courses',                label: 'Courses & Classes' },
  { to: '/introduction-to-gnosis', label: 'Introduction to Gnosis' },
  { to: '/meditation-classes',     label: 'Meditation Classes' },
  { to: '/community',              label: 'Our Community' },
  { to: '/history',                label: 'History of Gnosis' },
  { to: '/contact',                label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1c1409] text-[#c8b89a] py-14 px-4" aria-label="Site footer">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-14 max-w-5xl mx-auto" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand & donation note */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={gssawLogoImg} alt="" className="h-9 w-auto object-contain opacity-90" aria-hidden="true" />
              <p className="font-display text-lg font-medium text-[#f8f1e3]">Gnosis Tasmania</p>
            </div>
            <p className="text-xs leading-relaxed text-[#9e8a6e] mb-4">
              Practical Gnostic teachings across Hobart and Launceston for sincere seekers of inner knowledge.
            </p>
            <div className="border-t border-[#3a2f1f] pt-4">
              <p className="text-xs text-[#8a6f3f] font-semibold mb-1">Classes are donation-based.</p>
              <p className="text-xs text-[#6b5535] leading-relaxed">
                Your generosity helps make these teachings accessible to all who seek them.
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-widest mb-3">Pages</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {PAGES.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-[#c8b89a] hover:text-[#e8d5b0] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold text-[#c9a96e] uppercase tracking-widest mb-3">Connect</p>
            <address className="not-italic space-y-1.5 mb-4">
              <p>
                <a href="mailto:gnosis.launceston@gmail.com"
                  className="text-xs text-[#c8b89a] hover:text-[#e8d5b0] transition-colors break-all">
                  gnosis.launceston@gmail.com
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/GnosticSocietyAustralia" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#c8b89a] hover:text-[#e8d5b0] transition-colors">
                  Facebook — Gnostic Society Australia
                </a>
              </p>
              <p>
                <a href="https://gnosisaustralia.org.au" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#c8b89a] hover:text-[#e8d5b0] transition-colors">
                  Gnosis Australia — gnosisaustralia.org.au
                </a>
              </p>
            </address>
            <p className="text-xs text-[#6b5535] leading-relaxed mb-4">
              Hobart · Launceston · Tasmania, Australia
            </p>
            <Link
              to="/contact"
              className="inline-block text-xs font-semibold text-[#1c1409] bg-[#c9a96e] hover:bg-[#b8963e] px-4 py-2 rounded-sm transition-colors tracking-wide"
            >
              Get Involved →
            </Link>
          </div>
        </div>

        {/* Credits */}
        <div className="border-t border-[#3a2f1f] pt-6 mb-4 space-y-1.5">
          <p className="text-xs text-[#6b5535] leading-relaxed">
            <strong className="text-[#8a6f3f]">Hero artworks:</strong>{' '}
            Creation of Adam, Michelangelo (1512) · School of Athens, Raphael (1511) · Adoration of the Mystic Lamb, Jan van Eyck (c.1432) · La Primavera, Botticelli (c.1482) · Hermes Trismegistus mosaic, Siena Cathedral (c.1480). Public domain.
          </p>
          <p className="text-xs text-[#6b5535] leading-relaxed">
            <strong className="text-[#8a6f3f]">Section artworks:</strong>{' '}
            Song of the Angels &amp; Virgin and Child, Bouguereau (1881, 1888) · Jacob's Ladder, Blake (c.1805) · Garden of Eden, Cranach (1530) · Melencolia I, Dürer (1514) · Vitruvian Man, Leonardo da Vinci (c.1490) · Khunrath, Amphitheatrum Sapientiae Aeternae (1595) · Fludd, Utriusque Cosmi (1617) · Rosarium Philosophorum (c.1550) · Tree of Life, Kircher, Oedipus Aegyptiacus (1652) · Splendor Solis, Trismosin (c.1532). All public domain.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4a3a26]">
            © {new Date().getFullYear()} Gnosis Tasmania · Gnostic Society of Tasmania. All teachings shared openly.
          </p>
          <Link to="/" className="text-xs text-[#6b5535] hover:text-[#c9a96e] transition-colors">
            gnosistasmania.com.au
          </Link>
        </div>
      </div>
    </footer>
  )
}
