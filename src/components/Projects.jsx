import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ p, i }) {
  const ref = useScrollReveal(i * 80)
  return (
    <div ref={ref}
         className="reveal group bg-surface-2 p-7 flex flex-col border border-white/4 hover:border-gold/20 hover:bg-surface-3 transition-all duration-400">
      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-5xl font-bold leading-none select-none"
              style={{color: 'rgba(201,168,76,0.08)', transition: 'color 0.3s'}}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(201,168,76,0.2)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,168,76,0.08)'}>
          {String(i + 1).padStart(2, '0')}
        </span>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
             className="text-cream-faint hover:text-gold transition-colors p-1 opacity-0 group-hover:opacity-100">
            <FiExternalLink size={13} />
          </a>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-cream mb-3 group-hover:text-gold transition-colors leading-snug">{p.title}</h3>
      <p className="text-cream-muted text-sm leading-[1.8] flex-grow mb-6">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/4">
        {p.tags.slice(0, 4).map(t => (
          <span key={t} className="text-[10px] text-cream-faint px-2 py-1 border border-white/5 group-hover:border-white/8 transition-colors">{t}</span>
        ))}
        {p.tags.length > 4 && <span className="text-[10px] text-cream-faint/40 self-center">+{p.tags.length - 4}</span>}
      </div>
    </div>
  )
}

export default function Projects() {
  const heading = useScrollReveal(0)
  return (
    <section id="projects" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="03">Work</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16 mt-2">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/3">
          {projects.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
