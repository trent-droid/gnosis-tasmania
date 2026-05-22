import { useEffect } from 'react'

const BASE = 'https://gnosistasmania.com.au'

// Human-readable label for each route (used in BreadcrumbList JSON-LD)
const PATH_LABELS = {
  '/what-is-gnosis':        'What is Gnosis?',
  '/core-teachings':        'Core Teachings',
  '/practices':             'Gnostic Practices',
  '/courses':               'Courses & Classes',
  '/introduction-to-gnosis':'Introduction to Gnosis',
  '/meditation-classes':    'Meditation Classes',
  '/history':               'History of Gnosis',
  '/community':             'Our Community',
  '/resources':             'Books & Resources',
  '/articles':              'Articles',
  '/blog':                  'Blog',
  '/contact':               'Contact',
}

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta(title, description, path = '/') {
  useEffect(() => {
    const canonicalUrl = `${BASE}${path}`

    document.title = title
    setMeta('meta[name="description"]',         'content', description)
    setMeta('link[rel="canonical"]',            'href',    canonicalUrl)
    setMeta('meta[property="og:url"]',          'content', canonicalUrl)
    setMeta('meta[property="og:title"]',        'content', title)
    setMeta('meta[property="og:description"]',  'content', description)
    setMeta('meta[name="twitter:title"]',       'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    // ── WebPage JSON-LD ────────────────────────────────────────────────────
    const pageId = 'webpage-jsonld'
    let pageEl = document.getElementById(pageId)
    if (!pageEl) {
      pageEl = document.createElement('script')
      pageEl.id = pageId
      pageEl.type = 'application/ld+json'
      document.head.appendChild(pageEl)
    }
    pageEl.textContent = JSON.stringify({
      '@context':     'https://schema.org',
      '@type':        'WebPage',
      'name':         title,
      'description':  description,
      'url':          canonicalUrl,
      'inLanguage':   'en-AU',
      'dateModified': '2026-05-17',
      'isPartOf': {
        '@type': 'WebSite',
        'name':  'Gnosis Tasmania',
        'url':   BASE,
      },
      'publisher': {
        '@type': 'EducationalOrganization',
        '@id':   `${BASE}/#organization`,
        'name':  'Gnosis Tasmania',
        'url':   BASE,
        'email': 'gnosis.launceston@gmail.com',
        'logo': {
          '@type': 'ImageObject',
          'url':   `${BASE}/favicon-512x512.png`,
          'width':  512,
          'height': 512,
        },
      },
    })

    // ── BreadcrumbList JSON-LD (every page, including homepage) ───────────
    const breadId = 'breadcrumb-jsonld'
    let breadEl = document.getElementById(breadId)
    if (!breadEl) {
      breadEl = document.createElement('script')
      breadEl.id = breadId
      breadEl.type = 'application/ld+json'
      document.head.appendChild(breadEl)
    }
    const crumbs = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    ]
    if (path !== '/') {
      crumbs.push({
        '@type':   'ListItem',
        position:  2,
        name:      PATH_LABELS[path] || title,
        item:      canonicalUrl,
      })
    }
    breadEl.textContent = JSON.stringify({
      '@context':        'https://schema.org',
      '@type':           'BreadcrumbList',
      'itemListElement': crumbs,
    })

    return () => {
      document.getElementById(pageId)?.remove()
      document.getElementById(breadId)?.remove()
    }
  }, [title, description, path])
}
