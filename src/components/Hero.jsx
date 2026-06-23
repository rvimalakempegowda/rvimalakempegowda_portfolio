import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { personal } from '../data/portfolio'

// Add your photo: import photo from '../assets/Revanth.JPG'
import photo from '../assets/Revanth.JPG'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue bg-blue/8 px-3 py-1.5 rounded mb-6">
              Data Engineer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight mb-4">
              Hi, I'm<br />
              <span className="text-blue">Revanth Gowda</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
              I build scalable data pipelines, cloud platforms, and real-time streaming
              workflows that turn raw data into business insights — at companies like
              Vanguard, Cognizant, and UCO.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <HiOutlineLocationMarker />
              <span>{personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact"
                 className="group inline-flex items-center gap-2 bg-blue text-white font-semibold text-sm px-6 py-3 rounded hover:bg-blue-dark transition-colors">
                Get in touch
                <HiArrowLongRight className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#projects"
                 className="inline-flex items-center text-sm font-semibold px-6 py-3 border border-gray-200 text-gray-600 rounded hover:border-blue hover:text-blue transition-colors">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-navy transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${personal.email}`}
                 className="text-gray-400 hover:text-blue transition-colors" aria-label="Email">
                <HiOutlineMail size={21} />
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-card-hover">
                {photo ? (
                  <img src={photo} alt="Revanth Gowda" className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-7xl font-bold text-gray-300">RG</span>
                  </div>
                )}
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white shadow-card px-5 py-2.5 rounded-full whitespace-nowrap border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech strip */}
        <div className="mt-24 pt-10 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'PySpark', 'SQL', 'Databricks', 'Snowflake', 'Azure', 'AWS', 'Apache Airflow', 'dbt', 'Delta Lake', 'Kafka', 'LangChain'].map(t => (
              <span key={t}
                    className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full hover:border-blue hover:text-blue transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
