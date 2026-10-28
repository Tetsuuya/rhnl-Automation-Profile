// Add or edit your automations here.
//
// media (optional) — what shows in the card and the viewer:
//   { type: "image", src: "/workflows/lead-agent.png" }   screenshot in /public/workflows
//   { type: "video", src: "/workflows/lead-agent.mp4" }   screen recording in /public/workflows
//   { type: "youtube", id: "VIDEO_ID" }                    YouTube video id
// Without media, the card draws a simple flow diagram from `nodes`.

export type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "youtube"; id: string };

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  result: string;
  // "before" is a typical by-hand estimate; "after" is the measured n8n run time
  before: string;
  after: string;
  nodes: string[];
  steps?: string[];
  media?: Media;
};

export const work: WorkItem[] = [
  {
    slug: "outlook-copilot",
    title: "Outlook AI Email Triage",
    summary: "Sorts the inbox, drafts replies, pings Telegram on urgent mail.",
    problem: "Sorting the inbox and writing replies eats hours every day.",
    result: "Every email is sorted with a reply drafted, and urgent ones reach your phone instantly.",
    before: "~5 min per email",
    after: "10s",
    nodes: ["Outlook", "Code", "Groq", "Switch", "Telegram"],
    steps: [
      "New email arrives in Outlook",
      "HTML is cleaned and key details extracted",
      "Groq scores urgency and drafts a reply",
      "Urgent mail triggers a Telegram alert",
    ],
    media: { type: "video", src: "/workflows/outlook-triage.mp4", poster: "/workflows/outlook-triage.jpg" },
  },
  {
    slug: "lead-agent",
    title: "Lead Research Agent",
    summary: "Scrapes a lead's company site, scores fit 0–100, routes by tier.",
    problem: "Researching each lead and writing a personal email takes so long that hot leads go cold.",
    result: "Every lead is researched, scored and emailed in seconds. VIP leads ping Telegram.",
    before: "~20 min per lead",
    after: "16s",
    nodes: ["Webhook", "HTTP", "AI Agent", "IF", "Telegram"],
    steps: [
      "Lead comes in through a webhook",
      "Company homepage is scraped for context",
      "AI agent scores the lead and writes an icebreaker",
      "Hot leads go to Telegram and get an email",
    ],
    media: { type: "video", src: "/workflows/lead-agent.mp4", poster: "/workflows/lead-agent.jpg" },
  },
  {
    slug: "invoice-extractor",
    title: "Invoice Extractor",
    summary: "Reads invoices with AI, double-checks the math in code, blocks duplicates.",
    problem: "Typing invoices into the books is slow, and AI alone can't be trusted with money.",
    result: "Math is re-checked in code, duplicates are blocked, and nothing is paid without approval.",
    before: "~5 min per invoice",
    after: "3s",
    nodes: ["Webhook", "Groq", "Code", "IF", "Telegram"],
    steps: [
      "Invoice text comes in through a webhook",
      "AI pulls out vendor, line items, tax and total",
      "Code re-calculates every line so AI mistakes can't slip through",
      "Duplicates are blocked, clean invoices go to Telegram for approval",
    ],
    media: { type: "video", src: "/workflows/invoice-extractor.mp4", poster: "/workflows/invoice-extractor.jpg" },
  },
  {
    slug: "support-agent",
    title: "Support Agent",
    summary: "Chat agent that checks real order data and escalates angry customers.",
    problem: "Customers wait hours for answers to the same few questions.",
    result: "Instant answers using real order data. Upset customers go straight to a human.",
    before: "hours to first reply",
    after: "2s",
    nodes: ["Chat", "AI Agent", "Memory", "Tools", "Telegram"],
    steps: [
      "Customer sends a message in chat",
      "Agent searches the help center and looks up the order",
      "Replies with real order details",
      "Frustrated customers get flagged to a human on Telegram",
    ],
    media: { type: "video", src: "/workflows/support-agent.mp4", poster: "/workflows/support-agent.jpg" },
  },
  {
    slug: "content-engine",
    title: "Content Repurposing",
    summary: "Turns one blog post into a LinkedIn post, X thread and blog draft.",
    problem: "Turning one article into posts for every platform takes a whole afternoon.",
    result: "LinkedIn, X and blog drafts are ready for review every morning.",
    before: "~1.5 hrs per article",
    after: "13s",
    nodes: ["Schedule", "RSS", "Groq", "Merge", "Telegram"],
    steps: [
      "Runs daily and grabs the newest article from an RSS feed",
      "AI pulls the key insights",
      "Three writers run in parallel: LinkedIn, X thread, blog",
      "Everything lands in Telegram as one review card",
    ],
    media: { type: "video", src: "/workflows/content-engine.mp4", poster: "/workflows/content-engine.jpg" },
  },
  {
    slug: "devops-agent",
    title: "DevOps Incident Agent",
    summary: "Reads the crashing code on GitHub, finds the bug, proposes a patch.",
    problem: "When production breaks, users are stuck while someone digs for the bug.",
    result: "Root cause and a ready-to-review patch arrive in Telegram within seconds.",
    before: "~45 min to diagnose",
    after: "6s",
    nodes: ["Webhook", "GitHub API", "AI Agent", "Code", "Telegram"],
    steps: [
      "Error report comes in from Sentry",
      "Fetches the real source file from GitHub",
      "AI agent finds the root cause and writes a fix as a diff",
      "Incident alert with the patch goes to Telegram",
    ],
    media: { type: "video", src: "/workflows/devops-agent.mp4", poster: "/workflows/devops-agent.jpg" },
  },
];
