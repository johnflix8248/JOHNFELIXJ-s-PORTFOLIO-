"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Download, Eye, X, ZoomIn, ZoomOut } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function CvViewer() {
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const close = useCallback(() => {
    setOpen(false)
    setZoom(1)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close])

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum vitae preview"
      className="cv-shell fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md"
    >
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <p className="min-w-0 truncate font-display text-sm font-semibold">John Felix J — CV</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.6, Number((z - 0.2).toFixed(1))))}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2.4, Number((z + 0.2).toFixed(1))))}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download
          </a>
          <button
            type="button"
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Close CV preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 sm:p-8" onContextMenu={(event) => event.preventDefault()}>
        <div className="mx-auto w-full" style={{ maxWidth: `${zoom * 768}px` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.cvPreview || "/placeholder.svg"}
            alt="Resume of John Felix J, AI and Data Science student"
            className="cv-protected w-full rounded-xl border border-border shadow-2xl"
            draggable={false}
          />
        </div>
      </div>

      <div className="shrink-0 border-t border-border px-4 py-3 text-center sm:hidden">
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download PDF
        </a>
      </div>
    </div>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        View CV
      </button>

      {open && mounted ? createPortal(dialog, document.body) : null}
    </>
  )
}
