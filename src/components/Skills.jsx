import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { skills } from '../data/portfolio'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="skills" className="py-24 px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="04." label="Expertise" title="Skills & Tech" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-black p-6 hover:bg-white/[0.03] transition-colors group border-t-2 border-t-transparent hover:border-t-green"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green text-lg font-mono leading-none">{group.icon}</span>
                <h3 className="font-mono font-bold text-xs text-white/50 uppercase tracking-wider group-hover:text-white transition-colors">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(item => (
                  <motion.span
                    key={item}
                    className="font-mono text-xs text-white/40 border border-white/8 px-2 py-1 hover:border-green hover:text-green transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-y border-white/5 py-4">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {['Python', 'PySpark', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt', 'Kafka', 'Delta Lake', 'SQL', 'Spark', 'LangChain', 'Power BI', 'Tableau',
              'Python', 'PySpark', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt', 'Kafka', 'Delta Lake', 'SQL', 'Spark', 'LangChain', 'Power BI', 'Tableau'].map((t, i) => (
              <span key={i} className="font-mono text-sm text-white/15 uppercase tracking-widest">
                {t} <span className="text-green mx-4">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
