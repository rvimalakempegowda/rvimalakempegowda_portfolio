import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiBook } from 'react-icons/fi'
import { SectionWrapper, SectionHeader, Tag } from './SectionWrapper'
import { personal, education, certifications } from '../data/portfolio'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '4',  label: 'MS Certifications' },
    { value: '5',  label: 'Cloud Projects' },
    { value: '1',  label: 'IEEE Publication' },
  ]

  return (
    <SectionWrapper id="about" className="bg-black geo-bg py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="01." label="About" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <motion.p
              className="text-white/60 font-mono text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {personal.bio}
            </motion.p>

            {/* Highlights */}
            {[
              'Expert in ETL/ELT, Medallion Architecture & Delta Lake',
              'Cloud-native: Azure, AWS & Microsoft Fabric',
              'Real-time streaming with Kafka, Kinesis & Event Hub',
              'AI-ready pipelines with RAG, embeddings & LangChain',
            ].map((h, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 mb-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <div className="w-2 h-2 bg-green mt-1.5 shrink-0 group-hover:bg-red transition-colors" />
                <span className="font-mono text-sm text-white/70 group-hover:text-white transition-colors">{h}</span>
              </motion.div>
            ))}

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px mt-10 border border-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-black border-white/5 hover:bg-white/[0.02] transition-colors group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="font-black text-3xl text-green group-hover:text-white transition-colors">{s.value}</div>
                  <div className="font-mono text-xs text-white/30 uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="flex flex-col gap-6">
            {/* Education card */}
            <motion.div
              className="border border-white/10 bg-white/[0.02] p-6 hover:border-green transition-all duration-300 geo-shadow-green group"
              style={{ '--tw-shadow': 'none' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 4, y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 border border-green/30 text-green">
                  <FiBook size={16} />
                </div>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Education</span>
              </div>
              {education.map(edu => (
                <div key={edu.degree}>
                  <p className="font-bold text-white text-lg">{edu.degree}</p>
                  <p className="font-mono text-green text-sm mt-1">{edu.school}</p>
                  <p className="font-mono text-white/30 text-xs mt-1">{edu.location} · {edu.year}</p>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="border border-white/10 bg-white/[0.02] p-6 hover:border-red transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              whileHover={{ x: 4, y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 border border-red/30 text-red">
                  <FiAward size={16} />
                </div>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Certifications</span>
              </div>
              {certifications.map((group) => (
                <div key={group.group} className="mb-5 last:mb-0">
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-3">{group.group}</p>
                  <div className="flex flex-col gap-2">
                    {group.items.map(cert => (
                      <div key={cert} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green mt-1.5 shrink-0" />
                        <span className="font-mono text-xs text-white/60">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
