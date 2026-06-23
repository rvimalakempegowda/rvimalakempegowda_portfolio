import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="bg-slate-900 section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Portfolio" title="Featured Projects" />

        {/* Featured projects */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mt-16 mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {others.map((project, i) => (
                <ProjectCard key={i} project={project} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, compact = false }) {
  return (
    <div className={`group flex flex-col p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 card-hover ${compact ? '' : 'h-full'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-400">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </div>
        <div className="flex gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary-300 transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 5).map(tag => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-slate-900/80 border border-slate-700 text-slate-400">
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="px-2 py-0.5 text-xs rounded-md bg-slate-900/80 border border-slate-700 text-slate-500">
            +{project.tags.length - 5}
          </span>
        )}
      </div>
    </div>
  )
}
