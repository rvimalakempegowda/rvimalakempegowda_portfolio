import { experience } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ExperienceCard({ job, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
         className="reveal bg-white rounded-xl p-7 shadow-card border border-gray-100 hover:shadow-card-hover hover:border-blue/20 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3 className="text-lg font-bold text-navy">{job.role}</h3>
            {job.current && (
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full">
                Current
              </span>
            )}
          </div>
          <p className="text-blue font-semibold text-sm">{job.company}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="text-gray-500 text-sm">{job.period}</p>
          <p className="text-gray-400 text-xs mt-0.5">{job.location}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.tags.map(t => (
          <span key={t} className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full font-medium">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const heading = useScrollReveal(0)
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Career</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-12">Experience</h2>
        <div className="space-y-5">
          {experience.map((job, i) => <ExperienceCard key={i} job={job} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}
