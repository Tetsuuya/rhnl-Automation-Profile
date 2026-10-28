# Skills & Tools: Rhenel Jhon Sajol

**n8n Automation Builder · Full-Stack Developer**
Cagayan de Oro, Philippines · [Portfolio](https://rhnl-s.vercel.app) · [GitHub](https://github.com/Tetsuuya) · [LinkedIn](https://www.linkedin.com/in/rhenel-jhon-sajol-360275324/)

I build n8n automations that run on their own: they sort emails, research leads, read invoices, answer customers and alert your team. My full-stack background means I can write the custom code, API calls and database logic a workflow needs when the built-in nodes aren't enough.

Every skill below is used in at least one workflow you can watch running on my [portfolio](https://rhnl-s.vercel.app/#work).

---

## Automation skills

### Workflow design (n8n)
- Multi-step workflows with branching (IF / Switch), merging parallel paths, and multi-tier routing
- Triggers: webhooks, schedules, email polling (Outlook), RSS feeds, chat
- Self-hosted n8n with Docker and persistent storage
- Test runs, execution history, and turning workflows on and off safely

### AI agents & LLMs
- AI agents that call tools (order lookup, knowledge-base search, scoring, branch and diff builders)
- Conversation memory for chat agents
- Prompts that return strict JSON, then parsing and validating that output in code
- Running several AI writers in parallel and merging the results
- Escalating to a human when the AI shouldn't handle something alone

### Integrations & APIs
- REST APIs and webhooks, including APIs that have no ready-made node (HTTP Request)
- OAuth2 app setup (Microsoft Outlook through Azure)
- Telegram bots for alerts and approval cards
- Email sending (SMTP / Gmail) and email triage (Outlook)
- GitHub REST API (reading source files from repositories)
- Web scraping of company homepages for lead research

### Data handling & custom code
- JavaScript Code nodes for cleaning, normalizing and reshaping data
- Validation and guardrails: re-checking AI-extracted numbers in code (e.g. invoice line items and totals)
- Duplicate detection and simple ledger or log records
- Turning raw HTML and emails into clean, structured data

### Reliability
- Auto-retry (3×) on every API, AI and messaging step
- A shared error workflow that sends a Telegram alert with the workflow, failed node and error whenever a run fails
- Input and AI-output validation so bad data stops early instead of spreading

---

## Tools

| Category | Tools |
|---|---|
| **Automation** | n8n (self-hosted), Webhooks, Schedules, RSS |
| **AI / LLMs** | Groq, GPT-OSS 120B, Llama, Gemini, LangChain (agents, tools, memory) |
| **Messaging & email** | Telegram Bot API, Gmail / SMTP, Microsoft Outlook (Graph, OAuth2) |
| **Data & storage** | Google Sheets, PostgreSQL, MySQL, Supabase, Firebase, SQLite |
| **Dev & infra** | Docker, GitHub, Postman, Cloudflare, Microsoft Azure, Vercel, Render |
| **Languages** | JavaScript, TypeScript, Python, PHP, Java, C++, HTML, CSS |
| **Frameworks** | React, Next.js, Node.js / Express, Django, FastAPI, Flask, Laravel, CodeIgniter, Tailwind CSS |

---

## Proof: workflows I've built

Each link opens the screen recording of that workflow running.

| Workflow | What it does | Key skills |
|---|---|---|
| [Outlook AI Email Triage](https://rhnl-s.vercel.app/work/outlook-copilot) | Sorts new emails, drafts replies, alerts Telegram on urgent ones | Outlook OAuth2, Groq, Switch routing, Telegram, SMTP |
| [Lead Research Agent](https://rhnl-s.vercel.app/work/lead-agent) | Scrapes a lead's company site, scores fit 0–100, routes by tier | Webhook, web scraping, AI agent + tools, multi-tier IF routing |
| [Invoice Extractor](https://rhnl-s.vercel.app/work/invoice-extractor) | Extracts invoice data with AI, re-checks the math in code, blocks duplicates | Structured JSON extraction, code guardrails, approval flow |
| [Support Agent](https://rhnl-s.vercel.app/work/support-agent) | Chat agent that answers with real order data and escalates upset customers | Chat trigger, AI agent, memory, tool calling, escalation |
| [Content Repurposing](https://rhnl-s.vercel.app/work/content-engine) | Turns one article into LinkedIn, X and blog drafts for review | RSS, parallel AI writers, Merge, Telegram review card |
| [DevOps Incident Agent](https://rhnl-s.vercel.app/work/devops-agent) | Reads the crashing file from GitHub, finds the root cause, proposes a patch | Error webhook, GitHub API, AI agent with tools, Telegram alert |

All six share the same error-alert workflow and retry setup described under **Reliability**.

---

## Development background

- **Education:** BS Computer Science, University of Science and Technology of Southern Philippines (2023–present), Dean's Lister
- **Experience:** Software Developer Intern, Cerebrox Information Technology Solutions (Jun–Aug 2026), working on a production School Management System (PHP / CodeIgniter, MySQL, JavaScript)
- **Freelance & independent work (2024–present):** web apps and booking systems with React, Next.js and Supabase, plus API servers with Stripe payments, webhook pipelines and Cloudflare R2 storage
- **Certification:** Level 1 – Test of Practical Competency in IT (2024)

---

## Contact

📧 sajol.rhenel123@gmail.com · 🌐 [rhnl-s.vercel.app](https://rhnl-s.vercel.app)
