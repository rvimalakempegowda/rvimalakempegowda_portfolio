import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { personal } from '../data/portfolio'

// Replace with: import photo from '../assets/photo.jpg'
const photo = null

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent font-medium text-sm tracking-wide mb-3">
              Data Engineer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-5">
              Hi, I'm<br />
              <span className="text-accent">Revanth Gowda</span>
            </h1>

            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              I build scalable data pipelines, cloud platforms, and real-time streaming workflows
              that turn raw data into business insights — at companies like Vanguard, Cognizant, and UCO.
            </p>

            <div className="flex items-center gap-1.5 justify-center md:justify-start text-neutral-400 text-sm mb-8">
              <HiOutlineLocationMarker className="text-base shrink-0" />
              <span>{personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a href="#contact"
                 className="px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors">
                Get in touch
              </a>
              <a href="#projects"
                 className="px-5 py-2.5 rounded-lg border border-neutral-200 text-neutral-700 font-medium text-sm hover:border-neutral-400 hover:bg-neutral-50 transition-colors">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-5 justify-center md:justify-start">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                 className="text-neutral-400 hover:text-neutral-900 transition-colors text-xl">
                <FaGithub />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-neutral-400 hover:text-accent transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personal.email}`}
                 className="text-neutral-400 hover:text-accent transition-colors text-xl">
                <HiOutlineMail />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
                {photo
                  ? <img src={photo} alt="Revanth Gowda Vimala Kempegowda" className="w-full h-full object-cover object-center" />
                  : <div className="w-full h-full flex items-center justify-center bg-accent-light">
                      <span className="text-5xl font-bold text-accent">RG</span>
                    </div>
                }
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-md border border-neutral-100 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-neutral-700">Open to work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tech strip */}
        <div className="mt-20 pt-10 border-t border-neutral-100">
          <p className="text-xs text-neutral-400 uppercase tracking-widest text-center mb-5">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'PySpark', 'SQL', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Apache Airflow', 'dbt', 'Delta Lake', 'Kafka', 'LangChain'].map(t => (
              <span key={t}
                    className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full hover:bg-accent-light hover:text-accent transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
