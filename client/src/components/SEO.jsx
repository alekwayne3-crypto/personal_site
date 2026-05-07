import { Helmet } from 'react-helmet-async'

const BASE = 'https://cleanbeetulsa.com'
const DEFAULT_IMG = `${BASE}/logo.webp`

export default function SEO({ title, description, path = '/', schema }) {
  const url = `${BASE}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMG} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
