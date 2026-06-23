import { FiExternalLink } from 'react-icons/fi'
import { publications } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Publications() {
  return (
    <section id="publications" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Research</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-16">Publications</h2>

        {publications.map((pub, i) => (
          <div key={i} className="border border-white/7 bg-surface-2 p-10 hover:border-gold/25 transition-colors">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 border border-gold/30 text-center">
                <span className="text-gold font-bold text-xs leading-tight">IEEE<br/>2025</span>
              </div>

              <div className="flex-1 min-w-0">
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-start gap-3">
                  <h3 className="font-display text-xl font-semibold text-cream leading-snug group-hover:text-gold transition-colors">
                    {pub.title}
                  </h3>
                  <FiExternalLink className="shrink-0 text-cream-faint group-hover:text-gold mt-1 transition-colors" size={14} />
                </a>

                <p className="text-gold/80 text-sm mt-3 font-medium">{pub.venue}</p>
                <p className="text-cream-muted text-sm mt-2">{pub.location} · {pub.dates}</p>
                <p className="text-cream-muted/60 text-sm mt-1">{pub.authors}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="text-xs text-cream-faint border border-white/7 px-3 py-1.5 font-mono">
                    DOI: {pub.doi}
                  </span>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                     className="text-xs font-medium text-gold border border-gold/30 px-3 py-1.5 flex items-center gap-2 hover:bg-gold hover:text-black transition-all">
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
