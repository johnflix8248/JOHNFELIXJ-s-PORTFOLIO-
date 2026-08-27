import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { CvViewer } from "@/components/cv-viewer"
import { profile, stats } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="grid-horizon pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
              style={{ animation: "rise 0.6s ease both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Open to internships &amp; collaborations
            </p>

            <h1
              className="mt-6 font-display text-4xl font-bold leading-[1.08] text-balance sm:text-6xl"
              style={{ animation: "rise 0.7s ease 0.08s both" }}
            >
              {profile.name}
              <span className="mt-2 block text-gradient">{profile.role}</span>
            </h1>

            <p
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
              style={{ animation: "rise 0.7s ease 0.16s both" }}
            >
              Third-year B.Tech student building at the intersection of Python, full-stack web development and data
              analytics — turning coursework and internships into real, working software.
            </p>

            <div
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
              style={{ animation: "rise 0.7s ease 0.22s both" }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Chennai, Tamil Nadu
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {profile.email}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3" style={{ animation: "rise 0.7s ease 0.3s both" }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <CvViewer />
              <div className="flex items-center gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <dl
              className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8"
              style={{ animation: "rise 0.7s ease 0.38s both" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">{stat.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold sm:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto shrink-0" style={{ animation: "rise 0.8s ease 0.2s both" }}>
            <div
              className="absolute -inset-3 rounded-[28px] border border-primary/25"
              aria-hidden="true"
              style={{ transform: "rotate(4deg)" }}
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-border bg-surface sm:h-72 sm:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar || "/placeholder.svg"}
                alt="Portrait of John Felix J"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
