import { experience } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Career</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-12">Work Experience</h2>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i}
                 className="group bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-accent/30 hover:shadow-md rounded-2xl p-7 transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg text-neutral-900">{job.role}</h3>
                    {job.current && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-medium text-sm mt-0.5">{job.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-neutral-500">{job.period}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{job.location}</p>
                </div>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent-light text-accent">
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
