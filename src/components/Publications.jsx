import { FiExternalLink } from 'react-icons/fi'
import { publications } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Publications() {
  const heading = useScrollReveal(0)
  const card    = useScrollReveal(100)

  return (
    <section id="publications" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Research</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-12">Publications</h2>

        {publications.map((pub, i) => (
          <div key={i} ref={card}
               className="reveal bg-white rounded-xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-blue/5 border border-blue/15">
                <span className="text-blue font-bold text-xs text-center leading-tight">IEEE<br/>2025</span>
              </div>
              <div className="flex-1">
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-start gap-2 mb-3">
                  <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-blue transition-colors">{pub.title}</h3>
                  <FiExternalLink className="shrink-0 text-gray-300 group-hover:text-blue mt-1 transition-colors" size={14} />
                </a>
                <p className="text-blue font-semibold text-sm">{pub.venue}</p>
                <p className="text-gray-500 text-sm mt-1">{pub.location} · {pub.dates}</p>
                <p className="text-gray-400 text-sm mt-0.5">{pub.authors}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded font-mono">DOI: {pub.doi}</span>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                     className="text-xs font-semibold text-blue border border-blue/30 bg-blue/5 px-3 py-1.5 rounded flex items-center gap-1.5 hover:bg-blue hover:text-white transition-all">
                    <FiExternalLink size={11} /> IEEE Xplore
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
