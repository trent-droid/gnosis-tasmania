import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gssawLogoImg from '../assets/gssaw_logo.png'
import { useScrollToTop, useScrollFadeIn } from '../hooks/useScrollBehavior.js'

// Top-level items: Home · Teachings · Meditation · Articles · Community · Courses · Contact
const NAV_ITEMS = [
  { to: '/', short: 'Home', full: 'Home', children: null },
  {
    to: '/core-teachings', short: 'Teachings', full: 'Teachings',
    children: [
      { to: '/practices', label: 'Practices' },
    ],
  },
  { to: '/meditation-classes', short: 'Meditation', full: 'Meditation', children: null },
  { to: '/articles',        short: 'Articles',  full: 'Articles',  children: null },
  { to: '/community',       short: 'Community', full: 'Community', children: null },
  { to: '/courses',         short: 'Courses',   full: 'Courses',   children: null },
  {
    to: '/contact', short: 'Contact', full: 'Contact',
    children: [
      { to: '/contact',        label: 'Contact Us' },
      { to: '/gnostic-centres', label: 'Centres' },
      { to: '/faq',            label: 'FAQ' },
    ],
  },
]

const desktopCls = (isActive) =>
  `text-[11px] font-medium tracking-wide transition-colors whitespace-nowrap ${
    isActive ? 'text-[#c9a96e]' : 'text-[#4a3a26] hover:text-[#c9a96e]'
  }`

const mobileCls = ({ isActive }) =>
  `block px-3 py-2 rounded-sm text-sm font-medium transition-colors ${
    isActive
      ? 'bg-[#fdf8ef] text-[#c9a96e]'
      : 'text-[#3a2f1f] hover:bg-[#f8f1e3] hover:text-[#8a6f3f]'
  }`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useScrollToTop()
  useScrollFadeIn()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_#e8d5b0]' : 'shadow-[0_1px_0_0_#f0e6d0]'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-6">

          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Gnosis Tasmania home"
          >
            <img src={gssawLogoImg} alt="" className="h-9 w-auto object-contain" aria-hidden="true" />
            <span className="font-display text-lg font-medium tracking-wide text-[#3a2f1f]">
              Gnosis Tasmania
            </span>
          </Link>

          {/* Desktop nav — lg (1024px) so Articles tab is visible on standard laptops */}
          <ul className="hidden lg:flex items-center gap-6 flex-1 justify-end" role="list">
            {NAV_ITEMS.map(({ to, short, children }) => {
              if (!children) {
                return (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'} className={({ isActive }) => desktopCls(isActive)}>
                      {short}
                    </NavLink>
                  </li>
                )
              }
              return (
                <li key={to} className="nav-item relative">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${desktopCls(isActive)} inline-flex items-center gap-1`
                    }
                  >
                    {short}
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                  <div className="nav-dropdown absolute top-full left-0 pt-2 min-w-[180px]">
                    <div className="bg-white border border-[#e8d5b0] rounded-sm shadow-lg py-1">
                      {children.map(({ to: childTo, label }) => (
                        <NavLink
                          key={childTo}
                          to={childTo}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-[11px] font-medium tracking-wide transition-colors ${
                              isActive ? 'text-[#c9a96e] bg-[#fdf8ef]' : 'text-[#4a3a26] hover:text-[#c9a96e] hover:bg-[#fdf8ef]'
                            }`
                          }
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Hamburger — hidden at lg+ where desktop nav shows */}
          <button
            className="lg:hidden p-2 text-[#3a2f1f] hover:bg-[#f8f1e3] rounded-sm transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[#e8d5b0] pb-4" id="mobile-menu">
            <ul className="flex flex-col gap-0.5 pt-2" role="list">
              {NAV_ITEMS.map(({ to, full, children }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={mobileCls}
                  >
                    {full}
                  </NavLink>
                  {children && (
                    <ul className="pl-4">
                      {children.map(({ to: childTo, label }) => (
                        <li key={childTo}>
                          <NavLink
                            to={childTo}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block px-3 py-1.5 rounded-sm text-sm transition-colors ${
                                isActive ? 'text-[#c9a96e]' : 'text-[#6b5535] hover:text-[#8a6f3f]'
                              }`
                            }
                          >
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
