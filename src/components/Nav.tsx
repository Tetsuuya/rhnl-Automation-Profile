"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "services", label: "services" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          rhenel<span className="text-accent">.s</span>
        </a>
        <ul className="flex gap-5 font-mono text-xs sm:gap-8 sm:text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "text-accent" : "text-ink-soft hover:text-ink"}>
                {active === l.id ? "● " : ""}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
