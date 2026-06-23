import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiUsers, FiMapPin, FiCalendar } from 'react-icons/fi'
import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { publications } from '../data/portfolio'

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="publications" className="bg-black geo-bg py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="05." label="Research" title="Publications" />

        {publications.map((pub, i) => (
          <motion.div
            key={i}
            className="border border-white/10 bg-white/[0.015] p-8 hover:border-green transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 4, boxShadow: '8px 8px 0px #10B981' }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Left accent */}
              <div className="shrink-0">
                <div className="w-16 h-16 border-2 border-green flex items-center justify-center">
                  <span className="font-mono font-bold text-green text-xs text-center leading-tight">IEEE<br/>2025</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-start gap-2"
                >
                  <h3 className="font-bold text-xl text-white group-hover/link:text-green transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <FiExternalLink size={14} className="text-white/20 group-hover/link:text-green transition-colors shrink-0 mt-1.5" />
                </a>

                <p className="font-mono text-green text-sm mt-3 font-bold">{pub.venue}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-white/30">
                    <FiMapPin size={11} /> {pub.location}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-white/30">
                    <FiCalendar size={11} /> {pub.dates}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-white/30">
                    <FiUsers size={11} /> {pub.authors}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="font-mono text-xs border border-white/10 text-white/30 px-3 py-1.5">
                    DOI: {pub.doi}
                  </span>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs border border-green/40 text-green px-3 py-1.5 flex items-center gap-2 hover:bg-green hover:text-black transition-all"
                  >
                    <FiExternalLink size={11} /> View on IEEE Xplore
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
