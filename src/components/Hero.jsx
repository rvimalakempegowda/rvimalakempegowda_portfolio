import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { personal } from '../data/portfolio'

// Add your photo: import photo from '../assets/Revanth.JPG'
const photo = null

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#0c0c0c] relative overflow-hidden pt-16">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[4px] uppercase">Data Engineer</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6">
              Revanth<br />
              <span className="text-gold italic font-semibold">Gowda</span>
            </h1>

            <p className="text-cream-muted text-base leading-relaxed max-w-md mb-8">
              Building scalable data pipelines, cloud platforms, and real-time streaming
              workflows at Vanguard — turning raw data into business insights.
            </p>

            <div className="flex items-center gap-1.5 text-cream-muted/60 text-sm mb-10">
              <HiOutlineLocationMarker className="shrink-0" />
              <span>{personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact"
                 className="group flex items-center gap-2 px-6 py-3 bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-colors">
                Get in touch
                <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects"
                 className="px-6 py-3 border border-white/10 text-cream-muted text-sm font-medium hover:border-gold/40 hover:text-cream transition-all">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                 className="text-cream-muted hover:text-cream transition-colors text-lg"><FaGithub /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-cream-muted hover:text-gold transition-colors text-lg"><FaLinkedin /></a>
              <a href={`mailto:${personal.email}`}
                 className="text-cream-muted hover:text-gold transition-colors text-lg"><HiOutlineMail /></a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/60 z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/60 z-10" />

              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden bg-surface-2 relative">
                {photo
                  ? <img src={photo} alt="Revanth Gowda" className="w-full h-full object-cover object-center" />
                  : <div className="w-full h-full flex items-center justify-center bg-surface-2">
                      <span className="font-display text-7xl font-bold text-gold/20">RG</span>
                    </div>
                }
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface px-4 py-2 border border-white/10 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-cream-muted">Open to work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tech strip */}
        <div className="mt-24 pt-10 border-t border-white/5">
          <p className="text-xs text-cream-faint uppercase tracking-[4px] text-center mb-6">Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'PySpark', 'SQL', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt', 'Delta Lake', 'Kafka', 'LangChain'].map(t => (
              <span key={t} className="text-xs text-cream-muted/50 border border-white/5 px-3 py-1.5 hover:border-gold/30 hover:text-gold transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
