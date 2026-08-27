import { Reveal } from "@/components/reveal"
import type { TimelineEntry } from "@/lib/portfolio-data"

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-6 sm:pl-8">
      {entries.map((entry, index) => (
        <Reveal as="li" key={entry.title} delay={index * 90} className="relative">
          <span
            className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 border-primary bg-background sm:-left-[39px]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{entry.date}</span>
            <h3 className="text-lg font-bold text-balance sm:text-xl">{entry.title}</h3>
            <p className="text-sm text-muted">
              {entry.org} <span className="text-border">·</span> {entry.kind}
            </p>
          </div>

          <ul className="mt-4 flex flex-col gap-2">
            {entry.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-pretty">{point}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  )
}
