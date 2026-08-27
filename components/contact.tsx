import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/portfolio-data"

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    icon: Github,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Contact"
          title="Let us build"
          accent="something"
          sub="Open to internships, junior developer roles and collaborative projects in AI, data and web."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 70}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
              >
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/30 text-primary"
                  aria-hidden="true"
                >
                  <channel.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-[0.14em] text-muted">{channel.label}</span>
                  <span className="mt-0.5 block truncate text-sm font-medium">{channel.value}</span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-4">
          <p className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-pretty">{profile.location}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
