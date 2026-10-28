"use client";

import { useState } from "react";
import { Laptop, Sparkles, GitBranch, ArrowRight, CheckCircle2 } from "lucide-react";

interface DiffScenario {
  id: string;
  name: string;
  repo: string;
  branch: string;
  filesChanged: number;
  insertions: number;
  deletions: number;
  diffSnippet: string;
  aiMessage: string;
  model: string;
}

const scenarios: DiffScenario[] = [
  {
    id: "auth",
    name: "Auth Middleware",
    repo: "auth-gateway",
    branch: "feat/jwt-tokens",
    filesChanged: 2,
    insertions: 48,
    deletions: 12,
    diffSnippet: `diff --git a/src/middleware/auth.rs b/src/middleware/auth.rs
+ pub async fn verify_jwt(token: &str) -> Result<Claims, AuthError> {
+     let validation = Validation::new(Algorithm::HS256);
+     decode::<Claims>(token, &DECODING_KEY, &validation)
+         .map(|data| data.claims)
+         .map_err(|_| AuthError::InvalidToken)
+ }
- // TODO: implement real expiration check
+ if claims.exp < Utc::now().timestamp() {
+     return Err(AuthError::SessionExpired);
+ }`,
    aiMessage: "🔒 lid-close: add JWT verification middleware and handle session expiry",
    model: "gemini-2.0-flash",
  },
  {
    id: "db",
    name: "DB Pool Refactor",
    repo: "backend-core",
    branch: "perf/db-pool",
    filesChanged: 3,
    insertions: 34,
    deletions: 19,
    diffSnippet: `diff --git a/src/db/pool.rs b/src/db/pool.rs
- let pool = PgPool::connect(&database_url).await?;
+ let pool = PgPoolOptions::new()
+     .max_connections(25)
+     .min_connections(5)
+     .acquire_timeout(Duration::from_secs(3))
+     .connect(&database_url)
+     .await?;
+ tracing::info!("Initialized Postgres connection pool with 25 max workers");`,
    aiMessage: "🔒 lid-close: refactor postgres connection pool with acquisition timeouts",
    model: "gemini-2.0-flash",
  },
  {
    id: "ui",
    name: "Search Modal Bugfix",
    repo: "web-dashboard",
    branch: "fix/search-modal",
    filesChanged: 1,
    insertions: 15,
    deletions: 7,
    diffSnippet: `diff --git a/components/SearchModal.tsx b/components/SearchModal.tsx
- const results = data.filter(item => item.title.includes(query));
+ const results = data?.filter(item => 
+     item?.title?.toLowerCase().includes(query.trim().toLowerCase())
+ ) ?? [];
+ if (!isOpen) return null;`,
    aiMessage: "🔒 lid-close: fix null pointer and case sensitivity in search modal",
    model: "llama3.2 (offline)",
  },
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(scenarios[0].id);
  const current = scenarios.find((s) => s.id === activeTab) || scenarios[0];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(current.aiMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0E1017]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background glow element */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with status badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Simulated Pipeline
          </div>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            See how LidCommit crafts commit messages
          </h3>
          <p className="text-sm text-zinc-400">
            Select a project scenario below to observe how the local diff is transformed into a clean commit.
          </p>
        </div>

        {/* Scenario selectors */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === scenario.id
                  ? "bg-white/10 text-white shadow-sm border border-white/10"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              {scenario.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left is Diff, Right is Commit Result */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Input Diff */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-white/5 bg-[#090A0F] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <GitBranch className="size-3.5 text-emerald-400" />
              <span className="font-mono text-zinc-300">{current.repo}</span>
              <span className="text-zinc-600">/</span>
              <span className="font-mono text-emerald-400/90">{current.branch}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-emerald-400">+{current.insertions}</span>
              <span className="text-rose-400">-{current.deletions}</span>
            </div>
          </div>

          <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed text-zinc-300">
            <pre className="whitespace-pre">
              {current.diffSnippet.split("\n").map((line, idx) => {
                let color = "text-zinc-400";
                let bg = "";
                if (line.startsWith("+")) {
                  color = "text-emerald-400";
                  bg = "bg-emerald-500/10 -mx-4 px-4 block";
                } else if (line.startsWith("-")) {
                  color = "text-rose-400";
                  bg = "bg-rose-500/10 -mx-4 px-4 block";
                } else if (line.startsWith("diff")) {
                  color = "text-zinc-500 font-bold";
                }
                return (
                  <span key={idx} className={`${color} ${bg}`}>
                    {line}
                  </span>
                );
              })}
            </pre>
          </div>
        </div>

        {/* Right: Automated Output & Toast */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.07] to-transparent p-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-medium text-emerald-400 inline-flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  AI Commit Generated
                </span>
                <span className="font-mono text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {current.model}
                </span>
              </div>

              {/* The Commit Message Box */}
              <div className="p-3.5 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-white leading-snug">
                {current.aiMessage}
              </div>

              <div className="mt-4 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Safety checked: Remote origin present & &lt;50 files</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Staged changes via <code className="text-zinc-200">git add -A</code></span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Pushed upstream to <code className="text-zinc-200">origin/{current.branch}</code></span>
                </div>
              </div>
            </div>

            {/* Simulated Desktop Toast Notification */}
            <div className="mt-5 p-3 rounded-lg border border-white/10 bg-[#141722] shadow-lg flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="size-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Laptop className="size-4 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">LidCommit Notification</p>
                  <span className="text-[10px] text-zinc-500">Just now</span>
                </div>
                <p className="text-[11px] text-zinc-400 truncate mt-0.5 font-mono">
                  Committed & pushed: {current.repo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
