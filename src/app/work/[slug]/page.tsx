import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Media from "@/components/Media";
import CopyLink from "@/components/CopyLink";
import { work } from "@/data/work";
import { profile } from "@/data/site";

// One shareable page per workflow: /work/<slug>
export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return {};
  const poster = item.media?.type === "video" ? item.media.poster : undefined;
  return {
    title: `${item.title} | Rhenel.s`,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary, images: poster ? [poster] : [] },
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();

  return (
    <>
      <header className="border-b border-line bg-canvas/80 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            rhenel<span className="text-accent">.s</span>
          </Link>
          <Link href="/#work" className="font-mono text-xs text-ink-soft hover:text-ink sm:text-sm">
            ← all workflows
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="overflow-hidden rounded-xl border-2 border-ink bg-surface">
          <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 font-mono text-xs">
            <span>{item.slug}.json</span>
            <CopyLink path={`/work/${item.slug}`} className="hover:text-accent" />
          </div>
          <div className="aspect-video bg-canvas">
            <Media item={item} full />
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{item.title}</h1>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-wide text-accent">problem</p>
        <p className="mt-1">{item.problem}</p>

        {item.steps && (
          <>
            <p className="mt-6 font-mono text-xs uppercase tracking-wide text-accent">how it works</p>
            <ol className="mt-2 space-y-2">
              {item.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm">
                  <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
          </>
        )}

        <p className="mt-6 font-mono text-xs uppercase tracking-wide text-accent">result</p>
        <p className="mt-1 font-semibold">{item.result}</p>
        <p className="mt-4 font-mono text-xs text-ink-soft">{item.nodes.join(" → ")}</p>

        <div className="mt-10 rounded-xl border border-line bg-surface p-5 sm:flex sm:items-center sm:justify-between">
          <p className="font-bold">Want something like this for your business?</p>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`About: ${item.title}`)}`}
            className="mt-3 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white hover:brightness-95 sm:mt-0"
          >
            Let&apos;s talk ▸
          </a>
        </div>
      </main>
    </>
  );
}
