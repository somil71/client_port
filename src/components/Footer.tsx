import { Link } from 'react-router-dom'
import { footerContent, siteIdentity } from '../data/siteContent'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Showreel', href: '/showreel' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-16">
      <div className="site-footer-panel px-6 py-8 lg:px-12 lg:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-4 min-w-0">
              <div>
                <p className="font-grotesk text-2xl leading-none">{siteIdentity.brandName}</p>
                <p className="site-footer-tagline">{siteIdentity.shortTagline}</p>
              </div>
              <p className="muted-copy max-w-2xl leading-relaxed">
                {footerContent.summary}
              </p>
            </div>

            <nav aria-label="Footer navigation" className="site-footer-nav">
              {footerLinks.map((link) => (
                <Link key={link.href} to={link.href} className="site-footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-divider" />

          <div className="flex flex-col gap-3 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
            <p>(c) {year} {siteIdentity.brandName}. All rights reserved.</p>
            <p>{footerContent.closingNote}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
