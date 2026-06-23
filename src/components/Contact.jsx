import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { personal } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-4">Get In Touch</h2>
        <p className="text-neutral-500 text-base max-w-lg mb-12">
          Open to new roles, collaborations, and conversations about data engineering.
          Feel free to reach out — I typically respond within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Links */}
          <div className="space-y-4">
            {[
              { icon: HiOutlineMail,           label: 'Email',    value: personal.email,                           href: `mailto:${personal.email}` },
              { icon: FaLinkedin,              label: 'LinkedIn', value: 'revanth-gowda-vimala-kempegowda',        href: personal.linkedin },
              { icon: FaGithub,               label: 'GitHub',   value: 'github.com/rvimalakempegowda',           href: personal.github },
              { icon: HiOutlineLocationMarker, label: 'Location', value: personal.location,                        href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/20 hover:bg-white transition-all group">
                <div className="p-2.5 rounded-lg bg-accent-light text-accent shrink-0">
                  <Icon className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href}
                       target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="text-sm font-medium text-neutral-700 hover:text-accent transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-neutral-700">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-accent rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Let's work together</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Whether you need a data engineer to build pipelines, optimize cloud infrastructure,
                or architect analytics solutions — I'd love to help.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`mailto:${personal.email}`}
                 className="block text-center bg-white text-accent font-semibold text-sm py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Send an Email
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="block text-center border border-white/30 text-white font-medium text-sm py-3 rounded-xl hover:bg-white/10 transition-colors">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda</span>
          <div className="flex items-center gap-5">
            <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
            <a href={`mailto:${personal.email}`} className="hover:text-accent transition-colors"><HiOutlineMail /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
