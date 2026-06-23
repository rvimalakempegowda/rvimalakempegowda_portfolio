import { skills } from '../data/portfolio'
import { SectionLabel } from './About'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-12">Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(group => (
            <div key={group.category}
                 className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 hover:border-accent/30 hover:shadow-sm transition-all duration-200">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(item => (
                  <span key={item}
                        className="text-xs font-medium text-neutral-600 bg-white border border-neutral-200 px-2.5 py-1 rounded-full hover:border-accent hover:text-accent transition-colors">
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
