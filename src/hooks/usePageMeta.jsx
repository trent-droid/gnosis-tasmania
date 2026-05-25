import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { BASE } from '../constants.js'

const PATH_LABELS = {
  '/what-is-gnosis':         'What is Gnosis?',
  '/core-teachings':         'Core Teachings',
  '/practices':              'Gnostic Practices',
  '/courses':                'Courses & Classes',
  '/introduction-to-gnosis': 'Introduction to Gnosis',
  '/meditation-classes':     'Meditation Classes',
  '/meditation-course':      'Meditation Course',
  '/history':                'History of Gnosis',
  '/community':              'Our Community',
  '/resources':              'Books & Resources',
  '/articles':               'Articles',
  '/contact':                'Contact',
  '/gnostic-centres':        'Gnostic Centres',
  '/faq':                    'FAQ',
}

const DEFAULT_OG_IMAGE     = `${BASE}/og-image.jpg`
const DEFAULT_OG_IMAGE_ALT = 'Gnosis Tasmania — Gnostic Classes in Hobart and Launceston'

// Returns a <Helmet> element — render it as the first child of the page root div.
// ogImage: absolute URL. Article pages pass `${BASE}${article.image}`; all others omit (defaults to /og-image.jpg).
export function usePageMeta(title, description, path = '/', ogImage = null, ogImageAlt = null) {
  const canonicalUrl = `${BASE}${path}`
  const image    = ogImage    || DEFAULT_OG_IMAGE
  const imageAlt = ogImageAlt || DEFAULT_OG_IMAGE_ALT

  // WebPage + BreadcrumbList JSON-LD injected via DOM so there are no Helmet script-children edge cases.
  useEffect(() => {
    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }]
    if (path !== '/') {
      crumbs.push({ '@type': 'ListItem', position: 2, name: PATH_LABELS[path] || title, item: canonicalUrl })
    }

    const inject = (id, schema) => {
      let el = document.getElementById(id)
      if (!el) {
        el = document.createElement('script')
        el.id   = id
        el.type = 'application/ld+json'
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(schema)
    }

    inject('webpage-jsonld', {
      '@context':   'https://schema.org',
      '@type':      'WebPage',
      name:         title,
      description,
      url:          canonicalUrl,
      inLanguage:   'en-AU',
      dateModified: '2026-05-17',
      isPartOf: { '@type': 'WebSite', name: 'Gnosis Tasmania', url: BASE },
      publisher: {
        '@type': 'EducationalOrganization',
        '@id':   `${BASE}/#organization`,
        name:    'Gnosis Tasmania',
        url:     BASE,
        email:   'gnosishobart@gmail.com',
        logo: { '@type': 'ImageObject', url: `${BASE}/favicon-512x512.png`, width: 512, height: 512 },
      },
    })

    inject('breadcrumb-jsonld', {
      '@context':       'https://schema.org',
      '@type':          'BreadcrumbList',
      itemListElement:  crumbs,
    })

    return () => {
      document.getElementById('webpage-jsonld')?.remove()
      document.getElementById('breadcrumb-jsonld')?.remove()
    }
  }, [title, description, path, canonicalUrl])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
