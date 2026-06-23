import { GraduationCap, Award } from 'lucide-react'
import { personal, education, certifications } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="bg-slate-900 section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About Me" title="Background & Education" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Bio */}
          <div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
              {personal.initials}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Hi, I'm Revanth</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{personal.bio}</p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Cloud Certifications', value: '4 Microsoft' },
                { label: 'Publications', value: '1 IEEE Paper' },
                { label: 'Location', value: 'Frisco, TX' },
              ].map(stat => (
                <div key={stat.label} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-500/15">
                  <GraduationCap size={18} className="text-primary-400" />
                </div>
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              {education.map(edu => (
                <div key={edu.degree}>
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-primary-400 text-sm mt-1">{edu.school}</p>
                  <p className="text-slate-500 text-sm">{edu.location} · {edu.year}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/15">
                  <Award size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">Certifications</h3>
              </div>
              <div className="flex flex-col gap-4">
                {certifications.map(group => (
                  <div key={group.group}>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">{group.group}</p>
                    <ul className="flex flex-col gap-1.5">
                      {group.items.map(cert => (
                        <li key={cert} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-primary-400 mt-0.5 shrink-0">✓</span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title, light = false }) {
  return (
    <div className="text-center">
      <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">{label}</span>
      <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${light ? 'text-slate-900' : 'text-white'}`}>{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500" />
    </div>
  )
}
