import { useState, useEffect, useRef, useMemo } from 'react'
import Fuse from 'fuse.js'
import { SEARCH_INDEX } from '../data/searchIndex.js'

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: 'title',       weight: 0.5 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords',    weight: 0.2 },
  ],
  threshold: 0.35,
  minMatchCharLength: 2,
  includeScore: true,
})

const CATEGORY_COLOURS = {
  Article:       'bg-[#f8f1e3] text-[#8a6f3f]',
  Page:          'bg-[#eef4f0] text-[#3a6b4a]',
  Home:          'bg-[#eef4f0] text-[#3a6b4a]',
  'About Gnosis':'bg-[#eef4f0] text-[#3a6b4a]',
  Teachings:     'bg-[#eef4f0] text-[#3a6b4a]',
  Classes:       'bg-[#eef4f0] text-[#3a6b4a]',
  Courses:       'bg-[#eef4f0] text-[#3a6b4a]',
  Community:     'bg-[#eef4f0] text-[#3a6b4a]',
  History:       'bg-[#eef4f0] text-[#3a6b4a]',
  Resources:     'bg-[#eef4f0] text-[#3a6b4a]',
  FAQ:           'bg-[#eef4f0] text-[#3a6b4a]',
  Contact:       'bg-[#eef4f0] text-[#3a6b4a]',
  Centres:       'bg-[#eef4f0] text-[#3a6b4a]',
  Articles:      'bg-[#eef4f0] text-[#3a6b4a]',
}

export default function Search() {
  const [open, setOpen]       = useState(false)
  const [query, setQuery]     = useState('')
  const [results, setResults] = useState([])
  const [active, setActive]   = useState(0)
  const inputRef              = useRef(null)
  const listRef               = useRef(null)

  // Open/close
  const openSearch  = () => setOpen(true)
  const closeSearch = () => { setOpen(false); setQuery(''); setResults([]); setActive(0) }

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [open])

  // Global keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      // ⌘K / Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
      // Escape to close
      if (e.key === 'Escape' && open) closeSearch()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Live search
  const handleInput = (e) => {
    const val = e.target.value
    setQuery(val)
    setActive(0)
    if (val.trim().length < 2) { setResults([]); return }
    setResults(fuse.search(val.trim()).slice(0, 9))
  }

  // Arrow key + Enter navigation
  const handleKeyDown = (e) => {
    if (!results.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive(a => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive(a => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[active]) {
        window.location.href = results[active].item.href
        closeSearch()
      }
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[active]
      el?.scrollIntoView({ block: 'nearest' })
    }
  }, [active])

  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)

  return (
    <>
      {/* ── Trigger button ───────────────────────────────────────────────────── */}
      <button
        onClick={openSearch}
        aria-label="Search site"
        className="flex items-center gap-1.5 text-[#4a3a26] hover:text-[#c9a96e] transition-colors group"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        </svg>
        <span className="hidden xl:inline text-[11px] font-medium tracking-wide whitespace-nowrap">
          Search
        </span>
        <kbd className="hidden xl:inline text-[9px] font-mono text-[#9e8a6e] bg-[#f5ede0] border border-[#e0ccaa] rounded px-1 py-0.5 leading-none">
          {isMac ? '⌘K' : 'Ctrl K'}
        </kbd>
      </button>

      {/* ── Modal ─────────────────────────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
          onClick={closeSearch}
          aria-modal="true"
          role="dialog"
          aria-label="Site search"
        >
          <div
            className="w-full max-w-xl bg-white rounded-sm shadow-2xl overflow-hidden border border-[#e8d5b0]"
            onClick={e => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#f0e6d0]">
              <svg className="w-4 h-4 text-[#c9a96e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Search teachings, practices, articles…"
                className="flex-1 text-[#2a1e12] text-sm placeholder-[#9e8a6e] outline-none bg-transparent"
                spellCheck={false}
                autoComplete="off"
                aria-label="Search query"
              />
              <button
                onClick={closeSearch}
                aria-label="Close search"
                className="text-[#9e8a6e] hover:text-[#4a3a26] transition-colors text-xs font-medium"
              >
                <kbd className="font-sans">Esc</kbd>
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <ul ref={listRef} className="max-h-[60vh] overflow-y-auto divide-y divide-[#f5ede0]" role="listbox">
                {results.map(({ item }, i) => (
                  <li key={item.href} role="option" aria-selected={i === active}>
                    <a
                      href={item.href}
                      onClick={closeSearch}
                      className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                        i === active ? 'bg-[#fdf8ef]' : 'hover:bg-[#fdf8ef]'
                      }`}
                      onMouseEnter={() => setActive(i)}
                    >
                      <span
                        className={`shrink-0 mt-0.5 text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                          CATEGORY_COLOURS[item.category] ?? 'bg-[#f5ede0] text-[#8a6f3f]'
                        }`}
                      >
                        {item.category}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#2a1e12] leading-snug truncate">{item.title}</p>
                        <p className="text-xs text-[#7a6a56] leading-relaxed line-clamp-2 mt-0.5">{item.description}</p>
                      </div>
                      <svg className="shrink-0 ml-auto w-3.5 h-3.5 text-[#c9a96e] opacity-60 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Empty state */}
            {query.length >= 2 && results.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p className="text-sm text-[#9e8a6e]">No results for <em className="text-[#4a3a26] not-italic font-medium">"{query}"</em></p>
                <p className="text-xs text-[#b0997a] mt-1">Try a shorter word or a different term.</p>
              </div>
            )}

            {/* Hint when nothing typed */}
            {query.length < 2 && (
              <div className="px-4 py-5 text-center">
                <p className="text-xs text-[#b0997a]">
                  Try <em className="not-italic text-[#8a6f3f]">meditation</em>, <em className="not-italic text-[#8a6f3f]">ego</em>, <em className="not-italic text-[#8a6f3f]">dreams</em>, <em className="not-italic text-[#8a6f3f]">Hobart classes</em>…
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
