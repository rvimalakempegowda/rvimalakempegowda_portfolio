import { experience } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ExperienceCard({ job, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
         className="reveal group border border-white/5 bg-surface-2 p-8 hover:border-gold/20 hover:bg-surface-3 transition-all duration-400">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-1.5">
            <h3 className="font-display text-xl font-semibold text-cream group-hover:text-gold transition-colors">{job.role}</h3>
            {job.current && (
              <span className="text-[9px] font-semibold px-2 py-0.5 border border-gold/40 text-gold tracking-[3px] uppercase">
                Current
              </span>
            )}
          </div>
          <p className="text-gold/70 font-medium text-sm tracking-wide">{job.company}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="text-cream-muted text-xs tracking-wide">{job.period}</p>
          <p className="text-cream-faint text-xs mt-0.5">{job.location}</p>
        </div>
      </div>

      <p className="text-cream-muted text-sm leading-[1.8] mb-6">{job.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {job.tags.map(t => (
          <span key={t}
                className="text-[11px] text-cream-muted/50 border border-white/5 px-2.5 py-1 group-hover:border-gold/15 group-hover:text-cream-muted/70 transition-all">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const heading = useScrollReveal(0)
  return (
    <section id="experience" className="py-28 bg-ink px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="02">Career</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16 mt-2">Experience</h2>
        <div className="space-y-px">
          {experience.map((job, i) => <ExperienceCard key={i} job={job} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}
