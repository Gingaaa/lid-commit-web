"use client";

import { useState } from "react";
import { Terminal, Copy, Check, AlertTriangle, Monitor, Apple, Cpu } from "lucide-react";

type Platform = "windows" | "macos" | "linux";

export function InstallationGuide() {
  const [platform, setPlatform] = useState<Platform>("windows");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div id="installation" className="relative rounded-2xl border border-white/10 bg-[#0E1017]/80 p-6 md:p-10 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Terminal className="size-3.5" />
            Zero-Friction Setup
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Get started in under 3 minutes
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            Choose your operating system. LidCommit compiles as a single lightweight binary in Rust with native daemon support.
          </p>
        </div>

        {/* Platform Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-black/50 rounded-xl border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setPlatform("windows")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              platform === "windows"
                ? "bg-emerald-500 text-black shadow-md font-bold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Monitor className="size-4" />
            Windows
          </button>
          <button
            onClick={() => setPlatform("macos")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              platform === "macos"
                ? "bg-emerald-500 text-black shadow-md font-bold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Apple className="size-4" />
            macOS
          </button>
          <button
            onClick={() => setPlatform("linux")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              platform === "linux"
                ? "bg-emerald-500 text-black shadow-md font-bold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="size-4" />
            Linux
          </button>
        </div>
      </div>

      {/* Windows specific alert */}
      {platform === "windows" && (
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3.5">
          <AlertTriangle className="size-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-semibold text-amber-300 block mb-0.5">
              Crucial Windows Setting for Background Git Sync:
            </span>
            <span className="text-amber-200/80">
              Go to <strong className="text-white">Control Panel &gt; Power Options</strong> and set{" "}
              <strong className="text-white">&apos;When I close the lid&apos;</strong> to{" "}
              <strong className="text-white">&apos;Do nothing&apos;</strong>. This allows LidCommit to execute the diff analysis, AI call, and git push uninterrupted when the lid closes!
            </span>
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="mt-8 space-y-6">
        {/* Step 1: Prerequisites */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 shrink-0">
            01
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Prerequisites</h4>
            </div>
            <p className="text-xs text-zinc-400">
              Ensure you have <a href="https://rustup.rs/" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Rust & Cargo</a> installed, along with <code className="text-zinc-200">git</code> in your PATH and a free <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Gemini API Key</a> (or OpenAI / Ollama).
            </p>
          </div>
        </div>

        {/* Step 2: Clone & Build */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 shrink-0">
            02
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-sm font-semibold text-white">Clone and build the release binary</h4>
            <div className="relative group rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-zinc-300">
              <pre className="overflow-x-auto">
{`git clone https://github.com/Gingaaa/lid-commit.git
cd lid-commit
cargo build --release`}
              </pre>
              <button
                onClick={() => copyToClipboard(`git clone https://github.com/Gingaaa/lid-commit.git\ncd lid-commit\ncargo build --release`, "build")}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                title="Copy code"
              >
                {copiedKey === "build" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Run Desktop App or Headless */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 shrink-0">
            03
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-sm font-semibold text-white">Run with Desktop Dashboard &amp; System Tray</h4>
            <p className="text-xs text-zinc-400">
              Launch the native desktop window. To run silently in headless background mode without the GUI, add <code className="text-zinc-200">--headless</code>.
            </p>
            <div className="relative group rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-zinc-300">
              <pre className="overflow-x-auto">
                {platform === "windows"
                  ? `# Launch with Desktop GUI:\n.\\target\\release\\lid-commit.exe\n\n# Or headless in background:\n.\\target\\release\\lid-commit.exe --headless`
                  : `./target/release/lid-commit\n\n# Or headless:\n./target/release/lid-commit --headless`}
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(
                    platform === "windows"
                      ? `.\\target\\release\\lid-commit.exe`
                      : `./target/release/lid-commit`,
                    "launch"
                  )
                }
                className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                title="Copy code"
              >
                {copiedKey === "launch" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Step 4: API Key (Optional with fallback support) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 shrink-0">
            04
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-white">Configure AI Key (Optional)</h4>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fallback Enabled
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              If left unconfigured, LidCommit automatically falls back to clean timestamped commit messages like <code className="text-zinc-200">[LidCommit] auto-save at 2026-10-31 11:30</code>.
            </p>
            <div className="relative group rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-zinc-300">
              <pre className="overflow-x-auto">
                {platform === "windows"
                  ? `[System.Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your_gemini_key_here", "User")`
                  : `export GEMINI_API_KEY="your_gemini_key_here"`}
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(
                    platform === "windows"
                      ? `[System.Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your_gemini_key_here", "User")`
                      : `export GEMINI_API_KEY="your_gemini_key_here"`,
                    "env"
                  )
                }
                className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                title="Copy code"
              >
                {copiedKey === "env" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Step 4: Background Service Daemon */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 shrink-0">
            04
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-sm font-semibold text-white">
              Install background daemon (runs silently on startup)
            </h4>
            <div className="relative group rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-zinc-300">
              <pre className="overflow-x-auto">
                {platform === "windows" && (
`# Run PowerShell as Administrator:
.\\install\\windows\\install.ps1 -ApiKey "your_gemini_key"`
                )}
                {platform === "macos" && (
`chmod +x ./install/macos/install.sh
./install/macos/install.sh`
                )}
                {platform === "linux" && (
`cp target/release/lid-commit ~/.local/bin/
cp install/linux/lidcommit.service ~/.config/systemd/user/
mkdir -p ~/.config/lid-commit
echo "GEMINI_API_KEY=your_key" > ~/.config/lid-commit/.env
systemctl --user enable --now lidcommit`
                )}
              </pre>
              <button
                onClick={() => {
                  const cmd =
                    platform === "windows"
                      ? `.\\install\\windows\\install.ps1 -ApiKey "your_gemini_key"`
                      : platform === "macos"
                      ? `./install/macos/install.sh`
                      : `cp target/release/lid-commit ~/.local/bin/\ncp install/linux/lidcommit.service ~/.config/systemd/user/\nsystemctl --user enable --now lidcommit`;
                  copyToClipboard(cmd, "daemon");
                }}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                title="Copy code"
              >
                {copiedKey === "daemon" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
