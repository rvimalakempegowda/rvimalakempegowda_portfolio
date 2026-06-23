import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PersonalSticker from './PersonalSticker'
import { personal } from '../data/portfolio'

const NAV = ['about', 'experience', 'projects', 'skills', 'publications', 'contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setAtTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Navbar ── */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b border-white/10' : 'bg-transparent'}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            className="font-mono font-bold text-xl text-white hover:text-green transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RG<span className="text-green">.</span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <a
                  href={`#${s}`}
                  className="font-mono text-sm text-white/60 hover:text-green transition-colors uppercase tracking-wider relative group"
                >
                  <span className="text-green/60 mr-1 text-xs">0{i + 1}.</span>
                  {s}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-green group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
               className="text-white/50 hover:text-green transition-colors text-xl">
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-white/50 hover:text-green transition-colors text-xl">
              <FaLinkedin />
            </a>
            <motion.a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs border border-green text-green px-4 py-2 hover:bg-green hover:text-black transition-all duration-200 uppercase tracking-wider"
              whileHover={{ x: 2, y: -2 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden bg-black border-t border-white/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {NAV.map((s, i) => (
                  <a key={s} href={`#${s}`}
                     className="font-mono text-sm text-white/60 hover:text-green uppercase tracking-wider"
                     onClick={() => setMenuOpen(false)}>
                    <span className="text-green mr-2">0{i + 1}.</span>{s}
                  </a>
                ))}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-green text-xl"><FaGithub /></a>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-green text-xl"><FaLinkedin /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Hero ── */}
      <section id="hero" className="min-h-screen bg-black geo-bg flex items-center relative overflow-hidden">
        {/* Background large text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-mono font-black text-[20vw] text-white/[0.02] leading-none">DE</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <motion.div
                className="inline-flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-green animate-pulse-geo" />
                <span className="font-mono text-green text-xs tracking-[4px] uppercase">Available for work</span>
              </motion.div>

              <motion.h1
                className="font-black text-5xl md:text-7xl text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <span className="block">Revanth</span>
                <span className="block text-green glitch" data-text="Gowda">Gowda</span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <div className="h-px w-8 bg-red" />
                <span className="font-mono text-red text-sm tracking-[3px] uppercase">Data Engineer</span>
              </motion.div>

              <motion.p
                className="text-white/50 text-base leading-relaxed max-w-md mb-10 font-mono text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                Building scalable ETL/ELT pipelines, cloud data platforms, and real-time streaming workflows.
                Turning raw data into business insights.
              </motion.p>

              {/* Tech chips */}
              <motion.div
                className="flex flex-wrap gap-2 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                {['Python', 'PySpark', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt'].map((t, i) => (
                  <motion.span
                    key={t}
                    className="font-mono text-xs border border-white/20 text-white/50 px-3 py-1 hover:border-green hover:text-green transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.04 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.a
                  href="#projects"
                  className="group flex items-center gap-2 font-mono text-sm bg-green text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors geo-shadow-green"
                  whileHover={{ x: 2, y: -2 }}
                >
                  View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-sm border border-white/30 text-white px-6 py-3 uppercase tracking-wider hover:border-red hover:text-red transition-colors"
                  whileHover={{ x: 2, y: -2 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Location */}
              <motion.p
                className="font-mono text-xs text-white/25 mt-8 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                📍 FRISCO, TEXAS, USA
              </motion.p>
            </div>

            {/* Right — sticker */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
            >
              <PersonalSticker size={320} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        {atTop && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="font-mono text-xs text-white/20 tracking-widest uppercase">Scroll</span>
            <FiChevronDown className="text-green text-lg" />
          </motion.div>
        )}
      </section>
    </>
  )
}
