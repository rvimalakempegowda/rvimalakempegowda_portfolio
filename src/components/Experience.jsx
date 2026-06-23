import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { SectionWrapper, SectionHeader, Tag } from './SectionWrapper'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="experience" className="bg-black py-24 px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="02." label="Career" title="Work Experience" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green via-white/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                className="md:pl-12 relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
              >
                {/* Timeline node */}
                <div className={`absolute left-[-5px] top-8 w-2.5 h-2.5 hidden md:block border-2 transition-colors duration-300 ${
                  job.current ? 'bg-green border-green' : 'bg-black border-white/30 group-hover:border-green'
                }`} />

                {/* Card */}
                <motion.div
                  className={`mb-1 p-8 border-l-4 bg-white/[0.015] transition-all duration-300 ${
                    job.current ? 'border-l-green' : 'border-l-white/10 hover:border-l-red'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-xl text-white">{job.role}</h3>
                        {job.current && (
                          <span className="font-mono text-xs border border-green text-green px-2 py-0.5 animate-border-shift">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className={`font-mono font-bold text-base ${job.current ? 'text-green' : 'text-red'}`}>
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 lg:items-end shrink-0">
                      <div className="flex items-center gap-2 font-mono text-xs text-white/30">
                        <FiCalendar size={11} /> {job.period}
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs text-white/30">
                        <FiMapPin size={11} /> {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-sm text-white/50 leading-relaxed mb-5">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <Tag key={tag} color={job.current ? 'green' : 'red'}>{tag}</Tag>
                    ))}
                  </div>
                </motion.div>

                {/* Connector */}
                {i < experience.length - 1 && (
                  <div className="hidden md:flex items-center gap-2 pl-0 py-3 ml-[-1px]">
                    <div className="w-px h-8 bg-white/5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
