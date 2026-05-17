import { useEffect } from 'react'

const BASE = 'https://gnosistasmania.com.au'

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta(title, description, path = '/') {
  useEffect(() => {
    const canonicalUrl = `${BASE}${path}`

    document.title = title

    setMeta('meta[name="description"]',        'content', description)
    setMeta('link[rel="canonical"]',           'href',    canonicalUrl)
    setMeta('meta[property="og:url"]',         'content', canonicalUrl)
    setMeta('meta[property="og:title"]',       'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]',      'content', title)
    setMeta('meta[name="twitter:description"]','content', description)
  }, [title, description, path])
}
