import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { personal } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const heading  = useScrollReveal(0)
  const linksRef = useScrollReveal(100)
  const cta      = useScrollReveal(150)

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-4">Let's Talk</h2>
        <p className="text-gray-500 text-base max-w-lg mb-12 leading-relaxed">
          Open to new roles, collaborations, and conversations about data engineering.
          I typically respond within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info */}
          <div ref={linksRef} className="reveal bg-gray-50 rounded-xl p-8 border border-gray-100 space-y-6">
            {[
              { Icon: HiOutlineMail,           label: 'Email',    value: personal.email,                    href: `mailto:${personal.email}` },
              { Icon: FaLinkedin,              label: 'LinkedIn', value: 'revanth-gowda-vimala-kempegowda', href: personal.linkedin },
              { Icon: FaGithub,               label: 'GitHub',   value: 'rvimalakempegowda',               href: personal.github },
              { Icon: HiOutlineLocationMarker, label: 'Location', value: personal.location,                 href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue/8 flex items-center justify-center text-blue shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href}
                       target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="text-sm text-navy hover:text-blue transition-colors truncate block font-medium">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-navy font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div ref={cta} className="reveal bg-blue rounded-xl p-8 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-3">Ready to build something great?</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Whether you need scalable pipelines, cloud infrastructure, or
                AI-driven analytics — let's make it happen.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${personal.email}`}
                 className="group flex items-center justify-between w-full bg-white text-blue font-bold text-sm px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors">
                Send an Email
                <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-between w-full border border-white/30 text-white text-sm px-6 py-4 rounded-lg hover:bg-white/10 transition-all">
                Connect on LinkedIn
                <HiArrowLongRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda</span>
          <div className="flex items-center gap-5 text-gray-400">
            <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors" aria-label="GitHub"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`mailto:${personal.email}`} className="hover:text-blue transition-colors" aria-label="Email"><HiOutlineMail /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
