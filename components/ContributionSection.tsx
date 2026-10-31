"use client";

import { useState } from "react";
import { 
  GitPullRequest, 
  Heart, 
  Sparkles, 
  Terminal, 
  Code2, 
  Star, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText, 
  Bug, 
  Lightbulb, 
  Check, 
  Copy,
  BookOpen,
  GitBranch,
  Scale
} from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function ContributionSection() {
  const [activeTab, setActiveTab] = useState<"workflow" | "commits" | "templates" | "governance">("workflow");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div id="contribute" className="relative rounded-3xl border border-white/10 bg-[#0E1017]/90 p-6 md:p-12 backdrop-blur-2xl overflow-hidden shadow-2xl space-y-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/5 pb-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20">
            <Heart className="size-3.5 text-rose-400 fill-rose-400/30" />
            <span>Official Community Guidelines &bull; Production-Ready Governance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Built with Passion. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Open Source.
            </span>
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            LidCommit follows standard open-source governance modeled after <strong className="text-white">Next.js</strong> and <strong className="text-white">shadcn/ui</strong>. Explore our standardized PR workflow, conventional commit guidelines, issue templates, and intellectual property policies.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
          <a
            href="https://github.com/Gingaaa/lid-commit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon className="size-4" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="size-3.5 text-zinc-600" />
          </a>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-black/50 rounded-2xl border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab("workflow")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
            activeTab === "workflow"
              ? "bg-emerald-500 text-black shadow-md font-extrabold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <GitBranch className="size-3.5" />
          <span>PR Workflow</span>
        </button>

        <button
          onClick={() => setActiveTab("commits")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
            activeTab === "commits"
              ? "bg-emerald-500 text-black shadow-md font-extrabold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Terminal className="size-3.5" />
          <span>Conventional Commits</span>
        </button>

        <button
          onClick={() => setActiveTab("templates")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
            activeTab === "templates"
              ? "bg-emerald-500 text-black shadow-md font-extrabold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <FileText className="size-3.5" />
          <span>Issue &amp; PR Templates</span>
        </button>

        <button
          onClick={() => setActiveTab("governance")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
            activeTab === "governance"
              ? "bg-emerald-500 text-black shadow-md font-extrabold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Scale className="size-3.5" />
          <span>License &amp; Ownership</span>
        </button>
      </div>

      {/* Tab 1: PR Workflow */}
      {activeTab === "workflow" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GitPullRequest className="size-5 text-emerald-400" />
              <span>Trunk-Based Git Workflow</span>
            </h3>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
              We use standard trunk-based development. The <code className="text-emerald-300 bg-black/60 px-2 py-0.5 rounded font-mono">main</code> branch is always production-ready. Always branch off <code className="text-zinc-200 font-mono">main</code> for features or bugfixes.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <span className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Fork &amp; Clone Repository</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Fork to your personal GitHub account and add the upstream remote for easy syncing.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <span className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Create a Scoped Branch</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Keep pull requests small and focused: <code className="text-zinc-200 font-mono">feat/tray-shortcuts</code> or <code className="text-zinc-200 font-mono">fix/debounce-loop</code>.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <span className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Run Lints &amp; Tests</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Ensure <code className="text-zinc-200 font-mono">cargo clippy -- -D warnings</code> and <code className="text-zinc-200 font-mono">cargo test</code> pass cleanly before opening your PR.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-black/70 border border-white/10 p-5 font-mono text-xs text-zinc-300 relative space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-[11px] text-zinc-500">Quick Contributor Commands</span>
              <button
                onClick={() => copyCode("git clone https://github.com/Gingaaa/lid-commit.git\ncd lid-commit\ncargo run\ncargo test", "clone")}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                title="Copy"
              >
                {copiedKey === "clone" ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
              </button>
            </div>
            <pre className="overflow-x-auto text-emerald-300 leading-relaxed">
{`# 1. Clone your fork:
git clone https://github.com/<your-user>/lid-commit.git
cd lid-commit

# 2. Run debug GUI:
cargo run

# 3. Check code formatting:
cargo fmt --check
cargo clippy -- -D warnings

# 4. Run tests:
cargo test`}
            </pre>
          </div>
        </div>
      )}

      {/* Tab 2: Conventional Commits */}
      {activeTab === "commits" && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">Conventional Commit Standards</h3>
              <p className="text-xs text-zinc-400">Adopted from the standard Vercel &amp; Next.js specification.</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              type(scope): description
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">feat</span>
                <span className="text-xs text-white font-medium">New features</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">feat(ui): add system tray menu shortcut for pause</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">fix</span>
                <span className="text-xs text-white font-medium">Bug fixes</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">fix(daemon): prevent duplicate commit triggers on sleep wake</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">docs</span>
                <span className="text-xs text-white font-medium">Documentation</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">docs: add troubleshooting section for Linux power profiles</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">refactor</span>
                <span className="text-xs text-white font-medium">Restructuring</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">refactor(detector): simplify IDE window process handle search</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">perf</span>
                <span className="text-xs text-white font-medium">Performance</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">perf(diff): optimize git status inspection on large repos</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded">chore</span>
                <span className="text-xs text-white font-medium">Tooling &amp; deps</span>
              </div>
              <p className="font-mono text-[11px] text-zinc-400">chore(deps): bump wry to 0.57.1</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Issue & PR Templates */}
      {activeTab === "templates" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <div className="size-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Bug className="size-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Bug Report Template</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Structured YAML schema (<code className="text-zinc-200">bug_report.yml</code>) collecting exact OS version, IDE, Git version, and reproduction steps.
            </p>
            <a
              href="https://github.com/Gingaaa/lid-commit/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>Open Bug Report</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <div className="size-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Lightbulb className="size-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Feature Request Template</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              YAML schema (<code className="text-zinc-200">feature_request.yml</code>) outlining user problem statements, proposed solutions, and alternative approaches.
            </p>
            <a
              href="https://github.com/Gingaaa/lid-commit/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>Suggest Feature</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <div className="size-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <GitPullRequest className="size-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Pull Request Template</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standardized checklist (<code className="text-zinc-200">pull_request_template.md</code>) verifying unit tests, documentation updates, and clean clippy lints.
            </p>
            <a
              href="https://github.com/Gingaaa/lid-commit/pulls"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>View Open PRs</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      )}

      {/* Tab 4: Governance & License */}
      {activeTab === "governance" && (
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Intellectual Property, Licensing &amp; Authorship</h3>
              <p className="text-xs text-zinc-400">Copyright (c) 2026 Anshu Kumar. Released under the MIT License.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="font-semibold text-white block">1. Original Work Guarantee</span>
              <p className="text-zinc-400 leading-relaxed">
                By submitting a PR, you certify that your code is original or compatible with our MIT License.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="font-semibold text-white block">2. License Grant</span>
              <p className="text-zinc-400 leading-relaxed">
                All contributions are granted under the MIT License while Anshu Kumar maintains project ownership and governance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="font-semibold text-white block">3. Code of Conduct &amp; Security</span>
              <p className="text-zinc-400 leading-relaxed">
                We enforce an inclusive environment (<code className="text-zinc-300 font-mono">CODE_OF_CONDUCT.md</code>) and responsible vulnerability reporting (<code className="text-zinc-300 font-mono">SECURITY.md</code>).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
