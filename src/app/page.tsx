import Image from "next/image";
import Nav from "@/components/Nav";
import Work from "@/components/Work";
import Socials from "@/components/Socials";
import ContactForm from "@/components/ContactForm";
import { profile, services, toolGroups } from "@/data/site";

// A section hung off the main wire, with its node marker on the left.
function Step({
  id,
  marker,
  label,
  trigger = false,
  children,
}: {
  id: string;
  marker: string;
  label?: string;
  trigger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-10 sm:py-20 sm:pl-20">
      {/* on the wire (desktop) */}
      <span
        className={`absolute left-1 top-20 hidden h-10 w-10 place-items-center border-2 bg-surface font-mono text-sm font-bold sm:grid ${
          trigger ? "rounded-full border-accent text-accent" : "rounded-lg border-ink text-ink"
        }`}
      >
        {marker}
      </span>
      {label && (
        <p className="mb-5 flex items-center gap-2 font-mono text-sm text-ink-soft sm:mb-6 sm:pt-2.5">
          {/* inline marker (mobile) */}
          <span className="grid h-7 w-7 place-items-center rounded-md border-2 border-ink bg-surface text-xs font-bold text-ink sm:hidden">
            {marker}
          </span>
          {label}
        </p>
      )}
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* the wire connecting every section */}
        <div className="wire absolute bottom-24 left-[45px] top-24 hidden w-0.5 sm:block" aria-hidden />

        <Step id="hero" marker="⚡" trigger>
          <div className="grid items-center gap-8 pt-4 sm:pt-0 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs text-ok">
                <span className="h-2 w-2 rounded-full bg-ok" style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }} />
                available for projects
              </p>
              <h1 className="mt-4 text-[2.75rem] font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
                Hi, I&apos;m Rhenel.
              </h1>
              <p className="mt-4 max-w-md text-lg text-ink-soft sm:mt-5 sm:text-xl">
                I automate the boring stuff with <span className="font-bold text-ink">n8n</span>.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                <a href="#work" className="rounded-lg bg-ink px-5 py-3 text-center font-bold text-canvas hover:bg-accent">
                  See workflows
                </a>
                <a href="#contact" className="rounded-lg border-2 border-ink px-5 py-3 text-center font-bold hover:border-accent hover:text-accent">
                  Let&apos;s talk
                </a>
              </div>
            </div>

            <figure className="order-first w-36 -rotate-2 overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-[4px_4px_0_var(--ink)] sm:w-56 sm:shadow-[6px_6px_0_var(--ink)] md:order-none md:w-64">
              <Image src={profile.photo} alt={profile.name} width={256} height={256} priority className="aspect-square w-full object-cover" />
              <figcaption className="flex justify-between border-t-2 border-ink px-3 py-2 font-mono text-xs">
                <span>rhenel.jpg</span>
                <span className="text-ok">✓</span>
              </figcaption>
            </figure>
          </div>
        </Step>

        <Step id="services" marker="01" label="what I do">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-line bg-surface p-4 sm:p-5">
                <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">{s.node}</span>
                <h3 className="mt-3 text-lg font-bold sm:mt-4">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 sm:mt-10">
            {toolGroups.map((g) => (
              <div key={g.label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <p className="w-28 shrink-0 font-mono text-sm text-ink-soft">{g.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {g.tools.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-center gap-1.5 rounded-lg border border-line bg-surface py-1 pl-1 pr-2.5 text-xs font-semibold sm:gap-2 sm:py-1.5 sm:pl-1.5 sm:pr-3 sm:text-sm"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-canvas sm:h-7 sm:w-7">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/tools/${t.icon}.svg`} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>
                      {t.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Step>

        <Step id="work" marker="02" label="workflows · tap to watch">
          <Work />
          <div className="mt-6 rounded-xl border border-line bg-surface p-5">
            <p className="font-bold">Built so nothing breaks silently</p>
            <ul className="mt-3 grid gap-2 font-mono text-xs text-ink-soft sm:grid-cols-3">
              <li><span className="text-ok">✓</span> auto-retry on every API call (3×)</li>
              <li><span className="text-ok">✓</span> instant Telegram alert if a run fails</li>
              <li><span className="text-ok">✓</span> input + AI output validated in code</li>
            </ul>
          </div>
        </Step>

        <Step id="contact" marker="03" label="contact">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Doing the same task every week?</h2>
              <p className="mt-3 text-ink-soft">Let&apos;s automate it.</p>
              {profile.booking && (
                <a
                  href={profile.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-lg bg-ink px-5 py-3 font-bold text-canvas hover:bg-accent"
                >
                  Book a free 15-min call
                </a>
              )}
              <div>
                <a href={`mailto:${profile.email}`} className="mt-6 inline-block font-bold underline decoration-accent decoration-2 underline-offset-4">
                  {profile.email}
                </a>
              </div>
              <div className="mt-6">
                <Socials />
              </div>
            </div>
            <ContactForm />
          </div>
        </Step>
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 font-mono text-xs text-ink-soft sm:px-6">
        <span className="text-ok">✓</span> workflow complete · © 2026 {profile.name}
      </footer>
    </>
  );
}
