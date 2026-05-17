import { useEffect } from 'react'

export function useJsonLd(schema) {
  useEffect(() => {
    const id = 'page-jsonld'
    document.getElementById(id)?.remove()

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => { document.getElementById(id)?.remove() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(schema)])
}
