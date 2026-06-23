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
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl text-cream-DEFAULT font-semibold tracking-tight">
          RG<span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-cream-muted hover:text-cream transition-colors font-medium tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="mailto:vkrevanthgowda@gmail.com"
           className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-200">
          Hire me
        </a>

        <button className="md:hidden text-cream-muted p-2" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-white/5 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-sm text-cream-muted hover:text-cream font-medium py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
