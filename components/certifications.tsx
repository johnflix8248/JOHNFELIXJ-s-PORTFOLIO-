import { Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/lib/portfolio-data"

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Certifications"
          title="Training and"
          accent="credentials"
          sub="Programs completed across full-stack development, data science, cybersecurity and neurotechnology."
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal as="li" key={certification.title} delay={index * 70}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/30 text-primary"
                  aria-hidden="true"
                >
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-semibold leading-snug text-balance">{certification.title}</p>
                  <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">{certification.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
