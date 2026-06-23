import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { personal, education, certifications } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-gold" />
      <span className="text-gold text-xs font-medium tracking-[4px] uppercase">{children}</span>
    </div>
  )
}

export default function About() {
  const heading = useScrollReveal(0)
  const bio     = useScrollReveal(100)
  const stats   = useScrollReveal(200)
  const cards   = useScrollReveal(150)

  return (
    <section id="about" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16">Background</h2>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-8">
            <p ref={bio} className="reveal text-cream-muted leading-relaxed text-[15px]">{personal.bio}</p>

            <div ref={stats} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { n: '3+', label: 'Years exp.' },
                { n: '4',  label: 'MS Certs' },
                { n: '5',  label: 'Projects' },
                { n: '1',  label: 'IEEE Paper' },
              ].map(s => (
                <div key={s.label} className="border border-white/7 bg-surface-2 p-5 text-center hover:border-gold/30 transition-colors group">
                  <div className="font-display text-3xl font-bold text-gold group-hover:scale-110 transition-transform inline-block">{s.n}</div>
                  <div className="text-xs text-cream-muted mt-1.5 tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={cards} className="reveal lg:col-span-2 space-y-4">
            <div className="border border-white/7 bg-surface-2 p-6 hover:border-gold/20 transition-colors">
              <div className="flex items-center gap-2 mb-5">
                <FaGraduationCap className="text-gold text-sm" />
                <span className="text-xs font-medium uppercase tracking-widest text-cream-muted">Education</span>
              </div>
              {education.map(e => (
                <div key={e.degree}>
                  <p className="font-semibold text-cream text-sm leading-snug">{e.degree}</p>
                  <p className="text-gold text-sm mt-1.5">{e.school}</p>
                  <p className="text-cream-muted text-xs mt-0.5">{e.location} · {e.year}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/7 bg-surface-2 p-6 hover:border-gold/20 transition-colors">
              <div className="flex items-center gap-2 mb-5">
                <FaAward className="text-gold text-sm" />
                <span className="text-xs font-medium uppercase tracking-widest text-cream-muted">Certifications</span>
              </div>
              {certifications.map(g => (
                <div key={g.group} className="mb-5 last:mb-0">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-cream-faint mb-2">{g.group}</p>
                  <ul className="space-y-1.5">
                    {g.items.map(c => (
                      <li key={c} className="flex items-start gap-2 text-xs text-cream-muted">
                        <span className="text-gold mt-0.5 shrink-0">–</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
