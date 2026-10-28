"use client";

import { profile } from "@/data/site";

// No backend: opens the visitor's mail app with the message filled in.
export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = new FormData(e.currentTarget).get("message");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Automation inquiry")}&body=${encodeURIComponent(String(message))}`;
  }

  return (
    <form onSubmit={onSubmit} className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="border-b border-line px-4 py-2 font-mono text-xs text-ink-soft">webhook · new message</div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What do you want to automate?"
        className="block w-full resize-none bg-transparent px-4 py-3 outline-none placeholder:text-muted"
      />
      <div className="flex justify-end px-3 pb-3">
        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:brightness-95"
        >
          Execute ▸
        </button>
      </div>
    </form>
  );
}
