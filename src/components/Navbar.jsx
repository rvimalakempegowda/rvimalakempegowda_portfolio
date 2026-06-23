import { useState, useEffect } from 'react'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-neutral-900 font-semibold text-lg tracking-tight">
          Revanth<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="mailto:vkrevanthgowda@gmail.com"
             className="ml-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors">
            Hire me
          </a>
        </nav>

        <button className="md:hidden text-neutral-600 hover:text-neutral-900 p-2" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-sm text-neutral-600 hover:text-neutral-900 font-medium py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
