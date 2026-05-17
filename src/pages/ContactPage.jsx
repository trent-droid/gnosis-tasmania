import { useState, useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { HeroParallax, GoldRule, SectionLabel, SectionHeading } from '../components/ui.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import esotericFlammarionImg from '../assets/esoteric_flammarion_colorized.jpg?format=webp'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const LOCATIONS = [
  {
    city: 'Hobart',
    description: 'Our Hobart centre serves the greater Hobart area, offering weekly classes.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.launceston@gmail.com',
  },
  {
    city: 'Launceston',
    description: 'The Launceston group meets weekly, bringing Gnostic teachings to the heart of northern Tasmania.',
    schedule: 'Classes run weekly. Contact us for current times and venue details.',
    contact: 'gnosis.launceston@gmail.com',
  },
]

const INTERESTS = [
  'Introduction to Gnosis Course',
  'Meditation Classes',
  'General Enquiry',
  'Visiting a Class',
  'Online Participation',
  'Other',
]

const HOW_HEARD = [
  'Search engine (Google etc.)',
  'Social media',
  'Friend or family',
  'Event or talk',
  'Poster or flyer',
  'Other',
]

// ─────────────────────────────────────────────────────────────────────────────
// reCAPTCHA v3 helpers — completely isolated from React.
// All paths are guarded; nothing here can throw into the component tree.
// ─────────────────────────────────────────────────────────────────────────────

// Tracks whether we have already injected the script tag this session.
let scriptInjected = false

function injectRecaptchaScript(siteKey) {
  if (!siteKey) {
    console.error('[reCAPTCHA] VITE_RECAPTCHA_SITE_KEY is not set — skipping script load.')
    return
  }
  if (scriptInjected) return
  scriptInjected = true

  try {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.onerror = () => {
      console.error('[reCAPTCHA] Failed to load reCAPTCHA v3 script — form will still work without it.')
      scriptInjected = false // allow retry on next visit if network recovers
    }
    document.head.appendChild(script)
  } catch (err) {
    console.error('[reCAPTCHA] Unexpected error injecting script:', err)
    scriptInjected = false
  }
}

// Returns a reCAPTCHA v3 token, or null if anything goes wrong.
// Never throws — the caller can always proceed without a token.
async function getRecaptchaToken(siteKey, action) {
  if (!siteKey) {
    console.error('[reCAPTCHA] No site key — submitting form without token.')
    return null
  }
  if (typeof window === 'undefined' || !window.grecaptcha) {
    console.error('[reCAPTCHA] grecaptcha not available — submitting form without token.')
    return null
  }
  try {
    await new Promise((resolve) => window.grecaptcha.ready(resolve))
    const token = await window.grecaptcha.execute(siteKey, { action })
    return token || null
  } catch (err) {
    console.error('[reCAPTCHA] execute() failed — submitting form without token:', err)
    return null
  }
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  usePageMeta(
    'Contact | Gnosis Tasmania',
    'Get in touch with Gnosis Tasmania. Find a weekly Gnostic class in Hobart or Launceston. All enquiries welcome. Classes are donation-based.',
    '/contact'
  )

  // Inject the reCAPTCHA script after mount so it never blocks rendering.
  useEffect(() => {
    injectRecaptchaScript(RECAPTCHA_KEY)
  }, [])

  const [formData, setFormData] = useState({
    name: '', email: '', interest: '', howHeard: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // Try to get a v3 token. If it returns null, we submit without one.
    const token = await getRecaptchaToken(RECAPTCHA_KEY, 'contact_form')

    try {
      const payload = { ...formData }
      if (token) payload['g-recaptcha-response'] = token

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        console.error('[ContactForm] Formspree returned non-OK status:', res.status)
        setStatus('error')
      }
    } catch (err) {
      console.error('[ContactForm] Fetch to Formspree failed:', err)
      setStatus('error')
    }
  }

  const inputCls = 'w-full bg-white border border-[#e8d5b0] rounded-sm px-4 py-3 text-sm text-[#3a2f1f] placeholder:text-[#a89a80] focus:outline-none focus:border-[#c9a96e] transition-colors'
  const labelCls = 'block text-xs font-semibold text-[#6b5535] uppercase tracking-wider mb-2'

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
          <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-widest mb-4">Hobart · Launceston</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#f8f1e3] mb-6 leading-tight">
            Get in Touch
          </h1>
          <GoldRule className="mb-6" />
          <p className="text-[#c8b89a] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We welcome all sincere enquiries. Whether you're curious about our classes, want to visit a session, or simply have a question, we'd love to hear from you.
          </p>
        </div>
      </HeroParallax>

      {/* ── Form + Info ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white fade-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Form */}
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-8">We'd Love to Hear From You</h2>

              {status === 'success' ? (
                <div className="bg-[#faf6ef] border border-[#c9a96e] rounded-sm p-8 text-center">
                  <div className="text-[#c9a96e] text-4xl mb-4" aria-hidden="true">✦</div>
                  <h3 className="font-display text-2xl font-medium text-[#2a1e12] mb-3">Message Received</h3>
                  <p className="text-[#4a3a26] leading-relaxed">
                    Thank you for your enquiry. We will be in touch as soon as possible, usually within a day or two.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelCls}>Your Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={formData.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>Email Address *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="jane@example.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelCls}>I'm interested in</label>
                    <select
                      id="interest" name="interest"
                      value={formData.interest} onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="">Select an option…</option>
                      {INTERESTS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="howHeard" className={labelCls}>How did you hear about us?</label>
                    <select
                      id="howHeard" name="howHeard"
                      value={formData.howHeard} onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="">Select an option…</option>
                      {HOW_HEARD.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Your Message *</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={formData.message} onChange={handleChange}
                      placeholder="Tell us a little about yourself and what you're looking for…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:gnosis.launceston@gmail.com" className="underline">gnosis.launceston@gmail.com</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#c9a96e] hover:bg-[#b8963e] disabled:opacity-60 disabled:cursor-not-allowed text-[#1c1409] font-semibold py-3 rounded-sm transition-colors tracking-wide text-sm"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>

                  <p className="text-xs text-[#8a6f3f] text-center">
                    Or email us directly at{' '}
                    <a href="mailto:gnosis.launceston@gmail.com" className="text-[#c9a96e] hover:underline">
                      gnosis.launceston@gmail.com
                    </a>
                  </p>

                  {/* Required Google attribution when using reCAPTCHA v3 */}
                  {RECAPTCHA_KEY && (
                    <p className="text-[10px] text-[#a89a80] text-center leading-relaxed">
                      Protected by reCAPTCHA.{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8a6f3f]">Privacy Policy</a>
                      {' '}·{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8a6f3f]">Terms</a>
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Info panel */}
            <div>
              <SectionLabel>Contact Information</SectionLabel>
              <h2 className="font-display text-3xl font-light text-[#2a1e12] mb-8">Find Us</h2>

              <div className="space-y-5 mb-10">
                {LOCATIONS.map(({ city, description, schedule, contact }) => (
                  <div key={city} className="bg-[#faf6ef] border border-[#e8d5b0] rounded-sm p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#c9a96e]" aria-hidden="true" />
                      <h3 className="font-display text-xl font-medium text-[#2a1e12]">{city}</h3>
                    </div>
                    <p className="text-sm text-[#4a3a26] leading-relaxed mb-3">{description}</p>
                    <p className="text-xs text-[#8a6f3f] font-medium mb-3">{schedule}</p>
                    <a href={`mailto:${contact}`} className="text-xs text-[#c9a96e] hover:text-[#b8963e] transition-colors font-medium">
                      {contact}
                    </a>
                  </div>
                ))}
              </div>

              <div className="bg-[#2a1e12] rounded-sm p-6">
                <h3 className="font-display text-xl font-medium text-[#f8f1e3] mb-4">Before You Come</h3>
                <ul className="space-y-3">
                  {[
                    'No prior knowledge or experience required',
                    'All classes are donation-based, no fixed fee',
                    'Dress comfortably; we sometimes include relaxation exercises',
                    'Arrive 5-10 minutes early for your first visit',
                    'Questions are always welcome, before and after class',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#c8b89a]">
                      <span className="text-[#c9a96e] shrink-0 mt-0.5" aria-hidden="true">◦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social / Connect ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#faf6ef] fade-section">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Connect"
            title="Follow Us Online"
            subtitle="Stay connected with Gnosis Tasmania through our social channels."
          />
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/GnosticSocietyAustralia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-[#e8d5b0] rounded-sm px-8 py-5 hover:border-[#c9a96e] transition-colors group"
            >
              <span className="text-[#c9a96e] text-2xl" aria-hidden="true">f</span>
              <div>
                <p className="font-medium text-[#2a1e12] group-hover:text-[#c9a96e] transition-colors text-sm">Facebook</p>
                <p className="text-xs text-[#8a6f3f]">Gnostic Society Australia</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
