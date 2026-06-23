import { skills } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillGroup({ group, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
         className="reveal group bg-ink p-6 border border-white/4 hover:border-gold/15 hover:bg-surface transition-all duration-300">
      <h3 className="text-[10px] font-semibold uppercase tracking-[3px] text-gold/50 mb-4 group-hover:text-gold/80 transition-colors">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map(item => (
          <span key={item}
                className="text-[11px] text-cream-muted/50 border border-white/5 px-2.5 py-1 hover:border-gold/30 hover:text-cream-muted transition-all duration-200 cursor-default">
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
    <section id="skills" className="py-28 bg-ink px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="04">Expertise</SectionLabel>
        <h2 ref={heading} className="reveal font-display text-4xl md:text-5xl font-bold text-cream mb-16 mt-2">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/3">
          {skills.map((group, i) => <SkillGroup key={group.category} group={group} delay={i * 55} />)}
        </div>
      </div>
    </section>
  )
}
