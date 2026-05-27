import { useEffect, useMemo } from 'react'

export function useJsonLd(schema) {
  const serialised = useMemo(() => JSON.stringify(schema), [schema])

  useEffect(() => {
    const id = 'page-jsonld'
    document.getElementById(id)?.remove()

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = serialised
    document.head.appendChild(script)

    return () => { document.getElementById(id)?.remove() }
  }, [serialised])
}
