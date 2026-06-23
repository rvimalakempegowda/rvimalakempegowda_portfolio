import { MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Career" title="Work Experience" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/40 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-16 relative group">
                {/* Timeline dot */}
                <div className={`absolute left-4.5 top-6 w-3 h-3 rounded-full border-2 hidden md:block transition-colors duration-300 ${job.current ? 'bg-primary-500 border-primary-400 shadow-sm shadow-primary-500/50' : 'bg-slate-700 border-slate-600 group-hover:border-primary-500'}`} style={{ left: '18px' }} />

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary-400 font-semibold">{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Calendar size={13} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <MapPin size={13} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:border-primary-500/50 hover:text-primary-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
