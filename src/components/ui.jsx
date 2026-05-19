/* Shared UI primitives used across all pages */

import { useRef, useEffect, useCallback } from 'react'

// ─── Parallax engine ────────────────────────────────────────────────────────
//
// How it works:
//   The image is made `travelPx` pixels taller than its container and offset
//   upward by half that amount so it always covers the container regardless of
//   scroll position.  A passive scroll listener (throttled via RAF) reads the
//   section's viewport position and sets `transform: translateY()` on the image
//   — which runs entirely on the GPU compositing layer and never triggers layout.
//
//   progress = rect.bottom / (rect.height + vh)
//     → 1.0 when the section first enters the viewport from the bottom
//     → 0.5 when the section is centred in the viewport
//     → 0.0 when the section fully exits the top of the viewport
//
//   offset = (progress − 0.5) × travelPx
//     → image sits high in frame when section enters, low when it exits,
//       creating the slow-depth effect the user expects.
//
// Disabled automatically for:
//   • prefers-reduced-motion
//   • touch/stylus-primary devices (no fine pointer = phone/tablet)
//     On those devices the image is centred statically — no CLS, no jank.
//
// CLS prevention:
//   The container div sets its height via CSS classes (e.g. h-[65vh]).  The
//   image never influences layout because it is `position: absolute` inside an
//   `overflow-hidden` parent.  Space is always reserved correctly before the
//   image loads.

export function ParallaxImage({
  src,
  srcSet,
  sizes,
  position = 'center center',
  travelPx = 80,
  fetchPriority,
  loading = 'lazy',
  className = '',
}) {
  const wrapRef = useRef(null)
  const imgRef  = useRef(null)
  const rafRef  = useRef(null)
  const liveRef = useRef(false) // true only while listeners are active

  const update = useCallback(() => {
    if (!wrapRef.current || !imgRef.current || !liveRef.current) return
    const rect    = wrapRef.current.getBoundingClientRect()
    const vh      = window.innerHeight
    const raw     = rect.bottom / (rect.height + vh)
    const progress = Math.min(1, Math.max(0, raw))
    const offset  = (progress - 0.5) * travelPx
    imgRef.current.style.transform = `translateY(${offset.toFixed(2)}px)`
  }, [travelPx])

  useEffect(() => {
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // "fine" pointer = mouse; absence means touch/pen primary device
    const noHover  = !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (noMotion || noHover) return // static image on those devices

    liveRef.current = true

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        update()
        rafRef.current = null
      })
    }

    update() // set position on mount before first scroll
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      liveRef.current = false
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [update])

  return (
    // overflow-hidden clips the image that is intentionally taller than its container
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet || undefined}
        sizes={srcSet ? (sizes || '100vw') : undefined}
        alt=""
        className="absolute left-0 right-0 w-full object-cover pointer-events-none select-none"
        style={{
          // Taller than container by travelPx; centred so half overflows each edge
          height: `calc(100% + ${travelPx}px)`,
          top: `${-(travelPx / 2)}px`,
          objectPosition: position,
          willChange: 'transform',
        }}
        fetchpriority={fetchPriority}
        loading={loading}
        decoding="async"
      />
    </div>
  )
}

// ─── HeroParallax ───────────────────────────────────────────────────────────
// Above-fold page banner. fetchpriority="high" for LCP; larger travelPx since
// the section is tall and the user sees the parallax immediately on scroll.
export function HeroParallax({
  src,
  srcSet,
  sizes,
  alt = '',
  overlay = 'bg-gradient-to-b from-[#1c1409]/65 via-[#1c1409]/50 to-[#1c1409]/80',
  heightClass = 'h-[65vh] min-h-[440px]',
  position = 'center center',
  children,
}) {
  return (
    <header className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <ParallaxImage
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        position={position}
        travelPx={80}
        fetchPriority="high"
        loading="eager"
      />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      {alt && <span className="sr-only">{alt}</span>}
      {children}
    </header>
  )
}

// ─── ParallaxCTA ────────────────────────────────────────────────────────────
// Below-fold call-to-action banner. loading="lazy"; smaller travel since these
// sections are shorter.
export function ParallaxCTA({
  src,
  srcSet,
  sizes,
  alt = '',
  overlay = 'bg-[#1c1409]/80',
  position = 'center center',
  children,
}) {
  return (
    <section className="relative py-24 px-4 overflow-hidden fade-section">
      <ParallaxImage
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        position={position}
        travelPx={60}
        loading="lazy"
      />
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
// Pull-quote banner with background image parallax.
export function QuoteParallax({
  src,
  srcSet,
  sizes,
  alt = '',
  position = 'center center',
  overlay = 'bg-[#1c1409]/75',
  quote,
  cite,
}) {
  return (
    <section className="relative py-24 px-4 overflow-hidden fade-section">
      <ParallaxImage
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        position={position}
        travelPx={60}
        loading="lazy"
      />
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
