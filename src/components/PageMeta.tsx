import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
  url?: string
  ogType?: string
}

function upsertMeta(selector: string, attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(selector)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attributeName, attributeValue)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

export default function PageMeta({
  title,
  description,
  url,
  ogType = 'website',
}: PageMetaProps) {
  useEffect(() => {
    document.title = title

    const resolvedUrl = url ?? window.location.href

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', resolvedUrl)
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  }, [description, ogType, title, url])

  return null
}
