import { ExternalLink, BookOpen, Users, MapPin, Calendar } from 'lucide-react'
import { publications } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Publications() {
  return (
    <section id="publications" className="bg-slate-900 section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Research" title="Publications" />

        <div className="mt-12 flex flex-col gap-6">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 shrink-0 mt-1">
                  <BookOpen size={20} className="text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2"
                  >
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-primary-300 transition-colors">
                      {pub.title}
                    </h3>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-primary-400 transition-colors shrink-0 mt-1.5" />
                  </a>

                  <p className="text-primary-400 font-medium text-sm mt-2">{pub.venue}</p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-slate-500 text-sm">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {pub.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {pub.dates}
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 mt-3 text-slate-400 text-sm">
                    <Users size={13} className="mt-0.5 shrink-0 text-slate-500" />
                    <span>{pub.authors}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-400 font-mono">
                      DOI: {pub.doi}
                    </span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-300 hover:bg-primary-500/20 transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink size={11} />
                      IEEE Xplore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
