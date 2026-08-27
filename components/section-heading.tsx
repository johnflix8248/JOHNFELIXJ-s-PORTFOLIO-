import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  tag: string
  title: string
  accent?: string
  sub?: string
}

export function SectionHeading({ tag, title, accent, sub }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <span className="h-px w-7 bg-primary" aria-hidden="true" />
        {tag}
      </span>
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">
        {title} {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {sub ? <p className="mt-3 max-w-2xl text-pretty text-muted">{sub}</p> : null}
    </Reveal>
  )
}
