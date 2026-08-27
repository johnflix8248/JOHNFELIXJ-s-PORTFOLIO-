import { Code2, Layers, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { proficiency, skillGroups } from "@/lib/portfolio-data"

const icons = {
  code: Code2,
  layers: Layers,
  users: Users,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Skills"
          title="Tools and"
          accent="strengths"
          sub="What I reach for when building software, analysing data or working on a team."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.title} delay={index * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-background px-2.5 py-1.5 text-xs font-medium text-muted ring-1 ring-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Proficiency
            </h3>
            <ul className="mt-6 flex flex-col gap-6">
              {proficiency.map((skill) => (
                <li key={skill.label}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-muted">{skill.value}%</span>
                  </div>
                  <div
                    className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background"
                    role="meter"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.label}
                  >
                    <span
                      className="block h-full rounded-full"
                      style={{
                        width: `${skill.value}%`,
                        backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
