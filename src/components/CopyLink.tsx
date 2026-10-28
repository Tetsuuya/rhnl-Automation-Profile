"use client";

import { useState } from "react";

// Copies the absolute URL of `path` on this site.
export default function CopyLink({ path, className = "" }: { path: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.origin + path);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link:", window.location.origin + path);
    }
  }

  return (
    <button onClick={copy} className={className}>
      {copied ? "✓ link copied" : "copy link"}
    </button>
  );
}
