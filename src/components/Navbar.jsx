import { useState, useEffect } from 'react'

const links = [
  { label: 'About',        href: '#about',        id: 'about' },
  { label: 'Experience',   href: '#experience',   id: 'experience' },
  { label: 'Projects',     href: '#projects',     id: 'projects' },
  { label: 'Skills',       href: '#skills',       id: 'skills' },
  { label: 'Publications', href: '#publications', id: 'publications' },
  { label: 'Contact',      href: '#contact',      id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [open, setOpen]         = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }) },
      { rootMargin: '-25% 0px -65% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/96 backdrop-blur-md border-b border-white/4' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-lg text-cream font-semibold tracking-tight">
            RG<span className="text-gold">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href}
                 className={`text-xs font-medium tracking-widest uppercase transition-colors relative pb-0.5 ${
                   activeId === l.id ? 'text-cream' : 'text-cream-muted hover:text-cream'
                 }`}>
                {l.label}
                {activeId === l.id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold" />
                )}
              </a>
            ))}
          </nav>

          <a href="mailto:vkrevanthgowda@gmail.com"
             className="hidden md:inline-flex items-center text-xs font-semibold tracking-widest uppercase px-4 py-2 border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all duration-200">
            Hire me
          </a>

          <button className="md:hidden text-cream-muted p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-surface border-t border-white/4 px-6 py-5 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className={`text-xs font-medium tracking-widest uppercase py-1 transition-colors ${
                   activeId === l.id ? 'text-gold' : 'text-cream-muted hover:text-cream'
                 }`}>
                {l.label}
              </a>
            ))}
            <a href="mailto:vkrevanthgowda@gmail.com"
               className="text-xs font-semibold tracking-widest uppercase border border-gold/35 text-gold px-4 py-2.5 text-center mt-1 hover:bg-gold hover:text-ink transition-all">
              Hire me
            </a>
          </div>
        )}
      </header>
    </>
  )
}
