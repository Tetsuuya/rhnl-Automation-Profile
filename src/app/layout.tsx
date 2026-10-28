import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhenel.s | n8n Automation",
  description: "n8n workflow automation by Rhenel Jhon Sajol.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
