import { Mail, MapPin, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-primary-500/30 ring-4 ring-primary-500/20">
            {personal.initials}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          {personal.shortName}
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          <span className="text-gradient">{personal.title}</span>
        </h2>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Building scalable data pipelines, cloud platforms, and real-time streaming workflows — turning raw data into meaningful business insights.
        </p>

        <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
          <MapPin size={14} />
          <span>{personal.location}</span>
        </div>

        {/* Tech stack chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Python', 'PySpark', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Airflow', 'dbt'].map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:border-primary-500 hover:text-primary-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
