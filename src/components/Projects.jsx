import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-50 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={i}
                 className="group bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col hover:shadow-md hover:border-accent/20 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-accent-light">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M4 7h16M4 12h10M4 17h7" />
                  </svg>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                     className="text-neutral-300 hover:text-accent transition-colors">
                    <FiExternalLink size={15} />
                  </a>
                )}
              </div>

              <h3 className="font-semibold text-neutral-900 text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.slice(0, 4).map(t => (
                  <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">
                    {t}
                  </span>
                ))}
                {p.tags.length > 4 && (
                  <span className="text-[11px] text-neutral-400 px-2 py-0.5">
                    +{p.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
