import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { personal } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const heading  = useScrollReveal(0)
  const linksRef = useScrollReveal(100)
  const cta      = useScrollReveal(200)

  return (
    <section id="contact" className="py-28 bg-[#0c0c0c] px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-6">Let's Talk</h2>
        <p className="text-cream-muted text-base max-w-lg mb-16 leading-relaxed">
          Open to new roles, collaborations, and conversations about data engineering.
          I typically respond within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          <div ref={linksRef} className="reveal bg-[#0c0c0c] p-10 space-y-6">
            {[
              { Icon: HiOutlineMail,           label: 'Email',    value: personal.email,                    href: `mailto:${personal.email}` },
              { Icon: FaLinkedin,              label: 'LinkedIn', value: 'revanth-gowda-vimala-kempegowda', href: personal.linkedin },
              { Icon: FaGithub,               label: 'GitHub',   value: 'rvimalakempegowda',               href: personal.github },
              { Icon: HiOutlineLocationMarker, label: 'Location', value: personal.location,                 href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="group flex items-center gap-4">
                <div className="w-10 h-10 border border-white/7 flex items-center justify-center text-cream-faint group-hover:border-gold/40 group-hover:text-gold transition-all shrink-0">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-cream-faint uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href}
                       target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="text-sm text-cream-muted hover:text-gold transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-cream-muted">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div ref={cta} className="reveal bg-surface p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-cream mb-4">Ready to build something?</h3>
              <p className="text-cream-muted text-sm leading-relaxed">
                Whether you need scalable pipelines, cloud infrastructure, or
                AI-driven analytics — let's make it happen.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              <a href={`mailto:${personal.email}`}
                 className="group flex items-center justify-between w-full bg-gold text-black font-semibold text-sm px-6 py-4 hover:bg-gold-light transition-colors">
                Send an Email
                <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-between w-full border border-white/7 text-cream-muted text-sm px-6 py-4 hover:border-gold/30 hover:text-cream transition-all">
                Connect on LinkedIn
                <HiArrowLongRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-cream-faint">© {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda</span>
          <div className="flex items-center gap-5 text-cream-faint">
            <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors" aria-label="GitHub"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`mailto:${personal.email}`} className="hover:text-gold transition-colors" aria-label="Email"><HiOutlineMail /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
