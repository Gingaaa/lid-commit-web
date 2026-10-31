"use client";

import { useState } from "react";
import { GitPullRequest, Heart, Sparkles, Terminal, Code2, Users, Star, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function ContributionSection() {
  const [copied, setCopied] = useState(false);

  const cloneCmd = "git clone https://github.com/Gingaaa/lid-commit.git\ncd lid-commit\ncargo check";

  const copyClone = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contribute" className="relative rounded-3xl border border-white/10 bg-[#0E1017]/80 p-6 md:p-12 backdrop-blur-2xl overflow-hidden shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20">
            <Heart className="size-3.5 text-rose-400 fill-rose-400/30" />
            <span>Open Source Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Built with Passion. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Contributions Always Welcome.
            </span>
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            LidCommit is 100% open source under the MIT License by <strong className="text-white">Anshu Kumar</strong>. Whether you want to add support for new IDE process scanners, write desktop GUI themes, improve AI commit prompts, or package for new Linux distributions, we’d love your pull requests!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/Gingaaa/lid-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02]"
            >
              <GithubIcon className="size-4" />
              <span>Contribute on GitHub</span>
              <ArrowUpRight className="size-3.5 text-zinc-600" />
            </a>

            <button
              onClick={copyClone}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs transition-all"
            >
              <Terminal className="size-4 text-emerald-400" />
              <span>{copied ? "Copied command!" : "cargo check"}</span>
            </button>
          </div>
        </div>

        {/* Contribution Areas Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full lg:max-w-md shrink-0">
          <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Code2 className="size-4 text-emerald-400" />
              <span>IDE Process Scanners</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Help us expand detection for Neovim, Emacs, Helix, Zed, and custom terminal sessions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Sparkles className="size-4 text-purple-400" />
              <span>AI Provider Adapters</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Add support for Claude, DeepSeek, Anthropic, or specialized local coding models.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <GitPullRequest className="size-4 text-cyan-400" />
              <span>Packaging &amp; Installers</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Maintain Homebrew tap formulas, Arch AUR packages, Winget manifests, and deb/rpm repos.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Star className="size-4 text-amber-400" />
              <span>Bug Reports &amp; Stars</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              File issues for unique hardware sleep quirks or star the repo to support the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
