import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight, HiArrowLongDown } from 'react-icons/hi2'
import { personal } from '../data/portfolio'

// To show your photo: replace `null` below with: import photo from '../assets/Revanth.JPG'
const photo = null

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col bg-[#0c0c0c] relative overflow-hidden pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0 hero-dots opacity-[0.025] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none animate-glow-slow" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-16">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-medium tracking-[4px] uppercase">Senior Data Engineer</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6">
              Revanth<br />
              <span className="text-gold font-semibold" style={{fontStyle:'italic'}}>Gowda</span>
            </h1>

            <p className="text-cream-muted text-[15px] leading-relaxed max-w-md mb-8">
              Building scalable data pipelines, cloud platforms, and real-time streaming
              workflows at Vanguard — turning raw data into business insights.
            </p>

            <div className="flex items-center gap-1.5 text-cream-muted/50 text-sm mb-10">
              <HiOutlineLocationMarker className="shrink-0" />
              <span>{personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#contact"
                 className="group flex items-center gap-2 px-6 py-3.5 bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-colors">
                Get in touch
                <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects"
                 className="px-6 py-3.5 border border-white/10 text-cream-muted text-sm font-medium hover:border-gold/40 hover:text-cream transition-all">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                 className="text-cream-faint hover:text-cream transition-colors text-xl" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-cream-faint hover:text-gold transition-colors text-xl" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personal.email}`}
                 className="text-cream-faint hover:text-gold transition-colors text-xl" aria-label="Email">
                <HiOutlineMail />
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/60 z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/60 z-10" />

              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden bg-surface-2 relative">
                {photo ? (
                  <img src={photo} alt="Revanth Gowda" className="w-full h-full object-cover object-center" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#111] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/3" />
                    <span className="font-display text-8xl font-bold text-gold/15 select-none relative z-10">RG</span>
                    <span className="text-[10px] tracking-[5px] text-cream-faint/40 uppercase mt-3 relative z-10">Revanth Gowda</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface px-4 py-2 border border-white/10 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-cream-muted">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="relative z-10 border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] text-cream-faint uppercase tracking-[4px] text-center mb-5">Core Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'PySpark', 'SQL', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt', 'Delta Lake', 'Kafka', 'LangChain'].map(t => (
              <span key={t} className="text-xs text-cream-muted/50 border border-white/5 px-3 py-1.5 hover:border-gold/30 hover:text-gold transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center py-6">
        <a href="#about" className="flex flex-col items-center gap-1.5 text-cream-faint hover:text-gold transition-colors">
          <span className="text-[9px] tracking-[3px] uppercase">Scroll</span>
          <HiArrowLongDown size={16} className="animate-scroll-bounce" />
        </a>
      </div>
    </section>
  )
}
