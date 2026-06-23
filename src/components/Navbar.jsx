import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-900/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-lg tracking-tight hover:text-primary-400 transition-colors">
          {personal.initials}
          <span className="text-primary-400">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-primary-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500 text-primary-400 text-sm font-medium hover:bg-primary-500 hover:text-white transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-primary-400 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="mt-2 text-center px-4 py-2 rounded-lg border border-primary-500 text-primary-400 text-sm font-medium hover:bg-primary-500 hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
