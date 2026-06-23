import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ p, i }) {
  const ref = useScrollReveal(i * 80)
  return (
    <div ref={ref}
         className="reveal group bg-surface p-7 flex flex-col hover:bg-surface-2 transition-all duration-300 border border-transparent hover:border-gold/15">
      <div className="flex items-start justify-between mb-5">
        <span className="font-display text-4xl font-bold text-gold/10 group-hover:text-gold/25 transition-colors leading-none">
          {String(i + 1).padStart(2, '0')}
        </span>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
             className="text-cream-faint hover:text-gold transition-colors p-1" aria-label="View project">
            <FiExternalLink size={14} />
          </a>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-cream mb-3 group-hover:text-gold transition-colors leading-snug">{p.title}</h3>
      <p className="text-cream-muted text-sm leading-relaxed flex-grow mb-6">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
        {p.tags.slice(0, 4).map(t => (
          <span key={t} className="text-[11px] text-cream-faint px-2 py-0.5 border border-white/5 group-hover:border-white/10 transition-colors">{t}</span>
        ))}
        {p.tags.length > 4 && <span className="text-[11px] text-cream-faint/50">+{p.tags.length - 4}</span>}
      </div>
    </div>
  )
}

export default function Projects() {
  const heading = useScrollReveal(0)
  return (
    <section id="projects" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
