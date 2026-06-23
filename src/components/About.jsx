import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { personal, education, certifications } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function SectionLabel({ num, children }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      {num && <span className="section-num">{num}</span>}
      <div className="w-6 h-px bg-gold/50" />
      <span className="text-[10px] font-medium tracking-[4px] text-gold/70 uppercase">{children}</span>
    </div>
  )
}

export default function About() {
  const heading = useScrollReveal(0)
  const bio     = useScrollReveal(100)
  const stats   = useScrollReveal(180)
  const cards   = useScrollReveal(120)

  return (
    <section id="about" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="01">About</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16 mt-2">
          Background
        </h2>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-10">
            <p ref={bio} className="reveal text-cream-muted leading-[1.85] text-[15px]">{personal.bio}</p>

            <div ref={stats} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/4">
              {[
                { n: '3+', label: 'Years' },
                { n: '4',  label: 'Certs' },
                { n: '5',  label: 'Projects' },
                { n: '1',  label: 'IEEE Paper' },
              ].map(s => (
                <div key={s.label}
                     className="bg-surface-2 p-6 text-center hover:bg-surface-3 transition-colors group cursor-default">
                  <div className="font-display text-3xl font-bold text-gold group-hover:scale-105 transition-transform inline-block">{s.n}</div>
                  <div className="text-[10px] text-cream-muted mt-2 tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={cards} className="reveal lg:col-span-2 space-y-3">
            <div className="border border-white/5 bg-surface-2 p-6 hover:border-gold/20 transition-all duration-300 group">
              <div className="flex items-center gap-2.5 mb-5">
                <FaGraduationCap className="text-gold/70 text-sm" />
                <span className="text-[10px] font-medium uppercase tracking-[3px] text-cream-muted">Education</span>
              </div>
              {education.map(e => (
                <div key={e.degree}>
                  <p className="font-semibold text-cream text-sm leading-snug">{e.degree}</p>
                  <p className="text-gold/80 text-sm mt-1.5 font-medium">{e.school}</p>
                  <p className="text-cream-muted text-xs mt-0.5">{e.location} · {e.year}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/5 bg-surface-2 p-6 hover:border-gold/20 transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-5">
                <FaAward className="text-gold/70 text-sm" />
                <span className="text-[10px] font-medium uppercase tracking-[3px] text-cream-muted">Certifications</span>
              </div>
              {certifications.map(g => (
                <div key={g.group} className="mb-5 last:mb-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[3px] text-gold/50 mb-2.5">{g.group}</p>
                  <ul className="space-y-2">
                    {g.items.map(c => (
                      <li key={c} className="flex items-start gap-2 text-xs text-cream-muted leading-relaxed">
                        <span className="text-gold/60 mt-0.5 shrink-0">–</span>{c}
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
