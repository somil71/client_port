export function getSiteUrl(path = '/') {
  const envUrl = import.meta.env.VITE_SITE_URL?.trim()
  const baseUrl = envUrl || window.location.origin

  try {
    return new URL(path, baseUrl).toString()
  } catch {
    return window.location.href
  }
}
