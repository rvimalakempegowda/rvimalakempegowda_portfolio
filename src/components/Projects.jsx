import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ p, i }) {
  const ref = useScrollReveal(i * 80)
  return (
    <div ref={ref}
         className="reveal bg-white rounded-xl p-6 flex flex-col border border-gray-100 shadow-card hover:shadow-card-hover hover:border-blue/20 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl font-bold text-gray-100 group-hover:text-blue/20 transition-colors leading-none select-none">
          {String(i + 1).padStart(2, '0')}
        </span>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-blue transition-colors">
            <FiExternalLink size={16} />
          </a>
        )}
      </div>
      <h3 className="text-base font-bold text-navy mb-2 group-hover:text-blue transition-colors leading-snug">{p.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
        {p.tags.slice(0, 4).map(t => (
          <span key={t} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">{t}</span>
        ))}
        {p.tags.length > 4 && (
          <span className="text-xs text-gray-400 self-center">+{p.tags.length - 4} more</span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const heading = useScrollReveal(0)
  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
