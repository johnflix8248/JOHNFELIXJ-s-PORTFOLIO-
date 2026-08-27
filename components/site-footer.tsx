import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-base font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} <span className="text-border">·</span> {profile.secondaryRole}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Send an email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#home"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
