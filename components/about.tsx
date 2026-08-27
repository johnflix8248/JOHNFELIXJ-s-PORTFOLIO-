import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { highlights, languages, summary } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading tag="About" title="A student engineer," accent="building in public" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            {summary.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 90}>
                <p className="text-pretty leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={280} className="mt-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  Languages
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {languages.map((language) => (
                    <li key={language.name} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium">{language.name}</p>
                        <p className="text-sm text-muted">{language.level}</p>
                      </div>
                      <div className="flex gap-1.5" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`h-2 w-2 rounded-full ${index < language.dots ? "bg-primary" : "bg-border"}`}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <ul className="flex flex-col gap-3">
            {highlights.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80}>
                <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
                  <span
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/40 text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold leading-snug">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
