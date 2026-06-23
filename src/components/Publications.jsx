import { FiExternalLink } from 'react-icons/fi'
import { publications } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Publications() {
  const heading = useScrollReveal(0)
  const card    = useScrollReveal(150)

  return (
    <section id="publications" className="py-28 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="05">Research</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16 mt-2">Publications</h2>

        {publications.map((pub, i) => (
          <div key={i} ref={card}
               className="reveal border border-white/5 bg-surface-2 p-10 hover:border-gold/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 border border-gold/25">
                <span className="text-gold/80 font-bold text-xs leading-tight text-center">IEEE<br/>2025</span>
              </div>
              <div className="flex-1 min-w-0">
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-start gap-3 mb-4">
                  <h3 className="font-display text-xl font-semibold text-cream leading-snug group-hover:text-gold transition-colors">{pub.title}</h3>
                  <FiExternalLink className="shrink-0 text-cream-faint group-hover:text-gold mt-1 transition-colors" size={13} />
                </a>
                <p className="text-gold/70 text-sm font-medium">{pub.venue}</p>
                <p className="text-cream-muted text-sm mt-1.5">{pub.location} · {pub.dates}</p>
                <p className="text-cream-muted/50 text-xs mt-1">{pub.authors}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="text-[11px] text-cream-faint border border-white/5 px-3 py-1.5 font-mono">DOI: {pub.doi}</span>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                     className="text-[11px] font-semibold text-gold border border-gold/30 px-3 py-1.5 flex items-center gap-2 hover:bg-gold hover:text-ink transition-all">
                    <FiExternalLink size={10} /> IEEE Xplore
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
