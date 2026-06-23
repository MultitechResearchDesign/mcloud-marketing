import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://gentle-river-07aea5210.3.azurestaticapps.net'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/MultiTech_Logo_Reverse.svg"
            alt="MultiTech"
            className="h-7"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={APP_URL}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Log in
          </a>
          <a
            href={APP_URL}
            className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-midnight hover:bg-accent-bright transition-colors"
          >
            Sign up free
          </a>
        </div>

        <button className="md:hidden text-text-secondary" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-deep border-t border-border/50 px-6 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-text-secondary hover:text-text-primary"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border/50 flex gap-3">
            <a href={APP_URL} className="text-sm text-text-secondary">Log in</a>
            <a href={APP_URL} className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-midnight">
              Sign up free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
