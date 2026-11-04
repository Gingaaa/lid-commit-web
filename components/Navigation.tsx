"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Download, Monitor, Zap, Sparkles, AlertTriangle, ShieldAlert, Heart } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#download-hub", label: "Downloads", highlight: "emerald", icon: Download },
    { href: "#desktop-dashboard", label: "Desktop App", highlight: "default", icon: Monitor },
    { href: "#how-it-works", label: "How It Works", highlight: "default", icon: Zap },
    { href: "#providers", label: "AI Models", highlight: "default", icon: Sparkles },
    { href: "#windows-power", label: "Windows Setup", highlight: "amber", icon: AlertTriangle },
    { href: "#safety", label: "Safety", highlight: "default", icon: ShieldAlert },
    { href: "#contribute", label: "Contribute", highlight: "rose", icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08090C]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="size-9 rounded-xl overflow-hidden border border-emerald-500/30 p-0.5 shadow-lg shadow-emerald-500/20 bg-[#08090C] group-hover:border-emerald-400 transition-all duration-200">
            <Image
              src="/lidcommit-icon.png"
              alt="LidCommit Icon"
              width={36}
              height={36}
              className="size-full rounded-[9px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              LidCommit
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              v0.2.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation links (hidden below lg breakpoint) */}
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

        {/* Right side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/Gingaaa/lid-commit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all shadow-sm"
          >
            <GithubIcon className="size-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="size-3 text-zinc-400" />
          </a>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#08090C]/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    link.highlight === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold"
                      : link.highlight === "amber"
                      ? "text-amber-300 hover:bg-white/5"
                      : link.highlight === "rose"
                      ? "text-rose-300 hover:bg-white/5"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="size-4 opacity-80" />
                    <span>{link.label}</span>
                  </span>
                  {link.highlight === "emerald" && (
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </a>
              );
            })}

            <div className="pt-2 border-t border-white/5">
              <a
                href="https://github.com/Gingaaa/lid-commit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold"
              >
                <GithubIcon className="size-4" />
                <span>View Star History on GitHub</span>
                <ArrowUpRight className="size-3 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060709] py-10 md:py-12 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2.5 text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-md overflow-hidden border border-emerald-500/30 shrink-0">
              <Image
                src="/lidcommit-icon.png"
                alt="LidCommit Icon"
                width={20}
                height={20}
                className="size-full object-cover"
              />
            </div>
            <span className="font-semibold text-white">LidCommit v0.2.0</span>
          </div>
          <span className="text-zinc-500 hidden sm:inline">&bull;</span>
          <span>Open Source under MIT License © Anshu Kumar</span>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
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
