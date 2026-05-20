/* Shared UI primitives used across all pages */

// ─── ParallaxImage ───────────────────────────────────────────────────────────
//
// Pure CSS parallax — no JS, no scroll listeners, no RAF.
//
// The .parallax-bg class (in index.css) defaults to background-attachment:scroll
// and upgrades to background-attachment:fixed on desktop mouse devices via the
// (hover:hover) and (pointer:fine) media query.
//
// With `fixed`: the background is positioned relative to the viewport, not the
// element.  As the section scrolls past, the image stays fixed — revealing
// different parts of it through the section's "window" — creating depth.
//
// With `scroll` (mobile/touch): the image is a static cover — no iOS snapping,
// no CLS.  Space is always reserved immediately by the parent's height class.
//
// Why no transform on fade-section:
//   CSS `background-attachment:fixed` is silently broken by ANY CSS transform on
//   an ancestor element (even translateY(0) keeps the stacking context alive).
//   We removed `transform:translateY(16px)` from fade-section in index.css so
//   that parallax works inside every section — not just hero banners.

export function ParallaxImage({ src, position = 'center center' }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
      style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      aria-hidden="true"
    />
  )
}

// ─── HeroParallax ───────────────────────────────────────────────────────────
// Above-fold page banner.
export function HeroParallax({
  src,
  alt = '',
  overlay = 'bg-gradient-to-b from-[#1c1409]/65 via-[#1c1409]/50 to-[#1c1409]/80',
  heightClass = 'h-[65vh] min-h-[440px]',
  position = 'center center',
  children,
}) {
  return (
    <header className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <ParallaxImage src={src} position={position} />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      {alt && <span className="sr-only">{alt}</span>}
      {children}
    </header>
  )
}

// ─── ParallaxCTA ────────────────────────────────────────────────────────────
// Below-fold call-to-action banner.
export function ParallaxCTA({
  src,
  alt = '',
  overlay = 'bg-[#1c1409]/80',
  position = 'center center',
  children,
}) {
  return (
    <section className="relative py-24 px-4 overflow-hidden fade-section">
      <ParallaxImage src={src} position={position} />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export function GoldRule({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#c9a96e]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#c9a96e]" />
    </div>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-3 block">
      {children}
    </span>
  )
}

export function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ─── QuoteParallax ──────────────────────────────────────────────────────────
// Pull-quote banner with CSS parallax background.
export function QuoteParallax({
  src,
  alt = '',
  position = 'center center',
  overlay = 'bg-[#1c1409]/75',
  quote,
  cite,
}) {
  return (
    <section className="relative py-24 px-4 overflow-hidden fade-section">
      <ParallaxImage src={src} position={position} />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="w-10 h-px bg-[#c9a96e] mx-auto mb-8" aria-hidden="true" />
        <blockquote>
          <p className="font-display text-2xl sm:text-3xl font-light text-[#f8f1e3] italic leading-relaxed mb-6">
            "{quote}"
          </p>
          {cite && (
            <cite className="text-sm text-[#c9a96e] not-italic font-medium tracking-wide">
              - {cite}
            </cite>
          )}
        </blockquote>
        <div className="w-10 h-px bg-[#c9a96e] mx-auto mt-8" aria-hidden="true" />
      </div>
    </section>
  )
}

export function ArtBanner({ src, srcWebp, srcsetWebp, sizes, alt, caption, objectPosition = 'center center', heightClass = 'h-64 sm:h-80' }) {
  return (
    <figure className="overflow-hidden rounded-sm shadow-xl border border-[#c8b89a]">
      <picture>
        {srcsetWebp
          ? <source srcSet={srcsetWebp} sizes={sizes} type="image/webp" />
          : srcWebp && <source srcSet={srcWebp} type="image/webp" />
        }
        <img
          src={src} alt={alt}
          className={`w-full ${heightClass} object-cover`}
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {caption && (
        <figcaption className="text-xs text-[#6b5535] italic text-center py-2.5 px-4 bg-[#f8f1e3] border-t border-[#c8b89a]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function Blockquote({ children, cite, bg = 'bg-white' }) {
  return (
    <blockquote className={`border-l-[3px] border-[#c9a96e] pl-6 py-3 ${bg} rounded-r-sm`}>
      <p className="font-display text-[#3a2f1f] italic text-xl leading-relaxed">{children}</p>
      {cite && <cite className="text-sm text-[#c9a96e] not-italic mt-2 block font-medium">{cite}</cite>}
    </blockquote>
  )
}

export function SectionHeading({ label, title, subtitle, children, light = false }) {
  return (
    <div className="text-center mb-14">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className={`font-display text-4xl sm:text-5xl font-light mb-5 ${light ? 'text-[#f8f1e3]' : 'text-[#2a1e12]'}`}>
        {title}
      </h2>
      {children}
      {subtitle && (
        <p className={`text-base max-w-2xl mx-auto mb-5 leading-relaxed ${light ? 'text-[#c8b89a]' : 'text-[#4a3a26]'}`}>
          {subtitle}
        </p>
      )}
      <GoldRule />
    </div>
  )
}
