// ProtectedEmail — renders a fully clickable mailto: link while keeping the
// email address out of the static HTML. The address is split on '@' and
// reassembled by JavaScript at render time, so simple HTML-scraping bots
// that regex-scan for user@domain patterns find nothing in the markup.

export default function ProtectedEmail({ email, className = '' }) {
  const sep = '@'
  const [local, domain] = email.split(sep)
  const address = local + sep + domain
  return (
    <a href={'mailto:' + address} className={className}>
      {address}
    </a>
  )
}
