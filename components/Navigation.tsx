import Link from "next/link";
import { Laptop, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08090C]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20">
            <div className="size-full bg-[#08090C] rounded-[11px] flex items-center justify-center">
              <Laptop className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-white">LidCommit</span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              v0.2.0
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#download-hub" className="hover:text-white transition-colors text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Downloads
          </a>
          <a href="#desktop-dashboard" className="hover:text-white transition-colors">
            Desktop App
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#providers" className="hover:text-white transition-colors">
            AI Models
          </a>
          <a href="#windows-power" className="hover:text-white transition-colors text-amber-300">
            Windows Setup
          </a>
          <a href="#safety" className="hover:text-white transition-colors">
            Safety
          </a>
          <a href="#contribute" className="hover:text-white transition-colors text-rose-300">
            Contribute
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Gingaaa/lid-commit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all shadow-sm"
          >
            <GithubIcon className="size-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="size-3 text-zinc-400" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060709] py-12 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Laptop className="size-4 text-emerald-400" />
          <span className="font-semibold text-white">LidCommit v0.2.0</span>
          <span>— Open Source under MIT License © Anshu Kumar</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Gingaaa/lid-commit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub Repository
          </a>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Gemini API
          </a>
          <a
            href="https://rustup.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Rust Language
          </a>
        </div>
      </div>
    </footer>
  );
}
