import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({ number, label, title }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-green text-sm">{number}</span>
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-white/30 text-xs uppercase tracking-widest">{label}</span>
      </div>
      <h2 className="font-black text-4xl md:text-5xl text-white">{title}</h2>
      <div className="mt-3 flex items-center gap-3">
        <div className="w-12 h-1 bg-green" />
        <div className="w-4 h-1 bg-red" />
      </div>
    </div>
  )
}

export function Tag({ children, color = 'green' }) {
  return (
    <span className={`font-mono text-xs px-2 py-1 border ${
      color === 'green'
        ? 'border-green/40 text-green/80 hover:border-green hover:text-green'
        : 'border-red/40 text-red/80 hover:border-red hover:text-red'
    } transition-colors`}>
      {children}
    </span>
  )
}
