import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { personal } from '../data/portfolio'

const links = [
  { Icon: FiMail,    label: 'Email',    value: personal.email,    href: `mailto:${personal.email}`,      color: 'green' },
  { Icon: FaLinkedin,label: 'LinkedIn', value: 'revanth-gowda-vimala-kempegowda', href: personal.linkedin, color: 'green' },
  { Icon: FaGithub,  label: 'GitHub',   value: 'rvimalakempegowda',               href: personal.github,   color: 'green' },
  { Icon: FiMapPin,  label: 'Location', value: personal.location,  href: null,                            color: 'red' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="contact" className="py-24 px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader number="06." label="Contact" title="Get In Touch" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — message */}
          <div>
            <motion.p
              className="font-mono text-sm text-white/50 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Open to new opportunities, collaborations, and conversations about
              data engineering, cloud infrastructure, and AI-driven analytics.
              Whether you have a project or just want to connect — reach out!
            </motion.p>

            <div className="flex flex-col gap-4">
              {links.map(({ Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className={`p-3 border ${color === 'green' ? 'border-green/30 text-green' : 'border-red/30 text-red'} shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-white/20 uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`font-mono text-sm ${color === 'green' ? 'text-green' : 'text-red'} hover:underline truncate block`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-white/50">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <motion.div
            className="border border-white/10 p-10 text-center hover:border-green transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ boxShadow: '8px 8px 0px #10B981' }}
          >
            <div className="w-16 h-16 border-2 border-green mx-auto mb-6 flex items-center justify-center">
              <FiMail size={24} className="text-green" />
            </div>
            <h3 className="font-black text-2xl text-white mb-3">Ready to Connect?</h3>
            <p className="font-mono text-xs text-white/30 mb-8 leading-relaxed">
              I typically respond within 24 hours.
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-center gap-2 font-mono text-sm bg-green text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors"
                whileHover={{ x: 2, y: -2 }}
              >
                Send Email <FiArrowRight />
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-mono text-sm border border-white/20 text-white/60 px-6 py-3 uppercase tracking-wider hover:border-green hover:text-green transition-colors"
                whileHover={{ x: 2, y: -2 }}
              >
                <FaLinkedin /> Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-white/15">
            © {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda
          </span>
          <div className="flex items-center gap-6">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
               className="text-white/20 hover:text-green transition-colors text-lg"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-white/20 hover:text-green transition-colors text-lg"><FaLinkedin /></a>
            <a href={`mailto:${personal.email}`}
               className="text-white/20 hover:text-green transition-colors text-lg"><FiMail /></a>
          </div>
          <span className="font-mono text-xs text-white/15 uppercase tracking-widest">Data Engineer</span>
        </div>
      </div>
    </SectionWrapper>
  )
}
