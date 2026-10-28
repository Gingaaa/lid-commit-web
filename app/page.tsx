import Link from "next/link";
import { Navbar, Footer } from "@/components/Navigation";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { InstallationGuide } from "@/components/InstallationGuide";
import { ConfigSection } from "@/components/ConfigSection";
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
  ChevronRight,
  Eye,
  FileCode,
  FolderGit2
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090C] text-[#F3F4F6] relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Gradients & Glows all */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1600px] -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-28 md:space-y-36">
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="flex flex-col items-center text-center space-y-8 pt-4 md:pt-10">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-zinc-300 shadow-inner">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Built with Rust &bull; Native Hardware Lid Interrupts</span>
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
            Never lose progress again. <strong className="text-zinc-200">LidCommit</strong> runs silently as a native daemon. When you close your laptop, it detects open IDE projects, generates AI commit messages using your actual git diffs, and safely pushes to GitHub.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#installation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
            >
              <span>Install LidCommit</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="https://github.com/Gingaaa/lid-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all hover:border-white/20"
            >
              <GithubIcon className="size-4" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Hero Laptop Animation / Command Banner */}
          <div className="w-full max-w-4xl pt-6">
            <div className="rounded-2xl border border-white/10 bg-[#0C0E14] shadow-2xl p-4 sm:p-6 text-left font-mono text-xs text-zinc-300 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-zinc-500 text-[11px]">daemon &bull; lidcommit-service</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Lid Event Triggered
                </span>
              </div>

              <div className="pt-4 space-y-2.5 leading-relaxed text-zinc-400">
                <p className="text-zinc-500"># Native OS lid close interrupt captured (0% idle CPU polling)</p>
                <p className="text-cyan-400">
                  [17:34:02] <span className="text-zinc-300">INFO</span> Lid closed detected via <span className="text-zinc-100">WM_POWERBROADCAST</span>
                </p>
                <p className="text-cyan-400">
                  [17:34:02] <span className="text-zinc-300">INFO</span> Scanning active processes: <span className="text-emerald-400">Code.exe (VS Code)</span>, <span className="text-emerald-400">rust-analyzer</span>
                </p>
                <p className="text-cyan-400">
                  [17:34:03] <span className="text-zinc-300">INFO</span> Found uncommitted changes in: <span className="text-zinc-200">F:/Open Source/lid-commit</span> (2 files changed)
                </p>
                <p className="text-amber-400">
                  [17:34:03] <span className="text-zinc-300">INFO</span> Calling Gemini 2.0 Flash to synthesize diff...
                </p>
                <p className="text-emerald-400 bg-emerald-500/[0.08] p-2 rounded border border-emerald-500/20 font-semibold">
                  &gt; git commit -m &quot;🔒 lid-close: optimize process scan and prevent loop notifications&quot;
                </p>
                <p className="text-cyan-400">
                  [17:34:04] <span className="text-zinc-300">INFO</span> Pushed successfully to <span className="text-white font-bold">origin/main</span>. Desktop notification delivered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* INTERACTIVE DEMO PLAYGROUND */}
        {/* ========================================================= */}
        <section id="demo" className="scroll-mt-24">
          <InteractiveDemo />
        </section>

        {/* ========================================================= */}
        {/* HOW IT WORKS - 4 STEP ARCHITECTURE PIPELINE */}
        {/* ========================================================= */}
        <section id="how-it-works" className="scroll-mt-24 space-y-12">
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
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
              <div>
                <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-5 group-hover:scale-110 transition-transform">
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
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
              <div>
                <div className="size-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-5 group-hover:scale-110 transition-transform">
                  <FolderGit2 className="size-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">Step 02</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">IDE &amp; Git Discovery</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Scans open IDE processes (VS Code, JetBrains, active terminals) and identifies every dirty working tree with uncommitted modifications.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
              <div>
                <div className="size-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-5 group-hover:scale-110 transition-transform">
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
            <div className="rounded-2xl border border-white/10 bg-[#0E1017] p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
              <div>
                <div className="size-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold mb-5 group-hover:scale-110 transition-transform">
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
        </section>

        {/* ========================================================= */}
        {/* SAFETY GUARDS - BUILT FOR DEVELOPER TRUST */}
        {/* ========================================================= */}
        <section id="safety" className="scroll-mt-24 space-y-10">
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
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-3">
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
        </section>

        {/* ========================================================= */}
        {/* AI PROVIDERS MATRIX */}
        {/* ========================================================= */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Cpu className="size-3.5" />
              Model Flexibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Choose your favorite AI model
            </h2>
            <p className="text-sm text-zinc-400">
              Power your commit synthesis with cloud speed or 100% private local offline inference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gemini */}
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/[0.08] to-[#0E1017] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Default Provider
                </span>
                <span className="text-[11px] font-mono text-zinc-400">Free Tier Ready</span>
              </div>
              <h3 className="text-xl font-bold text-white">Google Gemini</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Blazing fast response times using <code className="text-zinc-200">gemini-2.0-flash</code> or <code className="text-zinc-200">gemini-1.5-pro</code>. Generates high-accuracy commit messages even on complex multi-file diffs.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/5">
                Requires: <span className="text-emerald-400">GEMINI_API_KEY</span>
              </div>
            </div>

            {/* OpenAI */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                  Supported
                </span>
                <span className="text-[11px] font-mono text-zinc-400">Standard API</span>
              </div>
              <h3 className="text-xl font-bold text-white">OpenAI</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Seamlessly connects to <code className="text-zinc-200">gpt-4o-mini</code> or <code className="text-zinc-200">gpt-4o</code> for developers who standardize their workflow around OpenAI API tokens.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/5">
                Requires: <span className="text-cyan-400">OPENAI_API_KEY</span>
              </div>
            </div>

            {/* Ollama */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1017] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  100% Offline
                </span>
                <span className="text-[11px] font-mono text-zinc-400">Local Privacy</span>
              </div>
              <h3 className="text-xl font-bold text-white">Ollama (Offline)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero external network requests. Run <code className="text-zinc-200">llama3.2</code> or <code className="text-zinc-200">codellama</code> entirely on your own CPU/GPU with total source code privacy.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-300 bg-black/40 p-3 rounded-lg border border-white/5">
                Requires: <span className="text-purple-400">Local Ollama daemon</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* INSTALLATION SECTION */}
        {/* ========================================================= */}
        <section className="scroll-mt-24">
          <InstallationGuide />
        </section>

        {/* ========================================================= */}
        {/* CONFIGURATION SECTION */}
        {/* ========================================================= */}
        <section className="scroll-mt-24">
          <ConfigSection />
        </section>

        {/* ========================================================= */}
        {/* ARCHITECTURE SECTION */}
        {/* ========================================================= */}
        <section id="architecture" className="scroll-mt-24 space-y-8">
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

          <div className="rounded-2xl border border-white/10 bg-[#0C0E14] p-6 md:p-8 font-mono text-xs text-zinc-300 overflow-x-auto">
            <pre className="leading-relaxed">
              {`src/
├── main.rs              — Daemon entry point, event loop & shutdown handlers
├── config.rs            — TOML config parser & fallback defaults
├── lid_monitor/mod.rs   — Native OS lid close listener
│     ├── Windows:        WM_POWERBROADCAST + GUID_LIDCLOSE_ACTION register
│     ├── macOS:          IOKit kIOMessageSystemWillSleep hook
│     └── Linux:          logind D-Bus PrepareForSleep signal
├── ide_scanner/mod.rs   — Detects active VS Code, JetBrains & terminal git directories
├── git/mod.rs           — git status, diff parser, stage, commit & push engine
├── ai/mod.rs            — Multi-provider interface (Gemini / OpenAI / Ollama)
└── notifier.rs          — Cross-platform native OS toast notifications`}
            </pre>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FINAL CTA BANNER */}
        {/* ========================================================= */}
        <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
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
              href="#installation"
              className="px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              Get Started Now
            </a>
            <a
              href="https://github.com/Gingaaa/lid-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <GithubIcon className="size-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
