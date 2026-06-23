import { skills } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Expertise" title="Skills & Technologies" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl text-primary-400 font-mono leading-none">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:border-primary-500/60 hover:text-primary-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
