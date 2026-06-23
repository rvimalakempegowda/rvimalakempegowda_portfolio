import { FiExternalLink } from 'react-icons/fi'
import { publications } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-neutral-50 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Research</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-12">Publications</h2>

        {publications.map((pub, i) => (
          <div key={i}
               className="bg-white rounded-2xl border border-neutral-200 p-8 hover:shadow-md hover:border-accent/20 transition-all duration-200">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center">
                <span className="text-accent font-bold text-xs text-center leading-tight">IEEE</span>
              </div>
              <div className="flex-1 min-w-0">
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-start gap-2">
                  <h3 className="font-semibold text-neutral-900 text-lg leading-snug group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <FiExternalLink className="shrink-0 text-neutral-300 group-hover:text-accent mt-1 transition-colors" size={14} />
                </a>

                <p className="text-accent font-medium text-sm mt-2">{pub.venue}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-neutral-400">
                  <span>{pub.location} · {pub.dates}</span>
                </div>
                <p className="text-sm text-neutral-400 mt-1">{pub.authors}</p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="text-xs text-neutral-400 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg font-mono">
                    DOI: {pub.doi}
                  </span>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                     className="text-xs font-medium text-accent bg-accent-light px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-accent hover:text-white transition-colors">
                    <FiExternalLink size={11} /> View on IEEE Xplore
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
