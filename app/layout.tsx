import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lid-commit-web.netlify.app"),
  title: "LidCommit — Auto-commit when you close your laptop lid",
  description: "Never lose progress again. LidCommit detects native lid close events, scans active IDE repos, drafts semantic AI commit messages with Gemini or Ollama, and safely pushes to GitHub.",
  keywords: ["git", "auto-commit", "rust", "developer tools", "gemini", "ollama", "github", "ide", "laptop-lid"],
  authors: [{ name: "Anshu Kumar", url: "https://github.com/Gingaaa" }],
  icons: {
    icon: [
      { url: "/lidcommit-icon.png" },
      { url: "/favicon.png" },
    ],
    apple: "/lidcommit-icon.png",
  },
  openGraph: {
    title: "LidCommit — Auto-commit when you close your laptop lid",
    description: "Zero lost progress. Native OS lid detection, IDE-aware diff scanning, Gemini AI commit messages, and automated Git sync.",
    url: "https://lid-commit-web.netlify.app",
    siteName: "LidCommit",
    images: [
      {
        url: "/lidcommit-icon.png",
        width: 1024,
        height: 1024,
        alt: "LidCommit App Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LidCommit — Auto-commit when you close your laptop lid",
    description: "Zero lost progress. Native OS lid detection, IDE-aware diff scanning, Gemini AI commit messages, and automated Git sync.",
    images: ["/lidcommit-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full w-full overflow-x-hidden dark antialiased selection:bg-emerald-500/30 selection:text-emerald-300", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full w-full overflow-x-hidden flex flex-col bg-[#08090C] text-[#F3F4F6]">{children}</body>
    </html>
  );
}
