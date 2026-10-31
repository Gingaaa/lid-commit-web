"use client";

import { useState } from "react";
import { 
  Sliders, 
  Copy, 
  Check, 
  ShieldCheck, 
  Cpu, 
  Play, 
  Pause, 
  FolderGit2, 
  RefreshCw, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Settings, 
  Activity, 
  Monitor, 
  Terminal,
  ExternalLink
} from "lucide-react";

interface MockRepo {
  id: string;
  name: string;
  path: string;
  branch: string;
  status: "dirty" | "clean";
  filesChanged: number;
  isPaused: boolean;
  lastCommit?: string;
  lastCommitTime?: string;
}

export function DesktopDashboardShowcase() {
  const [daemonPaused, setDaemonPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "history" | "settings">("projects");
  const [syncingAll, setSyncingAll] = useState(false);
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const [repos, setRepos] = useState<MockRepo[]>([
    {
      id: "1",
      name: "auth-gateway",
      path: "C:\\Users\\dev\\workspace\\auth-gateway",
      branch: "feat/jwt-tokens",
      status: "dirty",
      filesChanged: 2,
      isPaused: false,
      lastCommit: "🔒 lid-close: add JWT verification middleware and handle session expiry",
      lastCommitTime: "10 mins ago",
    },
    {
      id: "2",
      name: "backend-core",
      path: "C:\\Users\\dev\\workspace\\backend-core",
      branch: "perf/db-pool",
      status: "dirty",
      filesChanged: 3,
      isPaused: false,
      lastCommit: "🔒 lid-close: refactor postgres connection pool with acquisition timeouts",
      lastCommitTime: "42 mins ago",
    },
    {
      id: "3",
      name: "secret-vault-engine",
      path: "C:\\Users\\dev\\workspace\\secret-vault-engine",
      branch: "main",
      status: "clean",
      filesChanged: 0,
      isPaused: true,
      lastCommit: "[LidCommit] auto-save at 2026-10-31 09:15",
      lastCommitTime: "2 hours ago",
    },
  ]);

  const togglePauseRepo = (id: string) => {
    setRepos((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isPaused: !r.isPaused } : r))
    );
  };

  const handleSyncSingle = (id: string) => {
    setSyncingId(id);
    setTimeout(() => {
      setRepos((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                status: "clean",
                filesChanged: 0,
                lastCommit: `🔒 [Manual Sync] auto-commit at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                lastCommitTime: "Just now",
              }
            : r
        )
      );
      setSyncingId(null);
    }, 900);
  };

  const handleSyncAll = () => {
    setSyncingAll(true);
    setTimeout(() => {
      setRepos((prev) =>
        prev.map((r) =>
          r.isPaused
            ? r
            : {
                ...r,
                status: "clean",
                filesChanged: 0,
                lastCommit: `🔒 [Sync Now] updated ${r.branch}`,
                lastCommitTime: "Just now",
              }
        )
      );
      setSyncingAll(false);
    }, 1200);
  };

  return (
    <div id="desktop-dashboard" className="space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Monitor className="size-3.5" />
          <span>New in Latest Release: Native Desktop App</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Visual Control. Zero Friction.
        </h2>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          LidCommit now launches with a sleek native dark-mode GUI &amp; System Tray application. Inspect open IDE workspaces, selectively pause auto-commits per repository, trigger on-demand syncs, and review live activity logs.
        </p>
      </div>

      {/* Interactive Mock Dashboard Window */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0B0D13] shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0F121B] border-b border-white/5 select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-rose-500/80" />
              <div className="size-3 rounded-full bg-amber-500/80" />
              <div className="size-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1" />
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>LidCommit Desktop Dashboard</span>
              <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">v0.2.0-gui</span>
            </div>
          </div>

          {/* Quick Header Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDaemonPaused(!daemonPaused)}
              className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                daemonPaused
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {daemonPaused ? <Play className="size-3" /> : <Pause className="size-3" />}
              <span>{daemonPaused ? "Resume Daemon" : "Daemon Active"}</span>
            </button>
            <button
              onClick={handleSyncAll}
              disabled={syncingAll}
              className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"
            >
              <RefreshCw className={`size-3 ${syncingAll ? "animate-spin" : ""}`} />
              <span>{syncingAll ? "Syncing Repos..." : "Sync Now"}</span>
            </button>
          </div>
        </div>

        {/* Inner App Navigation Tabs */}
        <div className="flex items-center gap-4 px-6 pt-4 border-b border-white/5 text-xs font-medium text-zinc-400">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "projects"
                ? "border-emerald-400 text-white font-semibold"
                : "border-transparent hover:text-zinc-200"
            }`}
          >
            <FolderGit2 className="size-3.5 text-emerald-400" />
            <span>Active Repositories ({repos.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "history"
                ? "border-emerald-400 text-white font-semibold"
                : "border-transparent hover:text-zinc-200"
            }`}
          >
            <Activity className="size-3.5 text-cyan-400" />
            <span>Activity History</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "settings"
                ? "border-emerald-400 text-white font-semibold"
                : "border-transparent hover:text-zinc-200"
            }`}
          >
            <Settings className="size-3.5 text-purple-400" />
            <span>Preferences &amp; Fallbacks</span>
          </button>
        </div>

        {/* Tab 1: Active Projects List */}
        {activeTab === "projects" && (
          <div className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400 pb-2">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Automatically tracking open IDE workspace windows (VS Code, Cursor, JetBrains, etc.)</span>
              </span>
              <span className="text-zinc-500 font-mono text-[11px]">
                Click Pause or Commit This to control behavior
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className={`p-4 rounded-xl border transition-all ${
                    repo.isPaused
                      ? "border-white/5 bg-white/[0.01] opacity-70"
                      : repo.status === "dirty"
                      ? "border-emerald-500/20 bg-emerald-500/[0.02]"
                      : "border-white/10 bg-[#0E1119]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <FolderGit2 className={`size-4 ${repo.isPaused ? "text-zinc-500" : "text-emerald-400"}`} />
                        <span className="text-sm font-semibold text-white">{repo.name}</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                          {repo.branch}
                        </span>
                        {repo.isPaused ? (
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Auto-Commit Paused
                          </span>
                        ) : repo.status === "dirty" ? (
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {repo.filesChanged} files modified
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400 border border-white/5">
                            Clean Tree
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-mono text-zinc-400 truncate max-w-xl">
                        {repo.path}
                      </p>
                    </div>

                    {/* Action buttons per repo */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => togglePauseRepo(repo.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          repo.isPaused
                            ? "border-emerald-500/30 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20"
                            : "border-amber-500/30 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20"
                        }`}
                      >
                        {repo.isPaused ? "Resume Auto-Commit" : "Pause Auto-Commit"}
                      </button>
                      <button
                        onClick={() => handleSyncSingle(repo.id)}
                        disabled={syncingId === repo.id || repo.status === "clean"}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-40 transition-all flex items-center gap-1.5"
                      >
                        <RefreshCw className={`size-3 ${syncingId === repo.id ? "animate-spin" : ""}`} />
                        <span>Commit This</span>
                      </button>
                    </div>
                  </div>

                  {repo.lastCommit && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                      <span className="truncate pr-4 font-mono text-[11px] text-zinc-300">
                        {repo.lastCommit}
                      </span>
                      <span className="shrink-0 text-[11px] text-zinc-500 flex items-center gap-1">
                        <Clock className="size-3" />
                        {repo.lastCommitTime}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Activity History */}
        {activeTab === "history" && (
          <div className="p-6 space-y-4">
            <div className="text-xs text-zinc-400 pb-2">
              Real-time audit log of commits triggered by laptop lid close events or manual triggers.
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">auth-gateway</span>
                    <span className="text-zinc-500">&bull; feat/jwt-tokens</span>
                  </div>
                  <p className="text-emerald-400">🔒 lid-close: add JWT verification middleware and handle session expiry</p>
                  <p className="text-zinc-500 text-[11px]">2 files changed (+48, -12) &bull; Synced with origin/feat/jwt-tokens</p>
                </div>
                <span className="text-[11px] text-zinc-500 shrink-0">10 mins ago</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">backend-core</span>
                    <span className="text-zinc-500">&bull; perf/db-pool</span>
                  </div>
                  <p className="text-emerald-400">🔒 lid-close: refactor postgres connection pool with acquisition timeouts</p>
                  <p className="text-zinc-500 text-[11px]">3 files changed (+34, -19) &bull; Synced with origin/perf/db-pool</p>
                </div>
                <span className="text-[11px] text-zinc-500 shrink-0">42 mins ago</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-zinc-400" />
                    <span className="font-semibold text-white">secret-vault-engine</span>
                    <span className="text-zinc-500">&bull; main (Fallback Mode)</span>
                  </div>
                  <p className="text-zinc-300">[LidCommit] auto-save at 2026-10-31 09:15</p>
                  <p className="text-zinc-500 text-[11px]">1 file changed &bull; Fallback timestamp triggered (No API key required)</p>
                </div>
                <span className="text-[11px] text-zinc-500 shrink-0">2 hours ago</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Settings & Fallback Info */}
        {activeTab === "settings" && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Sparkles className="size-4 text-emerald-400" />
                  <span>AI Commit Synthesis</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Configured provider: <strong className="text-zinc-200">Google Gemini (gemini-2.0-flash)</strong>. Also supports OpenAI (<code className="text-zinc-300">gpt-4o-mini</code>) and local offline Ollama (<code className="text-zinc-300">llama3.2</code>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock className="size-4 text-cyan-400" />
                  <span>Zero-Config Fallback Messages</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  No API key or offline? LidCommit safely falls back to: <br />
                  <code className="text-emerald-300 bg-white/5 px-2 py-0.5 rounded mt-1 inline-block">
                    [LidCommit] auto-save at YYYY-MM-DD HH:MM
                  </code>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 text-xs text-zinc-300 flex items-start gap-3">
              <Terminal className="size-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white block mb-0.5">Headless / Background Daemon Mode:</strong>
                <span>
                  Prefer not having a GUI window? Launch with <code className="text-emerald-400 font-mono">lid-commit.exe --headless</code> or run it via the background service scripts.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
