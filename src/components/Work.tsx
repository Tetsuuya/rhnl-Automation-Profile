"use client";

import { useEffect, useState } from "react";
import { work, type WorkItem } from "@/data/work";
import Media from "./Media";

export default function Work() {
  const [open, setOpen] = useState<WorkItem | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* swipeable row on phones, 2-column grid from md up */}
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {work.map((item) => (
          <button
            key={item.slug}
            onClick={() => setOpen(item)}
            className="group w-[85%] shrink-0 snap-center overflow-hidden rounded-xl border-2 border-ink bg-surface text-left transition hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--accent)] md:w-auto"
          >
            <div className="relative aspect-video border-b-2 border-ink bg-surface">
              <Media item={item} />
              <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-canvas transition group-hover:bg-accent">
                ▶
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.summary}</p>
              <p className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-ink-soft line-through decoration-muted">{item.before}</span>
                <span className="text-ink-soft">→</span>
                <span className="rounded bg-ok/10 px-1.5 py-0.5 font-bold text-ok">{item.after}</span>
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 sm:items-center sm:p-4"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border-2 border-b-0 border-ink bg-surface sm:rounded-xl sm:border-b-2"
          >
            <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 font-mono text-xs">
              <span>{open.slug}.json</span>
              <button onClick={() => setOpen(null)} className="hover:text-accent" aria-label="Close">
                close ✕
              </button>
            </div>
            <div className="aspect-video bg-canvas">
              <Media item={open} full />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">{open.title}</h3>
                <p className="font-mono text-sm">
                  <span className="text-ink-soft line-through decoration-muted">{open.before}</span>
                  <span className="text-ink-soft"> → </span>
                  <span className="font-bold text-ok">{open.after}</span>
                </p>
              </div>

              <p className="mt-5 font-mono text-xs uppercase tracking-wide text-accent">problem</p>
              <p className="mt-1">{open.problem}</p>

              {open.steps && (
                <p className="mt-5 font-mono text-xs uppercase tracking-wide text-accent">how it works</p>
              )}
              {open.steps && (
                <ol className="mt-2 space-y-2">
                  {open.steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm">
                      <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              )}

              <p className="mt-5 font-mono text-xs uppercase tracking-wide text-accent">result</p>
              <p className="mt-1 font-semibold">{open.result}</p>
              <p className="mt-4 font-mono text-xs text-ink-soft">
                {open.nodes.join(" → ")} · before = typical manual time, after = measured run time
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
