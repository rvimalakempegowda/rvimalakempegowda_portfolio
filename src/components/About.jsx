import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { personal, education, certifications } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-12">Background</h2>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio — wider column */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-neutral-600 leading-relaxed text-[15px]">{personal.bio}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { n: '3+',  label: 'Years exp.' },
                { n: '4',   label: 'MS certs' },
                { n: '5',   label: 'Projects' },
                { n: '1',   label: 'IEEE paper' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-neutral-200 p-4 text-center">
                  <div className="text-2xl font-bold text-accent">{s.n}</div>
                  <div className="text-xs text-neutral-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center gap-2 text-accent mb-4">
                <FaGraduationCap />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Education</span>
              </div>
              {education.map(e => (
                <div key={e.degree}>
                  <p className="font-semibold text-neutral-800 text-sm leading-snug">{e.degree}</p>
                  <p className="text-accent text-sm mt-1">{e.school}</p>
                  <p className="text-neutral-400 text-xs mt-0.5">{e.location} · {e.year}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaAward className="text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Certifications</span>
              </div>
              {certifications.map(g => (
                <div key={g.group} className="mb-4 last:mb-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">{g.group}</p>
                  <ul className="space-y-1.5">
                    {g.items.map(c => (
                      <li key={c} className="flex items-start gap-2 text-xs text-neutral-600">
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        {c}
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

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
      <span className="w-6 h-px bg-accent inline-block" />
      {children}
    </span>
  )
}
