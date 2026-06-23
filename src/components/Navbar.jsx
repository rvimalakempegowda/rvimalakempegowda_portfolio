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
  const [open, setOpen]         = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 10)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <header className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between border-b border-gray-100">
          <a href="#hero" className="text-navy font-bold text-lg tracking-tight">
            Revanth<span className="text-blue">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                 className="text-sm text-gray-600 hover:text-blue font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="mailto:vkrevanthgowda@gmail.com"
             className="hidden md:inline-flex items-center text-sm font-semibold px-5 py-2 bg-blue text-white rounded hover:bg-blue-dark transition-colors">
            Hire me
          </a>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="text-sm font-medium text-gray-600 hover:text-blue py-1">
                {l.label}
              </a>
            ))}
            <a href="mailto:vkrevanthgowda@gmail.com"
               className="text-sm font-semibold text-center bg-blue text-white rounded px-4 py-2 mt-1">
              Hire me
            </a>
          </div>
        )}
      </header>
    </>
  )
}
