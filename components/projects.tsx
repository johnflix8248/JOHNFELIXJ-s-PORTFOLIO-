import { BarChart3, Brain, Github, Terminal } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile, projects } from "@/lib/portfolio-data"

const icons = {
  terminal: Terminal,
  chart: BarChart3,
  brain: Brain,
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Projects"
          title="Things I have"
          accent="built"
          sub="Work from internships and specialised training programs, focused on shipping something that runs."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = icons[project.icon]
            return (
              <Reveal key={project.title} delay={index * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-balance">{project.title}</h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{project.body}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs uppercase tracking-[0.14em] text-muted">
                    {project.meta}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={140} className="mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
