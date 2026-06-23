import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiArrowLongRight, HiArrowLongDown } from 'react-icons/hi2'
import { personal } from '../data/portfolio'

// Add your photo: import photo from '../assets/Revanth.JPG'
const photo = null

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col bg-ink relative overflow-hidden pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0 hero-dots opacity-[0.022] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gold/5 blur-[180px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] pointer-events-none animate-glow-slow" />

      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center relative z-10 py-12">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-gold/60" />
            <span className="text-[10px] font-medium tracking-[4px] text-gold/70 uppercase">Data Engineer · Vanguard</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
               className="text-cream-faint hover:text-cream transition-colors" aria-label="GitHub"><FaGithub size={16} /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-cream-faint hover:text-gold transition-colors" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
            <a href={`mailto:${personal.email}`}
               className="text-cream-faint hover:text-gold transition-colors" aria-label="Email"><HiOutlineMail size={17} /></a>
          </div>
        </div>

        {/* ── Main 3-column layout ── */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-14 items-center">

          {/* Left — Large display name */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <h1 className="font-display leading-none text-cream">
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight">Revanth</span>
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight italic text-gold">Gowda</span>
            </h1>
            <p className="text-cream-muted text-sm mt-5 leading-relaxed max-w-xs lg:ml-auto">
              Building scalable pipelines, cloud platforms, and real-time streaming at Vanguard.
            </p>
            <div className="flex flex-wrap gap-3 mt-7 lg:justify-end">
              <a href="#contact"
                 className="group inline-flex items-center gap-2 bg-gold text-ink text-xs font-semibold tracking-wide px-5 py-3 hover:bg-gold-light transition-colors">
                Hire me
                <HiArrowLongRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#projects"
                 className="inline-flex items-center text-xs font-medium tracking-wide border border-white/8 text-cream-muted px-5 py-3 hover:border-gold/40 hover:text-cream transition-all">
                View work
              </a>
            </div>
          </div>

          {/* Center — Photo (the star) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-none bg-gradient-to-b from-gold/10 via-transparent to-gold/5 blur-xl pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute -top-2.5 -left-2.5 w-10 h-10 border-t border-l border-gold/70 z-10" />
              <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b border-r border-gold/70 z-10" />
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t border-r border-gold/30 z-10" />
              <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b border-l border-gold/30 z-10" />

              {/* Photo frame */}
              <div className="w-52 h-72 md:w-64 md:h-[340px] lg:w-72 lg:h-[380px] overflow-hidden bg-surface-2 relative">
                {photo ? (
                  <img src={photo} alt="Revanth Gowda"
                       className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center relative"
                       style={{background: 'linear-gradient(160deg, #141414 0%, #0f0f0f 100%)'}}>
                    <div className="absolute inset-0"
                         style={{background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.07) 0%, transparent 65%)'}} />
                    <span className="font-display text-[7rem] font-bold select-none relative z-10"
                          style={{color: 'rgba(201,168,76,0.1)', lineHeight: 1}}>RG</span>
                    <span className="text-[9px] tracking-[6px] mt-3 relative z-10"
                          style={{color: 'rgba(237,232,223,0.15)'}}>REVANTH GOWDA</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2
                              bg-surface-2 border border-white/8 px-4 py-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-cream-muted">Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Right — Role, location, extras */}
          <div className="order-3 text-center lg:text-left">
            <div className="space-y-4 text-cream-muted text-sm">
              <div>
                <p className="text-[10px] tracking-[3px] text-gold/50 uppercase mb-1">Location</p>
                <p className="text-cream text-sm">Frisco, Texas</p>
              </div>
              <div className="w-8 h-px bg-white/8 mx-auto lg:mx-0" />
              <div>
                <p className="text-[10px] tracking-[3px] text-gold/50 uppercase mb-1">Currently</p>
                <p className="text-cream text-sm">Vanguard</p>
              </div>
              <div className="w-8 h-px bg-white/8 mx-auto lg:mx-0" />
              <div>
                <p className="text-[10px] tracking-[3px] text-gold/50 uppercase mb-1">Speciality</p>
                <p className="text-cream text-sm leading-snug">Data Engineering<br/>Cloud · Streaming</p>
              </div>
              <div className="w-8 h-px bg-white/8 mx-auto lg:mx-0" />
              <div>
                <p className="text-[10px] tracking-[3px] text-gold/50 uppercase mb-2">Research</p>
                <p className="text-cream-muted text-xs leading-relaxed">IEEE ICCCS 2025<br/>Published Author</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech strip ── */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/4">
          <p className="text-[9px] text-cream-faint uppercase tracking-[5px] text-center mb-5">Core Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'PySpark', 'SQL', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt', 'Delta Lake', 'Kafka', 'LangChain'].map(t => (
              <span key={t}
                    className="text-[11px] text-cream-muted/40 border border-white/5 px-3 py-1.5 hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a href="#about" className="flex flex-col items-center gap-2 text-cream-faint/40 hover:text-gold transition-colors">
          <span className="text-[9px] tracking-[4px] uppercase">Explore</span>
          <HiArrowLongDown size={15} className="animate-scroll-bounce" />
        </a>
      </div>
    </section>
  )
}
