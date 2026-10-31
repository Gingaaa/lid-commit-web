"use client";

import { useState } from "react";
import { 
  Download, 
  Monitor, 
  Apple, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Package, 
  ExternalLink,
  Layers,
  ChevronRight
} from "lucide-react";

export function DownloadHub() {
  const [os, setOs] = useState<"windows" | "macos" | "linux" | "source">("windows");

  return (
    <div id="download-hub" className="relative rounded-3xl border border-white/10 bg-[#0E1017]/90 p-6 md:p-12 backdrop-blur-2xl overflow-hidden shadow-2xl">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Package className="size-3.5" />
            <span>Zero-Compiling Required &bull; v0.2.0 Released</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Download LidCommit
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            Installs just like any standard modern desktop app. No Rust toolchain, terminal commands, or manual compiling needed for end users.
          </p>
        </div>

        {/* Operating System Picker Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-black/60 rounded-2xl border border-white/10 self-start lg:self-auto">
          <button
            onClick={() => setOs("windows")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              os === "windows"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Monitor className="size-4" />
            <span>Windows (Setup .exe)</span>
          </button>
          <button
            onClick={() => setOs("macos")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              os === "macos"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Apple className="size-4" />
            <span>macOS (Silicon / Intel)</span>
          </button>
          <button
            onClick={() => setOs("linux")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              os === "linux"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="size-4" />
            <span>Linux (Binary)</span>
          </button>
          <button
            onClick={() => setOs("source")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              os === "source"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Terminal className="size-4" />
            <span>Source Code</span>
          </button>
        </div>
      </div>

      {/* OS Tab Content with Animated Transitions */}
      <div className="mt-8 transition-all duration-300">
        {/* WINDOWS TAB */}
        {os === "windows" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Download Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] via-emerald-500/[0.02] to-transparent border border-emerald-500/30 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Sparkles className="size-3.5" />
                    Recommended Windows Install
                  </div>
                  <span className="text-xs font-mono text-zinc-400">Windows 10 / 11 (64-bit)</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    LidCommit 1-Click Setup Wizard
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1.5 leading-relaxed">
                    Double-click and run. Installs cleanly to <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded text-xs">%LocalAppData%\Programs\LidCommit</code> with automatic Start Menu and Desktop shortcuts.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="https://github.com/Gingaaa/lid-commit/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="size-5" />
                    <span>Download LidCommit-Setup-x86_64.exe</span>
                  </a>

                  <a
                    href="https://github.com/Gingaaa/lid-commit/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all"
                  >
                    <span>Portable .zip archive</span>
                    <ExternalLink className="size-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Setup Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Start Menu &amp; Tray</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">Docks straight into your system tray on launch.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Auto-Launch Option</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">Optional startup protection enabled in 1 checkbox.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Clean Uninstaller</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">Standard removal via Windows Settings / Apps.</p>
                </div>
              </div>
            </div>

            {/* Inno Setup Visual Graphic Mock */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#07090E] p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 text-xs">
                <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                  <Monitor className="size-3.5 text-emerald-400" />
                  LidCommit Setup Wizard
                </span>
                <span className="text-[10px] text-zinc-500">Inno Setup 6</span>
              </div>

              <div className="py-6 space-y-4 font-mono text-xs text-zinc-300">
                <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Package className="size-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Installing LidCommit v0.2.0</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Ready to configure auto-commit &amp; desktop tray.</p>
                </div>

                <div className="space-y-2 text-[11px] text-zinc-400 bg-black/50 p-3.5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                    <span>Destination: %LocalAppData%\Programs\LidCommit</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-200">
                    <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                    <span>Created: Desktop &amp; Start Menu Shortcuts</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-200">
                    <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                    <span>Configured: Native Webview2 GUI &amp; Tray Icon</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2 text-xs">
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-400">Cancel</span>
                  <span className="px-4 py-1 rounded bg-emerald-500 font-bold text-black shadow-sm">Finish</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MACOS TAB */}
        {os === "macos" && (
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Apple className="size-5 text-zinc-300" />
                  macOS Pre-Compiled Release
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Compatible with Apple Silicon (M1/M2/M3/M4) and Intel Macs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Gingaaa/lid-commit/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <Download className="size-4" />
                  <span>Apple Silicon (aarch64)</span>
                </a>
                <a
                  href="https://github.com/Gingaaa/lid-commit/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all flex items-center gap-2"
                >
                  <Download className="size-4" />
                  <span>Intel (x86_64)</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-[#080A0E] border border-white/5 p-4 font-mono text-xs text-zinc-300">
              <p className="text-zinc-500 mb-2"># Quick Terminal Extraction &amp; Install:</p>
              <pre className="overflow-x-auto text-emerald-300">
{`tar -xvf lid-commit-macos-*.tar.gz
sudo mv lid-commit /usr/local/bin/
lid-commit`}
              </pre>
            </div>
          </div>
        )}

        {/* LINUX TAB */}
        {os === "linux" && (
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="size-5 text-zinc-300" />
                  Linux Pre-Compiled Binary
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Built with D-Bus and OpenSSL support for Ubuntu, Debian, Fedora, Arch, and more.
                </p>
              </div>

              <a
                href="https://github.com/Gingaaa/lid-commit/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md flex items-center gap-2 self-start md:self-auto"
              >
                <Download className="size-4" />
                <span>Download lid-commit-linux-x86_64.tar.gz</span>
              </a>
            </div>

            <div className="rounded-xl bg-[#080A0E] border border-white/5 p-4 font-mono text-xs text-zinc-300">
              <p className="text-zinc-500 mb-2"># Extract and place in PATH:</p>
              <pre className="overflow-x-auto text-emerald-300">
{`tar -xvf lid-commit-linux-x86_64.tar.gz
sudo mv lid-commit /usr/local/bin/
# (Optional: enable as systemd user service)`}
              </pre>
            </div>
          </div>
        )}

        {/* SOURCE CODE TAB */}
        {os === "source" && (
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Terminal className="size-5 text-emerald-400" />
                  Build from Source (Developers &amp; Contributors)
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Requires Rust toolchain (v1.75+). Open source and contributions welcome!
                </p>
              </div>

              <a
                href="https://github.com/Gingaaa/lid-commit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all flex items-center gap-2 self-start md:self-auto"
              >
                <ExternalLink className="size-4" />
                <span>GitHub Repository</span>
              </a>
            </div>

            <div className="rounded-xl bg-[#080A0E] border border-white/5 p-4 font-mono text-xs text-zinc-300">
              <pre className="overflow-x-auto text-emerald-300 leading-relaxed">
{`git clone https://github.com/Gingaaa/lid-commit.git
cd lid-commit
cargo build --release

# Run GUI:
./target/release/lid-commit

# Build Windows Inno Setup installer:
iscc installer.iss`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
