import { experience } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0c0c0c] px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Career</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-16">Experience</h2>

        <div className="space-y-px">
          {experience.map((job, i) => (
            <div key={i}
                 className="group border border-white/7 bg-surface p-8 hover:border-gold/25 hover:bg-surface-2 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="font-display text-xl font-semibold text-cream group-hover:text-gold transition-colors">{job.role}</h3>
                    {job.current && (
                      <span className="text-[10px] font-medium px-2 py-0.5 border border-gold/40 text-gold tracking-widest uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-gold/80 font-medium text-sm">{job.company}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-cream-muted text-sm">{job.period}</p>
                  <p className="text-cream-faint text-xs mt-0.5">{job.location}</p>
                </div>
              </div>

              <p className="text-cream-muted text-sm leading-relaxed mb-5">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map(t => (
                  <span key={t} className="text-xs text-cream-muted/60 border border-white/7 px-2.5 py-1 group-hover:border-gold/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
