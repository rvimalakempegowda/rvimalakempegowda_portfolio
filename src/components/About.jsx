import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { personal, education, certifications } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-2">{children}</p>
  )
}

export default function About() {
  const heading = useScrollReveal(0)
  const bio     = useScrollReveal(100)
  const stats   = useScrollReveal(180)
  const cards   = useScrollReveal(100)

  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-12">Background</h2>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <p ref={bio} className="reveal text-gray-600 leading-relaxed text-base">{personal.bio}</p>

            <div ref={stats} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { n: '3+', label: 'Years Experience' },
                { n: '4',  label: 'Certifications' },
                { n: '5',  label: 'Projects' },
                { n: '1',  label: 'IEEE Paper' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-card border border-gray-100">
                  <div className="text-3xl font-bold text-blue mb-1">{s.n}</div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={cards} className="reveal lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <FaGraduationCap className="text-blue" />
                <span className="text-sm font-semibold text-navy">Education</span>
              </div>
              {education.map(e => (
                <div key={e.degree}>
                  <p className="font-semibold text-navy text-sm">{e.degree}</p>
                  <p className="text-blue text-sm mt-1">{e.school}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{e.location} · {e.year}{e.gpa ? ` · GPA ${e.gpa}` : ''}</p>
                  {e.honors && (
                    <ul className="mt-2 space-y-1">
                      {e.honors.map(h => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <span className="text-yellow-500 mt-0.5 shrink-0">★</span>{h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <FaAward className="text-blue" />
                <span className="text-sm font-semibold text-navy">Certifications</span>
              </div>
              {certifications.map(g => (
                <div key={g.group} className="mb-4 last:mb-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{g.group}</p>
                  <ul className="space-y-1.5">
                    {g.items.map(c => (
                      <li key={c} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-blue mt-0.5 shrink-0">✓</span>{c}
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
