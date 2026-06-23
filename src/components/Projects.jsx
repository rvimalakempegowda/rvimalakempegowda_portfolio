import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { SectionWrapper, SectionHeader, Tag } from './SectionWrapper'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index, inView }) {
  const isFeatured = project.featured
  return (
    <motion.div
      className={`group relative border border-white/10 bg-white/[0.015] p-6 hover:border-green transition-all duration-300 flex flex-col`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '6px 6px 0px #10B981' }}
    >
      {/* Top bar */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green group-hover:bg-red transition-colors" />
          <div className="w-3 h-3 border border-white/20" />
          <div className="w-3 h-3 border border-white/20" />
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
             className="text-white/20 hover:text-green transition-colors">
            <FiExternalLink size={16} />
          </a>
        )}
      </div>

      <h3 className="font-bold text-lg text-white mb-3 group-hover:text-green transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-white/40 leading-relaxed flex-grow mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 5).map(t => <Tag key={t}>{t}</Tag>)}
        {project.tags.length > 5 && (
          <span className="font-mono text-xs text-white/20 px-2 py-1">+{project.tags.length - 5}</span>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <SectionWrapper id="projects" className="bg-black geo-bg py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="03." label="Portfolio" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-px">
          {featured.map((p, i) => (
            <div key={i} className="bg-black p-0.5">
              <ProjectCard project={p} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 my-12">
              <div className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-xs text-white/20 uppercase tracking-widest">Other Projects</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {others.map((p, i) => (
                <div key={i} className="bg-black p-0.5">
                  <ProjectCard project={p} index={featured.length + i} inView={inView} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  )
}
