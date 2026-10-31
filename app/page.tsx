import Link from "next/link";
import { Navbar, Footer } from "@/components/Navigation";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { ConfigSection } from "@/components/ConfigSection";
import { DesktopDashboardShowcase } from "@/components/DesktopDashboardShowcase";
import { DownloadHub } from "@/components/DownloadHub";
import { AIProviderSelector } from "@/components/AIProviderSelector";
import { ContributionSection } from "@/components/ContributionSection";
import { ViewportReveal } from "@/components/ViewportReveal";
import {
  Laptop,
  GitCommit,
  GitPullRequest,
  ShieldAlert,
  Terminal,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  BellRing,
  Cpu,
  Monitor,
  FolderGit2,
  Play,
  Pause,
  AlertTriangle,
  Clock,
  Download,
  Package,
  Heart
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090C] text-[#F3F4F6] relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute top-[800px] -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1800px] -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24 md:space-y-32">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        <section className="flex flex-col items-center text-center space-y-8 pt-4 md:pt-10">
          {/* Pill Badge with Pulse */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-zinc-300 shadow-inner hover:border-emerald-500/40 transition-colors cursor-default">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>v0.2.0 Released &bull; 1-Click Windows Setup &bull; Native Desktop GUI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
            Close your laptop lid. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Your code is already committed.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
            Never lose progress again. <strong className="text-zinc-200">LidCommit</strong> sits in your system tray and monitors active IDE workspaces. When you close your laptop, it synthesizes AI commit messages, commits your diff, and pushes directly to GitHub.
          </p>

          {/* CTA Buttons with Hover Micro-Animations */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#download-hub"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download className="size-4" />
              <span>Download for Windows (Setup .exe)</span>
            </a>

            <a
              href="#desktop-dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 hover:border-white/25 hover:scale-[1.02]"
            >
              <Monitor className="size-4 text-emerald-400" />
              <span>Explore Desktop GUI</span>
            </a>

            <a
              href="https://github.com/Gingaaa/lid-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 hover:border-white/25 hover:scale-[1.02]"
            >
              <GithubIcon className="size-4" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Hero Feature Highlights with Interactive Hover Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl pt-4 text-left">
            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover-card-glow cursor-default">
              <div className="text-xs font-semibold text-white flex items-center gap-2 mb-1">
                <Monitor className="size-3.5 text-emerald-400" />
                <span>Desktop GUI</span>
              </div>
              <p className="text-[11px] text-zinc-400">Tray app with pause toggles &amp; activity history.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover-card-glow cursor-default">
              <div className="text-xs font-semibold text-white flex items-center gap-2 mb-1">
                <Pause className="size-3.5 text-amber-400" />
                <span>Per-Project Pause</span>
              </div>
              <p className="text-[11px] text-zinc-400">Selectively skip repos from auto-committing.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover-card-glow cursor-default">
              <div className="text-xs font-semibold text-white flex items-center gap-2 mb-1">
                <Zap className="size-3.5 text-cyan-400" />
                <span>Instant Sync Now</span>
              </div>
              <p className="text-[11px] text-zinc-400">Commit and push on-demand without closing lid.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover-card-glow cursor-default">
              <div className="text-xs font-semibold text-white flex items-center gap-2 mb-1">
                <Clock className="size-3.5 text-purple-400" />
                <span>Zero-Config Fallback</span>
              </div>
              <p className="text-[11px] text-zinc-400">Clean auto-save timestamps if offline or no key.</p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. EASY DOWNLOAD HUB (PRIMARY 1-CLICK INSTALLATION) */}
        {/* ========================================================= */}
        <ViewportReveal>
          <DownloadHub />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 3. NATIVE DESKTOP DASHBOARD SHOWCASE */}
        {/* ========================================================= */}
        <ViewportReveal>
          <DesktopDashboardShowcase />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 4. CRUCIAL WINDOWS POWER SETTING WALKTHROUGH */}
        {/* ========================================================= */}
        <ViewportReveal id="windows-power" className="scroll-mt-24">
          <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/[0.07] via-amber-500/[0.03] to-transparent p-6 md:p-10 relative overflow-hidden hover-card-glow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <AlertTriangle className="size-3.5" />
                  Crucial Windows 10/11 Setup
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Configure &quot;When I close the lid&quot; to &quot;Do nothing&quot;
                </h3>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                  To allow LidCommit to inspect your repositories, stage changes, query Gemini/Ollama, and push to GitHub while the lid is shut, Windows must not abruptly sever the network card and sleep the CPU mid-push.
                </p>
                <div className="space-y-2.5 pt-2 text-xs text-zinc-300 font-mono">
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">1.</span>
                    <span>Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white font-sans">Win + R</kbd>, type <code className="text-amber-300">control</code>, and press Enter.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">2.</span>
                    <span>Open <strong className="text-white">Power Options</strong> &gt; Click <strong className="text-white">&quot;Choose what closing the lid does&quot;</strong> in the left sidebar.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">3.</span>
                    <span>Set both <strong className="text-white">On battery</strong> and <strong className="text-white">Plugged in</strong> to <span className="text-emerald-400 font-bold">&quot;Do nothing&quot;</span> and click Save changes.</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300 space-y-3 shrink-0 lg:max-w-md shadow-xl">
                <div className="text-[11px] text-zinc-400 uppercase tracking-wide border-b border-white/5 pb-2 flex items-center justify-between">
                  <span>Power Setting Summary</span>
                  <span className="text-emerald-400 font-semibold">Ready for Sync</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">Lid Close Action:</span>
                  <span className="text-emerald-400 font-bold">Do Nothing</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">Display:</span>
                  <span className="text-zinc-200">Turns Off Safely</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">Wi-Fi &amp; Git Sync:</span>
                  <span className="text-emerald-400">Uninterrupted</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">LidCommit Event:</span>
                  <span className="text-cyan-400 font-bold">WM_POWERBROADCAST</span>
                </div>
              </div>
            </div>
          </div>
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 5. INTERACTIVE COMMIT PLAYGROUND */}
        {/* ========================================================= */}
        <ViewportReveal id="demo" className="scroll-mt-24">
          <InteractiveDemo />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 6. HOW IT WORKS - 4 STEP ARCHITECTURE PIPELINE */}
        {/* ========================================================= */}
        <ViewportReveal id="how-it-works" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Zap className="size-3.5" />
              Autonomous Pipeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              How LidCommit works under the hood
            </h2>
            <p className="text-sm text-zinc-400">
              A frictionless zero-click automation that turns your physical laptop lid motion into git commits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover-card-glow group">
              <div>
                <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <Laptop className="size-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">Step 01</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">Native Hardware Event</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Listens to OS-level lid close broadcasts (<code className="text-zinc-200">WM_POWERBROADCAST</code>, <code className="text-zinc-200">IOKit</code>, or <code className="text-zinc-200">logind D-Bus</code>). No background battery drain.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover-card-glow group">
              <div>
                <div className="size-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  <FolderGit2 className="size-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">Step 02</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">IDE &amp; Git Discovery</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Scans open IDE processes (VS Code, Cursor, JetBrains, active terminals) and identifies every dirty working tree with uncommitted modifications.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover-card-glow group">
              <div>
                <div className="size-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Sparkles className="size-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-purple-400 uppercase tracking-wider">Step 03</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">AI Diff Synthesis</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Extracts your staged &amp; unstaged diff and prompts Gemini (or local Ollama) to draft an informative conventional commit summary.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover-card-glow group">
              <div>
                <div className="size-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <GitPullRequest className="size-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider">Step 04</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">Auto Commit &amp; Push</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Safely commits and pushes to your current active branch, and triggers an OS notification so you know your work is secured in the cloud.
                </p>
              </div>
            </div>
          </div>
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 7. DYNAMIC AI PROVIDERS & FALLBACK SELECTOR */}
        {/* ========================================================= */}
        <ViewportReveal id="providers" className="scroll-mt-24">
          <AIProviderSelector />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 8. SAFETY GUARDS - BUILT FOR DEVELOPER TRUST */}
        {/* ========================================================= */}
        <ViewportReveal id="safety" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <ShieldAlert className="size-3.5" />
              Rock-Solid Safeguards
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Engineered so it never breaks your git history
            </h2>
            <p className="text-sm text-zinc-400">
              Auto-committers can feel risky without strict boundaries. LidCommit includes comprehensive safety guards that guarantee safe operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Clean Working Tree Check</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If no files are modified, deleted, or staged, LidCommit silently skips the repo. Zero empty commits created.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">50+ Files Guard</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Forgot to add <code className="text-zinc-200">node_modules</code> or <code className="text-zinc-200">target/</code> to <code className="text-zinc-200">.gitignore</code>? Any diff above 50 files is automatically skipped to prevent accidental bloat.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Lock className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Merge Conflict Immunity</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If your repo is currently resolving a merge conflict or interactive rebase, LidCommit aborts immediately to protect your conflict markers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <GitPullRequest className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Remote Verification</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Only pushes if a valid git remote URL is configured upstream. If you are working on a pure local sandbox, it protects your setup.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <Layers className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Custom Excluded Paths</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Add sensitive repositories, secret vaults, or experimental directories to your <code className="text-zinc-200">config.toml</code> to permanently blacklist them.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3 hover-card-glow">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-teal-400">
                  <BellRing className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Loop Prevention &amp; Alerts</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Integrated debounce monitors prevent duplicate runs and verify that notifications fire accurately once per lid cycle.
              </p>
            </div>
          </div>
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 9. CONFIGURATION TOML REFERENCE */}
        {/* ========================================================= */}
        <ViewportReveal id="configuration" className="scroll-mt-24">
          <ConfigSection />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 10. ARCHITECTURE BREAKDOWN */}
        {/* ========================================================= */}
        <ViewportReveal id="architecture" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Layers className="size-3.5" />
              Rust Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Minimal footprint. Maximum reliability.
            </h2>
            <p className="text-sm text-zinc-400">
              Modular Rust code structure built for stability, zero panics, and effortless cross-platform support.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0C0E14] p-6 md:p-8 font-mono text-xs text-zinc-300 overflow-x-auto hover-card-glow">
            <pre className="leading-relaxed">
{`src/
├── main.rs              — Daemon entry point, event loop & manual sync handlers
├── gui.rs               — Native desktop window, system tray, and IPC controller
├── dashboard.html       — Modern dark-mode dashboard UI & frontend logic
├── config.rs            — TOML config parser, serializer & fallback defaults
├── lid_monitor/mod.rs   — Native OS lid close listener
│     ├── Windows:        WM_POWERBROADCAST + GUID_LIDSWITCH_STATE_CHANGE
│     ├── macOS:          IOKit kIOMessageSystemWillSleep hook
│     └── Linux:          logind D-Bus PrepareForSleep signal
├── ide_scanner/mod.rs   — Detects active VS Code, JetBrains, Cursor & terminal git roots
├── git/mod.rs           — git status, diff parser, stage, commit & push engine
├── ai/mod.rs            — Multi-provider interface (Gemini / OpenAI / Ollama + Fallback)
└── notifier.rs          — Cross-platform native OS notifications & wake-up dialogs`}
            </pre>
          </div>
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 11. OPEN SOURCE COMMUNITY & CONTRIBUTION */}
        {/* ========================================================= */}
        <ViewportReveal id="contribute" className="scroll-mt-24">
          <ContributionSection />
        </ViewportReveal>

        {/* ========================================================= */}
        {/* 12. FINAL CALL TO ACTION */}
        {/* ========================================================= */}
        <ViewportReveal>
          <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 p-8 md:p-14 text-center space-y-6 relative overflow-hidden hover-card-glow">
            <div className="size-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <Laptop className="size-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Stop worrying about manual commits before you leave.
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed">
              Close your laptop, walk out the door, and pull down your work on your next device. Start using LidCommit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#download-hub"
                className="px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.03] active:scale-[0.98]"
              >
                Download LidCommit
              </a>
              <a
                href="https://github.com/Gingaaa/lid-commit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2 hover:border-white/20 hover:scale-[1.02]"
              >
                <GithubIcon className="size-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </section>
        </ViewportReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
