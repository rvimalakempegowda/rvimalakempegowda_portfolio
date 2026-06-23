import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personal } from '../data/portfolio'
import { SectionHeader } from './About'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'revanth-gowda-vimala-kempegowda',
    href: personal.linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'rvimalakempegowda',
    href: personal.github,
    color: 'text-slate-300',
    bg: 'bg-slate-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Get In Touch" title="Contact Me" />

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          {/* Left — message */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Let's work together</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm open to new opportunities, collaborations, and conversations about data engineering, cloud infrastructure, and AI-driven analytics. Whether you have a project in mind or just want to connect — reach out!
            </p>
            <div className="flex flex-col gap-4">
              {links.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className={`p-2.5 rounded-xl ${bg} shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`${color} text-sm font-medium hover:underline truncate block`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-900/50 to-slate-900 border border-primary-500/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-500/20 flex items-center justify-center">
              <Send size={28} className="text-primary-400" />
            </div>
            <h4 className="text-white font-bold text-xl mb-3">Ready to connect?</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Send me an email or connect on LinkedIn. I typically respond within 24 hours.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send Email
            </a>
            <div className="mt-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda · Data Engineer</p>
      </div>
    </section>
  )
}
