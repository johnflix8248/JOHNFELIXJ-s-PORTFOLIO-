import { SectionHeading } from "@/components/section-heading"
import { Timeline } from "@/components/timeline"
import { education, experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Experience"
          title="Where I have"
          accent="worked"
          sub="Internships and roles that shaped how I write software and work with people."
        />
        <Timeline entries={experience} />
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading tag="Education" title="Academic" accent="background" />
        <Timeline entries={education} />
      </div>
    </section>
  )
}
