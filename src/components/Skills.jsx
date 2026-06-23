import { skills } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillGroup({ group, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref} className="reveal bg-white rounded-xl p-5 border border-gray-100 shadow-card">
      <h3 className="text-xs font-bold uppercase tracking-widest text-blue mb-3">{group.category}</h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map(item => (
          <span key={item}
                className="text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full hover:bg-blue/5 hover:border-blue/30 hover:text-blue transition-all">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const heading = useScrollReveal(0)
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Expertise</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => <SkillGroup key={group.category} group={group} delay={i * 55} />)}
        </div>
      </div>
    </section>
  )
}
