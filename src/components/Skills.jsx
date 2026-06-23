import { skills } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillGroup({ group, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
         className="reveal group bg-[#0c0c0c] p-6 hover:bg-surface transition-colors duration-300">
      <h3 className="text-xs font-medium uppercase tracking-[3px] text-cream-faint mb-4 group-hover:text-gold transition-colors">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map(item => (
          <span key={item}
                className="text-xs text-cream-muted/60 border border-white/6 px-2.5 py-1 hover:border-gold/30 hover:text-gold transition-all cursor-default">
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
    <section id="skills" className="py-28 bg-[#0c0c0c] px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Expertise</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {skills.map((group, i) => <SkillGroup key={group.category} group={group} delay={i * 60} />)}
        </div>
      </div>
    </section>
  )
}
