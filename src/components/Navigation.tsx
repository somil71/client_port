import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu, close } from '../assets/icons'
import { siteIdentity } from '../data/siteContent'

const navLinks = [
  { id: 'home', title: 'Home', href: '/' },
  { id: 'about', title: 'About Me', href: '/about' },
  { id: 'portfolio', title: 'Portfolio', href: '/portfolio' },
  { id: 'showreel', title: 'Showreel', href: '/showreel' },
  { id: 'contact', title: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [toggle, setToggle] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="nav-surface sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setToggle(false)}>
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
            <span className="font-grotesk text-sm accent-text">V</span>
          </div>
          <div>
            <p className="font-grotesk text-lg leading-none">{siteIdentity.brandName}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/58 mt-1">
              {siteIdentity.professionalTitle}
            </p>
          </div>
        </Link>

        <ul className="list-none sm:flex hidden justify-end items-center gap-2 lg:gap-3">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.href}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  isActive(nav.href)
                    ? 'bg-white/8 text-white'
                    : 'text-white/72 hover:text-white hover:bg-white/5'
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 bg-white/5"
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
          >
            {toggle ? close : menu}
          </button>
        </div>
      </div>

      {toggle && (
        <div className="sm:hidden px-6 pb-5">
          <div className="glass-panel rounded-[1.5rem] p-4 mx-auto max-w-6xl">
            <ul className="list-none flex flex-col gap-2">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.href}
                    className={`block px-4 py-3 rounded-xl text-sm transition-colors ${
                      isActive(nav.href)
                        ? 'bg-white/8 text-white'
                        : 'text-white/78 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
