# Rhenel's Automation Portfolio

Next.js site. Full list of my automation skills and tools: [SKILLS.md](SKILLS.md). Run `npm run dev` and open http://localhost:3000.

## Editing content

- **Your info, services, tools, socials:** `src/data/site.ts`
- **Workflows and projects:** `src/data/work.ts`

## Adding a workflow sample

1. Put a screenshot of the n8n canvas (`.png`) or a screen recording (`.mp4`) in `public/workflows/`.
2. Add an entry to `work` in `src/data/work.ts` and set `media`:
   - `{ type: "image", src: "/workflows/my-flow.png" }`
   - `{ type: "video", src: "/workflows/my-flow.mp4" }`
   - `{ type: "youtube", id: "VIDEO_ID" }`

If you leave out `media`, the card draws a simple node diagram from `nodes`.
