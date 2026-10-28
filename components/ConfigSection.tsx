"use client";

import { useState } from "react";
import { Sliders, Copy, Check, ShieldCheck, Cpu } from "lucide-react";

export function ConfigSection() {
  const [copied, setCopied] = useState(false);

  const sampleConfig = `# ~/.config/lid-commit/config.toml
# Or %APPDATA%\\lid-commit\\config.toml on Windows

[ai]
# Options: "gemini" | "openai" | "ollama"
provider = "gemini"
model = "gemini-2.0-flash"
# For local offline Ollama:
# provider = "ollama"
# model = "llama3.2"
# endpoint = "http://localhost:11434"

[safety]
# Skip project if more than 50 files changed (avoids committing node_modules)
max_files_threshold = 50

# Require git remote to be present before attempting sync
require_remote = true

# Never commit if git merge conflicts are present
abort_on_merge_conflict = true

[filters]
# Directories to completely ignore from auto-commits
excluded_paths = [
    "C:\\\\Users\\\\anshu\\\\work\\\\secret-vault",
    "~/experiments/throwaway-test"
]

[notifications]
# Send native desktop toast notifications on completion
enabled = true
sound = false
`;

  const copyConfig = () => {
    navigator.clipboard.writeText(sampleConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="configuration" className="relative rounded-2xl border border-white/10 bg-[#0E1017]/80 p-6 md:p-10 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Sliders className="size-3.5" />
            Declarative TOML Configuration
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Configurable down to every detail
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            Tweak AI models, customize file limits, ignore sensitive directories, or switch seamlessly to 100% offline local LLMs.
          </p>
        </div>

        <button
          onClick={copyConfig}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-200 transition-all self-start md:self-auto"
        >
          {copied ? (
            <>
              <Check className="size-4 text-emerald-400" />
              <span>Copied TOML</span>
            </>
          ) : (
            <>
              <Copy className="size-4" />
              <span>Copy config.toml</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Code Preview */}
        <div className="lg:col-span-7 rounded-xl bg-black/70 border border-white/10 p-4 font-mono text-xs overflow-x-auto text-zinc-300 leading-relaxed">
          <pre>{sampleConfig}</pre>
        </div>

        {/* Right Column: Key Guarantees */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-white mb-1.5">
              <Cpu className="size-4 text-emerald-400" />
              <span>Cloud or 100% Local (Ollama)</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Don&apos;t want your diff leaving your machine? Point provider to <code className="text-zinc-200">ollama</code> with <code className="text-zinc-200">llama3.2</code> or <code className="text-zinc-200">codellama</code> for air-gapped, zero-cost AI commit generation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-white mb-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>Safety Thresholds</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If an unintended folder without a <code className="text-zinc-200">.gitignore</code> has 500 files changed, LidCommit instantly halts and ignores it, keeping your GitHub repos safe from bloat.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-white mb-1.5">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>Cross-Device Continuation</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Commit branch matches your active branch automatically. When you open your desktop at home or your other laptop, a quick <code className="text-zinc-200">git pull</code> resumes your workflow effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
