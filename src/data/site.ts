export const profile = {
  name: "Rhenel Jhon Sajol",
  email: "sajol.rhenel123@gmail.com",
  photo: "/profile.jpg",
  // Paste your Calendly (or similar) link here to show a "Book a call" button
  booking: "",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Tetsuuya", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rhenel-jhon-sajol-360275324/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/rhnl.s/", icon: "instagram" },
] as const;

// icon: file in /public/tools (omit to show a letter badge)
export const toolGroups = [
  {
    label: "ai / llms",
    tools: [
      { name: "Groq", icon: "groq" },
      { name: "GPT-OSS", icon: "openai" },
      { name: "Llama", icon: "meta" },
      { name: "Gemini", icon: "gemini-color" },
      { name: "LangChain", icon: "langchain" },
    ],
  },
  {
    label: "automation",
    tools: [
      { name: "n8n", icon: "n8n" },
      { name: "Telegram", icon: "telegram" },
      { name: "Gmail", icon: "gmail" },
      { name: "Outlook", icon: "outlook" },
      { name: "Google Sheets", icon: "googlesheets" },
    ],
  },
  {
    label: "dev & infra",
    tools: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "React", icon: "react" },
    ],
  },
];

export const services = [
  { node: "Schedule", title: "Automate the routine", body: "Reports, follow-ups, data entry. Done on time, every time." },
  { node: "HTTP", title: "Connect your apps", body: "Gmail, Outlook, Sheets, CRMs, Telegram, any API." },
  { node: "AI Agent", title: "Add a brain", body: "Agents that sort, score and reply for you." },
];
